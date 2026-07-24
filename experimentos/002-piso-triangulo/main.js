import * as THREE from 'three';

// 1. Escena
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x1a1a2e);

// 2. Cámara
// Nota: la posicionamos un poco arriba y atrás (y, z) para poder ver el piso
// en perspectiva, no solo de frente.
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(0, 3, 6);
camera.lookAt(0, 0, 0);

// 3. Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 4. Piso (PlaneGeometry)
// PlaneGeometry nace "parado", mirando hacia la cámara (como una pantalla).
// Para que se comporte como un piso horizontal, lo rotamos -90° en el eje X.
const floorGeometry = new THREE.PlaneGeometry(10, 10);
const floorMaterial = new THREE.MeshStandardMaterial({
  color: 0x2f3542,
  side: THREE.DoubleSide, // el plano es "delgado": sin esto, se vería invisible desde abajo
});
const floor = new THREE.Mesh(floorGeometry, floorMaterial);
floor.rotation.x = -Math.PI / 2; // -90° en radianes (Math.PI equivale a 180°)
floor.position.y = -1;
scene.add(floor);

// 5. Triángulo (construido manualmente con THREE.Shape)
// THREE.Shape define una forma 2D a partir de puntos (como dibujar con un lápiz).
const triangleShape = new THREE.Shape();
triangleShape.moveTo(0, 1);      // vértice superior
triangleShape.lineTo(-1, -1);    // vértice inferior izquierdo
triangleShape.lineTo(1, -1);     // vértice inferior derecho
triangleShape.closePath();       // cierra la figura de vuelta al primer punto

const triangleGeometry = new THREE.ShapeGeometry(triangleShape);
const triangleMaterial = new THREE.MeshStandardMaterial({
  color: 0xffa502,
  side: THREE.DoubleSide, // igual que el piso: es una forma plana, sin grosor
});
const triangle = new THREE.Mesh(triangleGeometry, triangleMaterial);
triangle.position.y = 0.2; // lo levantamos un poco sobre el piso
scene.add(triangle);

// 6. Luz
const light = new THREE.DirectionalLight(0xffffff, 2);
light.position.set(3, 5, 3);
scene.add(light);

// Luz ambiental suave, para que el piso no se vea completamente negro
// en las zonas que la luz direccional no alcanza directamente.
const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
scene.add(ambientLight);

// 7. Loop de animación
function animate() {
  requestAnimationFrame(animate);

  // El triángulo gira sobre su propio eje Y, como un trompo.
  // El piso se queda quieto: solo es el "escenario".
  triangle.rotation.y += 0.02;

  renderer.render(scene, camera);
}
animate();

// 8. Responsive
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});