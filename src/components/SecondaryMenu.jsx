import { Box, Button } from '@mui/material';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import SearchIcon from '@mui/icons-material/Search';
import SecondaryMenuDatePicker from './SecondaryMenuDatePicker';
import SecondaryMenuSelector from './SecondaryMenuSelector';

function SecondaryMenu() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: { xs: 'center', md: 'start' },
        flexDirection: { xs: 'column', md: 'row' },
        gap: 2,
      }}
    >
      <SecondaryMenuSelector placeholder="From?" label="From" />
      <Button>
        <SwapHorizIcon />
      </Button>
      <SecondaryMenuSelector placeholder="To?" label="To" />
      <SecondaryMenuDatePicker />
      <Button
        variant="contained"
        sx={{ background: 'linear-gradient(135deg,#ff690f 0%,#e8381b 100%)' }}
      >
        <SearchIcon />
      </Button>
    </Box>
  );
}

export default SecondaryMenu;
