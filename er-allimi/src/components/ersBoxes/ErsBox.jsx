import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Box, Button, ErsList } from '@components';

function ErsBox({ className }) {
  return (
    <StyledErsBox className={className}>
      <Title>내 위치 주변 응급실</Title>
      <SortingButtons>
        <Button color="gray" round="lg">
          거리순
        </Button>
        <Button color="gray" round="lg" outline>
          가용 병상 개수 순
        </Button>
      </SortingButtons>
      <ErsList />
    </StyledErsBox>
  );
}

const StyledErsBox = styled(Box)`
  max-height: calc(100vh - 200px);
`;

const Title = styled.h2`
  margin-bottom: 0.5rem;
`;

const SortingButtons = styled.div`
  margin-bottom: 0.5rem;

  button {
    margin-right: 0.5rem;
  }
`;

ErsBox.propTypes = {
  className: PropTypes.string,
};

export default ErsBox;
