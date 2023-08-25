import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import {
  CurrentLocationBox,
  CurrentLocationInput,
  HpMovingBox,
  HpInfoBox,
  HpMessageBox,
  HpRtErAvailableBedBox,
  HpRtHrAvailableBedBox,
  HpSrIIIBox,
} from '@components';
import { useRecoilValue } from 'recoil';
import { hpDetailState } from '@stores';

HpDetailBoxes.propTypes = {
  className: PropTypes.string,
};
function HpDetailBoxes({ className }) {
  const HpRTavailableBedData = useRecoilValue(hpDetailState).HpRTavailableBed;
  return (
    <Container className={className}>
      <LayoutTop>
        <StyledCurrentLocationInput />
      </LayoutTop>
      <LayoutLeft>
        <StyledCurrentLocationBox />
        <StyledHpInfoBox />
        {HpRTavailableBedData && (
          <>
            <StyledHpRtErAvailableBedBox />
            <StyledHpRtHrAvailableBedBox />
          </>
        )}
      </LayoutLeft>
      <LayoutRight>
        {HpRTavailableBedData ? <StyledHpMessageBox /> : <EmptyBox></EmptyBox>}
        <StyledHpSrIIIBox />
      </LayoutRight>
      <LayoutBottom>
        {HpRTavailableBedData && <StyledHpMessageBox />}
        <StyledErsMovingBox />
      </LayoutBottom>
    </Container>
  );
}

const EmptyBox = styled.div`
  height: 100px;
`
const Container = styled.div`
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
      align-items: start;
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
      grid-row: 1/3;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: end;
    }
  `}
  ${({ theme }) => css`
    @media (max-width: ${theme.breakPoints.sm}) {
      grid-row: 2/3;
      grid-column: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  `}
`;

const zIndexBox = css`
  z-index: 1;
`;

const StyledCurrentLocationInput = styled(CurrentLocationInput)`
  ${zIndexBox}
`;

const StyledCurrentLocationBox = styled(CurrentLocationBox)`
  margin-bottom: .5rem;
  ${zIndexBox}
`;

const StyledHpInfoBox = styled(HpInfoBox)`
  margin-bottom: .5rem;
  ${zIndexBox}
`;
const StyledHpRtErAvailableBedBox = styled(HpRtErAvailableBedBox)`
  margin-bottom: .5rem;
  ${zIndexBox}
`;
const StyledHpRtHrAvailableBedBox = styled(HpRtHrAvailableBedBox)`
  ${zIndexBox}
`;
const StyledHpSrIIIBox = styled(HpSrIIIBox)`
  ${zIndexBox}
`;
const StyledHpMessageBox = styled(HpMessageBox)`
  ${zIndexBox}
  ${({ theme }) => css`
    @media (max-width: ${theme.breakPoints.md}) {
      margin: 1rem;
      margin-top: 3.5rem;
    }
  `}
  ${({ theme }) => css`
    @media (max-width: ${theme.breakPoints.sm}) {
      display: none;
    }
  `}
`;

const StyledErsMovingBox = styled(HpMovingBox)`
  ${zIndexBox}
`;
export default HpDetailBoxes;
