"use client";
import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Fox } from "@/models/Fox";
import Loader from "../components/Loader";
import { useSearchParams } from 'next/navigation';
import Headbar from '../components/Headbar';

const Page = () => {
  const [isLoading, setLoading] = useState(false);
  const [formData,setFormData] = useState({name : "",email : "",message:""});
  const [animation,setAnimation] = useState("idle");
  const theme = useSearchParams().get("theme");

  const handleSubmit = () =>{

  }
  
  const handleChange = (e) =>{
      setAnimation("hit")
      setFormData(prev => {
        return{
          ...prev,
          [e.target.name] : e.target.value
        }
      })
  }
  const handleFocus = () => {
    setAnimation("walk");
  }
  const handleBlur = () => {
    setAnimation("idle");
  }
  const styles = {
    bg : theme === "dark" ? "bg-[rgb(26,35,46)]" : "bg-[#F5F7F9]",
    textColor : theme === "dark" ? "text-white" : "text-black"
  }
  return (
    <div className={`w-full h-full min-h-screen ${styles.bg}`}>
      <Headbar theme={theme}/>
      <section className='relative flex lg:flex-row flex-col max-container'>
        
        <div className='flex-1 min-w-[50%] flex flex-col'>
          <h1 className={theme === "dark" ? 'dark-head-text' : 'head-text'}>Get in Touch</h1>

          <form
            onSubmit={handleSubmit}
            className='w-full flex flex-col gap-7 mt-14'
          >
            <label className={`${styles.textColor} font-semibold`}>
              Name
              <input
                type='text'
                name='name'
                className={theme === "dark" ? 'dark-input' : 'input'}
                placeholder='John'
                required
                value={formData.name}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </label>
            <label className={`${styles.textColor} font-semibold`}>
              Email
              <input
                type='email'
                name='email'
                className={theme === "dark" ? 'dark-input' : 'input'}
                placeholder='John@gmail.com'
                required
                value={formData.email}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </label>
            <label className={`${styles.textColor} font-semibold`}>
              Your Message
              <textarea
                name='message'
                rows='4'
                className={theme === "dark" ? 'dark-textarea' : 'textarea'}
                placeholder='Write your thoughts here...'
                value={formData.message}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </label>

            <button
              type='submit'
              disabled={isLoading}
              className={theme === "dark" ? "dark-btn" : 'btn'}
              onFocus={handleFocus}
              onBlur={handleBlur}
            >
              {isLoading ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>

        <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
          <Canvas
            camera={{
              position: [0, 0, 5],
              fov: 75,
              near: 0.1,
              far: 1000,
            }}
          >
            <directionalLight position={[0, 0, 1]} intensity={2.5} />
            <ambientLight intensity={1} />
            <pointLight position={[5, 10, 0]} intensity={2} />
            <spotLight
              position={[10, 10, 10]}
              angle={0.15}
              penumbra={1}
              intensity={2}
            />

            <Suspense fallback={<Loader />}>
              <Fox
                currentAnimation={animation}
                position={[0.5, 0.35, 0]}
                rotation={[12.629, -0.6, 0]}
                scale={[0.5, 0.5, 0.5]}
              />
            </Suspense>
          </Canvas>
        </div>
      </section>
    </div>
  );
};

const Contact = () =>{
  return(
    <Suspense>
      <Page/>
    </Suspense>
  );
}

export default Contact;
