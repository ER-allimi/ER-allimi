import { Outlet } from 'react-router-dom';
import styled from '@emotion/styled';
import { ThemeProvider, Global, css } from '@emotion/react';
import { theme, globalStyles } from '@styles';
import { Navbar } from '@components';

function App() {
  const StyledApp = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100vw;
    height: 100vh;

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
        width: calc(100vw - (40px + 2rem));
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
