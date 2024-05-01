import { Link } from 'react-router-dom';
import Button from '../components/button/Button';
import { useEffect, useState } from 'react';
import { getCategories } from '../services/categories';

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getCategories();
      setCategories(data);
    })();
  }, []);

  return (
    <header id="header" className="header bg-green">
      <section className="container-page">
        <div className="py-7">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex flex-col items-center gap-1">
              <img src="/src/assets/img/logo.png" className="w-[100px]" alt="logo" />
              <h2 className="text-white text-2xl font-bold" style={{ fontFamily: 'Roboto Slab' }}>
                Daddy Word
              </h2>
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
              <li className="relative py-[10px] px-5 !pl-0">
                <Link to="/" className="flex items-center gap-2 text-white leading-relaxed">
                  Home
                </Link>
              </li>
              <li className="relative py-[10px] px-5 group">
                <div className="cursor-default flex items-center gap-2 text-white leading-relaxed">
                  Category
                  <img src="./src/assets/icons/arrow-down.svg" alt="" />
                </div>
                <ul className="group-hover:opacity-100 group-hover:visible opacity-0 invisible w-[210px] absolute bg-green transition-all rounded-b-lg rounded-l-lg z-10">
                  <li className="pt-[37px]"></li>
                  {categories.map(category => (
                    <li className="py-2 px-6 border-t border-green2" key={category.id}>
                      <Link
                        to={`category/${category.id}`}
                        className="text-white leading-relaxed hover:text-yellow transition-all"
                      >
                        {category.category_name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="relative py-[10px] px-5">
                <Link to="/" className="cursor-pointer flex items-center gap-2 text-white leading-relaxed">
                  About
                </Link>
              </li>
              <li className="relative py-[10px] px-5">
                <Link to="" className="cursor-pointer flex items-center gap-2 text-white leading-relaxed">
                  Blog
                </Link>
              </li>
              <li className="relative py-[10px] px-5">
                <Link to="" className="cursor-pointer flex items-center gap-2 text-white leading-relaxed">
                  Contact
                </Link>
              </li>
              <li className="relative py-[10px] px-5 !pr-0">
                <Link to="" className="cursor-pointer flex items-center gap-2 text-white leading-relaxed">
                  FAQ
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </header>
  );
};

export default Header;
