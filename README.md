# Experimentos Three.js

Repositorio de práctica y experimentación con [Three.js](https://threejs.org/). La idea es ir subiendo experimentos progresivos, ordenados de menor a mayor dificultad, para ir aprendiendo los distintos conceptos de la librería paso a paso.

🔗 **Demo en vivo:** https://german-rs.github.io/experimentos-threejs/

## Stack

- [Three.js](https://threejs.org/) — librería de gráficos 3D con WebGL
- [Vite](https://vitejs.dev/) — bundler y servidor de desarrollo
- [React](https://react.dev/) — usado únicamente para la UI compartida (barra de navegación), independiente de la lógica de Three.js
- JavaScript / JSX
- [React Three Fiber](https://r3f.docs.pmnd.rs/) + [Drei](https://github.com/pmndrs/drei) — usado en el Experimento 004 en adelante, incluyendo carga de modelos animados (`useGLTF`, `useAnimations`)

## Arquitectura

Este repositorio combina dos enfoques de forma intencional, separando responsabilidades:

- **Three.js en Vanilla JS**: cada experimento tiene su propio `main.js` con la lógica 3D (escena, cámara, geometrías, animación). No se usa `react-three-fiber`; Three.js corre de forma independiente en cada página.
- **React solo para interfaz compartida**: la barra de navegación vive en un único componente (`src/components/Nav.jsx`) y se monta por separado en cada página mediante un archivo `main-nav*.jsx`. Esto evita duplicar el HTML de la navegación en cada experimento.
- **Multi-página con Vite**: cada experimento es una página HTML independiente, registrada en `vite.config.js` (`build.rollupOptions.input`), no una sola SPA con rutas de cliente.
- **Rutas dinámicas con `import.meta.env.BASE_URL`**: los enlaces de navegación se generan usando esta variable, para que funcionen igual en desarrollo local y en GitHub Pages (donde el sitio vive bajo `/experimentos-threejs/`).

- **Sistema de diseño**: paleta y tipografía "blueprint" (IBM Plex Mono/Sans) definida en `src/styles/` con Sass — tokens en `_tokens.scss` (CSS custom properties), patrones reutilizables en `_mixins.scss` (breakpoint móvil, marcas de esquina), compilado en un único `main.scss` cargado por las 4 páginas.

### Cómo agregar un experimento nuevo

1. Crear `experimentos/00X-nombre/` con su `index.html` y `main.js` (lógica Three.js)
2. Crear `src/main-nav-00X.jsx` (copiar uno existente y cambiar el valor de `activo`)
3. Agregar una fila al array `experimentos` dentro de `src/components/Nav.jsx`
4. Registrar el nuevo `index.html` en `vite.config.js` → `build.rollupOptions.input`

## Experimentos

| # | Nombre | Descripción | Estado |
|---|--------|-------------|--------|
| 000 | Hola Mundo | Cubo girando con luz direccional, cámara y loop de animación básico | ✅ |
| 001 | Doble cubo | Segundo cubo de otro color, girando de forma independiente | ✅ |
| 002 | Piso y triángulo | Piso con `PlaneGeometry`, triángulo con `ShapeGeometry` girando sobre él | ✅ |
| 003 | Piso, plinto y esfera | Composición tipo museo: piso, plinto con `CylinderGeometry` y esfera con sombras (`SpotLight`, shadow mapping) | ✅ |
| 004 | Icosaedro interactivo | Primer experimento con [React Three Fiber](https://r3f.docs.pmnd.rs/): icosaedro que cambia de color al clic (`useState`), `OrbitControls` de `@react-three/drei` | ✅ |
| 005 | Personaje animado | Carga de modelo Mixamo (`.glb`) con [React Three Fiber](https://r3f.docs.pmnd.rs/): `useGLTF` + `useAnimations` de `@react-three/drei`, corrección de escala (cm → m) | ✅ |

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