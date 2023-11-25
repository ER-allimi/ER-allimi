import { useRecoilState } from 'recoil';
import styled from '@emotion/styled';
import { Button } from '@components';
import { sortingState } from '@stores';
import { SORTING_DISTANCE, SORTING_AVAILABLE_BED } from '@constants';

type sortByType = typeof SORTING_DISTANCE | typeof SORTING_AVAILABLE_BED;

function SortingButtons() {
  const [sorting, setSorting] = useRecoilState(sortingState);

  const handleButtonClick = (sortBy: sortByType) => {
    setSorting(sortBy);
  };

  const StyledSortingButtons = styled.div`
    display: flex;
    align-items: center;

    button {
      margin-right: 0.5rem;
      padding: 0.2rem 0.6rem;

      @media (max-width: ${({ theme }) => theme.breakPoints.md}) {
        font-size: 12px;
      }

      @media (max-width: ${({ theme }) => theme.breakPoints.sm}) {
        font-size: 11px;
      }
    }
  `;

  return (
    <StyledSortingButtons>
      <Button
        color="gray"
        round="lg"
        outline={sorting !== SORTING_DISTANCE}
        onClick={() => handleButtonClick(SORTING_DISTANCE)}
      >
        거리순
      </Button>
      <Button
        color="gray"
        round="lg"
        outline={sorting !== SORTING_AVAILABLE_BED}
        onClick={() => handleButtonClick(SORTING_AVAILABLE_BED)}
      >
        가용 병상 개수 순
      </Button>
    </StyledSortingButtons>
  );
}

export default SortingButtons;
