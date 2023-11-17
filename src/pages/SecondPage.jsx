import styled, { css } from 'styled-components';
import Switch from '../components/UI/Switch';
import P from '../styles/P';
import H1 from '../styles/H1';
import H3 from '../styles/H3';
import { usePurchase } from '../contexts/PurchaseContext';

import plan from '../data/plan.json';
import { mediaQueries } from '../styles/mediaQueries';

const StyledPlanOption = styled.div`
  display: flex;
  align-items: center;
  padding: 1.5rem;
  border: 0.1rem solid var(--light-gray);
  border-radius: 0.5rem;
  gap: 1.5rem;
  cursor: pointer;
  transition: border-color 0.3s, background-color 0.3s;

  ${props =>
    props.$isSelected &&
    css`
      border-color: var(--purplish-blue);
      background-color: var(--alabaster);
    `}

  &:hover, &:active {
    border-color: var(--purplish-blue);
  }

  ${mediaQueries(
    css`
      flex-direction: column;
      align-items: flex-start;
      gap: 3rem;
      flex: 1;
    `,
    'desktop'
  )}
`;

const StyledBillingOption = styled.div`
  background-color: var(--alabaster);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  gap: 2.5rem;
  border-radius: 1rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;

  ${mediaQueries(
    css`
      flex-direction: row;
      gap: 1.5rem;
    `,
    'desktop'
  )}
`;

const Price = styled.div`
  font-size: 1.4rem;
  color: var(--cool-gray);
`;

const Bonus = styled.p`
  font-size: 1.4rem;
  color: var(--marine-blue);
`;

const ImgContainer = styled.div`
  align-self: flex-start;
`;

function SecondPage() {
  return (
    <>
      <H1>Select your plan</H1>
      <P>You have the option of monthly or yearly billing.</P>
      <Container>
        {plan.map(el => (
          <PlanOption plan={el} key={el.name} />
        ))}
      </Container>
      <BillingOption />
    </>
  );
}

function PlanOption({ plan: { imgPath, imgDesc, name, price } }) {
  const { plan, setPlan, billing } = usePurchase();

  return (
    <StyledPlanOption $isSelected={name === plan} onClick={() => setPlan(name)}>
      <ImgContainer>
        <img src={imgPath} alt={imgDesc} />
      </ImgContainer>
      <div>
        <H3>{name}</H3>
        <Price>
          ${price[billing.toLowerCase()]}/{billing === 'Monthly' ? 'mo' : 'yr'}
        </Price>
        {billing === 'Yearly' && <Bonus>2 months free</Bonus>}
      </div>
    </StyledPlanOption>
  );
}

const BillingOptionText = styled.p`
  color: var(--cool-gray);
  font-weight: 500;
  transition: color 0.3s;

  ${props =>
    props.$billing === props.children &&
    css`
      color: var(--marine-blue);
    `};
`;

function BillingOption() {
  const { billing, setBilling } = usePurchase();

  return (
    <StyledBillingOption>
      <BillingOptionText $billing={billing}>Monthly</BillingOptionText>
      <Switch switchState={billing} setSwitchState={setBilling} />
      <BillingOptionText $billing={billing}>Yearly</BillingOptionText>
    </StyledBillingOption>
  );
}

export default SecondPage;
