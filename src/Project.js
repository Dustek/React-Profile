import React from 'react';

const Project = ({ project }) => {
    return (
        <div className="project-item">
            <h3>{project.title}</h3>
            <p><a href={project.deployedLink}>Deployed Version</a></p>
            <p><a href={project.githubLink}>GitHub Repository</a></p>
            <img src={project.image} alt={project.title} />
        </div>
    );
}

export default Project;