import { useTexture } from '@react-three/drei';
import * as THREE from 'three';

export default function Piso() {
  const base = import.meta.env.BASE_URL;
  const textura = useTexture(`${base}texturas/piso-color.jpg`);

  textura.wrapS = THREE.RepeatWrapping;
  textura.wrapT = THREE.RepeatWrapping;
  textura.repeat.set(6, 6);

  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
      <planeGeometry args={[10, 10]} />
      <meshStandardMaterial map={textura} />
    </mesh>
  );
}