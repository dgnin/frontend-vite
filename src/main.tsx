import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './assets/styles/styles.scss';

const root = document.getElementById('root');

if (!root) {
  throw new Error('Root not found!');
}

createRoot(root).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
