import React from 'react';
import './style/Header.css'; // Import the CSS file directly
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header"> {/* Apply the class name directly */}
            <nav className="nav"> {/* Apply the class name directly */}
                <ul>
                    <li><Link to="/" className="link">Home</Link></li> {/* Apply the class name directly */}
                    <li><Link to="/ProjectGallery" className="link">Projects</Link></li> {/* Apply the class name directly */}
                    <li><Link to="/contact" className="link">Contact</Link></li> {/* Apply the class name directly */}
                </ul>
            </nav>
        </header>
    );
}

export default Header;