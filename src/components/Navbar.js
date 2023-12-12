import React, { useEffect, useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { Divide as Hamburger } from 'hamburger-react';

function Navbar() {

  const [expandNavbar, setExpandNavbar ] = useState(false);
  // const location = useLocation();

  // useEffect(()=> {
  //   setExpandNavbar(false)
  // },[location])

  return (
    <main className="navbar bg-red-300 " id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        {/* <button onClick={() => {setExpandNavbar((prev) => !prev);}}>
          <Hamburger toggled={expandNavbar} toggle={location} />
        </button> */}
      </div>

      <ul className="flex">
        <li className="mr-6">
          <ScrollLink to="home" smooth={true} duration={500}>
            Home
          </ScrollLink>
        </li>
        <li className="mr-6">
          <ScrollLink to="projects" smooth={true} duration={500}>
            Projects
          </ScrollLink>
        </li>
        <li className="mr-6">
          <ScrollLink to="experience" smooth={true} duration={500}>
            Experience
          </ScrollLink>
        </li>
      </ul>
    </main>
  )
}

export default Navbar

      {/* <div className='links'>
        <Link to='/'> Home </Link>
        <Link to='/projects'> Projects </Link>
        <Link to='/experience'> Experience </Link>
      </div> */}