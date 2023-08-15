import { useState } from 'react';
import { Dropdown } from '@components';

function RadiusDropdown() {
  const [select, setSelect] = useState(-1);

  const data = [
    { label: '2km', value: 2 },
    { label: '5km', value: 5 },
    { label: '10km', value: 10 },
  ];

  const handleOptionClick = (idx) => {
    setSelect(idx);
  };

  return (
    <Dropdown
      label="반경"
      data={data}
      select={select}
      handleOptionClick={handleOptionClick}
    />
  );
}

export default RadiusDropdown;
