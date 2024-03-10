import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import ProjectGallery from './ProjectGallery'
import Contact from './Contact';
import './style/app.css'

const App = () => {
    return (
        <Router>
            <div className="app-container">
                <Header />
                <div className="content"> {/* Container for route content */}
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/ProjectGallery" element={<ProjectGallery />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;