import { css } from 'styled-components';

const breakpoints = {
  desktop: '48em',
  lgDesktop: '64em'
};

export function mediaQueries(content, breakpoint) {
  return css`
    @media screen and (min-width: ${breakpoints[breakpoint]}) {
      ${content}
    }
  `;
}
