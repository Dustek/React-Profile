import React from 'react';
import Header from './Header';
import Home from './Home';
import ProjectGallery from './ProjectGallery'
import Contact from './Contact'

const App = () => {
    return (
        <div>
            <Header />
            <Home />
            <ProjectGallery />
            <Contact />
            {/* Other components and content */}
        </div>
    );
}

export default App;