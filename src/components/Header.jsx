import styled, { css } from 'styled-components';
import Circle from './UI/Circle';
import { usePage } from '../contexts/PageContext';
import { mediaQueries } from '../styles/mediaQueries';

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  margin: 3rem 0;

  ${mediaQueries(
    css`
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      background-color: var(--purplish-blue);
      background-image: url('/images/bg-sidebar-desktop.svg');
      background-position: bottom center;
      background-size: 100%;
      background-repeat: no-repeat;
      grid-row: 1 / -1;
      margin: 0;
      border-radius: 1rem;
      padding: 2rem;
    `,
    'desktop'
  )}
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const StyledStep = styled.div`
  display: none;

  ${mediaQueries(
    css`
      display: block;
    `,
    'desktop'
  )}
`;

const StepNum = styled.p`
  font-size: 1.4rem;
`;

const StepTitle = styled.p`
  font-size: 1.4rem;
  color: var(--white);
  font-weight: 500;
`;

const STEPS = ['YOUR INFO', 'SELECT PLAN', 'ADD-ONS', 'SUMMARY'];

function Header() {
  const { page } = usePage();

  return (
    <StyledHeader>
      {Array.from({ length: 4 }, (_, i) => (
        <Container key={i + 1}>
          <Circle isActive={page === i + 1 || (i === 3 && page === 5)}>
            {i + 1}
          </Circle>
          <Step number={i + 1} title={STEPS.at(i)} />
        </Container>
      ))}
    </StyledHeader>
  );
}

function Step({ number, title }) {
  return (
    <StyledStep>
      <StepNum>STEP {number}</StepNum>
      <StepTitle>{title}</StepTitle>
    </StyledStep>
  );
}

export default Header;
