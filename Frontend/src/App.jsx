import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './routes/router';
import { FavoriteProvider } from './contexts/favoriteContext';

function App() {
  return (
    <>
      <FavoriteProvider>
        <Router>
          <AppRouter />
        </Router>
      </FavoriteProvider>
    </>
  );
}

export default App;
