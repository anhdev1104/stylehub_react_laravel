import { useEffect, useState } from 'react';
import TypeItem from './TypeItem';
import axios from 'axios';

const TypeProducts = () => {
  const [typeProducts, setTypeProduts] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get('http://localhost:3000/typeproduct');
        setTypeProduts(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div className="mt-[150px]">
      <h2 className="w-[35%] mb-[70px] section-heading section-heading-2">Explore, find exactly what you need</h2>
      <div className="flex flex-wrap -mx-[15px]">
        {typeProducts.map(typeItem => (
          <TypeItem key={typeItem.id} image={typeItem.image} title={typeItem.title} />
        ))}
      </div>
    </div>
  );
};

export default TypeProducts;
