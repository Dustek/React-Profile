import React from 'react';
import schedulerImage from './images/scheduler.jpg';

const Project = ({ project }) => {
    const imageMap = {
        "scheduler.jpg": schedulerImage
    };
    return (
        <div className="project-item">
            <h3>{project.title}</h3>
            <p><a href={project.deployedLink}>Deployed Version</a></p>
            <p><a href={project.githubLink}>GitHub Repository</a></p>
            <img src={imageMap[project.image]} alt={project.title} />
        </div>
    );
}

export default Project;