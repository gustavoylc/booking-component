import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { useState } from 'react';
import { grey } from '@mui/material/colors';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

function SecondaryMenuDatePicker() {
  const [value, setValue] = useState([null, null]);

  return (
    <LocalizationProvider
      dateAdapter={AdapterDayjs}
      localeText={{ start: 'Departure Date', end: 'Return Date' }}
    >
      <DateRangePicker
        disablePast
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(startProps, endProps) => (
          <>
            <TextField
              {...startProps}
              sx={{
                backgroundColor: grey[200],
              }}
              label={
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <CalendarMonthIcon /> Departure Date
                </Box>
              }
            />
            <Box sx={{ mx: 2 }}> to </Box>
            <TextField
              {...endProps}
              sx={{
                backgroundColor: grey[200],
              }}
              label={
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <CalendarMonthIcon /> Return Date
                </Box>
              }
            />
          </>
        )}
      />
    </LocalizationProvider>
  );
}

export default SecondaryMenuDatePicker;
