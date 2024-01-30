import React from 'react';
import { Element } from 'react-scroll';
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import ProfilePic from "../assets/img/siliconeForestCropped.png"
import HDPorfolioPic from "../assets/img/hd-portfolio-pic.png"
import ResumeUrl from "../assets/pdf/CesarLopez-SoftwareEngineer-Resume.pdf"

function Home() {

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = ResumeUrl;
    link.download = "CesarLopez-SoftwareEngineer-Resume.pdf";
    link.click();
  }
  
  return (
    <Element name="home" className='lg:py-16'>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-7 place-self-center text-center sm:text-left"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5lg lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text h-24 pb-4 bg-gradient-to-r from-yellow-300 to-yellow-600">Howdy, I'm</span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Cesar Lopez",
                1500,
                "A Web Developer",
                1000,
                "A Software Engineer",
                1000,
                "A Continuous Learner",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              />
          </h1>
          <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>
            Welcome to my portfolio! Dive into my experience as a Software Engineer and Developer, highlighting skills across a diverse set of web development technologies.
          </p>
          <button
              onClick={handleDownloadResume}
              className={`px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-600 via-blue-400 to-blue-300 hover:bg-slate-800 text-white mt-3`}
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5, x: 400 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
          className="col-span-5 place-self-center mt-4  lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <img
              src={HDPorfolioPic}
              alt="hero-image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2  sm:top-1/2 left-1/2 lg:top-[65%] lg:w-[500px] lg:h-[650px] w-[400px] h-[360px] top-[60%]"
            />
          </div>
        </motion.div>
      </div>
    </Element>
  ) 
}

export default Home