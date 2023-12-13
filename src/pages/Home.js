import React from 'react';
import { Element } from 'react-scroll';
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import ProfilePic from "../assets/img/portfoliopic.png"

function Home() {
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
                // "A Creative Problem Solver",
                // 1000,
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

          {/* {Download CV section placeholder} */}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-5 place-self-center mt-4  lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <img
              src={ProfilePic}
              alt="hero-image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-[65%] sm:top-1/2 left-1/2"
              width={300}
              height={300}
              // width={390}
              // height={350}
            />
          </div>
        </motion.div>
      </div>
    </Element>
  ) 
}

export default Home