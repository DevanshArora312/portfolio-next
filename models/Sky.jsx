import React,{ useRef } from 'react'
import { useSelector } from 'react-redux';
import { useAnimations, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';

const Sky = ({isRotating,...props}) => {
    const skyRef = useRef();
    const {scene} = useGLTF('/sky.glb');
    const rotationSpeed = useSelector(state => state.islandRotate.speed);
  
    useFrame((_,delta)=>{
      if(isRotating || rotationSpeed !== 0){
        skyRef.current.rotation.y += 0.15*delta
      }
    },[isRotating,rotationSpeed])

    return (
    <mesh ref={skyRef} >
        <primitive object={scene}/>
    </mesh>
  )
}

export default Sky