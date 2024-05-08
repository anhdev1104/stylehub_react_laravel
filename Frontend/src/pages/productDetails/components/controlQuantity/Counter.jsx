import { CountProvider } from '@/contexts/countContext';
import Count from './Count';
import Decrement from './Decrement';
import Increment from './Increment';

const Counter = () => {
  return (
    <CountProvider>
      <div className="flex items-center gap-3">
        <Decrement />
        <Count />
        <Increment />
      </div>
    </CountProvider>
  );
};

export default Counter;
