import { createContext, useContext, useState } from 'react';

const PageContext = createContext();

export default function PageProvider({ children }) {
  const [page, setPage] = useState(1);

  return (
    <PageContext.Provider value={{ page, setPage }}>
      {children}
    </PageContext.Provider>
  );
}

export function usePage() {
  const context = useContext(PageContext);
  if (!context)
    throw new Error('usePage hook used outside PageProvider component');
  return context;
}
