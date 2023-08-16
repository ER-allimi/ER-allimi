import PropTypes from 'prop-types';
import { useState } from 'react';
import styled from '@emotion/styled';
import { Input, IoLocationSharp, Button } from '@components';

function CurrentLocationInput({ className }) {
  const [value, setValue] = useState(
    '서울특별시 강남구 가로수길 69 (신사동, 엘큐브/elcube)',
  );

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const InputAtLgVp = styled(Input)`
    display: flex;

    @media (max-width: ${({ theme }) => theme.breakPoints.md}) {
      display: none;
    }
  `;

  const InputAtMdVp = styled(Input)`
    display: none;

    @media (max-width: ${({ theme }) => theme.breakPoints.md}) {
      display: flex;
      padding-right: 0.3rem;
      width: calc(250px + 10vw);
      box-shadow: 3px 3px 5px 3px ${({ theme }) => theme.colors.grayLight};
    }

    @media (max-width: ${({ theme }) => theme.breakPoints.sm}) {
      max-width: 250px;
    }
  `;

  const StyledButton = styled(Button)`
    padding: 0.1rem 0;
    width: 5rem;
  `;

  return (
    <>
      <InputAtLgVp
        value={value}
        handleInputChange={handleInputChange}
        name="currentLocation"
        placeholder="현재 위치"
        leftIcon={<IoLocationSharp />}
        color="redLighter"
        fullWidth
        disabled
        className={className}
      />
      <InputAtMdVp
        value={value}
        handleInputChange={handleInputChange}
        name="currentLocation"
        placeholder="현재 위치"
        leftIcon={<IoLocationSharp />}
        rightIcon={
          <StyledButton color="gray" round="lg">
            위치 찾기
          </StyledButton>
        }
        color="redLighter"
        round="lg"
        disabled
        className={className}
      />
    </>
  );
}

CurrentLocationInput.propTypes = {
  className: PropTypes.string,
};

export default CurrentLocationInput;
