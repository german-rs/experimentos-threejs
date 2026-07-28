export default function Nav({ activo }) {
  const base = import.meta.env.BASE_URL;

  const experimentos = [
    { id: '000', nombre: 'Hola Mundo', ruta: `${base}index.html` },
    { id: '001', nombre: 'Doble Cubo', ruta: `${base}experimentos/001-doble-cubo/index.html` },
    { id: '002', nombre: 'Piso y Triángulo', ruta: `${base}experimentos/002-piso-triangulo/index.html` },
    { id: '003', nombre: 'Piso, Plinto y Esfera', ruta: `${base}experimentos/003-piso-plinto-esfera/index.html` },
  ];

  return (
    <nav id="nav">
      {experimentos.map((exp) => (
        <a
          key={exp.id}
          href={exp.ruta}
          className={activo === exp.id ? 'activo' : ''}
        >
          {exp.id} · {exp.nombre}
        </a>
      ))}
    </nav>
  );
}