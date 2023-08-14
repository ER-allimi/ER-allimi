import PropTypes from 'prop-types';
import styled from '@emotion/styled';

function Box({ className, children }) {
  return <StyledBox className={className}>{children}</StyledBox>;
}

const StyledBox = styled.div`
  padding: 1rem;
  min-width: 300px;
  border: 1px solid ${({ theme }) => theme.colors.grayLighter};
  border-radius: 0.5rem;
  box-shadow: 3px 3px 5px 3px ${({ theme }) => theme.colors.grayLight};
  background-color: white;
`;

Box.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Box;
