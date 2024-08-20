
import './App.css'
import ContentBody from './components/ContentBody/ContentBody'
import Navbar from './components/Navbar/Navbar'
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Collections from './components/Pages/Collections'
import Contact from './components/Pages/Contact'
import Men from './components/Pages/Men'
import Women from './components/Pages/Women'
import Layout from './components/Pages/Layout';
import About from './components/Pages/About';





function App() {
  return (
    <div >
      {/* <Navbar></Navbar> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route path="/" element={<ContentBody/>} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/men" element={<Men />} />
            <Route path="/women" element={<Women />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
