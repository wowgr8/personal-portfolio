import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import '../styles/Home.css';

function Home() {
  return (
    <div className=' w-full items-center font-sans text-blue-800'>
      <div className='about w-full h-screen flex flex-col justify-center items-center text-center bg-blue-800 text-white'>
        <h2 className="text-7xl text-yellow-400 h-24 pb-4">Howdy, I'm Cesar</h2>
        <div className='w-70 text-4xl px-8'>
          <p> A driven Junior web developer pivoting from a career in customer service. Motivated to apply my interpersonal skills and passion for solving hard problems towards building trustworthy and dynamic websites.</p>
          <div className='flex items-center justify-center mt-5'>
            <a className="text-5xl m-7 text-white" href='https://github.com/wowgr8'><BsGithub /></a>
            <a className="text-5xl m-7 text-white" href='https://www.linkedin.com/in/cesar-aug-lopez/'><BsLinkedin /></a>
            <a className="text-5xl m-7 text-white" href='mailto:lopez.cesar.aug@gmail.com'><AiOutlineMail /></a>
          </div>
        </div>
      </div>
      <div className='skills'>
        <h1> Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2>Front-End</h2>
            <span> ReactJS, Redux, BootStrap, TailwindCSS, MaterialUI, NPM, StyledComponents, Webpack, CSS, HTML, jQuery.</span>
          </li>
          <li className='item'>
            <h2>Back-End</h2>
            <span> MySQL/MySQLWorkbench, NodeJS, Firebase, .NET, Entity Framework/Core, Jest, Postman.</span>
          </li>
          <li className='item'>
            <h2>Languages</h2>
            <span> JavaScript, C#</span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home