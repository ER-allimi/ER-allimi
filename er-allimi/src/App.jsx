import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import styled from '@emotion/styled';
import { ThemeProvider, Global, css } from '@emotion/react';
import { theme, globalStyles } from '@styles';
import { Navbar, NoticeModal } from '@components';
import {
  useGetUserLocation,
  useFetchErList,
  useFetchErsRTavailableBed,
} from '@hooks';

function App() {
  // 사용자 위치 정보 가져오기
  const { handleGetCurPosSuccess, handleGetCurPosFail } = useGetUserLocation();
  // 응급실 전체 목록 정보 가져오기
  const { isFetching: isErListFetching } = useFetchErList();
  // 응급실 전체 목록 정보 가져오기
  const { isFetching: isAvailableBedFetching } = useFetchErsRTavailableBed();

  useEffect(() => {
    // 사용자 위치 정보 가져오기
    navigator.geolocation.getCurrentPosition(
      handleGetCurPosSuccess,
      handleGetCurPosFail,
    );
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const StyledApp = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100vw;
    /* min-height: 100vh;
    height: -webkit-fill-available;
    height: fill-available; */
    height: 100vh;
    height: calc(var(--vh, 1vh) * 100);
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
        height: calc(var(--vh, 1vh) * 100 - (30px + 1rem));
      }
    `}
  `;

  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <StyledApp>
        <Navbar />
        <StyledOutlet>
          <Outlet context={isErListFetching || isAvailableBedFetching} />
        </StyledOutlet>
      </StyledApp>
      <Toaster position="top-center" reverseOrder={false} />
      <NoticeModal />
    </ThemeProvider>
  );
}

export default App;
