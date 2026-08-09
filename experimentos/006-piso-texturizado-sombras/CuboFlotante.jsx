import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { getToken } from '../../src/theme.js';

export default function CuboFlotante() {
  const ref = useRef();

  useFrame(() => {
    ref.current.rotation.x += 0.006;
    ref.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={ref} position={[0, 1.5, 0]} castShadow>
      <boxGeometry args={[1.2, 1.2, 1.2]} />
      <meshStandardMaterial color={getToken('--bp-cyan-bright')} roughness={0.4} metalness={0.1} />
    </mesh>
  );
}