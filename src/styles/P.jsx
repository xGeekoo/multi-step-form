import styled, { css } from 'styled-components';
import { mediaQueries } from './mediaQueries';

const P = styled.p`
  margin-bottom: 1.5rem;
  color: var(--cool-gray);

  ${mediaQueries(
    css`
      margin-bottom: 3rem;
    `,
    'desktop'
  )}
`;

export default P;
