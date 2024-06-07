import useDebounce from '@/hooks/useDebounce';
import { getProducts } from '@/services/products';
import { useEffect, useRef, useState } from 'react';
import LoadingSpin from '../loading/LoadingSpin';
import useClickOutSide from '@/hooks/useClickOutSide';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Search = () => {
  const [query, setQuery] = useState('');
  const [showBoxSearch, setShowBoxSearch] = useState(false);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { show, setShow, nodeRef } = useClickOutSide();
  const filterDebounce = useDebounce(query, 500);
  const inputSearchRef = useRef();
  const navigate = useNavigate();

  const handleSearch = e => {
    setLoading(true);
    setShow(e.target.value);
    setQuery(e.target.value);
    setShowBoxSearch(!!e.target.value);
  };

  useEffect(() => {
    setLoading(true);
    (async () => {
      if (filterDebounce) {
        const data = await getProducts('', '', filterDebounce);
        setProducts(data);
        setLoading(false);
      }
    })();
  }, [filterDebounce]);

  const handleClickProductSearch = () => {
    inputSearchRef.current.value = '';
    setShowBoxSearch(false);
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    if (inputSearchRef.current.value === '') {
      return toast.error('Please enter product search keywords !');
    }
    navigate(`/search?q=${query}`);
    inputSearchRef.current.value = '';
  };

  return (
    <form
      className="relative max-w-[300px] md:max-w-[400px] lg:max-w-[600px] w-full h-[44px] border border-white flex items-center"
      autoComplete="off"
      onSubmit={handleOnSubmit}
    >
      <input
        className="header-form__input w-full px-5 outline-none bg-transparent text-base text-white"
        type="search"
        name="search"
        id="search"
        placeholder="Search for anything"
        onChange={handleSearch}
        ref={inputSearchRef}
      />
      <button
        className="w-[44px] h-[44px] bg-yellow flex items-center justify-center absolute -right-[1px] -top-[1px]"
        type="submit"
      >
        <img src="/assets/icons/search.svg" alt="" />
      </button>

      {showBoxSearch && show && (
        <div
          className="absolute top-full left-0 right-0 bg-white shadow-lg z-10 h-[400px] overflow-auto cart-modal"
          ref={nodeRef}
        >
          {loading && <LoadingSpin />}
          {!loading && products.length > 0 && (
            <h3 className="pl-5 text-sm mt-3">
              Total <b>{products.length}</b> search results.
            </h3>
          )}
          {!loading && products.length > 0
            ? products.map(product => (
                <Link
                  to={`product/${product.id}`}
                  className="p-5 border-b border-gray-200 flex gap-5 transition-all hover:bg-gray-100"
                  key={product.id}
                  onClick={handleClickProductSearch}
                >
                  <div className="w-[100px] h-[100px]">
                    <img src={product.images[0].image} alt="" className="w-full h-full object-cover shadow" />
                  </div>
                  <div className="flex flex-col justify-evenly px-5 w-full">
                    <span className="text-sm">{product?.subcategories?.subcat_name}</span>
                    <h2 className="font-bold text-lg capitalize">{product.product_name}</h2>
                    <div className="flex items-center justify-between">
                      <div className="flex gap-3 font-semibold">
                        <span className="text-gray-500 line-through">${Math.ceil(product.initial_price)}</span>
                        <span className="text-orange">${Math.ceil(product.price)}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <img src="/assets/icons/star-small.svg" alt="" className="w-5" />
                        <p className="section-desc-1 text-sm">5.0 (168)</p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            : !loading && <p className="text-center mt-10 font-bold">No products found with search data !</p>}
        </div>
      )}
    </form>
  );
};

export default Search;
