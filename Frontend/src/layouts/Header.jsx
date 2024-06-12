import { Link, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { getCategories } from '../services/categories';
import Search from '@/components/search';
import { FavoriteContext } from '@/contexts/favoriteContext';
import ShoppingCart from '@/helpers/ShoppingCart';
import { AuthContext } from '@/contexts/AuthContext';
import { toast } from 'react-toastify';

const Header = () => {
  const [categories, setCategories] = useState([]);
  const { favorites } = useContext(FavoriteContext);
  const [cartCount, setCartCount] = useState(0);
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showMenuMobile, setShowMenuMobile] = useState(false);
  const [openSubnav, setOpenSubnav] = useState(false);

  useEffect(() => {
    (async () => {
      const data = await getCategories();
      setCategories(data);
    })();

    const cart = new ShoppingCart();
    const carts = cart.getCartFromCookie();
    setCartCount(carts.length);
  }, []);

  useEffect(() => {
    const handleCartUpdate = () => {
      const cart = new ShoppingCart();
      const carts = cart.getCartFromCookie();
      setCartCount(carts.length);
    };

    document.addEventListener('cartUpdated', handleCartUpdate);

    return () => {
      document.removeEventListener('cartUpdated', handleCartUpdate);
    };
  }, []);

  const handleLogout = () => {
    logout();
    toast.success('Log out successfully !');
    navigate('/login');
  };

  return (
    <header id="header" className="header bg-green z-50">
      <section className="container-page">
        <div className="py-7">
          <div className="flex items-center justify-between gap-3 lg:gap-0">
            <Link to="/" className="flex flex-col items-center gap-1">
              <img src="/assets/img/logo.png" className="w-20 lg:w-[100px]" alt="logo" />
              <h2
                className="text-white text-lg hidden sm:block lg:text-2xl font-bold"
                style={{ fontFamily: 'Roboto Slab' }}
              >
                Daddy World
              </h2>
            </Link>
            <Search />
            <div className="flex items-center gap-5">
              <Link
                to={user ? '/profile' : '/register'}
                className="w-8 h-8 rounded-full overflow-hidden hidden lg:flex lg:justify-center lg:items-center"
                title="profile"
              >
                {user?.avatar ? (
                  <img src={user?.preview || user?.avatar} alt="" className="w-full h-full object-cover" />
                ) : (
                  <img src="/assets/icons/user.svg" alt="" />
                )}
              </Link>
              <Link to="/wishlist" className="hidden lg:flex lg:items-center lg:gap-1">
                <img src="/assets/icons/heart-white.svg" alt="" />
                <p className="text-white section-desc-2">({favorites.length})</p>
              </Link>
              <Link to="/cart" className="hidden lg:flex lg:items-center lg:gap-1">
                <img src="/assets/icons/cart.svg" alt="" />
                <p className="text-white section-desc-2">({cartCount})</p>
              </Link>
              {user && (
                <div className="hidden lg:block cursor-pointer" onClick={handleLogout}>
                  <img src="/assets/icons/logout.svg" alt="" className="w-6 h-6" />
                </div>
              )}
              <div
                className="text-white text-2xl cursor-pointer selection-desc-2 lg:hidden"
                onClick={() => setShowMenuMobile(true)}
              >
                <i className="fa-solid fa-bars"></i>
              </div>
            </div>
          </div>

          <nav className="lg:mt-[28px] hidden lg:flex lg:justify-center">
            <ul className="flex items-center">
              <li className="relative py-[10px] px-5 !pl-0">
                <Link to="/" className="flex items-center gap-2 text-white leading-relaxed">
                  Home
                </Link>
              </li>
              <li className="relative py-[10px] px-5 group">
                <div className="cursor-default flex items-center gap-2 text-white leading-relaxed">
                  Category
                  <img src="/assets/icons/arrow-down.svg" alt="" />
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
                <Link to="/about" className="cursor-pointer flex items-center gap-2 text-white leading-relaxed">
                  About
                </Link>
              </li>
              <li className="relative py-[10px] px-5">
                <Link to="/blog" className="cursor-pointer flex items-center gap-2 text-white leading-relaxed">
                  Blog
                </Link>
              </li>
              <li className="relative py-[10px] px-5">
                <Link to="/contact" className="cursor-pointer flex items-center gap-2 text-white leading-relaxed">
                  Contact
                </Link>
              </li>
              <li className="relative py-[10px] px-5 !pr-0">
                <Link to="/faq" className="cursor-pointer flex items-center gap-2 text-white leading-relaxed">
                  FAQ
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </section>
      <div
        className={`${showMenuMobile ? 'fixed' : 'hidden'} inset-0 z-[999] bg-black/20 transition-all`}
        onClick={() => setShowMenuMobile(false)}
      ></div>
      <div
        className={`fixed top-0 right-0 bottom-0 max-w-[450px] w-full z-[99999] p-5 transition-all duration-500 bg-green ${
          showMenuMobile ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="text-white flex items-center justify-between pb-5 border-b border-grey">
          <div className="text-2xl cursor-pointer" onClick={() => setShowMenuMobile(false)}>
            <i className="fa-solid fa-xmark"></i>
          </div>
          <div className="flex items-center gap-5">
            <Link to="/wishlist" className="flex items-center gap-1" onClick={() => setShowMenuMobile(false)}>
              <img src="/assets/icons/heart-white.svg" alt="" />
              <p className="text-white section-desc-2">({favorites.length})</p>
            </Link>
            <Link to="/cart" className="flex items-center gap-1" onClick={() => setShowMenuMobile(false)}>
              <img src="/assets/icons/cart.svg" alt="" />
              <p className="text-white section-desc-2">({cartCount})</p>
            </Link>
          </div>
          <Link
            to={user ? '/profile' : '/register'}
            className="w-10 h-10 rounded-full overflow-hidden flex justify-center items-center"
            title="profile"
            onClick={() => setShowMenuMobile(false)}
          >
            {user?.avatar ? (
              <img src={user?.preview || user?.avatar} alt="" className="w-full h-full object-cover" />
            ) : (
              <img src="/assets/icons/user.svg" alt="" />
            )}
          </Link>
        </div>
        <ul className="flex flex-col mt-10">
          <li className="relative py-[10px] px-5">
            <Link
              to="/"
              className="flex items-center gap-2 text-white leading-relaxed transition-all hover:text-yellow"
            >
              Home
            </Link>
          </li>
          <li className="relative py-[10px] px-5">
            <div
              className="cursor-pointer flex items-center gap-3 text-white leading-relaxed transition-all hover:text-yellow"
              onClick={() => setOpenSubnav(!openSubnav)}
            >
              <span>Category</span>
              {openSubnav ? (
                <span className="text-xs translate-y-[2px]">
                  <i className="fa-solid fa-chevron-down"></i>
                </span>
              ) : (
                <span className="text-xs translate-y-[2px]">
                  <i className="fa-solid fa-chevron-right"></i>
                </span>
              )}
            </div>
            {openSubnav && (
              <ul className="my-2 bg-green transition-all rounded-b-lg rounded-l-lg z-10">
                {categories.map(category => (
                  <li className="py-2 px-6" key={category.id}>
                    <Link
                      to={`category/${category.id}`}
                      className="text-white leading-relaxed hover:text-yellow transition-all"
                      onClick={() => setShowMenuMobile(false)}
                    >
                      {category.category_name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li className="relative py-[10px] px-5">
            <Link
              to="/about"
              className="cursor-pointer flex items-center gap-2 text-white leading-relaxed transition-all hover:text-yellow"
            >
              About
            </Link>
          </li>
          <li className="relative py-[10px] px-5">
            <Link
              to="/blog"
              className="cursor-pointer flex items-center gap-2 text-white leading-relaxed transition-all hover:text-yellow"
            >
              Blog
            </Link>
          </li>
          <li className="relative py-[10px] px-5">
            <Link
              to="/contact"
              className="cursor-pointer flex items-center gap-2 text-white leading-relaxed transition-all hover:text-yellow"
            >
              Contact
            </Link>
          </li>
          <li className="relative py-[10px] px-5 !pr-0">
            <Link
              to="/faq"
              className="cursor-pointer flex items-center gap-2 text-white leading-relaxed transition-all hover:text-yellow"
            >
              FAQ
            </Link>
          </li>
        </ul>
        {user && (
          <div className="border-t border-grey mt-5 pt-5 px-5">
            <div
              className="cursor-pointer inline-flex items-center gap-3 hover:translate-x-1 group"
              onClick={handleLogout}
            >
              <img src="/assets/icons/logout.svg" alt="" className="w-5 h-5" />
              <span className="text-white font-semibold group-hover:text-yellow transition-all">Logout</span>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
