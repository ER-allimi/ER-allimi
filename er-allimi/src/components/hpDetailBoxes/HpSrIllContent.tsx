import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import styled from '@emotion/styled';
import { EmptyBox, Spinner, BiError, HpSrIllData } from '@components';

function HpSriIllContent() {
  return (
    <StyledHpSriIllContent>
      <Title>중증응급질환 수술 여부</Title>
      <ErrorBoundary
        fallback={
          <EmptyBox height={200} icon={<BiError />}>
            <Text>데이터를 가져오는데 실패함</Text>
          </EmptyBox>
        }
      >
        <Suspense
          fallback={
            <EmptyBox height={200}>
              <Spinner />
            </EmptyBox>
          }
        >
          <HpSrIllData />
        </Suspense>
      </ErrorBoundary>
    </StyledHpSriIllContent>
  );
}

const StyledHpSriIllContent = styled.div`
  width: 100%;
`;

const Title = styled.h2`
  margin-bottom: 0.5rem;
`;

const Text = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.gray};
`;

export default HpSriIllContent;
