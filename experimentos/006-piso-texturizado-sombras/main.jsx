import { createRoot } from 'react-dom/client';
import Nav from '../../src/components/Nav.jsx';
import Titulo from '../../src/components/Titulo.jsx';
import Escena from './Escena.jsx';

createRoot(document.getElementById('nav-root')).render(<Nav activo="006" />);

createRoot(document.getElementById('titulo-root')).render(
  <Titulo numero="006" nombre="Piso Texturizado y Sombras (R3F)" />
);

createRoot(document.getElementById('canvas-root')).render(<Escena />);