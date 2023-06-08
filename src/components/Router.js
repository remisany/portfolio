import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

//import components
import Home from './Home/Home';
import About from './About/About';
import NavBar from './commons/NavBar';

const Router = () => {
    return (
        <BrowserRouter>
            <NavBar/>

            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/a-propos' element={<About/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router
