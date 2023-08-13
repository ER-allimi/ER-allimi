import { Outlet } from 'react-router-dom';
import styled from '@emotion/styled';
import { ThemeProvider, Global } from '@emotion/react';
import { theme, globalStyles } from '@styles';

function App() {
  const StyledApp = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100vw;
    height: 100vh;
  `;

  const StyledOutlet = styled.div`
    width: calc(100vw - 100px);
  `;

  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <StyledApp>
        <StyledOutlet>
          <Outlet />
        </StyledOutlet>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
