import styled, { css } from 'styled-components';
import FirstPage from '../pages/FirstPage';
import { usePage } from '../contexts/PageContext';
import CompletedPage from '../pages/CompletedPage';
import SecondPage from '../pages/SecondPage';
import ThirdPage from '../pages/ThirdPage';
import LastPage from '../pages/LastPage';
import { mediaQueries } from '../styles/mediaQueries';

const StyledMain = styled.main`
  padding: 0 2rem;
  margin-bottom: 3rem;

  ${mediaQueries(
    css`
      padding-top: 3rem;
      padding-bottom: 0;
      padding-left: 5rem;
      padding-right: 5rem;
      margin-bottom: 0;

      ${props =>
        props.$lastPage &&
        css`
          padding-top: 0;
          align-self: center;
        `}
    `,
    'desktop'
  )}

  ${mediaQueries(
    css`
      padding-left: 10rem;
      padding-right: 10rem;
    `,
    'lgDesktop'
  )}
`;

const Container = styled.div`
  background-color: var(--white);
  padding: 2.8rem 2.12rem;
  border-radius: 1rem;
  box-shadow: 0 15px 15px rgba(0, 0, 0, 0.05);

  ${mediaQueries(
    css`
      padding: 0;
      border-radius: 0;
      box-shadow: none;
    `,
    'desktop'
  )}
`;

function Main() {
  const { page } = usePage();

  return (
    <StyledMain $lastPage={page === 5}>
      <Container>
        {page === 1 && <FirstPage />}
        {page === 2 && <SecondPage />}
        {page === 3 && <ThirdPage />}
        {page === 4 && <LastPage />}
        {page === 5 && <CompletedPage />}
      </Container>
    </StyledMain>
  );
}

export default Main;
