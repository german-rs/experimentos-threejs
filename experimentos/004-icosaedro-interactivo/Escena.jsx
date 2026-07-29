import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Icosaedro from './Icosaedro.jsx';
import { getToken } from '../../src/theme.js';

export default function Escena() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
      <color attach="background" args={[getToken('--bp-navy-900')]} />
      <ambientLight intensity={0.4} />
      <directionalLight position={[3, 5, 3]} intensity={1.5} />
      <Icosaedro />
      <OrbitControls enablePan={false} enableDamping />
    </Canvas>
  );
}