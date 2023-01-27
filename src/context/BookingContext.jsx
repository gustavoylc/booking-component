import { createContext, useState } from 'react';

const BookingContext = createContext();

function BookingProvider({ children }) {
  const [trip, setTrip] = useState('Round-trip');
  const [tripClass, setTripClass] = useState('Economy');
  return (
    <BookingContext.Provider value={{ trip, setTrip, tripClass, setTripClass }}>
      {children}
    </BookingContext.Provider>
  );
}

export { BookingContext, BookingProvider };
