import styled, { css } from 'styled-components';
import H1 from '../styles/H1';
import P from '../styles/P';
import H3 from '../styles/H3';
import { usePurchase } from '../contexts/PurchaseContext';

import addon from '../data/addon.json';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const StyledAddon = styled.div`
  display: flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
  border: 0.1rem solid var(--light-gray);
  border-radius: 0.5rem;
  gap: 1.5rem;
  cursor: pointer;
  transition: border-color 0.3s, background-color 0.3s;

  ${props =>
    props.$isChecked &&
    css`
      border-color: var(--purplish-blue);
      background-color: var(--alabaster);
    `}

  &:hover, &:active {
    border-color: var(--purplish-blue);
  }
`;

const Description = styled.p`
  font-size: 1.3rem;
  color: var(--cool-gray);
`;

const Price = styled.div`
  margin-left: auto;
`;

const PriceText = styled.p`
  font-size: 1.3rem;
  color: var(--purplish-blue);
`;

const StyledCheckbox = styled.div`
  width: 1.8rem;
  height: 1.8rem;
  border: 1px solid var(--light-gray);
  border-radius: 0.25rem;
  transition: border-color 0.3s, background-color 0.3s;
  position: relative;

  &::after {
    content: '\\2713';
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--white);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  ${props =>
    props.$isChecked &&
    css`
      border-color: var(--purplish-blue);
      background-color: var(--purplish-blue);
    `}
`;

function ThirdPage() {
  return (
    <>
      <H1>Pick add-ons</H1>
      <P>Add-ons help enhance your gaming experience</P>
      <Container>
        {addon.map(el => (
          <Addon addon={el} key={el.name} />
        ))}
      </Container>
    </>
  );
}

function Addon({ addon: { name, desc, price } }) {
  const { setAddon, addon, billing } = usePurchase();
  const isChecked = addon.some(el => el.name === name);

  function handleClick() {
    if (!isChecked) return setAddon(arr => [...arr, { name, desc, price }]);
    setAddon(arr => arr.filter(el => el.name !== name));
  }

  return (
    <StyledAddon $isChecked={isChecked} onClick={handleClick}>
      <div>
        <Checkbox isChecked={isChecked} />
      </div>
      <div>
        <H3>{name}</H3>
        <Description>{desc}</Description>
      </div>
      <Price>
        <PriceText>
          +${price[billing.toLowerCase()]}/{billing === 'Monthly' ? 'mo' : 'yr'}
        </PriceText>
      </Price>
    </StyledAddon>
  );
}

function Checkbox({ isChecked }) {
  return <StyledCheckbox $isChecked={isChecked}></StyledCheckbox>;
}

export default ThirdPage;
