import React from 'react';
import { Element } from 'react-scroll';
import { TypeAnimation } from "react-type-animation";

function Home() {
  return (
    <Element name="home" className='w-full items-center font-sans text-red-800'>
      <div className='about w-full h-screen flex flex-col justify-center items-center text-center text-white'>
        <h1 className="text-white mb-4 text-4xl  sm:text-5lg lg:text-6xl font-extrabold">
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
      </div>
    </Element>
  )
}

export default Home