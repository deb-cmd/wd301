import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx'; // Or App.tsx if your App component is in TypeScript
import React from 'react';

const rootElement = document.getElementById('root');

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
} else {
  console.error("Root element with id 'root' not found.");
}