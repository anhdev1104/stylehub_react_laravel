import { Route, Routes, useLocation } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import HomePage from '../pages/home';
import { useEffect } from 'react';

const clientRouter = [
  {
    path: '/',
    element: HomePage,
    title: 'Home',
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
