import { useState } from 'react';

export default function Nav({ activo }) {
  const [abierto, setAbierto] = useState(false);
  const base = import.meta.env.BASE_URL;

  const experimentos = [
    { id: '000', nombre: 'Hola Mundo', ruta: `${base}index.html` },
    { id: '001', nombre: 'Doble Cubo', ruta: `${base}experimentos/001-doble-cubo/index.html` },
    { id: '002', nombre: 'Piso y Triángulo', ruta: `${base}experimentos/002-piso-triangulo/index.html` },
    { id: '003', nombre: 'Piso, Plinto y Esfera', ruta: `${base}experimentos/003-piso-plinto-esfera/index.html` },
    { id: '004', nombre: 'Icosaedro Interactivo', ruta: `${base}experimentos/004-icosaedro-interactivo/index.html` },
    { id: '005', nombre: 'Personaje Animado', ruta: `${base}experimentos/005-personaje-animado/index.html` },
    { id: '006', nombre: 'Piso Texturizado y Sombras', ruta: `${base}experimentos/006-piso-texturizado-sombras/index.html` },
  ];

  const alternarMenu = () => setAbierto(!abierto);
  const cerrarMenu = () => setAbierto(false);

  return (
    <>
      <button
        id="nav-toggle"
        onClick={alternarMenu}
        aria-label="Abrir menú de navegación"
        aria-expanded={abierto}
      >
        {abierto ? '✕' : '☰'}
      </button>

      {abierto && <div id="nav-overlay" onClick={cerrarMenu}></div>}

      <nav id="nav" className={abierto ? 'nav-abierto' : ''}>
        <span className="nav-eyebrow">Índice</span>
        {experimentos.map((exp) => (
          <a
            key={exp.id}
            href={exp.ruta}
            className={activo === exp.id ? 'activo' : ''}
            onClick={cerrarMenu}
          >
            {exp.id} · {exp.nombre}
          </a>
        ))}
      </nav>
    </>
  );
}