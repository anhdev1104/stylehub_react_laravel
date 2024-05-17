import { useEffect, useState } from 'react';
import { getCategories } from '../../../services/categories';
import axios from 'axios';
import ProductItem from '@/components/products/ProductItem';

const ProductListCate = () => {
  const [tabs, setTabs] = useState([]);
  const [currentTab, setCurrentTab] = useState(1);
  const [activeTab, setActiveTab] = useState(1);

  //
  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get('http://localhost:3000/products');
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const productNew = products.filter(product => product.category === 'newproduct');

  useEffect(() => {
    (async () => {
      const data = await getCategories();
      setTabs(data);
    })();
  }, []);

  const handleActiveTab = id => {
    return setActiveTab(id);
  };

  return (
    <div className="mt-[150px]">
      <div className="js-tabs">
        <div className="flex items-center justify-center gap-[30px]">
          {tabs.map(tab => (
            <div
              className={`py-[13px] px-[36px] rounded-full border-2 border-green text-lg leading-[1.67] ${
                activeTab === tab.id ? 'text-white bg-green cursor-default' : 'text-dark cursor-pointer'
              }`}
              key={tab.id}
              onClick={() => handleActiveTab(tab.id)}
            >
              {tab.category_name}
            </div>
          ))}
        </div>
        <div className="mt-[70px]">
          <div className="flex flex-wrap">
            {productNew.map(item => (
              <ProductItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListCate;
