import { useRecoilValue } from 'recoil';
import styled from '@emotion/styled';
import {
  SortingButtons,
  ErsList,
  RadiusDropdown,
  ErsPagination,
  GuideBox,
} from '@components';
import { sortedErsWithRadiusState } from '@stores';

function ErsContent() {
  const data = useRecoilValue(sortedErsWithRadiusState);

  const StyledErsContent = styled.div`
    width: 100%;
    height: 100%;

    @media (max-width: ${({ theme }) => theme.breakPoints.md}) {
      height: calc(100% - 28px);
    }
  `;

  const HeadContainer = styled.div`
    display: flex;
    justify-content: space-between;
  `;

  const Title = styled.h2`
    margin-bottom: 0.5rem;
  `;

  const Utils = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
  `;

  const StyledRadiusDropdown = styled(RadiusDropdown)`
    @media (max-width: ${({ theme }) => theme.breakPoints.md}) {
      font-size: 12px;
    }

    @media (max-width: ${({ theme }) => theme.breakPoints.sm}) {
      font-size: 11px;
    }
  `;

  const StyledErsList = styled(ErsList)`
    height: calc(100% - 100px);
    overflow-y: scroll;

    @media (max-width: ${({ theme }) => theme.breakPoints.md}) {
      height: calc(100% - 100px + 5px);
    }

    @media (max-width: ${({ theme }) => theme.breakPoints.sm}) {
      height: calc(100% - 100px + 10px);
    }

    &::-webkit-scrollbar {
      width: 10px;
    }
    &::-webkit-scrollbar-thumb {
      height: 10%;
      background: ${({ theme }) => theme.colors.grayLight};
      border-radius: 10px;
    }

    &::-webkit-scrollbar-track {
      background: ${({ theme }) => theme.colors.grayLighter};
    }
  `;

  const MarginTopPagination = styled(ErsPagination)`
    margin-top: 0.5rem;

    @media (max-width: ${({ theme }) => theme.breakPoints.md}) {
      font-size: 12px;
    }

    @media (max-width: ${({ theme }) => theme.breakPoints.sm}) {
      font-size: 11px;
    }
  `;

  return (
    <StyledErsContent>
      <HeadContainer>
        <Title>내 위치 주변 응급실 ({data.length})</Title>
        <GuideBox />
      </HeadContainer>
      <Utils>
        <SortingButtons />
        <StyledRadiusDropdown />
      </Utils>
      <StyledErsList />
      <MarginTopPagination />
    </StyledErsContent>
  );
}

export default ErsContent;
