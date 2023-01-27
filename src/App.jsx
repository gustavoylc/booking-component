import { CssBaseline } from '@mui/material';
import Home from './pages/Home';
import { BookingProvider } from './context/BookingContext';

function App() {
  return (
    <>
      <CssBaseline />
      <BookingProvider>
        <Home />
      </BookingProvider>
    </>
  );
}

export default App;
