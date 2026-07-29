// Lee el valor de una CSS Custom Property definida en _tokens.scss.
// Esto evita tener el mismo color hardcodeado en dos lugares distintos
// (una vez en CSS, otra vez en cada main.js).
export function getToken(nombre) {
  return getComputedStyle(document.documentElement)
    .getPropertyValue(nombre)
    .trim();
}