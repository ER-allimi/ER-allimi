import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Children } from 'react';


interface BoxProps {
  className?: string,
  children: React.ReactNode
}

function Box({ className, children } : BoxProps) {
  return <StyledBox className={className}>{children}</StyledBox>;
}

const StyledBox = styled.div`
  padding: 0.7rem 1rem;
  min-width: 300px;
  border: 1px solid ${({ theme }) => theme.colors.grayLighter};
  border-radius: 0.5rem;
  box-shadow: 3px 3px 5px 3px ${({ theme }) => theme.colors.grayLight};
  background-color: white;
`;

export default Box;
