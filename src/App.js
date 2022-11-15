import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container, Typography } from '@mui/material';
import Navbar from './Component/Navbar/Navbar';
import Home from "./Component/Home/Home";
import Symptoms from "./Component/Symptoms/Symptoms";
import Disease from "./Component/Disease/Disease";
import Doctor from "./Component/Doctor/Doctor";
import Guidelines from "./Component/Guidelines/Guidelines";
import axios from 'axios';
import Footer from './Component/Footer/Footer'
import "./index.css"

function App() {

  return (
    <div>
    <BrowserRouter>
      <Navbar />
      <Container maxWidth='xl'>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/symptoms' exact element={<Symptoms />} />
          <Route path='/disease' exact element={<Disease />} />
          <Route path='/doctor' exact element={<Doctor />} />
          <Route path='/guidelines' exact element={<Guidelines />} />
        </Routes>
      </Container>
        <Footer/>
    </BrowserRouter>
</div>
  )
}

export default App