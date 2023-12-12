import React from 'react';
import { Element } from 'react-scroll';
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

function Home() {
  return (
    <Element name="home" className='lg:py-16 bg-slate-400'>
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
                "A Creative Problem Solver",
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
        </motion.div>


        <>image placeholder</>
      </div>
    </Element>
  )
}

export default Home