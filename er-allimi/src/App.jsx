import { Outlet } from 'react-router-dom';
import styled from '@emotion/styled';

function App() {
  const StyledApp = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100vw;
    height: 100vh;
  `

  const StyledOutlet = styled.div`
    width: calc(100vw - 100px)
  `

  return (
    <StyledApp>
      <StyledOutlet>
        <Outlet />
      </StyledOutlet>
    </StyledApp>
  )
}

export default App
