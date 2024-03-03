import React from 'react';
import Header from './Header';
import Home from './Home';
import ProjectGallery from './ProjectGallery'

const App = () => {
    return (
        <div>
            <Header />
            <Home />
            <ProjectGallery />
            {/* Other components and content */}
        </div>
    );
}

export default App;