# Experimentos Three.js

Repositorio de práctica y experimentación con [Three.js](https://threejs.org/). La idea es ir subiendo experimentos progresivos, ordenados de menor a mayor dificultad, para ir aprendiendo los distintos conceptos de la librería paso a paso.

🔗 **Demo en vivo:** https://german-rs.github.io/experimentos-threejs/

## Stack

- [Three.js](https://threejs.org/) — librería de gráficos 3D con WebGL
- [Vite](https://vitejs.dev/) — bundler y servidor de desarrollo
- Vanilla JavaScript

## Experimentos

| # | Nombre | Descripción | Estado |
|---|--------|-------------|--------|
| 000 | Hola Mundo | Cubo girando con luz direccional, cámara y loop de animación básico | ✅ |
| 001 | Doble cubo | Agregar un segundo cubo de otro color, girando de forma independiente | ✅ |
| 002 | Piso y triángulo | Piso con PlaneGeometry, triángulo con ShapeGeometry girando sobre él | ✅ |

*(Esta tabla se irá actualizando a medida que se agreguen nuevos experimentos.)*

## Cómo correr el proyecto localmente

```bash
git clone https://github.com/german-rs/experimentos-threejs.git
cd experimentos-threejs
npm install
npm run dev
```

Luego abre `http://localhost:5173` en el navegador.

## Cómo generar el build de producción

```bash
npm run build
npm run preview
```

## Despliegue

El proyecto se publica en GitHub Pages mediante `gh-pages`:

```bash
npm run deploy
```

## Autor

**Germán Riveros**
🌐 [germanriveros.cl](https://germanriveros.cl)
💻 [github.com/german-rs](https://github.com/german-rs)