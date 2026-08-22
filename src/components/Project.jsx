import React from 'react'

import '../css_File/Project.css';

const Project = () => {

    const projectArr = [
        {
            image: "/taxi_Project.jpeg",
            href:'https://amravatitaxi.vercel.app/' 
        },
        {
            image: "/travel.jpeg",
            href:'https://bakhadepurvesh.github.io/Travelweb/' 
        },
        {
            image: "/taxi_Project.jpeg",
            href:'https://amravatitaxi.vercel.app/' 
        },
        {
            image: "/travel.jpeg",
            href:'https://bakhadepurvesh.github.io/Travelweb/' 
        },
    ];

  return (
    <div className='project-section'>
           <h2>My Projects</h2>
        <div className='project-container'>

            {projectArr.map((project, index) => (

                <div className='project-card' key={index}>
                    <a href={project.href} target='_blank'>
                        <div className='project-image'>
                            <img src={project.image} alt="Project" />
                                <div className="live-demo">
                                    View Live Demo
                                </div>
                        </div>
                    </a>
                </div>
            ))} 
        </div>
    </div>
  )
}

export default Project ;