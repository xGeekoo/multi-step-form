import styled, { css } from 'styled-components';
import Button from './UI/Button';
import { usePage } from '../contexts/PageContext';
import { useFormCtx } from '../contexts/FormContext';
import { mediaQueries } from '../styles/mediaQueries';

const StyledFooter = styled.footer`
  background-color: var(--white);
  padding: 1.5rem 2rem;
  display: flex;
  align-items: center;
  margin-top: auto;

  ${mediaQueries(
    css`
      padding: 1.5rem 5rem;
    `,
    'desktop'
  )}

  ${mediaQueries(
    css`
      padding: 1.5rem 10rem;
    `,
    'lgDesktop'
  )}
`;

function Footer() {
  const { page, setPage } = usePage();
  const { handleSubmit, onSubmit, onError } = useFormCtx();

  if (page === 5) return null;

  return (
    <StyledFooter>
      {page > 1 && (
        <Button
          onClick={() => setPage(p => (p === 1 ? 1 : p - 1))}
          direction="back"
        >
          Go back
        </Button>
      )}
      <Button
        onClick={
          page === 1
            ? handleSubmit(onSubmit, onError)
            : () => setPage(p => (p === 5 ? 5 : p + 1))
        }
        direction="next"
      >
        {page === 4 ? 'Confirm' : 'Next Step'}
      </Button>
    </StyledFooter>
  );
}

export default Footer;
