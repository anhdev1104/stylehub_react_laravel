import { useEffect, useState } from 'react';
import Banner from './components/Banner';
import OurService from './components/OurService';
import ProductListCate from './components/ProductListCate';
import StyleBoy from './components/StyleBoy';
import axios from 'axios';
import ProductList from '../../components/products/ProductList';
import TextSlide from './components/TextSlide';
import Seller from './components/Seller';
import Brand from './components/Brand';
import Feedback from './components/Feedback';
import Blog from './components/Blog';
import Subscribe from './components/Subscribe';

const HomePage = () => {
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
  const productBest = products.filter(product => product.category === 'bestproduct');

  return (
    <main>
      <Banner />
      <div className="container-page">
        <StyleBoy />
        <OurService />
        <ProductListCate />
        <ProductList
          headingList="Our New Products"
          descList="Browse our new products and make your day more beautiful and glorious."
          data={productNew}
        />
        <ProductList
          headingList="Meet our best sellers"
          descList="Browse our most popular products and make your day more beautiful and glorious"
          data={productBest}
        />
      </div>
      <TextSlide />
      <div className="container-page">
        <Seller />
        <div className="mt-[150px]">
          <Brand />
        </div>
        <Feedback />
        <Blog />
        <Subscribe />
      </div>
    </main>
  );
};

export default HomePage;
