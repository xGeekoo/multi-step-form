import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  border: none;

  ${props =>
    props.$direction === 'next' &&
    css`
      padding: 0.75rem 1.5rem;
      background-color: var(--marine-blue);
      color: var(--white);
      border-radius: 0.5rem;
      margin-left: auto;

      &:hover,
      &:active {
        --marine-blue: rgba(2, 41, 90, 0.8);
        background-color: var(--marine-blue);
      }
    `}

  ${props =>
    props.$direction === 'back' &&
    css`
      background-color: transparent;
      color: var(--cool-gray);
      font-weight: 500;

      &:hover,
      &:active {
        color: var(--marine-blue);
      }
    `}

  ${props =>
    props.children === 'Confirm' &&
    css`
      background-color: var(--purplish-blue);

      &:hover,
      &:active {
        --purplish-blue: rgba(71, 61, 255, 0.8);
        background-color: var(--purplish-blue);
      }
    `}
`;

function Button({ children, direction, onClick }) {
  return (
    <StyledButton onClick={onClick} $direction={direction}>
      {children}
    </StyledButton>
  );
}

export default Button;
