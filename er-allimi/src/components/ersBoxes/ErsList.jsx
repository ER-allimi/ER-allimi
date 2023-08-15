import styled from '@emotion/styled';
import { ErItem } from '@components';

function ErsList() {
  const renderErItems = Array(15)
    .fill(0)
    .map((item, i) => {
      return <ErItem key={i} />;
    });

  return <StyledErsList>{renderErItems}</StyledErsList>;
}

const StyledErsList = styled.div`
  height: calc(100% - 100px);
  overflow-y: scroll;
`;

export default ErsList;
