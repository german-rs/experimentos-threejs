import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Piso from './Piso.jsx';
import CuboFlotante from './CuboFlotante.jsx';
import { getToken } from '../../src/theme.js';

export default function Escena() {
  return (
    <Canvas shadows camera={{ position: [4, 3, 6], fov: 55 }}>
      <color attach="background" args={[getToken('--bp-navy-900')]} />

      <ambientLight intensity={0.3} />

      <directionalLight
        position={[3, 5, 2]}
        intensity={1.8}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-left={-6}
        shadow-camera-right={6}
        shadow-camera-top={6}
        shadow-camera-bottom={-6}
        shadow-camera-far={20}
      />

      <Piso />
      <CuboFlotante />
      <OrbitControls enableDamping />
    </Canvas>
  );
}