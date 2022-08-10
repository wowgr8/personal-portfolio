import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hello, this is an about me placeholder</h2>
        <div className='prompt'>
          <p> A driven Junior web developer pivoting from a career in customer service. Motivated to apply my interpersonal skills and passion for solving hard problems towards building trustworthy and dynamic websites.</p>
          <a href='https://github.com/wowgr8'><BsGithub /></a>
          <a href='https://www.linkedin.com/in/cesar-aug-lopez/'><BsLinkedin /></a>
          <a href='mailto:lopez.cesar.aug@gmail.com'><AiOutlineMail /></a>
        </div>
      </div>
      <div className='skills'>

      </div>
    </div>
  )
}

export default Home