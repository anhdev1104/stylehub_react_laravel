import { useContext, useEffect, useState } from 'react';
import ProductList from '@/components/products/ProductList';
import Button from '@/components/button/Button';
import Counter from './components/controlQuantity/Counter';
import { getProductDetail, getProductRandom } from '@/services/products';
import { useNavigate, useParams } from 'react-router-dom';
import { getSubCategoryDetails } from '@/services/subcategories';
import FeedbackList from './components/FeedbackList';
import Reviews from './components/Reviews';
import LoadingSpin from '@/components/loading/LoadingSpin';
import ShoppingCart from '@/helpers/ShoppingCart';
import { toast } from 'react-toastify';
import { CountContext } from '@/contexts/countContext';

const ProductDetails = () => {
  const [product, setProduct] = useState([]);
  const [subcategory, setSubcategory] = useState([]);
  const [productRanDom, setProductRandom] = useState([]);
  const { id } = useParams();
  const [activeSize, setActiveSize] = useState(0);
  const [activeImage, setActiveImage] = useState(0);
  const [displayImage, setDisplayImage] = useState('');
  const [loading, setLoading] = useState(true);
  const { count, setCount } = useContext(CountContext);

  useEffect(() => {
    setCount(1);
  }, [setCount]);

  useEffect(() => {
    setLoading(true);
    (async () => {
      const data = await getProductDetail(id);
      data && setProduct(data);
      setDisplayImage('');
      setLoading(false);
    })();
  }, [id]);

  useEffect(() => {
    (async () => {
      product.subcat_id && setSubcategory(await getSubCategoryDetails(product.subcat_id));
    })();
  }, [product.subcat_id]);

  useEffect(() => {
    (async () => {
      const data = await getProductRandom();
      setProductRandom(data);
    })();
  }, []);

  const remainingInventory = product.sizes?.reduce((acc, curr) => acc + +curr.quantity, 0);

  const handleDisplayImage = (e, index) => {
    setActiveImage(index);
    setDisplayImage(e.target.src);
  };

  const navigate = useNavigate();

  const handleAddToCart = () => {
    const cart = new ShoppingCart();
    if (cart) {
      cart.addToCart(product.id, count);
      toast.success('Successfully added to cart.');
    }
    navigate('/cart');
  };

  return (
    <main className="container-page">
      {loading && (
        <div className="py-10 min-h-[700px]">
          <LoadingSpin />
        </div>
      )}
      {!loading && (
        <div className="pt-[100px] pb-[150px] max-lg:w-[700px] max-lg:mx-auto max-md:w-[90%] max-sm:w-full">
          <div className="flex max-xl:mx-auto max-xl:w-[1000px] max-lg:w-full max-lg:flex-col-reverse">
            <div className="flex-grow-0 flex-shrink-0 basis-auto w-2/4 pr-[45px] max-xl:p-0 max-lg:w-full">
              <div>
                <figure>
                  <img
                    src={displayImage || product?.images?.[0].image}
                    alt=""
                    className="w-full h-[600px] object-cover max-sm:h-auto"
                  />
                </figure>
                <div className="flex items-center justify-center gap-5 mt-[18px] w">
                  <button className="outline-none w-10 flex items-center justify-center">
                    <img src="/assets/icons/arrow-left-big.svg" alt="" />
                  </button>
                  <div className="flex gap-5 overflow-hidden img-list-details">
                    {product?.images?.map((image, index) => (
                      <img
                        src={image.image}
                        alt=""
                        className={`cursor-pointer w-[100px] h-[100px] object-cover border-2 ${
                          activeImage === index ? 'border-2 border-dark' : 'hover:border-dark border-transparent'
                        }`}
                        key={image.id}
                        onClick={e => handleDisplayImage(e, index)}
                      />
                    ))}
                  </div>
                  <button className="outline-none w-10 flex items-center justify-center">
                    <img src="/assets/icons/arrow-right-big.svg" alt="" />
                  </button>
                </div>
              </div>
              <section className="mt-[55px]">
                <h3 className="section-heading-4">About this product</h3>
                <p className="mt-[30px] section-desc-1">
                  <strong className="text-dark text-lg font-semibold leading-[1.67]">Note: </strong>
                  {product.description}
                </p>
              </section>
            </div>
            <div className="flex-grow-0 flex-shrink-0 basis-auto w-2/4 px-[45px] max-lg:w-full max-lg:p-0 max-lg:mb-20">
              <p className="section-desc-3">{subcategory.subcat_name}</p>
              <h3 className="mt-1 section-heading-3 capitalize">{product.product_name}</h3>
              <div className="text-sm flex items-center gap-1 mt-2">
                <span>Remaining inventory: </span>
                <strong>{remainingInventory}</strong>
              </div>
              <div className="flex items-center gap-2 mt-3">
                <p className="text-light text-lg leading-[1.67] font-medium line-through">
                  ${Math.ceil(product.initial_price)}
                </p>
                <p className="text-lg leading-[1.67] text-orange font-semibold">${Math.ceil(product.price)}</p>
              </div>
              <div className="mt-[12px] flex items-center gap-[10px]">
                <img src="/assets/icons/star-small.svg" alt="" />
                <p className="section-desc-1">
                  5.0
                  <strong className="ml-1">(37)</strong>
                </p>
              </div>
              <div className="mt-[21px]">
                {/* <div className="flex items-center gap-[14px]">
                <p className="w-[53px] text-lg font-semibold">Color:</p>
                <div className="flex items-center gap-3">
                  <span className="relative w-[24px] h-[24px] bg-[#90a338] flex items-center justify-center text-white">
                    <i className="fa-solid fa-check"></i>
                  </span>
                  <span className="relative w-[24px] h-[24px] cursor-pointer bg-[#2a2a2a]"></span>
                  <span className="relative w-[24px] h-[24px] cursor-pointer bg-[#ef8195]"></span>
                  <span className="relative w-[24px] h-[24px] cursor-pointer border border-[#c4d1d0] bg-white"></span>
                </div>
              </div> */}
                <div className="flex items-center gap-[14px] mt-5">
                  <p className="w-[53px] text-lg font-semibold">Size:</p>
                  <div className="flex items-center gap-3">
                    {product.sizes?.map((size, index) => (
                      <span
                        className={`flex items-center justify-center w-[24px] h-[24px] ${
                          activeSize === index
                            ? 'cursor-default text-white bg-green'
                            : 'border border-grey cursor-pointer hover:border-none hover:text-white hover:bg-green'
                        } section-desc-3`}
                        key={size.id}
                        onClick={() => setActiveSize(index)}
                      >
                        {size.label}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-[14px] mt-5">
                  <p className="text-lg font-semibold">Quantity:</p>
                  <Counter />
                </div>
              </div>
              <p className="w-[78%] mt-[28px] section-desc-1 max-lg:hidden">{product.description}</p>
              <Button classname="w-[470px] mt-[40px] max-xl:w-full" onClick={handleAddToCart}>
                Add to cart
              </Button>
              <Button
                location="/checkout"
                classname="w-[470px] mt-[18px] border-none hover:bg-yellow hover:text-dark hover:opacity-70 bg-yellow text-dark max-xl:w-full"
              >
                Checkout
              </Button>
            </div>
          </div>

          <div className="flex flex-wrap mt-[55px] max-lg:flex-col">
            <div className="flex-grow-0 flex-shrink-0 basis-auto w-2/4 max-lg:w-full">
              <h3 className="section-heading-4">Customer Reviews</h3>
              <div className="w-full mt-[18px] ">
                <h4 className="text-lg font-semibold leading-[1.67]">77 Reviews</h4>
                <div className="flex items-center gap-1 mt-[8px]">
                  <img src="/assets/icons/star-meny.svg" alt="" />
                  <img src="/assets/icons/star-meny.svg" alt="" />
                  <img src="/assets/icons/star-meny.svg" alt="" />
                  <img src="/assets/icons/star-meny.svg" alt="" />
                  <img src="/assets/icons/star-meny.svg" alt="" />
                </div>
                <div className="mt-[30px]">
                  {/* <!-- Product review item 1 --> */}
                  <div className="flex items-center gap-[30px] mb-3">
                    <p className="text-dark section-desc-1">5 Stars</p>
                    <div className="product-review__separate relative w-[433px] h-1 bg-grey "></div>
                    <p className="text-dark section-desc-1">37</p>
                  </div>
                  {/* <!-- Product review item 2 --> */}
                  <div className="flex items-center gap-[30px] mb-3">
                    <p className="text-dark section-desc-1">4 Stars</p>
                    <div className="product-review__separate relative w-[433px] h-1 bg-grey "></div>
                    <p className="text-dark section-desc-1">37</p>
                  </div>
                  {/* <!-- Product review item 3 --> */}
                  <div className="flex items-center gap-[30px] mb-3">
                    <p className="text-dark section-desc-1">3 Stars</p>
                    <div className="product-review__separate relative w-[433px] h-1 bg-grey "></div>
                    <p className="text-dark section-desc-1">37</p>
                  </div>
                  {/* <!-- Product review item 4 --> */}
                  <div className="flex items-center gap-[30px] mb-3">
                    <p className="text-dark section-desc-1">2 Stars</p>
                    <div className="product-review__separate relative w-[433px] h-1 bg-grey "></div>
                    <p className="text-dark section-desc-1">37</p>
                  </div>
                  {/* <!-- Product review item 5 --> */}
                  <div className="flex items-center gap-[30px] mb-3">
                    <p className="text-dark section-desc-1">1 Stars</p>
                    <div className="product-review__separate relative w-[433px] h-1 bg-grey "></div>
                    <p className="text-dark section-desc-1">37</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-grow-0 flex-shrink-0 basis-auto w-2/4 max-lg:w-full">
              <Reviews />
            </div>
          </div>
          <div className="flex flex-wrap mt-[70px]">
            <FeedbackList />
          </div>

          <div className="mt-[150px]">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="section-heading section-heading-2 capitalize max-md:text-[1.8rem]">Similar Products</h2>
                <p className="w-[70%] mt-[18px] text-light section-desc-1 max-md:w-full">
                  Browse our new products and make your day more beautiful and glorious.
                </p>
              </div>
              <Button classname="max-md:hidden">Browse All</Button>
            </div>
            {<ProductList data={productRanDom} />}
          </div>
        </div>
      )}
    </main>
  );
};

export default ProductDetails;
