import { createGlobalStyle, css } from 'styled-components';
import { mediaQueries } from './mediaQueries';

const GlobalStyles = createGlobalStyle`
  *,
  ::before,
  ::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font: inherit;
  }

  :root {
    /* Primary */
    --marine-blue: hsl(213, 96%, 18%);
    --purplish-blue: hsl(243, 100%, 62%);
    --pastel-blue: hsl(228, 100%, 84%);
    --light-blue: hsl(206, 94%, 87%);
    --strawberry-red: hsl(354, 84%, 57%);
    
    /* Neutral */
    --cool-gray: hsl(231, 11%, 63%);
    --light-gray: hsl(229, 24%, 87%);
    --magnolia: hsl(217, 100%, 97%);
    --alabaster: hsl(231, 100%, 99%);
    --white: hsl(0, 0%, 100%);
  }

  html {
    font-size: 62.5%;

    ${mediaQueries(
      css`
        font-size: 71.88%;
      `,
      'desktop'
    )}
  }

  body {
    font-family: 'Ubuntu', sans-serif;
    font-size: 1.6rem;
    line-height: 1.5;
    background-color: var(--magnolia);
    background-image: url('/images/bg-sidebar-mobile.svg');
    background-position: top center;
    background-size: 100%;
    background-repeat: no-repeat;

    ${mediaQueries(
      css`
        background-image: none;
      `,
      'desktop'
    )}
  }

  p {
    color: var(--cool-gray);
  }

  /* h1 {
    color: var(--marine-blue);
    font-size: 2.6rem;
    font-weight: 700;
    margin-bottom: 1rem;
  } */

  button, input {
    cursor: pointer;
  }

  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }
`;

export default GlobalStyles;
