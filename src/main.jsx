import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);

document.addEventListener('DOMContentLoaded', () => {
  const searchButton = document.getElementById('search-btn');
  const spinner = document.getElementById('loading-spinner');

  if (searchButton && spinner) {
    searchButton.addEventListener('click', () => {
      spinner.style.display = 'inline-block'; 

      setTimeout(() => {
        spinner.style.display = 'none';
      }, 2000);
    });
  }
});
