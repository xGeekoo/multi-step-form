import styled, { css } from 'styled-components';
import { useFormCtx } from '../contexts/FormContext';
import H1 from '../styles/H1';
import P from '../styles/P';
import { mediaQueries } from '../styles/mediaQueries';

const Label = styled.label`
  color: var(--marine-blue);
  display: block;
  font-size: 1.4rem;
  font-weight: 500;

  ${mediaQueries(
    css`
      margin-bottom: 0.5rem;
    `,
    'desktop'
  )}
`;

const Input = styled.input`
  padding: 0.75rem 1.5rem;
  display: block;
  border: 0.1rem solid var(--light-gray);
  border-radius: 0.5rem;
  transition: border-color 0.3s;
  color: var(--marine-blue);
  font-weight: 500;
  width: 100%;

  &:focus {
    border-color: var(--purplish-blue);
    outline: none;
  }

  &::placeholder {
    color: var(--cool-gray);
  }

  ${props =>
    props.$error &&
    css`
      border-color: var(--strawberry-red) !important;
    `}
`;

const Error = styled.p`
  color: var(--strawberry-red);
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 0;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  ${mediaQueries(
    css`
      gap: 2rem;
    `,
    'desktop'
  )}
`;

const LabelErrContainer = styled.div`
  ${mediaQueries(
    css`
      display: flex;
      justify-content: space-between;
      align-items: center;
    `,
    'desktop'
  )}
`;

function FirstPage() {
  const {
    register,
    handleSubmit,
    onSubmit,
    onError,
    formState: { errors }
  } = useFormCtx();

  return (
    <>
      <H1>Personal info</H1>
      <P>Please provide your name, email address, and phone number.</P>
      <Form onSubmit={handleSubmit(onSubmit, onError)}>
        <div>
          <LabelErrContainer>
            <Label htmlFor="name">Name</Label>
            {errors.name && <Error>{errors.name.message}</Error>}
          </LabelErrContainer>
          <Input
            {...register('name', {
              required: 'This field is required'
            })}
            $error={errors.name}
            type="text"
            id="name"
            placeholder="e.g. Stephen King"
          />
        </div>
        <div>
          <LabelErrContainer>
            <Label htmlFor="email">Email Address</Label>
            {errors.email && <Error>{errors.email.message}</Error>}
          </LabelErrContainer>
          <Input
            {...register('email', {
              required: 'This field is required',
              pattern: {
                value:
                  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
                message: 'Please enter a valid email address'
              }
            })}
            $error={errors.email}
            type="email"
            id="email"
            placeholder="e.g. stephenking@lorem.com"
          />
        </div>
        <div>
          <LabelErrContainer>
            <Label htmlFor="tel">Phone Number</Label>
            {errors.tel && <Error>{errors.tel.message}</Error>}
          </LabelErrContainer>
          <Input
            {...register('tel', {
              required: 'This field is required',
              pattern: {
                value:
                  /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/gm,
                message: 'Please enter a valid phone number'
              }
            })}
            $error={errors.tel}
            type="tel"
            id="tel"
            placeholder="e.g. + 1 234 567 890"
          />
        </div>
      </Form>
    </>
  );
}

export default FirstPage;
