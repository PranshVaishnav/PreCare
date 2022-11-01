import React, { useEffect, useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Container } from '@mui/material';
import Navbar from './Component/Navbar/Navbar';
import Home from "./Component/Home/Home";
import Movies from "./Component/Movies/Movies";
import Series from "./Component/Series/Series";
import Popular from "./Component/Popular/Popular";
import Trend from "./Component/Trend/Trend";

import "./index.css"

function App() {


    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     fetch("/members")
    //         .then(
    //             (res) => res.json()
    //         )
    //         .then(
    //             (res) => {
    //                 setData(res.members)
    //             })
    // }, []);

    return (
    <BrowserRouter>
     <Navbar/>
      <Container maxWidth='xl'>
        <Routes>
          <Route path='/' exact element={<Home/>}/> 
          <Route path='/movies' exact element={<Movies/>}/>
          <Route path='/series' exact element={<Series/>}/>
          <Route path='/popular' exact element={<Popular/>}/>
          <Route path='/trend' exact element={<Trend/>}/>
        </Routes>
      </Container>
    </BrowserRouter>
    )
}

export default App