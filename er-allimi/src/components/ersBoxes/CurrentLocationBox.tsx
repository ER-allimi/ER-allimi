import { useMatch } from 'react-router-dom';
import styled from '@emotion/styled';
import { Box, CurrentLocationInput, PostCodeButton } from '@components';
import { PATH_HOSPITALDETAIL } from '@constants';

interface CurrentLocationBoxProps {
  className?: string;
}

function CurrentLocationBox({ className }: CurrentLocationBoxProps) {
  const match = useMatch(PATH_HOSPITALDETAIL);
  const showBody = !match;

  return (
    <Box className={className}>
      <Title>현 위치</Title>
      <CurrentLocationInput />
      {showBody && (
        <Body>
          <Text>
            현재 자신의 위치 정보가 일치하지 않을경우 <br />
            위치 찾기에서 주소를 검색하시면 재설정합니다.
          </Text>
          <PostCodeButton />
        </Body>
      )}
    </Box>
  );
}

const Title = styled.h2`
  margin-bottom: 0.5rem;
`;

const Body = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.3rem;
`;

const Text = styled.p`
  font-size: 10px;
  font-weight: lighter;
  word-spacing: -1px;
  color: ${({ theme }) => theme.colors.gray};
`;

export default CurrentLocationBox;
