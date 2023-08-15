import PropTypes from 'prop-types';
import { useState } from 'react';
import { Toggle } from '@components';

function ViewToggle({ className }) {
  const [select, setSelect] = useState(0);

  const handleToggleClick = () => {
    setSelect(1 - select);
  };

  const data = [
    { label: 'Map View', value: 'mapView' },
    { label: 'Chart View', value: 'chartView' },
  ];

  return (
    <Toggle
      className={className}
      data={data}
      select={select}
      handleToggleClick={handleToggleClick}
      color="redLight"
    />
  );
}

ViewToggle.propTypes = {
  className: PropTypes.string,
};

export default ViewToggle;
