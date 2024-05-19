import ProductRadius, { ProductRadiusSkeleton } from '@/components/products/ProductRadius';
import Dropdown from './components/Dropdown';
import PosterSlide from './components/PosterSlide';
import { useEffect, useState } from 'react';
import { getProductsOnCategory } from '@/services/products';
import { useParams } from 'react-router-dom';
import { getProductsOffSubcate, getSubCategories } from '@/services/subcategories';
import { getCategoryDetails } from '@/services/categories';
import NewsLetter from './components/NewsLetter';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [activeSubcategory, setActiveSubcategory] = useState(null);
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [typeName, setTypeName] = useState(null);

  useEffect(() => {
    setLoading(true);
    (async () => {
      setTypeName(await getCategoryDetails(id));
      const data = await getProductsOnCategory(id);
      const dataSubcate = await getSubCategories(id);
      setProducts(data);
      setSubcategories(dataSubcate);
      setActiveSubcategory(null);
      setLoading(false);
    })();
  }, [id]);

  const changeProductsOnSubcate = async (subcateId, index) => {
    setLoading(true);
    setActiveSubcategory(index);
    const data = await getProductsOffSubcate(subcateId);
    setProducts(data);
    setLoading(false);
  };

  return (
    <main className="container-page">
      <div className="pt-[100px] pb-[150px]">
        <section className="flex items-center flex-col">
          <h2 className="section-heading section-heading-2">List Of {typeName?.category_name}</h2>
          <p className="mt-5 section-desc-2">
            We hear what you need. We plan, design & develop visionary concept websites.
          </p>
        </section>
        <div className="mt-[70px]">
          <div className="flex gap-[30px]">
            <div className="flex-grow-0 flex-shrink-0 basis-auto w-[75%]">
              <div className="flex items-center">
                <div className="flex items-center w-full justify-between mb-[50px]">
                  {/* <p className="text-light">Search 1-15 of 22 results</p> */}
                  <Dropdown />
                </div>
              </div>

              <div className="flex items-center flex-wrap -mx-[15px]">
                {loading && new Array(6).fill(0).map((item, index) => <ProductRadiusSkeleton key={index} />)}
                {!loading && products.length > 0 ? (
                  products.map(product => <ProductRadius key={product.id} data={product} />)
                ) : (
                  <img src="/src/assets/img/empty_products.jpg" className="w-[800px] mx-auto" />
                )}
                {/* PAGINATION */}
              </div>
            </div>
            <div className="flex-shrink-0 flex-grow-0 w-[25%]">
              <div className="w-full py-[25px] px-[30px] rounded-[15px] border border-[#e5e5e5] bg-white">
                <h3 className="section-heading-4">Catagoryes</h3>
                <ul className="mt-[25px]">
                  {subcategories.length > 0 &&
                    subcategories.map((subcategory, index) => (
                      <li
                        className={`pb-[5px] border-b border-[#e5e5e5] ${
                          activeSubcategory === index ? 'text-green font-bold' : 'text-black'
                        } text-base leading-[1.67] py-2 cursor-pointer product-left__item--active`}
                        key={subcategory.id}
                        onClick={() => changeProductsOnSubcate(subcategory.id, index)}
                      >
                        {subcategory.subcat_name}
                      </li>
                    ))}
                </ul>
              </div>
              <NewsLetter />
              <PosterSlide />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductsPage;
