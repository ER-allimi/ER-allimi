import { useState } from 'react';
import { Input, IoLocationSharp } from '@components';

function CurrentLocationInput() {
  const [value, setValue] = useState('');

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <Input
      value={value}
      handleInputChange={handleInputChange}
      name="currentLocation"
      placeholder="현재 위치"
      leftIcon={<IoLocationSharp />}
      color="redLighter"
      fullWidth
      disabled
    />
  );
}

export default CurrentLocationInput;
