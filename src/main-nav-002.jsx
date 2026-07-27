import { createRoot } from 'react-dom/client';
import Nav from './components/Nav.jsx';

const contenedor = document.getElementById('nav-root');
const root = createRoot(contenedor);
root.render(<Nav activo="002" />);