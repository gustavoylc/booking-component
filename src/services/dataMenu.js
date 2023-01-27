const flightTypes = ['One-Way', 'Round-trip', 'Multi-city', 'Trip Builder'];
const travelClass = [
  'Economy',
  'Premium Economy',
  'Business',
  'First',
  'Multiple',
];
const passengersData = [
  { category: 'Adults', range: '16-64', value: 1 },
  { category: 'Students', range: 'over 18', value: 0 },
  { category: 'Seniors', range: 'over 65', value: 0 },
  { category: 'Youths', range: '12-17', value: 0 },
  { category: 'Children', range: '2-11', value: 0 },
  { category: 'Toddlers in own seat', range: 'under 2', value: 0 },
  { category: 'Infants on lap', range: 'under 2', value: 0 },
];

const countries = [
  { country: 'United States', city: 'New York', abbreviation: 'NY' },
  { country: 'United States', city: 'Miami', abbreviation: 'FL' },
  { country: 'Cuba', city: 'Havana', abbreviation: 'CU' },
];

export { flightTypes, travelClass, passengersData, countries };
