import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Featured from './components/Featured';
import Signup from './components/Signup';
import Footer from './components/Footer';
import CreateAccount from './components/createaccount';
import Login from './components/login';
import { Route,Routes } from 'react-router-dom';

function App() {




  return (
   <>
    <Navbar/>
    <div>
      <Routes>
        <Route path='/createaccount' element={<CreateAccount/>}/>
        <Route  path='/login' element={<Login/>}/>
      </Routes>
    </div>  
    <Hero/>
    <Featured/>
    <Signup/>
    <Footer/>
   </>
  );
}

export default App;
