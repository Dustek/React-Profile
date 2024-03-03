// const App = () => {
//     return (
//       <Router>
//         <Header />
//         <div>
//           <switch>
//             <Home />
//             <ProjectGallery />
//                             <Route path="/contact" component={Contact} />
//           </switch>
//         </div>
//       </Router>
//     );
// }



import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import ProjectGallery from './ProjectGallery'
import Contact from './Contact';

const App = () => {
  return (
      <Router>
          <Header />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/ProjectGallery" element={<ProjectGallery />} />
              <Route path="/contact" element={<Contact />} />
          </Routes>
      </Router>
  );
}

export default App;
