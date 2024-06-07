import { CountContext } from '@/contexts/countContext';
import { useContext } from 'react';

const Increment = () => {
  const { handleIncrement } = useContext(CountContext);
  return (
    <button
      className="px-3 font-medium text-lg justify-center flex items-center bg-[#c4d1d0] text-dark outline-none section-desc-3"
      onClick={handleIncrement}
    >
      +
    </button>
  );
};

export default Increment;
