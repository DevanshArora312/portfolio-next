import React, { useRef,useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function Dragon() {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/dragon_fly.glb");
  const { actions } = useAnimations(animations, group);
  useEffect(() => {
    actions["GltfAnimation 0"].play();
  }, []);
  useFrame(({ clock, camera }) => {
    group.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;

    if (group.current.position.x > camera.position.x + 10) {

      group.current.rotation.y = Math.PI;

    } else if (group.current.position.x < camera.position.x - 28) {
      group.current.rotation.y = 0;
      group.current.position.x = -5;
      group.current.position.y = 2;
      group.current.position.z = 1
    }

    if (group.current.rotation.y !== 0 && group.current.position.x <= camera.position.x - 10) {
      // console.log(1)
      group.current.position.x -= 0.01;
      group.current.position.z += 0.01;
    
    } else if(group.current.rotation.y === Math.PI){
      // console.log(2)
      group.current.position.x -= 0.01;
      group.current.position.y += 0.01;
      group.current.position.z += 0.005;
    
    } else {
      // console.log(3,group.current.rotation.y)
      group.current.position.x += 0.01;
      group.current.position.z -= 0.01;
    }
  });

  return (
    <group ref={group} position={[-5, 2, 1]} scale={[0.008,0.008,0.008]} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="GLTF_created_0">
                <primitive object={nodes.GLTF_created_0_rootJoint} />
                <skinnedMesh
                  name="Object_7"
                  geometry={nodes.Object_7.geometry}
                  material={materials.Tansport_KA01_MI}
                  skeleton={nodes.Object_7.skeleton}
                />
                <skinnedMesh
                  name="Object_10"
                  geometry={nodes.Object_10.geometry}
                  material={materials.Tansport_KA02_MI}
                  skeleton={nodes.Object_10.skeleton}
                />
                <group name="0000_Transport_KA_Skel_96">
                  <group name="0000_Transport_KA_Skel_97" />
                </group>
                <group name="0001_Transport_KA_Skel_98">
                  <group name="0001_Transport_KA_Skel_99" />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}
