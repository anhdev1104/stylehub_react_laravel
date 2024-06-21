import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './routes/router';
import { FavoriteProvider } from './contexts/favoriteContext';
import { CountProvider } from '@/contexts/countContext';
import AuthProvider from './contexts/AuthContext';
import { CartProvider } from './contexts/cartContext';

function App() {
  return (
    <>
      <CountProvider>
        <FavoriteProvider>
          <CartProvider>
            <Router>
              <AuthProvider>
                <AppRouter />
              </AuthProvider>
            </Router>
          </CartProvider>
        </FavoriteProvider>
      </CountProvider>
    </>
  );
}

export default App;
