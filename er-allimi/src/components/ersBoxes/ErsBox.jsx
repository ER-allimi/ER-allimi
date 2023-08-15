import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import {
  Box,
  Button,
  ErsList,
  RadiusDropdown,
  ErsPagination,
} from '@components';

function ErsBox({ className }) {
  const StyledErsBox = styled(Box)`
    height: calc(100vh - 200px);
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

  const SortingButtons = styled.div`
    display: flex;
    align-items: center;

    button {
      margin-right: 0.5rem;
    }
  `;

  const MarginTopPagination = styled(ErsPagination)`
    margin-top: 0.5rem;
  `;

  return (
    <StyledErsBox className={className}>
      <Title>내 위치 주변 응급실 (15)</Title>
      <Utils>
        <SortingButtons>
          <Button color="gray" round="lg">
            거리순
          </Button>
          <Button color="gray" round="lg" outline>
            가용 병상 개수 순
          </Button>
        </SortingButtons>
        <RadiusDropdown />
      </Utils>
      <ErsList />
      <MarginTopPagination />
    </StyledErsBox>
  );
}

ErsBox.propTypes = {
  className: PropTypes.string,
};

export default ErsBox;
