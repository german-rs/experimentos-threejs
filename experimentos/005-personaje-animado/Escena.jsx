import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Personaje from './Personaje.jsx';
import { getToken } from '../../src/theme.js';

export default function Escena() {
  return (
    <Canvas camera={{ position: [0, 1.4, 4], fov: 50 }}>
      <color attach="background" args={[getToken('--bp-navy-900')]} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[3, 5, 3]} intensity={1.5} />
      <Suspense fallback={null}>
        <Personaje />
      </Suspense>
      <OrbitControls target={[0, 0.8, 0]} enableDamping />
    </Canvas>
  );
}