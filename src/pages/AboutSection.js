import React from 'react';
import { Element } from 'react-scroll';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import DeskCartoon from '../assets/img/Desk-Cartoon-Vector.png';
import CartoonComputerBoy from '../assets/img/cartoon-computer-boy.png';

const SKILLS_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className=" list-disc pl-2">
        <li>JavaScript</li>
        <li>C#</li>
        <li>React</li>
        <li>Redux</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>SQL</li>
        <li>MySQLWorkbench</li>
        <li>Material-UI</li>
        <li>TailwindCSS</li>
        <li>Figma</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Epicodus - Fullstack Web Development Bootcamp</li>
        <li>Code The Dream - Web Development Bootcamp</li>
      </ul>
    ),
  },
];

function AboutSection() {
  return (
    <Element name="AboutSection" className='text-white bg-slate-700'>
      <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <img src={CartoonComputerBoy} width={400} height={400} alt="cartoon web developer"/>
        {/* <img src={DeskCartoon} width={500} height={500} alt=""/> */}
        {/* <div className='flex items-center justify-center'>
          <a className="text-5xl m-7 text-white" href='https://www.linkedin.com/in/cesar-aug-lopez/'><BsLinkedin /></a>
          <a className="text-5xl m-7 text-white" href='mailto:lopez.cesar.aug@gmail.com'><AiOutlineMail /></a>
          <a className="text-5xl m-7 text-white" href='https://github.com/wowgr8'><BsGithub /></a>
        </div> */}
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base md:text-lg">
            Im a driven full-stack Software Engineer with a specialization in frontend development.  Dedicated to crafting dynamic and responsive web applications. My skill set includes JavaScript, C#, React, Redux, Node.js, Express, SQL, mySQL Workbench, Postman, Figma, Material-UI, TailwindCSS, HTML, CSS, and Git. I look forward to facing new challenges, learning new skills, and building strong and lasting work relationships along the way. I'm enthusiastic about working with fellow professionals to co-create outstanding applications.
          </p>


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