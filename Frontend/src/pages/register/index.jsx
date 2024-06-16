import Button from '@/components/button/Button';
import PosterForm from './components/PosterForm';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Input from '@/components/input';
// import CheckboxControler from '@/components/checkbox/Checkbox';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import useToggle from '@/hooks/useToggle';
import { useState } from 'react';
import { createAccount } from '@/services/auth';
import { toast } from 'react-toastify';

const schema = yup
  .object({
    user_name: yup.string().trim().required('Please enter your full name !'),
    email: yup
      .string()
      .trim()
      .required('Email cannot be blank !')
      .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, {
        message: 'Email is not in the correct format !',
      }),
    password: yup
      .string()
      .trim()
      .required('Password cannot be blank !')
      .min(8, 'Password must be at least 8 characters or more !')
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        'Password has at least one number and one special character !'
      ),
    confirm_password: yup
      .string()
      .trim()
      .oneOf([yup.ref('password'), null], 'The confirmation password must match the entered password !'),
  })
  .required();

const RegisterPage = () => {
  const { on: showPass, handleToggle } = useToggle();
  const { on: showPassConfirm, handleToggle: handleToggleConfirm } = useToggle();
  const [type, setType] = useState(false);
  const [typeConfirm, setTypeConfirm] = useState(false);
  const {
    handleSubmit,
    formState: { errors, isSubmitting },
    control,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const onSubmitHandler = async values => {
    try {
      const { confirm_password, ...newAccount } = values;
      console.log(confirm_password);
      await createAccount(newAccount);
      toast.success('Account created successfully, check your email and please verify your account !');
      navigate('/login');
      reset();
    } catch (error) {
      console.log(error);
      toast.error('Email already exists in the system !');
    }
  };

  const handleShowPass = () => {
    handleToggle(!showPass);
    setType(!type);
  };

  const handleShowPassConfirm = () => {
    handleToggleConfirm(!showPassConfirm);
    setTypeConfirm(!typeConfirm);
  };

  return (
    <main className="flex min-h-screen">
      <PosterForm />

      <div className="w-2/4 relative max-md:w-full">
        <Link
          to="/"
          className="text-2xl text-green absolute top-5 cursor-pointer left-5 flex justify-center items-center gap-3 hover:opacity-70 transition-all"
        >
          <i className="fa-solid fa-house"></i>
          <span className="text-base font-medium text-dark hover:underline translate-y-1">Back to home</span>
        </Link>
        <div className="flex flex-col items-center text-center w-[460px] mx-auto py-5 max-lg:w-[90%] max-md:w-[500px] max-sm:w-[90%]">
          <h1 className="mt-[50px] text-[30px] font-medium">Hello Again!</h1>
          <p className="mt-5 px-5 text-[15px] font-medium text-[#9e9da8]">
            Welcome back to sign in. As a returning customer, you have access to your previously saved all information.
          </p>
          <form className="w-full mt-[30px]" onSubmit={handleSubmit(onSubmitHandler)} autoComplete="off">
            <div className="mt-[30px]">
              <div className="flex items-center h-[46px] relative">
                <Input type="text" name="user_name" placeholder="Full name" control={control} />
                <div className="absolute right-0 px-4 text-lg text-gray-500">
                  <i className="fa-regular fa-user"></i>
                </div>
              </div>
              {errors.user_name && (
                <p className="text-red-500 text-left text-xs font-medium mt-1">{errors.user_name.message}</p>
              )}
            </div>
            <div className="mt-[30px]">
              <div className="flex items-center h-[46px] relative">
                <Input type="email" name="email" placeholder="Email address" control={control} />
                <img src="/assets/icons/message.svg" alt="" className="absolute right-0 px-3" />
              </div>
              {errors.email && (
                <p className="text-red-500 text-left text-xs font-medium mt-1">{errors.email.message}</p>
              )}
            </div>
            <div className="mt-[30px]">
              <div className="flex items-center h-[46px] relative">
                <Input type={type ? 'text' : 'password'} name="password" placeholder="Password" control={control} />
                <div className="absolute right-0 px-3 cursor-pointer" onClick={handleShowPass}>
                  {showPass ? <i className="fa-regular fa-eye"></i> : <i className="fa-regular fa-eye-slash"></i>}
                </div>
              </div>
              {errors.password && (
                <p className="text-red-500 text-left text-xs font-medium mt-1">{errors.password.message}</p>
              )}
            </div>
            <div className="mt-[30px]">
              <div className="flex items-center h-[46px] relative">
                <Input
                  type={typeConfirm ? 'text' : 'password'}
                  name="confirm_password"
                  placeholder="Confirm password"
                  control={control}
                />
                <div className="absolute right-0 px-3 cursor-pointer" onClick={handleShowPassConfirm}>
                  {showPassConfirm ? (
                    <i className="fa-regular fa-eye"></i>
                  ) : (
                    <i className="fa-regular fa-eye-slash"></i>
                  )}
                </div>
              </div>
              {errors.confirm_password && (
                <p className="text-red-500 text-left text-xs font-medium mt-1">{errors.confirm_password.message}</p>
              )}
            </div>
            {/* <div className="mt-3 flex items-center">
              <CheckboxControler control={control} name="isSave" label="Set as default card" />
            </div> */}
            <div className="mt-[40px] auth__btn-group">
              <Button
                classname={`w-full bg-green text-white hover:bg-opacity-80 border-none ${isSubmitting && 'opacity-50'}`}
                disable={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="my-1 w-6 h-6 rounded-full border-4 border-t-transparent border-gray-200 animate-spin mx-auto z-10 relative"></span>
                ) : (
                  'Sign up'
                )}
              </Button>
              <Button classname="mt-5 w-full flex gap-3 items-center justify-center border-none bg-gray-200 hover:bg-gray-100">
                <svg width="25" height="25" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_211_6)">
                    <path
                      d="M28.227 14.8225C28.227 13.8709 28.1499 12.914 27.9853 11.9778H14.78V17.3689H22.342C22.0283 19.1077 21.02 20.6458 19.5436 21.6232V25.1213H24.0551C26.7044 22.6829 28.227 19.082 28.227 14.8225Z"
                      fill="#4285F4"
                    />
                    <path
                      d="M14.78 28.501C18.5559 28.501 21.7402 27.2612 24.0602 25.1213L19.5487 21.6232C18.2935 22.4771 16.6731 22.9607 14.7852 22.9607C11.1328 22.9607 8.03596 20.4966 6.92481 17.1837H2.26929V20.7898C4.64592 25.5174 9.48663 28.501 14.78 28.501Z"
                      fill="#34A853"
                    />
                    <path
                      d="M6.91966 17.1837C6.33322 15.4449 6.33322 13.5621 6.91966 11.8234V8.21729H2.26928C0.283612 12.1732 0.283612 16.8339 2.26928 20.7898L6.91966 17.1837Z"
                      fill="#FBBC04"
                    />
                    <path
                      d="M14.78 6.04127C16.776 6.01041 18.7051 6.76146 20.1506 8.14012L24.1477 4.14305C21.6167 1.76642 18.2575 0.45979 14.78 0.500943C9.48663 0.500943 4.64592 3.48459 2.26929 8.21728L6.91966 11.8234C8.02567 8.50536 11.1276 6.04127 14.78 6.04127Z"
                      fill="#EA4335"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_211_6">
                      <rect width="28" height="28" fill="white" transform="translate(0.5 0.5)" />
                    </clipPath>
                  </defs>
                </svg>
                <span className="text-base text-dark">Sign in with Google</span>
              </Button>
            </div>
          </form>
          <p className="mt-[50px] text-lg">
            I already have an account.
            <Link to="/login" className="pl-2 hover:underline font-medium text-[#0071dc]">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default RegisterPage;
