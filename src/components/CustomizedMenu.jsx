import { useEffect, useState } from 'react';
import { Button, MenuItem, Box, Typography } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import StyledCustomizedMenu from './StyledCustomizedMenu';
import { passengersData } from '../services/dataMenu';

export default function CustomizedMenu() {
  const [passengersCount, setPassengersCount] = useState(0);
  const [passengers, setPassengers] = useState(passengersData);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDecrease = (passenger) => {
    if (
      passenger.value === 0 ||
      (passenger.category === 'Adults' && passenger.value === 1)
    ) {
      return;
    }
    const categoryIndex = passengers.findIndex(
      (searchPassenger) => searchPassenger.category === passenger.category
    );
    setPassengers((prev) => {
      const newValue = prev[categoryIndex].value - 1;
      const newTravelerCategory = {
        ...prev[categoryIndex],
        value: newValue,
      };
      const newPassenger = [];
      prev.forEach((travelerCategory) =>
        travelerCategory.category === newTravelerCategory.category
          ? newPassenger.push(newTravelerCategory)
          : newPassenger.push(travelerCategory)
      );
      return newPassenger;
    });
  };

  const handleIncrease = (passenger) => {
    const categoryIndex = passengers.findIndex(
      (searchPassenger) => searchPassenger.category === passenger.category
    );

    setPassengers((prev) => {
      const newValue = prev[categoryIndex].value + 1;

      const newTravelerCategory = {
        ...prev[categoryIndex],
        value: newValue,
      };
      const newPassenger = [];
      prev.forEach((travelerCategory) =>
        travelerCategory.category === newTravelerCategory.category
          ? newPassenger.push(newTravelerCategory)
          : newPassenger.push(travelerCategory)
      );
      return newPassenger;
    });
  };

  useEffect(() => {
    const totalPassengers = passengers.reduce(
      (accumulator, currentValue) => accumulator + currentValue.value,
      0
    );
    setPassengersCount(totalPassengers);
  }, [passengers]);

  return (
    <div>
      <Button
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="outlined"
        disableElevation
        sx={{ width: 150 }}
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        {passengersCount === 1
          ? `${passengersCount} adult`
          : `${passengersCount} travelers`}
      </Button>
      <StyledCustomizedMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem disableRipple>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
            }}
          >
            {passengers.map((passenger) => (
              <Box
                key={passenger.category}
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 2,
                }}
              >
                <Typography variant="body2">{passenger.category}</Typography>
                <Typography variant="body2">{passenger.range}</Typography>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 2,
                  }}
                >
                  <Button
                    variant="outlined"
                    onClick={() => handleDecrease(passenger)}
                    disabled={passenger.value === 0}
                  >
                    -
                  </Button>
                  <Typography variant="body2">{passenger.value}</Typography>
                  <Button
                    variant="outlined"
                    onClick={() => handleIncrease(passenger)}
                  >
                    +
                  </Button>
                </Box>
              </Box>
            ))}
          </Box>
        </MenuItem>
      </StyledCustomizedMenu>
    </div>
  );
}
