import PropTypes from 'prop-types';
import styled from '@emotion/styled';

function Box({ children }) {
  const StyledBox = styled.div`
    padding: 1rem;
    width: 300px;
    border: 1px solid ${({ theme }) => theme.colors.grayLighter};
    border-radius: 0.5rem;
    box-shadow: 5px 5px 5px 3px ${({ theme }) => theme.colors.grayLighter};
  `;

  return <StyledBox>{children}</StyledBox>;
}

Box.propTypes = {
  children: PropTypes.element,
};

export default Box;
