import { Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
// client
import MainLayout from '../layouts/MainLayout';
import HomePage from '../pages/home';
import AboutPage from '../pages/about';
import BlogPage from '../pages/blog';
import ContactPage from '../pages/contact';
// admin
import AdminLayout from '../layouts/AdminLayout';
import ProductDetailAdmin from '../pages/admin/ProductDetailAdmin';
import UpdateProduct from '../pages/admin/UpdateProduct';
import ProductAdmin from '../pages/admin/ProductAdmin';
import UpdateCategory from '../pages/admin/UpdateCategory';
import CategoryAdmin from '../pages/admin/CategoryAdmin';
import Customer from '../pages/admin/Customer';
import DashboardPage from '../pages/admin';
import NotFoundPage from '../pages/404/NotFoundPage';
import FaqPage from '../pages/faq';
import ProductsPage from '../pages/products';
import ProductDetails from '../pages/productDetails';
import WishList from '@/pages/wishlist';
import ScrollToTop from '@/helpers/ScrollToTop';

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
    path: '/',
    element: HomePage,
    title: 'Home',
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
            <Route key={route.path} path={route.path} element={<route.element />} />
          ))}
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
