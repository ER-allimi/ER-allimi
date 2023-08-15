import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { CurrentLocationBox, ErsBox, ViewToggle } from '@components';

function ErsBoxes({ className }) {
  return (
    <StyledErsBoxes className={className}>
      <LayoutLeft>
        <LayoutCurrentLocationBox />
        <LayoutErsBox />
      </LayoutLeft>
      <LayoutRight>
        <LayoutToggle />
      </LayoutRight>
      <LayoutTop></LayoutTop>
      <LayoutBottom></LayoutBottom>
      <Outlet />
    </StyledErsBoxes>
  );
}

const StyledErsBoxes = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 300px 1fr 300px;
  padding: 1rem;
  width: 100%;
  height: 100%;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakPoints.md}) {
      grid-template-rows: 1fr 1fr;
      grid-template-columns: 1fr;
      padding: 0;
    }
  `}
`;

const LayoutLeft = styled.div`
  grid-row: 1/2;
  grid-column: 1/2;
  display: flex;
  flex-direction: column;
  justify-content: start;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakPoints.md}) {
      display: none;
    }
  `}
`;

const LayoutRight = styled.div`
  grid-row: 1/2;
  grid-column: 3/4;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: end;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakPoints.md}) {
      display: none;
    }
  `}
`;

const LayoutTop = styled.div`
  grid-row: 1/2;
  grid-column: 1/2;
  display: none;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakPoints.md}) {
      display: flex;
      justify-content: space-between;
      padding: 1rem;
    }
  `}
`;

const LayoutBottom = styled.div`
  grid-row: 2/3;
  grid-column: 1/2;
  display: none;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakPoints.md}) {
      display: flex;
    }
  `}
`;

const zIndexBox = css`
  z-index: 1;
`;

const LayoutCurrentLocationBox = styled(CurrentLocationBox)`
  margin-bottom: 1rem;
  ${zIndexBox}
`;

const LayoutErsBox = styled(ErsBox)`
  ${zIndexBox}
`;

const LayoutToggle = styled(ViewToggle)`
  ${zIndexBox}
`;

ErsBoxes.propTypes = {
  className: PropTypes.string,
};

export default ErsBoxes;
