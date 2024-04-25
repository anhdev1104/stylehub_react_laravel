import { Route, Routes, useLocation } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import HomePage from '../pages/home';
import Electronic from '../pages/electronic';
import { useEffect } from 'react';

const clientRouter = [
  {
    path: '/electronic',
    element: Electronic,
    title: 'Daddy Work | Electronic',
  },
  {
    path: '/',
    element: HomePage,
    title: 'Daddy Work | Home',
  },
];

export default function AppRouter() {
  const location = useLocation();

  useEffect(() => {
    const route = clientRouter.find(route => route.path === location.pathname);
    if (route && route.title) {
      document.title = route.title;
    }
  }, [location]);

  return (
    <Routes>
      <Route element={<MainLayout />}>
        {clientRouter.map(route => (
          <Route key={route.path} path={route.path} element={<route.element />} />
        ))}
      </Route>
    </Routes>
  );
}
