import { useController } from 'react-hook-form';

const Input = ({ control, ...props }) => {
  const { field } = useController({ control, name: props.name, defaultValue: '' });

  const handleChange = e => {
    if (props.type === 'file') {
      field.onChange(e.target.files[0]);
    } else {
      field.onChange(e);
    }
    if (props.onChange) {
      props.onChange(e);
    }
  };

  return (
    <input
      className="flex-1 w-full border border-[#d2d1d6] h-full text-base font-medium outline-none pl-3 pr-[50px] focus:border-green"
      {...field}
      {...props}
      onChange={handleChange}
      value={props.type === 'file' ? undefined : field.value}
    />
  );
};

export default Input;
