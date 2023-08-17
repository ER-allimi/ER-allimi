import PropTypes from 'prop-types';
import { useState } from 'react';
import styled from '@emotion/styled';
import {
  Button,
  MdOutlineInsertChartOutlined,
  FaMapMarkedAlt,
} from '@components';

function ViewButton({ className }) {
  const [isOutlined, setIsOutlined] = useState(true);

  const StyledButton = styled(Button)`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    border-radius: 50%;
    box-shadow: 3px 3px 5px 3px ${({ theme }) => theme.colors.grayLight};

    svg {
      font-size: 1.2rem;
    }
  `;

  return (
    <StyledButton
      color="redLight"
      round="lg"
      outline={isOutlined}
      onMouseOver={() => setIsOutlined(false)}
      onMouseOut={() => setIsOutlined(true)}
      className={className}
    >
      <MdOutlineInsertChartOutlined />
    </StyledButton>
  );
}

ViewButton.propTypes = {
  className: PropTypes.string,
};

export default ViewButton;
