import { createContext, useContext, useState } from 'react';

const PurchaseContext = createContext();

export default function PurchaseProvider({ children }) {
  const [plan, setPlan] = useState('Arcade');
  const [billing, setBilling] = useState('Monthly');
  const [addon, setAddon] = useState([]);

  return (
    <PurchaseContext.Provider
      value={{ plan, setPlan, billing, setBilling, addon, setAddon }}
    >
      {children}
    </PurchaseContext.Provider>
  );
}

export function usePurchase() {
  const context = useContext(PurchaseContext);
  if (!context)
    throw new Error('usePurchase hook used outside PurchaseProvider component');
  return context;
}
