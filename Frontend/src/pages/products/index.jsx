import ProductRadius, { ProductRadiusSkeleton } from '@/components/products/ProductRadius';
import Dropdown from './components/Dropdown';
import PosterSlide from './components/PosterSlide';
import { useEffect, useMemo, useState } from 'react';
import { getProductsOnCategory } from '@/services/products';
import { Link, useParams } from 'react-router-dom';
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
  const [productTypeLength, setProductTypeLength] = useState(0);
  const [activePage, setActivePage] = useState(0);
  const [showPagination, setShowPagination] = useState(true);

  const limit = 6;

  const pageNumber = useMemo(() => {
    const totalPage = Math.ceil(productTypeLength / limit);
    return Array.from({ length: totalPage }, (_, i) => i + 1);
  }, [productTypeLength, limit]);

  useEffect(() => {
    (async () => {
      const data = await getProductsOnCategory(id);
      setProductTypeLength(data.length);
    })();
  }, [id]);

  useEffect(() => {
    setLoading(true);
    (async () => {
      setTypeName(await getCategoryDetails(id));
      const data = await getProductsOnCategory(id, activePage + 1, limit);
      const dataSubcate = await getSubCategories(id);
      setProducts(data);
      setSubcategories(dataSubcate);
      setActiveSubcategory(null);
      setShowPagination(true);
      setLoading(false);
    })();
  }, [id, activePage, limit]);
  const changeProductsOnSubcate = async (subcateId, index) => {
    setLoading(true);
    setActiveSubcategory(index);
    const data = await getProductsOffSubcate(subcateId);
    setProducts(data);
    setShowPagination(false);
    setLoading(false);
  };

  const handleChangePage = async e => {
    setLoading(true);
    const page = +e.target.textContent - 1; // Adjust for zero-indexed activePage
    setActivePage(page);
    const data = await getProductsOnCategory(id, page + 1, limit);
    setProducts(data);
    setLoading(false);
  };

  const handleChangeFilterDropdown = async e => {
    setLoading(true);
    const query = e.target.dataset.value;
    const data = await getProductsOnCategory(id, '', '', query);
    setProducts(data);
    setShowPagination(false);
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
          <div className="flex gap-[30px] max-xl:m-auto max-xl:w-[1000px] max-lg:w-[700px] max-md:w-[500px] max-sm:w-[100%] max-sm:flex-col">
            <div className="flex-grow-0 flex-shrink-0 basis-auto w-[75%] max-xl:w-[70%] max-lg:w-[60%] max-md:w-[55%] max-sm:w-[100%]">
              {products.length > 0 && (
                <div className="flex items-center">
                  <div className="flex items-center w-full justify-between mb-[50px] max-md:flex-col max-md:items-start max-md:gap-5 max-md:mb-0">
                    <p className="text-light">
                      Total <b className="text-dark font-bold">{productTypeLength}</b> items
                    </p>
                    <Dropdown onClick={handleChangeFilterDropdown} />
                  </div>
                </div>
              )}

              <ul className="mt-[25px] hidden max-sm:flex flex-wrap">
                  {subcategories.length > 0 &&
                    subcategories.map((subcategory, index) => (
                      <li
                        className={`pb-[5px] pr-10 text-[1.2rem] ${
                          activeSubcategory === index ? 'text-green font-bold' : 'text-black'
                        } leading-[1.67] py-2 cursor-pointer product-left__item--active`}
                        key={subcategory.id}
                        onClick={() => changeProductsOnSubcate(subcategory.id, index)}
                      >
                        {subcategory.subcat_name}
                      </li>
                    ))}
                </ul>
              <div className="flex items-center flex-wrap -mx-[15px]">
                {loading && new Array(6).fill(0).map((item, index) => <ProductRadiusSkeleton key={index} />)}
                {!loading && products.length > 0
                  ? products.map(product => <ProductRadius key={product.id} data={product} />)
                  : !loading && <img src="/assets/img/empty_products.jpg" className="w-[800px] mx-auto" />}
              </div>
              {showPagination && (
                <section className="pagination flex items-center justify-center mt-10 mx-auto gap-5">
                  {pageNumber.length > 0 &&
                    pageNumber?.map(number => (
                      <Link
                        key={number}
                        to={`/category/${id}?page=${number}`}
                        className={`w-10 h-10  flex items-center justify-center font-semibold rounded ${
                          activePage + 1 === number ? 'bg-green text-white' : 'bg-grey text-dark'
                        }`}
                        onClick={handleChangePage}
                      >
                        {number}
                      </Link>
                    ))}
                </section>
              )}
            </div>
            <div className="flex-shrink-0 flex-grow-0 w-[25%] max-lg:w-[35%] max-md:w-[40%] max-sm:hidden">
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
