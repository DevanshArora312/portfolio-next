'use client'
import React, { Suspense,useEffect,useState } from 'react'
import  Loader from "../components/Loader";
import {Canvas } from "@react-three/fiber"
import { Hut } from '../../models/Hut';
import { Provider } from 'react-redux';
import {store} from '../../redux/store'
import {Starry} from "../../models/Starry"
import Headbar from './Headbar';
import HomeInfo from './HomeInfo';
import { useSearchParams } from 'next/navigation';
import { Dragon } from '@/models/Dragon';

const HomeHut = () => {
  const [isRotating,setIsRotating] = useState(false);
  const [currentFocusPoint,setCurrentStage] = useState(1);
  const adjustHutForScreenSize = () => {
    let screenScale = [2, 2, 2];;
    let screenPostion = [0, -9.5, -53];
    let rotation = [0.1, 24.9, 0];
      if(window.innerWidth < 510){
        screenScale = [1.2, 1.2, 1.2];
      }
      else if(window.innerWidth <= 768) {
        screenScale = [1.5, 1.5, 1.5];
      } else {
        screenScale = [2, 2, 2];
      }
    return [screenScale, screenPostion,rotation];
  }
  let hutScale = [2, 2, 2];;
  let hutPosition = [0, -9.5, -53];
  let hutRotation = [0.1, 24.9, 0];
  useEffect(()=>{
    [hutScale, hutPosition,hutRotation] = adjustHutForScreenSize();
  },[])
  const theme = useSearchParams().get("theme")
  return (
    <Provider store={store}>
      <Headbar theme={theme}/>  
        <section className='w-full h-screen relative'>
          {currentFocusPoint &&  <div className='w-full h-auto p-5 absolute left-0 top-[10%] flex justify-center items-center z-10 bg-transparent'>
              <HomeInfo currentStage={currentFocusPoint} theme={theme} />
          </div>}
            <Canvas 
            className={`w-full h-screen ${isRotating?'cursor-grabbing':'cursor-grab'}`}
            camera={{near:0.1,far:1000}}
            >
            <Suspense fallback={<Loader/>}>
                <directionalLight position={[1,1,1]} intensity={2}/>
                <ambientLight intensity={1} />
                <hemisphereLight skyColor={"#b1e1ff"} groundColor={"#000000"} intensity={1} />
                <Dragon />
                <Hut
                  position={hutPosition}
                  scale={hutScale}
                  rotation={hutRotation}
                  setIsRotating={setIsRotating}
                  isRotating={isRotating}
                  setCurrentStage={setCurrentStage}
                />
                <Starry
                  isRotating={isRotating}
                />
            </Suspense>
            </Canvas>
        </section>
    </Provider>
  )
}

export default HomeHut