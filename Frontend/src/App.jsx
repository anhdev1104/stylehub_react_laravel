import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './routes/router';

function App() {
  return (
    <>
      <Router>
        <AppRouter />
      </Router>
    </>
  );
}

export default App;
