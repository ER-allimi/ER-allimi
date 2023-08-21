import styled from '@emotion/styled';
import { TbHomeOff } from '@components';

function EmptyBox() {
  return (
    <StyledEmptyBox>
      <TbHomeOff />이 위치 주변에는 응급실이 없습니다.
    </StyledEmptyBox>
  );
}

const StyledEmptyBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  color: ${({ theme }) => theme.colors.gray};
  font-size: 13px;

  svg {
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
  }
`;

export default EmptyBox;
