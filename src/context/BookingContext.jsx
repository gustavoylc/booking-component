import { createContext, useState } from 'react';

const BookingContext = createContext();

function BookingProvider({ children }) {
  const [trip, setTrip] = useState('Round-trip');
  return (
    <BookingContext.Provider value={{ trip, setTrip }}>
      {children}
    </BookingContext.Provider>
  );
}

export { BookingContext, BookingProvider };
