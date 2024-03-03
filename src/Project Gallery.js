import React from 'react';
import projectsData from './projectsData.json'; // Import project data from JSON file
import Project from './Project'; // Import Project component

const ProjectGallery = () => {
    return (
        <section id="projects">
            <div className="container">
                <h2>Project Gallery</h2>
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