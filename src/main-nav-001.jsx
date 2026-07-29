import { createRoot } from 'react-dom/client';
import Nav from './components/Nav.jsx';
import Titulo from './components/Titulo.jsx';

createRoot(document.getElementById('nav-root')).render(<Nav activo="001" />);

createRoot(document.getElementById('titulo-root')).render(
  <Titulo numero="001" nombre="Doble Cubo" />
);