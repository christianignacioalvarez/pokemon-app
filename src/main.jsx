import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// Agrega el evento al botón después de que React haya renderizado el DOM
document.addEventListener('DOMContentLoaded', () => {
  const searchButton = document.getElementById('search-btn');
  const spinner = document.getElementById('loading-spinner');

  if (searchButton && spinner) {
    searchButton.addEventListener('click', () => {
      spinner.style.display = 'inline-block'; // Muestra el spinner al iniciar la búsqueda

      // Simula una búsqueda (reemplaza esto con tu lógica real)
      setTimeout(() => {
        spinner.style.display = 'none'; // Oculta el spinner después de 2 segundos
      }, 2000);
    });
  }
});
