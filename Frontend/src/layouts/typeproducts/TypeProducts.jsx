import TypeItem from './TypeItem';

const TypeProducts = ({ typeProducts = [] }) => {
  return (
    <div className="mt-[150px]">
      <h2 className="w-[35%] mb-[70px] section-heading section-heading-2">Explore, find exactly what you need</h2>
      <div className="flex flex-wrap -mx-[15px] -mt-[30px]">
        {typeProducts.map(typeItem => (
          <TypeItem
            key={typeItem.id}
            image={typeItem.image}
            title={typeItem.title}
            bgTransparent={typeItem.bgTransparent}
          />
        ))}
      </div>
    </div>
  );
};

export default TypeProducts;
