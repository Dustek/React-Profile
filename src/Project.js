import React, { useState } from 'react';
import schedulerImage from './images/scheduler.jpg';
import weatherImage from './images/weather.jpg';
import teamImage from './images/team.jpg';
import quizImage from './images/quiz.jpg';
import readmeImage from './images/readme.jpg';
import movieImage from './images/movie.jpg';


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
        "scheduler.jpg": schedulerImage,
        "weather.jpg": weatherImage,
        "team.jpg": teamImage,
        "quiz.jpg": quizImage,
        "readme.jpg": readmeImage,
        "movie.jpg": movieImage
    };
    return (
        <div className="project-item">
            <h2>{project.title}</h2>
            <p className={`deployed-version ${isHovered ? 'show' : ''}`} onMouseEnter={handleMouseEnter}>
                <a href={project.deployedLink}>Deployed Version</a>
            </p>
            <p className={`github-repository ${isHovered ? 'show' : ''}`} onMouseEnter={handleMouseEnter}>
                <a href={project.githubLink}>GitHub Repository</a>
            </p>
            <div className={`image-container ${isHovered ? 'show' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <img src={imageMap[project.image]} alt={project.title} className="project-image" />
            </div>
        </div>
    );
}

export default Project;