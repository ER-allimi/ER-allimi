import { Outlet } from 'react-router-dom';
import styled from '@emotion/styled';
import { ThemeProvider, Global, css } from '@emotion/react';
import { theme, globalStyles } from '@styles';
import { Navbar } from '@components';
import { useGetUserLocation } from '@hooks';

function App() {
  useGetUserLocation(); // 사용자 위치 정보 가져오기

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
        height: calc(100vh - (40px + 2rem));
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
    </ThemeProvider>
  );
}

export default App;
