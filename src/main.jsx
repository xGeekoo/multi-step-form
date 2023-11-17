import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import PageProvider from './contexts/PageContext.jsx';
import FormProvider from './contexts/FormContext.jsx';
import PurchaseProvider from './contexts/PurchaseContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PageProvider>
      <FormProvider>
        <PurchaseProvider>
          <App />
        </PurchaseProvider>
      </FormProvider>
    </PageProvider>
  </React.StrictMode>
);
