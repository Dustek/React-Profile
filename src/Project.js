import React, { useState } from 'react';
import schedulerImage from './images/scheduler.jpg';

import './style/project.css'

const Project = ({ project }) => {
    const [isHovered, setIsHovered] = useState(false); // State to track hover state

    const handleMouseEnter = () => {
        setIsHovered(true); // Set hover state to true when mouse enters
    }

    const handleMouseLeave = () => {
        setIsHovered(false); // Set hover state to false when mouse leaves
    }


    const imageMap = {
        "scheduler.jpg": schedulerImage
    };
    return (
        <div className="project-item">
            <h3>{project.title}</h3>
            <p className={`deployed-version ${isHovered ? 'show' : ''}`}>
                <a href={project.deployedLink}>Deployed Version</a>
            </p>
            <p className={`github-repository ${isHovered ? 'show' : ''}`}>
                <a href={project.githubLink}>GitHub Repository</a>
            </p>
            <div className="image-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <img src={imageMap[project.image]} alt={project.title} className="project-image" />
            </div>
        </div>
    );
}

export default Project;