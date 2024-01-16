/* pertama membuat folder react di dalam nya folder tailweb,
 install react-router-dom, kemudian membuat routing konstanta pada app.js*/
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { ImageList } from './ImageGallery';

const Home = lazy(() => import('./Home'));
const Product = lazy(() => import('./Product'));
const Navbar = lazy(() => import('./Navbar'));
const About = lazy(() => import('./About'));
const Profil = lazy(() => import('./Profil'));

/* 5 komp tidak semuanya langsung dijalankan saat dimuat tetapi hanya yg dipanggil saja lalu menjalankannya.
routing yang dibutuhkan 5.*/

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