import styled, { css } from 'styled-components';

const StyledSwitch = styled.div`
  background-color: var(--marine-blue);
  width: 4rem;
  border-radius: 9999px;
  padding: 0.5rem;
  box-sizing: content-box;
`;

const Circle = styled.button`
  background-color: var(--white);
  height: 1.25rem;
  width: 1.25rem;
  border: none;
  border-radius: 50%;
  display: block;
  transition: transform 0.3s;

  ${props =>
    props.$switchState === 'Yearly' &&
    css`
      transform: translateX(calc(4rem - 100%));
    `}
`;

function Switch({ switchState, setSwitchState }) {
  return (
    <StyledSwitch>
      <Circle
        $switchState={switchState}
        onClick={() =>
          setSwitchState(state => (state === 'Monthly' ? 'Yearly' : 'Monthly'))
        }
      />
    </StyledSwitch>
  );
}

export default Switch;
