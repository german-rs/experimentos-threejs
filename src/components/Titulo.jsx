export default function Titulo({ numero, nombre }) {
  return (
    <div className="titulo-block">
      <span className="titulo-eyebrow">Experimentos · Three.js</span>
      <h1 className="titulo-principal">
        <span className="titulo-numero">Nº{numero}</span> — {nombre}
      </h1>
    </div>
  );
}