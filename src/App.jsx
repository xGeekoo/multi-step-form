import GlobalStyles from './styles/GlobalStyles';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import styled, { css } from 'styled-components';
import { mediaQueries } from './styles/mediaQueries';

const Container = styled.div`
  ${mediaQueries(
    css`
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100svh;
      padding: 0 2rem;
    `,
    'desktop'
  )}
`;

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  ${mediaQueries(
    css`
      display: grid;
      grid-template-columns: 3fr 7fr;
      grid-template-rows: 1fr auto;
      min-height: 0;
      height: 52.5rem;
      width: 100%;
      max-width: 95rem;
      padding: 1.5rem;
      border-radius: 1rem;
      background-color: var(--white);
      box-shadow: 0 15px 15px rgba(0, 0, 0, 0.05);
    `,
    'desktop'
  )}
`;

function App() {
  return (
    <Container>
      <StyledApp>
        <GlobalStyles />
        <Header />
        <Main />
        <Footer />
      </StyledApp>
    </Container>
  );
}

export default App;
