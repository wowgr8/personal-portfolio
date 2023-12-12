import React from 'react';
import { Element } from 'react-scroll';
import ProjectItem from '../components/ProjectItem';
import { ProjectList } from '../helpers/ProjectList';
import '../styles/Projects.css';


function Projects() {
  return (
    <Element name="projects">
      <div className='projects'>
        <h1 className='font-bold text-6xl mb-12'> My Projects</h1>
        <div className='projectList'>
          {ProjectList.map((project, index) => {
            return <ProjectItem key={index} name={project.name} image={project.image} />;
          })}
        </div>
      </div>
    </Element>
  )
}

export default Projects