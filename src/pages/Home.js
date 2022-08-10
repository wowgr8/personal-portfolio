import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import '../styles/Home.css';

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Howdy, I'm Cesar</h2>
        <div className='prompt'>
          <p> A driven Junior web developer pivoting from a career in customer service. Motivated to apply my interpersonal skills and passion for solving hard problems towards building trustworthy and dynamic websites.</p>
          <a href='https://github.com/wowgr8'><BsGithub /></a>
          <a href='https://www.linkedin.com/in/cesar-aug-lopez/'><BsLinkedin /></a>
          <a href='mailto:lopez.cesar.aug@gmail.com'><AiOutlineMail /></a>
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