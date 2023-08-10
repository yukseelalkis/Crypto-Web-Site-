import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Featured from './components/Featured';
import Buy from './components/Buy';
import Footer from './components/Footer';
import CreateAccount from './components/createaccount';
import Login from './components/login';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [currentRoute, setCurrentRoute] = useState('/');

  function handleHomeClick() {
    setCurrentRoute('/');
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/createaccount" element={<CreateAccount />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={
          <>
            <Hero />
            <Featured />
            <Buy />
              
          </>
        } />
        <Route exact path="/home" element={
          <>
            <Hero />
            <Featured />
            <Buy />
      
          </>
        } />
      </Routes>
       <Footer />
      
    </>
  );
}

export default App;