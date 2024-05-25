import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './routes/router';
import { FavoriteProvider } from './contexts/favoriteContext';
import { CountProvider } from '@/contexts/countContext';
import AuthProvider from './contexts/AuthContext';

function App() {
  return (
    <>
      <CountProvider>
        <FavoriteProvider>
          <Router>
            <AuthProvider>
              <AppRouter />
            </AuthProvider>
          </Router>
        </FavoriteProvider>
      </CountProvider>
    </>
  );
}

export default App;
