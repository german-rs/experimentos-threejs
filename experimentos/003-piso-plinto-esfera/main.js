import * as THREE from 'three';
import { getToken } from '/src/theme.js';

// 1. Escena
const scene = new THREE.Scene();
scene.background = new THREE.Color(getToken('--bp-navy-900'));

// 2. Cámara
// La posicionamos baja y relativamente cerca, apuntando hacia la esfera (arriba).
// Esto genera la sensación de estar "mirando hacia arriba" una pieza expuesta,
// como caminarías frente a una escultura en un museo.
const camera = new THREE.PerspectiveCamera(
  60,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(0, 0.5, 7);
camera.lookAt(0, 1.2, 0);

// 3. Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);

// NUEVO: habilitar sombras en el renderer.
// Por defecto, Three.js NO calcula sombras (es costoso computacionalmente),
// hay que activarlo explícitamente.
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap; // sombras con bordes suaves, más realistas

document.body.appendChild(renderer.domElement);

// 4. Piso
const floorGeometry = new THREE.PlaneGeometry(12, 12);
const floorMaterial = new THREE.MeshStandardMaterial({
  color: 0x1e1e2e,
  side: THREE.DoubleSide,
});
const floor = new THREE.Mesh(floorGeometry, floorMaterial);
floor.rotation.x = -Math.PI / 2;
floor.position.y = -1;
floor.receiveShadow = true; // NUEVO: este objeto puede "recibir" sombra de otros
scene.add(floor);

// 5. Plinto (cilindro, tipo columna de museo)
// CylinderGeometry(radioSuperior, radioInferior, altura, segmentosRadiales)
// Usamos un radio inferior levemente mayor al superior para que se vea
// como una columna clásica, más estable visualmente en la base.
const plintoAltura = 2;
const plintoGeometry = new THREE.CylinderGeometry(0.5, 0.6, plintoAltura, 32);
const plintoMaterial = new THREE.MeshStandardMaterial({
  color: 0xe8e8e8, // blanco hueso, como mármol
  roughness: 0.6,
});
const plinto = new THREE.Mesh(plintoGeometry, plintoMaterial);
plinto.position.y = -1 + plintoAltura / 2; // ver cálculo de la tabla explicada arriba
plinto.castShadow = true;    // NUEVO: este objeto "proyecta" sombra sobre otros
plinto.receiveShadow = true;
scene.add(plinto);

// 6. Esfera (la pieza expuesta)
const esferaRadio = 0.6;
const esferaGeometry = new THREE.SphereGeometry(esferaRadio, 32, 32);
const esferaMaterial = new THREE.MeshStandardMaterial({
  color: 0xffa502,
  roughness: 0.3,
  metalness: 0.4, // un poco de brillo metálico, para que destaque como pieza de exhibición
});
const esfera = new THREE.Mesh(esferaGeometry, esferaMaterial);
esfera.position.y = -1 + plintoAltura + esferaRadio; // tope del plinto + radio de la esfera
esfera.castShadow = true;
scene.add(esfera);

// 7. Iluminación tipo "sala de exhibición"
// Luz ambiental tenue: ilumina parejo, sin ella todo lo que no toque la luz
// principal se vería negro.
const ambientLight = new THREE.AmbientLight(0xffffff, 0.25);
scene.add(ambientLight);

// Luz focal (SpotLight) apuntando directamente a la esfera, simulando
// el foco de luz cenital típico de una vitrina de museo.
const spotLight = new THREE.SpotLight(0xffffff, 80);
spotLight.position.set(2, 6, 3);
spotLight.target = esfera; // el foco apunta específicamente a la esfera
spotLight.angle = Math.PI / 7;   // ancho del cono de luz
spotLight.penumbra = 0.4;        // suaviza el borde del cono (evita un círculo de luz muy duro)
spotLight.castShadow = true;     // esta luz sí genera sombras
scene.add(spotLight);
scene.add(spotLight.target);

// 8. Loop de animación
// La esfera gira lentamente sobre su propio eje; el plinto y el piso
// permanecen fijos, como corresponde a una base sólida.
function animate() {
  requestAnimationFrame(animate);

  esfera.rotation.x += 0.008;

  renderer.render(scene, camera);
}
animate();

// 9. Responsive
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});