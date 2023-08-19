import React from 'react';
import './App.css';
import BottomTab from './Component/UI/BottomTab';
import TopNavBar from './Component/UI/TopNavBar';
import Home from './Component/Pages/Home';
import { Route, Routes } from 'react-router-dom';
import Contact from './Component/Pages/Contact';
import Offers from './Component/Pages/Offers';
import Products from './Component/Pages/Products';
import homeImage from "./images/homeImage.avif";

function App() {
  return (
    <div className="App">
      <TopNavBar />
      <div style={{ backgroundImage: `url(${homeImage})`, height:"90.5vh",backgroundSize:"cover"}}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contacts' element={<Contact />} />
        <Route path='/offers' element={<Offers />} />
        <Route path='/products' element={<Products />} />
      </Routes>
    </div>

      <BottomTab />
    </div>
  );
}

export default App;
