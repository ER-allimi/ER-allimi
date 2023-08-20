import PropTypes from 'prop-types';
import { useRecoilState, useSetRecoilState } from 'recoil';
import styled from '@emotion/styled';
import { Dropdown } from '@components';
import { radiusState, ersPaginationState } from '@stores';

function RadiusDropdown({ className }) {
  const [radius, setRadius] = useRecoilState(radiusState);
  const setErsPagination = useSetRecoilState(ersPaginationState);

  const data = [
    { label: '2km', value: 2 },
    { label: '5km', value: 5 },
    { label: '10km', value: 10 },
  ];

  const handleOptionClick = (idx) => {
    setRadius(data[idx].value);
    setErsPagination(1);
  };

  const StyledDropdown = styled(Dropdown)`
    width: 4rem;
  `;

  return (
    <StyledDropdown
      label="반경"
      data={data}
      select={data.findIndex((item) => item.value === radius)}
      handleOptionClick={handleOptionClick}
      className={className}
    />
  );
}

RadiusDropdown.propTypes = {
  className: PropTypes.string,
};

export default RadiusDropdown;
