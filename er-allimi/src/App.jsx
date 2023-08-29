import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import styled from '@emotion/styled';
import { ThemeProvider, Global, css } from '@emotion/react';
import { theme, globalStyles } from '@styles';
import { Navbar } from '@components';
import {
  useGetUserLocation,
  useFetchErList,
  useFetchErsRTavailableBed,
} from '@hooks';

function App() {
  const { handleGetCurPosSuccess, handleGetCurPosFail } = useGetUserLocation(); // 사용자 위치 정보 가져오기
  useFetchErList(); // 응급실 전체 목록 정보 가져오기
  useFetchErsRTavailableBed(); // 응급실 전체 목록 정보 가져오기

  useEffect(() => {
    // 사용자 위치 정보 가져오기
    navigator.geolocation.getCurrentPosition(
      handleGetCurPosSuccess,
      handleGetCurPosFail,
    );
  }, []);

  const StyledApp = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100vw;
    height: 100vh;
    overflow: hidden;

    ${({ theme }) => css`
      @media (max-width: ${theme.breakPoints.md}) {
        display: block;
      }
    `}
  `;

  const StyledOutlet = styled.div`
    width: calc(100vw - (40px + 2rem));

    ${({ theme }) => css`
      @media (max-width: ${theme.breakPoints.md}) {
        width: 100%;
        height: calc(100vh - (30px + 1rem));
      }
    `}
  `;

  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <StyledApp>
        <Navbar />
        <StyledOutlet>
          <Outlet />
        </StyledOutlet>
      </StyledApp>
      <Toaster position="top-center" reverseOrder={false} />
    </ThemeProvider>
  );
}

export default App;
