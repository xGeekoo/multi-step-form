import styled from 'styled-components';
import Button from './UI/Button';
import { usePage } from '../contexts/PageContext';
import { useFormCtx } from '../contexts/FormContext';

const StyledFooter = styled.footer`
  background-color: var(--white);
  padding: 1.5rem 10rem;
  display: flex;
  align-items: center;
  margin-top: auto;
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
