import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
document.getElementById('search-btn').addEventListener('click', () => {
  const spinner = document.getElementById('loading-spinner');
  spinner.style.display = 'inline-block'; // Muestra el spinner al iniciar la búsqueda

  // Simula una búsqueda (reemplaza esto con tu lógica real)
  setTimeout(() => {
    spinner.style.display = 'none'; // Oculta el spinner después de 2 segundos
  }, 2000);
});
