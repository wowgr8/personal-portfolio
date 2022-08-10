import React from 'react';
import ProjectItem from '../components/ProjectItem';
import CAMPY from '../assets/gif/CAMPY.gif';
import CatFish from '../assets/gif/CatFish.gif';
import '../styles/Projects.css';


function Projects() {
  return (
    <div className='projects'>
      <h1> My Personal Projects</h1>
      <div className='projectList'>
        <ProjectItem name='Campy' image={CAMPY} />
        <ProjectItem name='CatFish' image={CatFish} />
      </div>
    </div>
  )
}

export default Projects