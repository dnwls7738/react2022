import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Main from "./components/pages/Main"
import About from "./components/pages/About"
import Reference from "./components/pages/Reference"
import Movie from "./components/pages/Movie"
import Youtube from "./components/pages/Youtube"
import Contact from "./components/pages/Contact"
import Portfolio from "./components/pages/Portfolio"
import ReferDetail from "./components/pages/ReferDetail"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/reference" element={<Reference />} />
        <Route path="/refer-detail" element={<ReferDetail />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/youtube" element={<Youtube />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </Router>
  );
}

export default App;
