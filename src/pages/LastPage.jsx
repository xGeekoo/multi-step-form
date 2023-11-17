import styled from 'styled-components';
import H1 from '../styles/H1';
import P from '../styles/P';
import H3 from '../styles/H3';
import { usePage } from '../contexts/PageContext';
import { usePurchase } from '../contexts/PurchaseContext';

import planData from '../data/plan.json';

const Container = styled.div`
  background-color: var(--alabaster);
  padding: 1.5rem;
  border-radius: 0.5rem;
  margin-bottom: 2rem;
`;

const Summary = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  border-bottom: 0.1rem solid var(--light-gray);
`;

const Change = styled.button`
  color: var(--cool-gray);
  text-decoration: underline;
  display: block;
  border: none;
  background-color: transparent;
  transition: color 0.3s;

  &:hover,
  &:active {
    color: var(--purplish-blue);
  }
`;

const PlanPriceText = styled.p`
  color: var(--marine-blue);
  font-weight: 700;
`;

const StyledAddon = styled.div`
  display: flex;
  justify-content: space-between;

  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

const AddonPrice = styled.p`
  color: var(--marine-blue);
`;

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 1.5rem;
`;

const TotalPrice = styled.p`
  color: var(--purplish-blue);
  font-weight: 700;
`;

function LastPage() {
  const { setPage } = usePage();
  const { billing, plan, addon } = usePurchase();

  const planPrice = planData.find(el => el.name === plan).price[
    billing.toLowerCase()
  ];

  const addonsPrice = addon.reduce((curr, val) => {
    return curr + val.price[billing.toLowerCase()];
  }, 0);

  const totalPrice = planPrice + addonsPrice;

  return (
    <>
      <H1>Finishing up</H1>
      <P>Double-check everything looks OK before confirming</P>
      <Container>
        <Summary>
          <div>
            <H3>
              {plan} ({billing})
            </H3>
            <Change onClick={() => setPage(2)}>Change</Change>
          </div>
          <div>
            <PlanPriceText>
              ${planPrice}/{billing === 'Monthly' ? 'mo' : 'yr'}
            </PlanPriceText>
          </div>
        </Summary>
        {addon.map(el => (
          <Addon addon={el} key={el.name} />
        ))}
      </Container>
      <Total>
        <p>Total (per {billing === 'Monthly' ? 'month' : 'year'})</p>
        <TotalPrice>
          ${totalPrice}/{billing === 'Monthly' ? 'mo' : 'yr'}
        </TotalPrice>
      </Total>
    </>
  );
}

function Addon({ addon: { name, price } }) {
  const { billing } = usePurchase();

  return (
    <StyledAddon>
      <p>{name}</p>
      <AddonPrice>
        +${price[billing.toLowerCase()]}/{billing === 'Monthly' ? 'mo' : 'yr'}
      </AddonPrice>
    </StyledAddon>
  );
}

export default LastPage;
