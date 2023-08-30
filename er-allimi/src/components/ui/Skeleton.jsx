import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

function Skeleton() {
  return (
    <Wrapper>
      <Title></Title>
      <SubTitle></SubTitle>
      <Content></Content>
    </Wrapper>
  );
}

const loading = keyframes`
  0% {
    transform: translateX(0);
  }
  50%,
  100% {
    transform: translateX(300px);
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background-color: white;
  margin-top: 0.6rem;
`;
const Title = styled.div`
  width: 80%;
  height: 19px;
  position: relative;
  overflow: hidden;
  background-color: #f2f2f2;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 80px;
    height: 100%;
    background: linear-gradient(to right, #f2f2f2, #ddd, #f2f2f2);
    animation: ${loading} 2.5s infinite linear;
  }
`;
const SubTitle = styled.div`
  width: 40%;
  height: 14px;
  position: relative;
  overflow: hidden;
  background-color: #f2f2f2;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 80px;
    height: 100%;
    background: linear-gradient(to right, #f2f2f2, #ddd, #f2f2f2);
    animation: ${loading} 2.5s infinite linear;
  }
`;
const Content = styled.div`
  width: 100%;
  height: 40px;
  position: relative;
  overflow: hidden;
  background-color: #f2f2f2;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 80px;
    height: 100%;
    background: linear-gradient(to right, #f2f2f2, #ddd, #f2f2f2);
    animation: ${loading} 2.5s infinite linear;
  }
`;

export default Skeleton;
