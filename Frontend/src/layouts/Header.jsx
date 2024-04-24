import { Link } from 'react-router-dom';
import Button from '../components/button/Button';

const Header = () => {
  return (
    <header id="header" className="header bg-green">
      <section className="container-page">
        <div className="py-7">
          <div className="flex items-center justify-between">
            <Link to="/" className="w-[100px]">
              <img src="/src/assets/img/logo.png" className="w-full h-full object-cover" alt="logo" />
            </Link>
            <form className="relative max-w-[600px] w-full h-[44px] border border-white flex items-center">
              <input
                className="header-form__input w-full px-5 outline-none bg-transparent text-sm text-white"
                type="search"
                name="search"
                id="search"
                placeholder="Search for anything"
              />
              <button
                className="w-[44px] h-[44px] bg-yellow flex items-center justify-center absolute -right-[1px] -top-[1px]"
                type="submit"
              >
                <img src="/src/assets/icons/search.svg" alt="" />
              </button>
            </form>
            <div className="flex items-center gap-5">
              <Link to="" className="text-white transition-all duration-200 ease-in hover:text-dark">
                Sign In
              </Link>
              <Button
                location="/"
                classname="header-action__btn min-w-[94px] transition-all duration-300 relative text-white hover:text-dark"
              >
                Sign Up
              </Button>
            </div>
          </div>

          <nav className="mt-[28px] flex justify-center">
            <ul className="flex items-center">
              <li className="relative py-[10px] px-5 !pl-0 group">
                <Link to="/" className="flex items-center gap-2 text-white leading-relaxed">
                  Home
                  <img src="./src/assets/icons/arrow-down.svg" alt="" />
                </Link>
                <ul className="group-hover:opacity-100 group-hover:visible opacity-0 invisible w-[210px] absolute bg-green transition-all rounded-b-lg rounded-l-lg z-10">
                  <li className="pt-[37px]"></li>
                  <li className="py-2 px-6 border-t border-green2">
                    <a href="./electronic.html" className="text-white leading-relaxed hover:text-yellow transition-all">
                      Electronic
                    </a>
                  </li>
                  <li className="py-2 px-6 border-t border-green2">
                    <a href="./fashion.html" className="text-white leading-relaxed hover:text-yellow transition-all">
                      Fashion
                    </a>
                  </li>
                  <li className="py-2 px-6 border-t border-green2">
                    <a href="./furniture.html" className="text-white leading-relaxed hover:text-yellow transition-all">
                      Furniture
                    </a>
                  </li>
                  <li className="py-2 px-6 border-t border-green2">
                    <a href="#!" className="text-white leading-relaxed hover:text-yellow transition-all">
                      Kids Fashion
                    </a>
                  </li>
                </ul>
              </li>
              <li className="relative py-[10px] px-5 group">
                <a href="#!" className="flex items-center gap-2 text-white leading-relaxed">
                  Category
                  <img src="./src/assets/icons/arrow-down.svg" alt="" />
                </a>
                <ul className="group-hover:opacity-100 group-hover:visible opacity-0 invisible w-[210px] absolute bg-green transition-all rounded-b-lg rounded-l-lg z-10">
                  <li className="pt-[37px]"></li>
                  <li className="py-2 px-6 border-t border-green2">
                    <a href="#!" className="text-white leading-relaxed hover:text-yellow transition-all">
                      Men Fashion
                    </a>
                  </li>
                  <li className="py-2 px-6 border-t border-green2">
                    <a href="#!" className="text-white leading-relaxed hover:text-yellow transition-all">
                      Women Fashion
                    </a>
                  </li>
                  <li className="py-2 px-6 border-t border-green2">
                    <a href="#!" className="text-white leading-relaxed hover:text-yellow transition-all">
                      Kids Fashion
                    </a>
                  </li>
                  <li className="py-2 px-6 border-t border-green2">
                    <a href="#!" className="text-white leading-relaxed hover:text-yellow transition-all">
                      Baby Fashion
                    </a>
                  </li>
                  <li className="py-2 px-6 border-t border-green2">
                    <a href="#!" className="text-white leading-relaxed hover:text-yellow transition-all">
                      Mobile Device
                    </a>
                  </li>
                  <li className="py-2 px-6 border-t border-green2">
                    <a href="#!" className="text-white leading-relaxed hover:text-yellow transition-all">
                      Computer Device
                    </a>
                  </li>
                  <li className="py-2 px-6 border-t border-green2">
                    <a href="#!" className="text-white leading-relaxed hover:text-yellow transition-all">
                      Beauty Products
                    </a>
                  </li>
                  <li className="py-2 px-6 border-t border-green2">
                    <a href="#!" className="text-white leading-relaxed hover:text-yellow transition-all">
                      Furniture
                    </a>
                  </li>
                  <li className="py-2 px-6 border-t border-green2">
                    <a href="#!" className="text-white leading-relaxed hover:text-yellow transition-all">
                      Smart Watch
                    </a>
                  </li>
                  <li className="py-2 px-6 border-t border-green2">
                    <a href="#!" className="text-white leading-relaxed hover:text-yellow transition-all">
                      Modern Shoes
                    </a>
                  </li>
                  <li className="py-2 px-6 border-t border-green2">
                    <a href="#!" className="text-white leading-relaxed hover:text-yellow transition-all">
                      Jewelry
                    </a>
                  </li>
                  <li className="py-2 px-6 border-t border-green2">
                    <a href="#!" className="text-white leading-relaxed hover:text-yellow transition-all">
                      Home Products
                    </a>
                  </li>
                </ul>
              </li>
              <li className="relative py-[10px] px-5">
                <a href="#!" className="flex items-center gap-2 text-white leading-relaxed">
                  Brand
                  <img src="./src/assets/icons/arrow-down.svg" alt="" />
                </a>
              </li>
              <li className="relative py-[10px] px-5">
                <a href="#!" className="flex items-center gap-2 text-white leading-relaxed">
                  Products
                  <img src="./src/assets/icons/arrow-down.svg" alt="" />
                </a>
              </li>
              <li className="relative py-[10px] px-5">
                <a href="#!" className="flex items-center gap-2 text-white leading-relaxed">
                  About
                  <img src="./src/assets/icons/arrow-down.svg" alt="" />
                </a>
              </li>
              <li className="relative py-[10px] px-5">
                <a href="#!" className="flex items-center gap-2 text-white leading-relaxed">
                  Shop
                </a>
              </li>
              <li className="relative py-[10px] px-5 !pr-0">
                <a href="#!" className="flex items-center gap-2 text-white leading-relaxed">
                  Pages
                  <img src="./src/assets/icons/arrow-down.svg" alt="" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </header>
  );
};

export default Header;
