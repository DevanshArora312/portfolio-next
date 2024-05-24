"use client"
import Link  from "next/link";
import CTA from "../components/CTA";
import { projects } from "../../constants";
import { arrow } from "../../assets/icons";
import Headbar from "../components/Headbar";
import { useSearchParams } from 'next/navigation';
import { Suspense } from "react";

const ProjectPage = () => {
  const theme = useSearchParams().get("theme");
  return (
    <div style={{backgroundColor : theme === "dark" ?"rgb(26,35,46)" : "#F5F7F9"}}>
    <section className='max-container' >
        <Headbar theme={theme}/>
      <h1 className={theme === "dark" ? 'dark-head-text' : 'head-text'}>
        My{" "}
        <span className={`${theme === "dark" ? "dark-gradient_text" : 'blue-gradient_text'} drop-shadow font-semibold `}>
          Projects
        </span>
      </h1>

      <p className='text-slate-500 mt-2 leading-relaxed'>
        {"I've"} embarked on numerous projects throughout the years, but these are
        the ones I hold closest to my heart. Many of them are open-source, so if
        you come across something that piques your interest, feel free to
        explore the codebase and contribute your ideas for further enhancements.
        Your collaboration is highly valued!
      </p>

      <div className='flex flex-wrap my-20 gap-16'>
        {projects.map((project) => (
          <div className='lg:w-[400px] w-full' key={project.name}>
            <div className='block-container w-12 h-12'>
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={project.iconUrl.src}
                  alt='threads'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>

            <div className='mt-5 flex flex-col'>
              <h4 className='text-2xl font-poppins font-semibold' style={{color : theme === "dark" ? "white" : "black"}}>
                {project.name}
              </h4>
              <p className='mt-2 text-slate-500'>{project.description}</p>
              <div className='mt-5 flex items-center gap-2 font-poppins'>
                <Link
                  href={project.link}
                  className='font-semibold text-blue-600'
                >
                  Live Link
                </Link>
                <img
                  src={arrow.src}
                  alt='arrow'
                  className='w-4 h-4 object-contain'
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className='border-slate-200' />

      <CTA theme={theme}/>
    </section>
    </div>
  );
};

const Project = ()=>{
  return(
    <Suspense>
    <ProjectPage/>
  </Suspense>
  )
}

export default Project;