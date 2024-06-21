import { Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

// admin
import AdminLayout from '@/layouts/AdminLayout';
import ProductDetailAdmin from '@/pages/admin/ProductDetailAdmin';
import UpdateProduct from '@/pages/admin/UpdateProduct';
import ProductAdmin from '@/pages/admin/ProductAdmin';
import UpdateCategory from '@/pages/admin/UpdateCategory';
import CategoryAdmin from '@/pages/admin/CategoryAdmin';
import Customer from '@/pages/admin/Customer';
import DashboardPage from '@/pages/admin';
// client
import MainLayout from '@/layouts/MainLayout';
import HomePage from '@/pages/home';
import AboutPage from '@/pages/about';
import BlogPage from '@/pages/blog';
import ContactPage from '@/pages/contact';
import NotFoundPage from '@/pages/404/NotFoundPage';
import FaqPage from '@/pages/faq';
import ProductsPage from '@/pages/products';
import ProductDetails from '@/pages/productDetails';
import WishList from '@/pages/wishlist';
import ScrollToTop from '@/helpers/ScrollToTop';
import CartPage from '@/pages/cart';
import SearchPage from '@/pages/search';
import RegisterPage from '@/pages/register';
import LoginPage from '@/pages/login';
import ForgotPasswordPage from '@/pages/forgotpassword';
import ProtectedRoute from '@/contexts/ProtectedRoute';
import Profile from '@/pages/profile';
import CheckoutPage from '@/pages/checkout';
import UpdateProfile from '@/pages/profile/UpdateProfile';
import OrdersAdmin from '@/pages/admin/OrdersAdmin';
import OrderDetails from '@/pages/admin/OrderDetails';

const clientRouter = [
  {
    path: '/product/:id',
    element: ProductDetails,
    title: 'Product Details',
  },
  {
    path: '/category/:id',
    element: ProductsPage,
    title: 'Products',
  },
  {
    path: '/cart',
    element: CartPage,
    title: 'Cart',
  },
  {
    path: '/checkout',
    element: CheckoutPage,
    title: 'Checkout',
  },
  {
    path: '/faq',
    element: FaqPage,
    title: 'FAQ',
  },
  {
    path: '/contact',
    element: ContactPage,
    title: 'Contact',
  },
  {
    path: '/blog',
    element: BlogPage,
    title: 'Blog',
  },
  {
    path: '/about',
    element: AboutPage,
    title: 'About',
  },
  {
    path: '/wishlist',
    element: WishList,
    title: 'Wish List',
  },
  {
    path: '/search',
    element: SearchPage,
    title: 'Search',
  },
  {
    path: '/profile',
    element: Profile,
    title: 'Profile',
  },
  {
    path: '/updateinfo/:id',
    element: UpdateProfile,
    title: 'Update Info',
  },
  {
    path: '/',
    element: HomePage,
    title: 'Home',
  },
];

const accountRouter = [
  {
    path: '/register',
    element: RegisterPage,
    title: 'Register',
  },
  {
    path: '/login',
    element: LoginPage,
    title: 'Login',
  },
  {
    path: '/forgotpassword',
    element: ForgotPasswordPage,
    title: 'Forgot Password',
  },
];

const adminRouter = [
  {
    path: 'admin/products/:id',
    element: ProductDetailAdmin,
  },
  {
    path: 'admin/updateproduct/:id',
    element: UpdateProduct,
  },
  {
    path: 'admin/products',
    element: ProductAdmin,
  },
  {
    path: 'admin/categories/:id',
    element: UpdateCategory,
  },
  {
    path: 'admin/categories',
    element: CategoryAdmin,
  },
  {
    path: 'admin/customer',
    element: Customer,
  },
  {
    path: 'admin/orders',
    element: OrdersAdmin,
  },
  {
    path: 'admin/orders/:id',
    element: OrderDetails,
  },
  {
    path: 'admin',
    element: DashboardPage,
  },
];

export default function AppRouter() {
  const location = useLocation();

  useEffect(() => {
    const route = clientRouter.find(route => {
      const routePath = route.path.replace(/:\w+/g, ''); // loại bỏ các phần có :id
      return location.pathname.startsWith(routePath);
    });
    if (route && route.title) {
      document.title = route.title;
    }
  }, [location]);

  useEffect(() => {
    const route = accountRouter.find(route => {
      const routePath = route.path.replace(/:\w+/g, ''); // loại bỏ các phần có :id
      return location.pathname.startsWith(routePath);
    });
    if (route && route.title) {
      document.title = route.title;
    }
  }, [location]);

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          {clientRouter.map(route => (
            <Route key={route.path} path={route.path} element={<route.element />} />
          ))}
        </Route>
        <Route path="/" element={<AdminLayout />}>
          {adminRouter?.map(route => (
            <Route
              key={route.path}
              path={route.path}
              element={
                <ProtectedRoute requiredRole="admin">
                  <route.element />
                </ProtectedRoute>
              }
            />
          ))}
        </Route>
        <Route path="/">
          {accountRouter.map(route => (
            <Route key={route.path} path={route.path} element={<route.element />} />
          ))}
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
