import * as THREE from 'three';

// 1. Escena: el "contenedor" de todo lo que se va a renderizar
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x1a1a2e);

// 2. Cámara: define qué parte de la escena vemos
const camera = new THREE.PerspectiveCamera(
  75,                                    // campo de visión (FOV)
  window.innerWidth / window.innerHeight, // relación de aspecto
  0.1,                                   // plano cercano
  1000                                   // plano lejano
);
camera.position.z = 5;

// 3. Renderer: dibuja la escena en un <canvas>
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 4. Objeto: un cubo, el clásico "hola mundo" 3D
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshStandardMaterial({ color: 0x00ffcc });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// 5. Luz: sin luz, un MeshStandardMaterial se ve negro
const light = new THREE.DirectionalLight(0xffffff, 2);
light.position.set(3, 3, 3);
scene.add(light);

// 6. Loop de animación: se ejecuta ~60 veces por segundo
function animate() {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
}
animate();

// 7. Responsive: ajustar cuando cambia el tamaño de la ventana
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
