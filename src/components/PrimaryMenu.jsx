import { Box, FormControl, MenuItem, Select } from '@mui/material';
import { useState } from 'react';
import CustomizedMenu from './CustomizedMenu';
import { flightTypes, travelClass } from '../services/dataMenu';

function PrimaryMenu() {
  const [trip, setTrip] = useState('Round-trip');
  const [tripClass, setTripClass] = useState('Economy');

  const handleChange = (event) => {
    setTrip(event.target.value);
  };
  const handleChangeTripClass = (event) => {
    setTripClass(event.target.value);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        gap: 4,
        flexDirection: { xs: 'column', md: 'row' },
        flexWrap: 'wrap',
        justifyContent: { xs: 'center', md: 'start' },
        alignItems: 'center',
      }}
    >
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <Select value={trip} onChange={handleChange} displayEmpty>
          {flightTypes.map((type) => (
            <MenuItem value={type} key={type}>
              {type}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <Select value={tripClass} onChange={handleChangeTripClass} displayEmpty>
          {travelClass.map((singleTravelClass) => (
            <MenuItem value={singleTravelClass} key={singleTravelClass}>
              {singleTravelClass}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <CustomizedMenu />
    </Box>
  );
}

export default PrimaryMenu;
