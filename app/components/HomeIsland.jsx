'use client'
import React, { Suspense,useEffect,useState } from 'react'
import  Loader from "./Loader";
import {Canvas } from "@react-three/fiber"
import Island from '../../models/Island';
import Sky from '../../models/Sky';
import Bird from '../../models/Bird';
import Plane from '../../models/Plane';
import { Provider } from 'react-redux';
import {store} from '../../redux/store'
import HomeInfo from './HomeInfo';
import { useSearchParams } from 'next/navigation';

const HomeIsland = () => {
  const [isRotating,setIsRotating] = useState(false);
  const [currentFocusPoint,setCurrentStage] = useState(1);
  const adjustIslandForScreenSize = () => {
    let screenScale = [1,1,1];
    let screenPostion = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0];
    useEffect(()=>{
      if(window.innerWidth < 768) {
        screenScale = [0.9, 0.9, 0.9];
      } else {
        screenScale = [1, 1, 1];
      }
    },[])
    return [screenScale, screenPostion,rotation];
  }
  const [islandScale, islandPosition,islandRotation] = adjustIslandForScreenSize();
  const theme = useSearchParams().get("theme");
  return (
    <Provider store={store}>
      <section className='w-full h-screen relative'>
        {currentFocusPoint &&  <div className='w-full h-auto p-5 absolute left-0 top-[10%] flex justify-center items-center z-10 bg-transparent'>
            <HomeInfo currentStage={currentFocusPoint} theme={theme} />
        </div>}
        <Canvas 
          className={`w-full h-screen bg-transparent ${isRotating?'cursor-grabbing':'cursor-grab'}`}
          camera={{near:0.1,far:1000}}
        >
          <Suspense fallback={<Loader/>}>
            <directionalLight position={[10,1,1]} intensity={2}/>
            <ambientLight intensity={1} />
            <hemisphereLight skyColor={"#b1e1ff"} groundColor={"#000000"} intensity={1} />
            <Bird/>
            <Plane
              setIsRotating={setIsRotating}
              isRotating={isRotating}
              position={[-1,-1.5,1.5]} 
              rotation={[0,20.1,0]}
            />
            <Island
              position={islandPosition}
              scale={islandScale}
              rotation={islandRotation}
              setIsRotating={setIsRotating}
              isRotating={isRotating}
              setCurrentStage = {setCurrentStage}
              currentFocusPoint = {currentFocusPoint}
              />
            <Sky
                isRotating={isRotating}
            />
          </Suspense>
        </Canvas>
      </section>
    </Provider>
  )
}

export default HomeIsland