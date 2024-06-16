import Button from '@/components/button';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Input from '@/components/input';

const schema = yup
  .object({
    email: yup
      .string()
      .trim()
      .required('Email cannot be blank !')
      .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, {
        message: 'Email is not in the correct format !',
      }),
  })
  .required();

const ForgotPasswordPage = () => {
  const {
    handleSubmit,
    formState: { errors, isSubmitting },
    control,
    // reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitHandler = async values => {
    console.log(values);
  };

  return (
    <main className="flex min-h-screen">
      <div className="relative flex flex-col items-center justify-center gap-[50px] bg-[#f6f6f6] px-[30px] w-2/4 max-md:hidden">
        <img src="/assets/img/auth/forgot-password.webp" alt="" className="w-[424px]" />
        <p className="max-w-[412px] text-center text-lg font-medium">Reset your password? Let&apos;s take it back.</p>
      </div>

      <div className="w-2/4 relative max-md:w-full">
        <Link
          to="/"
          className="text-2xl text-green absolute top-5 cursor-pointer left-5 flex justify-center items-center gap-3"
        >
          <i className="fa-solid fa-house"></i>
          <span className="text-base font-medium text-dark hover:underline translate-y-1">Back to home</span>
        </Link>
        <div className="flex flex-col items-center text-center w-[460px] mx-auto py-5 max-lg:w-[90%] max-md:w-[500px] max-sm:w-[90%]">
          <h1 className="mt-[50px] text-[30px] font-medium">Reset your password</h1>
          <p className="mt-5 px-5 text-[15px] font-medium text-[#9e9da8]">
            Enter your email and we&apos;ll send you a link to reset your password.
          </p>
          <form className="w-full mt-[30px]" onClick={handleSubmit(onSubmitHandler)} autoComplete="off">
            <div className="mt-[30px]">
              <div className="flex items-center h-[46px] relative">
                <Input type="email" name="email" placeholder="Email address" control={control} />
                <img src="./assets/icons/message.svg" alt="" className="absolute right-0 px-3" />
              </div>
              {errors.email && (
                <p className="text-red-500 text-left text-xs font-medium mt-1">{errors.email.message}</p>
              )}
            </div>

            <div className="mt-[40px] auth__btn-group">
              <Button
                classname={`w-full bg-green text-white hover:bg-opacity-80 border-none ${isSubmitting && 'opacity-50'}`}
                disable={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="my-1 w-6 h-6 rounded-full border-4 border-t-transparent border-gray-200 animate-spin mx-auto z-10 relative"></span>
                ) : (
                  'Reset password'
                )}
              </Button>
            </div>
          </form>
          <p className="mt-[50px] text-lg">
            <Link to="/login" className="pl-2 hover:underline font-medium text-[#0071dc]">
              Back to Sign In
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default ForgotPasswordPage;
