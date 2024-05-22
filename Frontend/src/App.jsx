import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './routes/router';
import { FavoriteProvider } from './contexts/favoriteContext';
import { CountProvider } from '@/contexts/countContext';

function App() {
  return (
    <>
      <CountProvider>
        <FavoriteProvider>
          <Router>
            <AppRouter />
          </Router>
        </FavoriteProvider>
      </CountProvider>
    </>
  );
}

export default App;
