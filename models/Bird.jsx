import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useAnimations, useGLTF } from "@react-three/drei";

// 3D Model from: https://sketchfab.com/3d-models/phoenix-bird-844ba0cf144a413ea92c779f18912042
export default function Bird() {
  const birdRef = useRef();
  const { scene, animations } = useGLTF("/bird.glb");

  const { actions } = useAnimations(animations, birdRef);

  useEffect(() => {
    actions["Take 001"].play();
  }, []);

  useFrame(({ clock, camera }) => {
    birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;

    if (birdRef.current.position.x > camera.position.x + 10) {

      birdRef.current.rotation.y = Math.PI;

    } else if (birdRef.current.position.x < camera.position.x - 28) {
      birdRef.current.rotation.y = 0;
      birdRef.current.position.x = -5;
      birdRef.current.position.y = 2;
      birdRef.current.position.z = 1
    }

    if (birdRef.current.rotation.y !== 0 && birdRef.current.position.x <= camera.position.x - 10) {
      // console.log(1)
      birdRef.current.position.x -= 0.01;
      birdRef.current.position.z += 0.01;
    
    } else if(birdRef.current.rotation.y === Math.PI){
      // console.log(2)
      birdRef.current.position.x -= 0.01;
      birdRef.current.position.y += 0.01;
      birdRef.current.position.z += 0.005;
    
    } else {
      // console.log(3,birdRef.current.rotation.y)
      birdRef.current.position.x += 0.01;
      birdRef.current.position.z -= 0.01;
    }
  });

  return (
    // to create and display 3D objects
    <mesh ref={birdRef} position={[-5, 2, 1]} scale={[0.003, 0.003, 0.003]}>
      <primitive object={scene} />
    </mesh>
  );
}