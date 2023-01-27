import { useContext } from 'react';
import { Box, FormControl, MenuItem, Select } from '@mui/material';
import SecondaryMenuSelector from './SecondaryMenuSelector';
import SecondaryMenuSingleDatePicker from './SecondaryMenuSingleDatePicker';
import { travelClass } from '../services/dataMenu';
import { BookingContext } from '../context/BookingContext';

function SecondaryMenuExtended() {
  const { tripClass, setTripClass } = useContext(BookingContext);
  const handleChangeTripClass = (event) => {
    setTripClass(event.target.value);
  };
  return (
    <Box sx={{ display: 'flex', gap: 2 }}>
      <SecondaryMenuSelector placeholder="From?" label="From" />
      <SecondaryMenuSelector placeholder="To?" label="To" />
      <SecondaryMenuSingleDatePicker />
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <Select value={tripClass} onChange={handleChangeTripClass} displayEmpty>
          {travelClass.map((singleTravelClass) => (
            <MenuItem value={singleTravelClass} key={singleTravelClass}>
              {singleTravelClass}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

export default SecondaryMenuExtended;
