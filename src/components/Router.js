import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

//import components
import Home from './Home/Home';
import About from './About/About';
import NavBar from './commons/NavBar';
import Journey from './Journey/Journey';
import Skills from './Skills/Skills';
import Projects from './Projects/Projects';

const Router = () => {
    return (
        <BrowserRouter>
            <NavBar/>

            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/mon-parcours' element={<Journey/>}/>
                <Route path='/mes-competences' element={<Skills/>}/>
                <Route path='/mes-projets' element={<Projects/>}/>
                <Route path='/a-propos' element={<About/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router
