import React, { useRef,useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useSelector } from "react-redux";
import { a } from "@react-spring/three";

export function Starry({isRotating,props}) {
  const starRef = useRef();
  const { nodes, materials, animations } = useGLTF("/starry_new.glb");
  const { actions } = useAnimations(animations, starRef);
  const rotationSpeed = useSelector(state => state.hutRotate.speed);
//   useEffect(()=>{
//     if(isRotating || rotationSpeed !== 0){
//       actions['Animation'].play()
//     } else{
//       actions['Animation'].stop()
//     }
//   },[actions,isRotating,rotationSpeed])
    useFrame((_,delta)=>{
        if(isRotating || rotationSpeed !== 0){
        starRef.current.rotation.y += 0.15*delta
        }
    },[isRotating,rotationSpeed])

  return (
    <a.group ref={starRef} position={[1,-5,-3]} scale={[1,1,1]} dispose={null}>
      <group name="Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Cube_6" position={[0, -1.037, 0]} scale={0.011}>
                <mesh
                  name="Object_22"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_22.geometry}
                  material={materials["Material.007"]}
                />
              </group>
              <group
                name="Cylinder001_9"
                position={[22.32, 48.966, -6.545]}
                rotation={[-Math.PI, 1.175, -Math.PI]}
                scale={0}
              >
                <mesh
                  name="Object_26"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_26.geometry}
                  material={materials["Material.008"]}
                  position={[0, 32768, -2048]}
                />
              </group>
              <group name="Cylinder_7" position={[0, 48.966, -6.491]} scale={0}>
                <mesh
                  name="Object_24"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_24.geometry}
                  material={materials["Material.008"]}
                  position={[0, 0, 4096]}
                />
              </group>
              <group name="Plane_1" scale={24.037}>
                <group
                  name="Plane001_0"
                  position={[0.034, -0.025, -0.055]}
                  rotation={[0, 0.528, 0]}
                  scale={0.042}
                />
              </group>
              <group name="Sphere001_5" scale={39.458}>
                <mesh
                  name="Object_20"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_20.geometry}
                  material={materials["Material.006"]}
                />
              </group>
              <group
                name="Sphere_2"
                rotation={[-0.585, 0.233, -2.007]}
                scale={-90.65}
              >
                <mesh
                  name="Object_17"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_17.geometry}
                  material={materials["Material.003"]}
                />
                <mesh
                  name="Object_18"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_18.geometry}
                  material={materials["Material.003"]}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </a.group>
  );
}

