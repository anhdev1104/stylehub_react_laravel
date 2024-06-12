import { CountContext } from '@/contexts/countContext';
import { useContext } from 'react';

const Decrement = () => {
  const { handleDecrement } = useContext(CountContext);
  return (
    <button
      className="px-3 font-medium text-lg justify-center flex items-center bg-[#c4d1d0] text-dark outline-none section-desc-3"
      onClick={handleDecrement}
    >
      -
    </button>
  );
};

export default Decrement;
