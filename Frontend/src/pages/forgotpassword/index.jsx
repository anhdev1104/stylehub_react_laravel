import Button from '@/components/button';
import { Link } from 'react-router-dom';

const ForgotPasswordPage = () => {
  return (
    <main className="flex min-h-screen">
      <div className="relative flex flex-col items-center justify-center gap-[50px] bg-[#f6f6f6] px-[30px] w-2/4">
        <img src="/src/assets/img/auth/forgot-password.webp" alt="" className="w-[424px]" />
        <p className="max-w-[412px] text-center text-lg font-medium">Reset your password? Let&apos;s take it back.</p>
      </div>

      <div className="w-2/4 relative">
        <Link
          to="/"
          className="text-2xl text-green absolute top-5 cursor-pointer left-5 flex justify-center items-center gap-3"
        >
          <i className="fa-solid fa-house"></i>
          <span className="text-base font-medium text-dark hover:underline translate-y-1">Back to home</span>
        </Link>
        <div className="flex flex-col items-center text-center w-[460px] mx-auto py-5">
          <h1 className="mt-[50px] text-[30px] font-medium">Reset your password</h1>
          <p className="mt-5 px-5 text-[15px] font-medium text-[#9e9da8]">
            Enter your email and we&apos;ll send you a link to reset your password.
          </p>
          <form className="w-full mt-[30px]">
            <div className="mt-[30px]">
              <div className="flex items-center h-[46px] relative">
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="Email"
                  className="flex-1 w-full border border-[#d2d1d6] h-full text-base font-medium outline-none pl-3 pr-[50px] focus:border-green"
                  required
                />
                <img src="./src/assets/icons/message.svg" alt="" className="absolute right-0 px-3" />
                {/* <img src="./src/assets/icons/form-error.svg" alt="" className="absolute right-0 px-3" /> */}
              </div>
              {/* <p className="form__error">Email is not in correct format</p> */}
            </div>

            <div className="mt-[40px] auth__btn-group">
              <Button classname="w-full bg-green text-white hover:bg-opacity-80 border-none">Reset password</Button>
            </div>
          </form>
          <p className="mt-[50px] text-lg">
            <Link to="/login" className="pl-2 hover:underline font-medium text-[#0071dc]">
              Back to SignIn
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default ForgotPasswordPage;
