import Button from '../button/Button';
import ProductItem from './ProductItem';

const ProductList = ({ headingList, descList, data }) => {
  return (
    <div className="mt-[150px]">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="section-heading section-heading-2 capitalize">{headingList}</h2>
          <p className="w-[70%] mt-[18px] text-light section-desc-1">{descList}</p>
        </div>
        <Button>Browse All</Button>
      </div>
      <div className="flex flex-wrap -mx-[15px] mt-[40px]">
        {data?.map((item, index) => (
          <ProductItem key={index} item={item} />
        ))}
      </div>
      <div className="separate w-full h-[4px] relative !mt-[55px] bg-yellowLighter"></div>
    </div>
  );
};

export default ProductList;
