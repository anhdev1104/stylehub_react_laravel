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
    <header id="header" className="header bg-green">
      <section className="container-page">
        <div className="py-7">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex flex-col items-center gap-1">
              <img src="/assets/img/logo.png" className="w-[100px]" alt="logo" />
              <h2 className="text-white text-2xl font-bold" style={{ fontFamily: 'Roboto Slab' }}>
                Daddy World
              </h2>
            </Link>
            <Search />
            <div className="flex items-center gap-5">
              <Link
                to={user ? '/profile' : '/register'}
                className="w-8 h-8 rounded-full overflow-hidden flex justify-center items-center"
                title="profile"
              >
                {user?.avatar ? (
                  <img src={user?.preview || user?.avatar} alt="" className="w-full h-full object-cover" />
                ) : (
                  <img src="/assets/icons/user.svg" alt="" />
                )}
              </Link>
              <Link to="/wishlist" className="flex items-center gap-1">
                <img src="/assets/icons/heart-white.svg" alt="" />
                <p className="text-white section-desc-2">({favorites.length})</p>
              </Link>
              <Link to="/cart" className="flex items-center gap-1">
                <img src="/assets/icons/cart.svg" alt="" />
                <p className="text-white section-desc-2">({cartCount})</p>
              </Link>
              {user && (
                <div className="cursor-pointer" onClick={handleLogout}>
                  <img src="/assets/icons/logout.svg" alt="" className="w-6 h-6" />
                </div>
              )}
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
    </header>
  );
};

export default Header;
