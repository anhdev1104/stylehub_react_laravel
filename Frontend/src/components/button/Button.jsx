import { Link } from 'react-router-dom';

const Button = ({ location = '', classname = '', children = 'Button', ...props }) => {
  if (location !== '' && typeof location === 'string') {
    return (
      <Link
        to={location}
        className={`cursor-pointer flex items-center justify-center text-lg font-semibold py-3 px-[35px] btn-1 ${classname}`}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={`flex items-center cursor-pointer justify-center text-lg font-semibold py-3 px-[35px] btn-1 ${classname}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
