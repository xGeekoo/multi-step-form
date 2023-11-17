import styled, { css } from 'styled-components';

const StyledCircle = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  border: 0.1rem solid;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--white);
  font-weight: 700;
  user-select: none;

  ${props =>
    props.$isActive &&
    css`
      color: var(--marine-blue);
      border-color: var(--light-blue);
      background-color: var(--light-blue);
    `}
`;

function Circle({ children, isActive = false }) {
  return <StyledCircle $isActive={isActive}>{children}</StyledCircle>;
}

export default Circle;
