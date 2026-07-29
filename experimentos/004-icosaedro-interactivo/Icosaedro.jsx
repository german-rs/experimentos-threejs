import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { getToken } from '../../src/theme.js';

export default function Icosaedro() {
  const ref = useRef();
  const [activo, setActivo] = useState(false);

  useFrame(() => {
    ref.current.rotation.x += 0.005;
    ref.current.rotation.y += 0.008;
  });

  return (
    <mesh
      ref={ref}
      onClick={() => setActivo(!activo)}
      onPointerOver={() => { document.body.style.cursor = 'pointer'; }}
      onPointerOut={() => { document.body.style.cursor = 'auto'; }}
    >
      <icosahedronGeometry args={[1.2, 0]} />
      <meshStandardMaterial
        color={activo ? getToken('--bp-accent') : getToken('--bp-cyan-bright')}
        roughness={0.3}
        metalness={0.2}
      />
    </mesh>
  );
}