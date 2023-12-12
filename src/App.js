import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// import ProjectDisplay from './pages/ProjectDisplay';
import '../src/App.css'

function App() {
  return (
    <main className="flex min-h-screen flex-col  bg-blue-950">
      <Router>
        <Navbar />
        <div className="container mt-24 mx-auto px-12 py-4" >
          <Home />
        
          <Projects />
          <Experience />
        </div>
        <Footer />
      </Router>
    </main>
  );
}

export default App;

        {/* <Routes className="container mt-24 mx-auto px-12 py-4">
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectDisplay />} />
          <Route path="/experience" element={<Experience />} />
        </Routes> */}