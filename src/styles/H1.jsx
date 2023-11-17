import styled, { css } from 'styled-components';
import { mediaQueries } from './mediaQueries';

const H1 = styled.h1`
  color: var(--marine-blue);
  font-size: 2.6rem;
  font-weight: 700;
  margin-bottom: 1rem;

  ${mediaQueries(
    css`
      margin-bottom: 0;
    `,
    'desktop'
  )}
`;

export default H1;
