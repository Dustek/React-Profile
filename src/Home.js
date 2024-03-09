import React from 'react';
import forestFaceImage from './images/forest_face.jpg';
import './style/home.css';

const Home = () => {
    return (
        <section id="home">
            <div className="container">
                <div className="content">
                    <div className="image-container">
                        <img src={forestFaceImage} alt="headshot with forest" className="centered-image" />
                    </div>
                    <h1 className= "text" id = "intro">Hi, I’m Vytas, Nice to meet you.</h1>
                    <p className= "text" id = "content">Since beginning my journey as a front-end developer I've learned many things. From Bootstrap to React, I am always eager to learn and apply more knowledge.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Home;