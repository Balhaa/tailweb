import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./Home'));
const Product = lazy(() => import('./Product'));
const Navbar = lazy(() => import('./Navbar'));
const About = lazy(() => import('./About'));
const Profil = lazy(() => import('./Profil'));


const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Product" element={<Product />} />      
        <Route path="/Navbar" element={<Navbar />} />
        <Route path="/About" element={<About />} />
        <Route path="/Profil" element={<Profil />} />
      </Routes>
    </Suspense>
  </Router>
);

export default App;