import React from 'react';
import { Element } from 'react-scroll';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';

function AboutSection() {
  return (
    <Element name="AboutSection" className='text-white'>
      <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        {/* <img>placeholder</img> */}
        <div className='flex items-center justify-center'>
          <a className="text-5xl m-7 text-white" href='https://www.linkedin.com/in/cesar-aug-lopez/'><BsLinkedin /></a>
          <a className="text-5xl m-7 text-white" href='mailto:lopez.cesar.aug@gmail.com'><AiOutlineMail /></a>
          <a className="text-5xl m-7 text-white" href='https://github.com/wowgr8'><BsGithub /></a>
        </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base md:text-lg">
            Im a driven full-stack Software Engineer with a specialization in frontend development.  Dedicated to crafting dynamic and responsive web applications. My skill set includes JavaScript, C#, React, Redux, Node.js, Express, SQL, mySQL Workbench, Postman, Figma, Material-UI, TailwindCSS, HTML, CSS, and Git. I look forward to facing new challenges, learning new skills, and building strong and lasting work relationships along the way. I'm enthusiastic about working with fellow professionals to co-create outstanding applications.
          </p>

          <div className='skills text-3xl w-full flex justify-center flex-col items-center h-[90vh]'>
        </div>
          <h1 className="text-blue-800">Skills</h1>
          <ol className='list list-none lg:w-60%'>
            <li className='item'>
              <h2 className="text-2xl">Front-End</h2>
              <span className="text-base"> ReactJS, Redux, BootStrap, TailwindCSS, MaterialUI, NPM, StyledComponents, Webpack, CSS, HTML, jQuery.</span>
            </li>
            <li className='item'>
              <h2 className="text-2xl">Back-End</h2>
              <span className="text-base"> MySQL/MySQLWorkbench, NodeJS, Firebase, .NET, Entity Framework/Core, Jest, Postman.</span>
            </li>
            <li className='item'>
              <h2 className="text-2xl">Languages</h2>
              <span className="text-base"> JavaScript, C#</span>
            </li>
          </ol>
        </div>
      </div>
    </Element>
  )
}

export default AboutSection