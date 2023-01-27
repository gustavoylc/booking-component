import { Box, Typography } from '@mui/material';
import PrimaryMenu from './PrimaryMenu';
import SecondaryMenu from './SecondaryMenu';

function Booking() {
  return (
    <Box
      sx={{
        mt: 5,
        px: { xs: 3, sm: 5 },
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
      }}
    >
      <Typography variant="h4">
        Search hundreds of travel sites at once.
      </Typography>
      <PrimaryMenu />
      <SecondaryMenu />
    </Box>
  );
}

export default Booking;
