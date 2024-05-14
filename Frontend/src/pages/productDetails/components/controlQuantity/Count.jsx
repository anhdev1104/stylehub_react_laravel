import { CountContext } from '@/contexts/countContext';
import { useContext } from 'react';

const Count = () => {
  const { count } = useContext(CountContext);

  return (
    <span className="px-3 font-medium text-lg justify-center flex items-center border border-[#c4d1d0] text-dark section-desc-3">
      {count}
    </span>
  );
};

export default Count;
