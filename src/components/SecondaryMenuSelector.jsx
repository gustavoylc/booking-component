import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import FlightIcon from '@mui/icons-material/Flight';
import { Box } from '@mui/material';
import { grey } from '@mui/material/colors';
import { countries } from '../services/dataMenu';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

function SecondaryMenuSelector({ placeholder, label }) {
  return (
    <Autocomplete
      multiple
      id="checkboxes-tags-demo"
      options={countries}
      disableCloseOnSelect
      getOptionLabel={(option) => option.city}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option.city}
        </li>
      )}
      style={{
        width: 300,
      }}
      renderInput={(params) => (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <FlightIcon />
          <TextField
            {...params}
            label={label}
            placeholder={placeholder}
            sx={{
              backgroundColor: grey[200],
            }}
          />
        </Box>
      )}
    />
  );
}

export default SecondaryMenuSelector;
