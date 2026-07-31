import { useEffect, useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

export default function Personaje() {
  const grupo = useRef();
  const { scene, animations } = useGLTF(`${import.meta.env.BASE_URL}modelos/jogging.glb`);
  const { actions } = useAnimations(animations, grupo);

  useEffect(() => {
    const nombresClips = Object.keys(actions);
    console.log('Clips de animación encontrados:', nombresClips);

    if (nombresClips.length > 0) {
      actions[nombresClips[0]].play();
    }
  }, [actions]);

  return (
    <group ref={grupo} scale={0.01}>
      <primitive object={scene} />
    </group>
  );
}