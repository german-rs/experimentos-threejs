import { createRoot } from 'react-dom/client';
import Nav from '../../src/components/Nav.jsx';
import Titulo from '../../src/components/Titulo.jsx';
import Escena from './Escena.jsx';

createRoot(document.getElementById('nav-root')).render(<Nav activo="005" />);

createRoot(document.getElementById('titulo-root')).render(
  <Titulo numero="005" nombre="Personaje Animado (Mixamo + R3F)" />
);

createRoot(document.getElementById('canvas-root')).render(<Escena />);