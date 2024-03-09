import React from 'react';
import projectsData from './projectsData'; // Import project data from JS file
import Project from './Project'; // Import Project component
import './style/ProjectGallery.css'


const ProjectGallery = () => {
    return (
        <section id="projects">
            <div className="container">
                <div className="projects-grid">
                    {projectsData.map(project => (
                        <Project key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ProjectGallery;