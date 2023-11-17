import { createContext, useCallback, useContext, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { usePage } from './PageContext';

const FormContext = createContext();

export default function FormProvider({ children }) {
  const { register, handleSubmit, formState } = useForm();
  const { setPage } = usePage();

  const onSubmit = useCallback(
    function onSubmit() {
      setPage(2);
    },
    [setPage]
  );

  const contextValue = useMemo(() => {
    return { register, handleSubmit, formState, onSubmit };
  }, [register, handleSubmit, formState, onSubmit]);

  return (
    <FormContext.Provider value={contextValue}>{children}</FormContext.Provider>
  );
}

export function useFormCtx() {
  const context = useContext(FormContext);
  if (!context)
    throw new Error('useFormCtx hook used outside FormProvider component');
  return context;
}
