
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header.jsx'
// import Section1 from './pages/Trp/Section1/Section1';

import Trp from './pages/Trp/Trp.jsx'
import Tours from './pages/Tours/Tours'
import Services from './pages/Services/Services.jsx'
import AboutUs from './pages/AboutUs/AboutUs.jsx'
import SignUp from './pages/SignUp/SignUp';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        {/* <Section1 /> */}
        <Routes>
          <Route exact path='/' element={<Trp />} />
          <Route path='/Tours' element={<Tours />} />
          <Route path='/srv' element={<Services />} />
          <Route path='/abus' element={<AboutUs />} />
          <Route path='/SignUp' element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
