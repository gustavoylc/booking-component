import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { useState } from 'react';
import { grey } from '@mui/material/colors';

function SecondaryMenuSingleDatePicker() {
  const [value, setValue] = useState(dayjs());

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DesktopDatePicker
        label="For desktop"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        disablePast
        renderInput={(params) => (
          <TextField
            {...params}
            sx={{
              backgroundColor: grey[200],
            }}
          />
        )}
      />
    </LocalizationProvider>
  );
}

export default SecondaryMenuSingleDatePicker;
