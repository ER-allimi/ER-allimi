import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import propTypes from 'prop-types';

function Skeleton({ isWithAvailableBed }) {
  return (
    <Wrapper>
      <Title></Title>
      <SubTitle></SubTitle>
      <Content></Content>
      {isWithAvailableBed && (
        <SubContentContainer>
          <Circle></Circle>
          <SubContent></SubContent>
        </SubContentContainer>
      )}
    </Wrapper>
  );
}

const loading = keyframes`
0% {
    transform: translateX(0);
    opacity: 0;
  }

  20% {
    opacity: 0.5;
  }

  50% {
    opacity: 1;
    transform: translateX(50%);
  }

  80% {
    opacity: 0.5;
  }

  100% {
    transform: translateX(100%);
    opacity: 0;
  }
`;

const beforeContent = css`
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, #f2f2f2, #ddd, #f2f2f2);
    animation: ${loading} 2.5s infinite linear;
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background-color: ${({ theme }) => theme.colors.grayLighter};
  margin-top: 0.6rem;
  padding: 0.5rem;
`;
const Title = styled.div`
  width: 80%;
  height: 19px;
  position: relative;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.grayLight};
  ${beforeContent}
`;
const SubTitle = styled.div`
  width: 40%;
  height: 14px;
  position: relative;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.grayLight};
  ${beforeContent}
`;
const Content = styled.div`
  width: 100%;
  height: 40px;
  position: relative;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.grayLight};
  ${beforeContent}
`;

const SubContentContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const SubContent = styled.div`
  width: 60%;

  @media (max-width: ${({ theme }) => theme.breakPoints.md}) {
    width: 30%;
  }
  height: 14px;
  position: relative;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.grayLight};
  ${beforeContent}
`;

const Circle = styled.div`
  position: relative;
  overflow: hidden;
  margin-right: 0.4rem;
  width: 1rem;
  height: 1rem;
  background-color: ${({ theme }) => theme.colors.grayLight};
  border-radius: 50%;
  ${beforeContent}
`;

Skeleton.propTypes = {
  isWithAvailableBed: propTypes.bool,
};
export default Skeleton;
