import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import {
  CurrentLocationBox,
  ErsBox,
  ViewToggle,
  CurrentLocationInput,
  ViewButton,
  ErsMovingBox,
  HpSearchInput,
} from '@components';

function ErsBoxes({ className }) {
  return (
    <StyledErsBoxes className={className}>
      <LayoutLeft>
        <StyledCurrentLocationBox />
        <StyledErsBox />
      </LayoutLeft>
      <LayoutCenter>
        <StyledHpSearchInput />
      </LayoutCenter>
      <LayoutRight></LayoutRight>
      <LayoutTop>
        <StyledCurrentLocationInput />
      </LayoutTop>
      <LayoutBottom>
        <StyledErsMovingBox />
      </LayoutBottom>
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

const LayoutCenter = styled.div`
  grid-row: 1/2;
  grid-column: 2/3;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

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
      align-items: start;
      padding: 1rem;
    }
  `}
`;

const LayoutBottom = styled.div`
  grid-row: 2/3;
  grid-column: 1/2;
  overflow: hidden;
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

const StyledCurrentLocationBox = styled(CurrentLocationBox)`
  margin-bottom: 1rem;
  ${zIndexBox}
`;

const StyledErsBox = styled(ErsBox)`
  ${zIndexBox}
`;

const StyledHpSearchInput = styled(HpSearchInput)`
  ${zIndexBox}
`;

const StyledToggle = styled(ViewToggle)`
  ${zIndexBox}
`;

const StyledCurrentLocationInput = styled(CurrentLocationInput)`
  ${zIndexBox}
`;

const StyledViewButton = styled(ViewButton)`
  ${zIndexBox}
`;

const StyledErsMovingBox = styled(ErsMovingBox)`
  ${zIndexBox}
`;

ErsBoxes.propTypes = {
  className: PropTypes.string,
};

export default ErsBoxes;
