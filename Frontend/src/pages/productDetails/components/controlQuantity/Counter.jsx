import Count from './Count';
import Decrement from './Decrement';
import Increment from './Increment';

const Counter = () => {
  return (
    <div className="flex items-center gap-3">
      <Decrement />
      <Count />
      <Increment />
    </div>
  );
};

export default Counter;
