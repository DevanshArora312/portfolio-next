'use client'
import React, { Suspense, useState } from 'react'
import { TypeAnimation } from 'react-type-animation';
import { experiences,skills } from '@/constants';
import { motion, useInView } from 'framer-motion';
import { fadeIn, staggerContainer,textVariant } from '../utils/motion';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useSearchParams } from 'next/navigation';
import Headbar from '../components/Headbar';
import CTA from '../components/CTA';

const Page = () => {
  const [image,setImage] = useState("/pfp.png");
  const theme = useSearchParams().get("theme");
  return (
    <div className={`w-full h-full ${theme === "dark" ?"bg-[rgb(26,35,46)]" : "bg-[#F5F7F9]"}`}>   
      <Headbar theme={theme}/> 
      <section className='max-container'>
        <h1 className={theme === "dark" ? 'dark-head-text' : 'head-text'}>
          {"Hello, I'm Devansh Arora👋"}
        </h1>

        <div className='flex w-full justify-center'>
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              'A student.',
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              'A Full-Stack Web Developer',
              1000,
              'A Python Developer',
              1000,
              'An aspiring React-Native Developer',
              1000
            ]}
            wrapper="h2"
            speed={50}
            className={`${theme === "dark" ? "dark-gradient_text" : "blue-gradient_text"} text-right`}
            style={{ fontSize: '2em', display: 'inline-block' }}
            repeat={Infinity}
          />
        </div>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
            Information Technology Engineer student based in India, specializing in MERN
            stack web development and working through new technologies.
          </p>
        </div>
        <div className='py-10 flex gap-x-2'>
          <div className='flex flex-col items-center'>
            <div className={`w-[25px] h-[25px] ${theme === "dark" ? "dark-gradient-bg" : "blue-gradient-bg"} rounded-full`} />
            <div className={`w-2 h-[calc(100%-45px)] ${theme === "dark" ? "dark-gradient-bg" : "blue-gradient-bg"}`} />
            <div className={`w-[25px] h-[25px] ${theme === "dark" ? "dark-gradient-bg" : "blue-gradient-bg"} rounded-full`} />
          </div>
          <div className='flex flex-col py-8'>
            <motion.ul 
              className='md:text-[20px] text-[15px] space-y-10 w-full'
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25}}  
            >
              <motion.li className={theme === "dark" ? "text-white" : "text-black" } variants={textVariant(.2)} id="10"  onMouseEnter={()=>setImage("/school.jpg")} onMouseLeave={()=>setImage("/pfp.png")}>
                Completed Class X with 95.2% from Kalka Public School
              </motion.li>
              <motion.li className={theme === "dark" ? "text-white" : "text-black" } variants={textVariant(.5)} id="12" onMouseEnter={()=>setImage("/school.jpg")} onMouseLeave={()=>setImage("/pfp.png")}>
                Completed Class XII with 93.2% from Kalka Public School
              </motion.li>
              <motion.li className={theme === "dark" ? "text-white" : "text-black" } variants={textVariant(.8)} id="clg" onMouseEnter={()=>setImage("/clg.jpeg")} onMouseLeave={()=>setImage("/pfp.png")} >
                Pursuing B.Tech in IT from Netaji Subhash University of Technology
              </motion.li>
            </motion.ul>
          </div>
        </div>
        <div className='py-10 flex flex-col'>
          <h3 className={theme === "dark" ? 'dark-subhead-text' : 'subhead-text'}>My Skills</h3>

          <motion.div 
            className='mt-16 flex flex-wrap gap-12'
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25}}
          >
            {skills.map((skill,index) => (
              <motion.div className='block-container w-20 h-20' key={skill.name} variants={fadeIn("down","tween",index/10,1)}>
                <div className='btn-back rounded-xl' />
                <div className='btn-front rounded-xl flex justify-center items-center'>
                  <img
                    src={skill.imageUrl}
                    alt={skill.name}
                    title={skill.name}
                    className='w-1/2 h-1/2 object-contain'
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className='py-16'>
          <h3 className={theme === "dark" ? 'dark-subhead-text' : 'subhead-text'}>Work Experience.</h3>
          <div className='mt-5 flex flex-col gap-3 text-slate-500'>
            <p>
              {"I've worked a few societies in my college, leveling up my skills and"}
              {"teaming up with smart people. Here's the rundown:"}
            </p>
          </div>
        </div>
        <div className='mt-12 flex'>
            <VerticalTimeline>
              {experiences.map((experience, index) => 
              {  
                // const {ref,view} = useInView();
                return (
                  <VerticalTimelineElement
                    visible={true} 
                    // ref={ref}
                    key={experience.company_name}
                    date={experience.date}
                    iconStyle={{ background: experience.iconBg }}
                    icon={
                      <div className='flex justify-center items-center w-full h-full'>
                        <img
                          src={experience.icon.src}
                          alt={experience.company_name}
                          className='w-[60%] h-[60%] object-contain'
                        />
                      </div>
                    }
                    contentStyle={{
                      borderBottom: "8px",
                      borderStyle: "solid",
                      borderBottomColor: experience.iconBg,
                      boxShadow: "none",
                      color: theme === "dark" ? "white" : "black"
                    }}
                  >
                    <div>
                      <h3 className='text-black text-xl font-poppins font-semibold'>
                        {experience.title}
                      </h3>
                      <p
                        className='text-black font-medium text-base'
                        style={{ margin: 0 }}
                      >
                        {experience.company_name}
                      </p>
                    </div>

                    <ul className='my-5 list-disc ml-5 space-y-2'>
                      {experience.points.map((point, index) => (
                        <li
                          key={`experience-point-${index}`}
                          className='text-black/50 font-normal pl-1 text-sm'
                        >
                          {point}
                        </li>
                      ))}
                    </ul>
                </VerticalTimelineElement>
                )
              })}
            </VerticalTimeline>
        </div>
      <CTA theme={theme}/>
      </section>
    </div>
    
  );
};


const About = () => {
  return(
    <Suspense>
      <Page/>
    </Suspense>
  );
}
export default About