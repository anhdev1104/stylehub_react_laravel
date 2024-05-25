import { useController } from 'react-hook-form';

const Input = ({ control, ...props }) => {
  const { field } = useController({ control, name: props.name, defaultValue: '' });
  return (
    <input
      className="flex-1 w-full border border-[#d2d1d6] h-full text-base font-medium outline-none pl-3 pr-[50px] focus:border-green"
      {...field}
      {...props}
    />
  );
};

export default Input;
