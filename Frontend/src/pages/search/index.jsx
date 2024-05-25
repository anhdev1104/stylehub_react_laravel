import Button from '@/components/button';
import ProductItem, { ProductItemSkeleton } from '@/components/products/ProductItem';
import { getProducts } from '@/services/products';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const SearchPage = () => {
  const [products, setProducts] = useState([]);
  const [products2, setProducts2] = useState([]);
  const [limit, setLimit] = useState(6);
  const [loading, setLoading] = useState(true);
  const query = useQuery();
  const searchQuery = query.get('q');

  useEffect(() => {
    setLoading(true);
    (async () => {
      const data = await getProducts('', limit, searchQuery);
      const data2 = await getProducts('', '', searchQuery);
      setProducts(data);
      setProducts2(data2);
      setLoading(false);
    })();
  }, [searchQuery, limit]);

  const handleLoadMore = () => {
    setLimit(prev => prev + 6);
  };

  return (
    <main className="pt-[100px] pb-[150px] container-page">
      <h2 className="capitalize section-heading section-heading-2 text-center">Search product listings !</h2>
      <p className="text-center mt-5 mb-10">
        Total <b>{products2.length}</b> results found
      </p>
      <div className="mt-[30px] flex flex-wrap -mx-[15px]">
        {loading && new Array(6).fill(0).map((item, index) => <ProductItemSkeleton key={index} />)}
        {!loading && products.length > 0 && products.map(product => <ProductItem key={product.id} data={product} />)}
      </div>
      <div className="mt-16">
        {products2.length > 6 && (
          <Button
            classname="mx-auto bg-green text-white active:translate-y-2 min-w-[160px]"
            disabled={loading}
            onClick={handleLoadMore}
          >
            {loading ? (
              <span className="my-1 w-6 h-6 rounded-full border-4 border-t-transparent border-gray-200 animate-spin mx-auto z-10 relative"></span>
            ) : (
              'Load More'
            )}
          </Button>
        )}
      </div>
    </main>
  );
};

export default SearchPage;
