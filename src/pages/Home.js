import React from 'react';
import { TypeAnimation } from "react-type-animation";

function Home() {
  return (
    <div className='w-full items-center font-sans text-red-800'>
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
    </div>
  )
}

export default Home