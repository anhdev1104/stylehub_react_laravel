import axios from 'axios';
import { useEffect, useState } from 'react';

const Brand = () => {
  const [brandList, setBrandList] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get('http://localhost:3000/brand');
        setBrandList(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <>
      <section>
        <h2 className="w-[35%] section-heading section-heading-2">Explore from popular brands</h2>
      </section>
      <div className="flex flex-wrap mt-[70px]">
        {brandList.map(brand => (
          <div className="flex-grow-0 flex-shrink-0 basis-auto w-[25%] px-[15px] group" key={brand.id}>
            <div className="w-full h-[210px] flex items-center justify-center bg-yellowLighter transition-all ease-in-out duration-300 brand-wrap__box">
              <img
                src={`./src/assets/img/home/brand/${brand.brandLogo}`}
                alt=""
                className="w-[150px] h-[150px] object-contain"
              />
            </div>
            <h3 className="mt-[18px] text-center transition-all hover:text-green section-heading-4 group-hover:text-green">
              {brand.brandName}
            </h3>
          </div>
        ))}

        <div className="separate w-full h-[4px] relative !mt-[55px] bg-yellowLighter"></div>
      </div>
    </>
  );
};

export default Brand;
