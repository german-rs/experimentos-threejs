import * as THREE from 'three';
import { getToken } from '/src/theme.js';

// 1. Escena
const scene = new THREE.Scene();
scene.background = new THREE.Color(getToken('--bp-navy-900'));

// 2. Cámara
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 5;

// 3. Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 4. Primer cubo (el original, desplazado a la izquierda)
const geometry1 = new THREE.BoxGeometry(1, 1, 1);
const material1 = new THREE.MeshStandardMaterial({ color: 0x00ffcc });

const cube1 = new THREE.Mesh(geometry1, material1);
cube1.position.x = -1.5;
scene.add(cube1);

// 5. Segundo cubo (nuevo, desplazado a la derecha, otro color)
const geometry2 = new THREE.BoxGeometry(1, 1, 1);
const material2 = new THREE.MeshStandardMaterial({ color: 0xff4757 });
const cube2 = new THREE.Mesh(geometry2, material2);
cube2.position.x = 1.5;
scene.add(cube2);

// 6. Luz
const light = new THREE.DirectionalLight(0xffffff, 2);
light.position.set(3, 3, 3);
scene.add(light);

// 7. Loop de animación: cada cubo gira a velocidad distinta
function animate() {
  requestAnimationFrame(animate);

  cube1.rotation.x += 0.01;
  cube1.rotation.y += 0.01;

  cube2.rotation.x += 0.02;
  cube2.rotation.y -= 0.015;

  renderer.render(scene, camera);
}
animate();

// 8. Responsive
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});