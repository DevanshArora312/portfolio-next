import React,{useEffect, useRef} from 'react'
// import planeObj from "../assets/3d/plane.glb"
import { useAnimations, useGLTF } from '@react-three/drei'
import { useSelector } from 'react-redux';

const Plane = ({isRotating,setIsRotating, ...props}) => {
  const planeRef = useRef();
  const {scene,animations} = useGLTF("/plane.glb");
  const {actions} = useAnimations(animations,planeRef)
  const rotationSpeed = useSelector(state => state.islandRotate.speed);
    
  useEffect(()=>{
    if(isRotating || rotationSpeed !== 0){
      actions['Take 001'].play()
    } else{
      actions['Take 001'].stop()
    }
  },[actions,isRotating,rotationSpeed])
  return (
    <mesh ref ={planeRef} {...props}>
        <primitive object={scene} />
    </mesh>
  )
}

export default Plane