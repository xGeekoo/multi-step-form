import styled, { css } from 'styled-components';
import H1 from '../styles/H1';
import { mediaQueries } from '../styles/mediaQueries';

const Img = styled.img`
  margin: 0 auto;
  margin-bottom: 2rem;
  width: 6rem;
  height: 6rem;
`;

const StyledCompletedPage = styled.div`
  text-align: center;
  margin: 5rem 0;

  ${mediaQueries(
    css`
      margin: 0;
    `,
    'desktop'
  )}
`;

function CompletedPage() {
  return (
    <StyledCompletedPage>
      <div>
        <Img src="/images/icon-thank-you.svg" alt="Thank you" />
      </div>
      <H1>Thank you!</H1>
      <p>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need suport, please feel free to email us at
        support@loremgaming.com.
      </p>
    </StyledCompletedPage>
  );
}

export default CompletedPage;
