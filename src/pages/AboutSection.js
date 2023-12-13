import React from 'react';
import { Element } from 'react-scroll';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';

function AboutSection() {
  return (
    <Element name="AboutSection">
      <div className='w-70 text-4xl px-8'>
        <p className="lg:text-2xl">A driven Junior web developer pivoting from a career in customer service. Motivated to apply my interpersonal skills and passion for solving hard problems towards building trustworthy and dynamic websites.</p>
        <div className='flex items-center justify-center mt-5'>
          <a className="text-5xl m-7 text-white" href='https://www.linkedin.com/in/cesar-aug-lopez/'><BsLinkedin /></a>
          <a className="text-5xl m-7 text-white" href='mailto:lopez.cesar.aug@gmail.com'><AiOutlineMail /></a>
          <a className="text-5xl m-7 text-white" href='https://github.com/wowgr8'><BsGithub /></a>
        </div>
        <div className='skills text-3xl w-full flex justify-center flex-col items-center h-[90vh]'>
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