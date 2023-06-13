import React, {lazy, Suspense} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

//import components
const Home = lazy(() => import('./Home/Home'));
const About = lazy(() => import('./About/About'));
const NavBar = lazy(() => import('./commons/NavBar'));
const Journey = lazy(() => import('./Journey/Journey'));
const Skills = lazy(() => import('./Skills/Skills'));
const Projects = lazy(() => import('./Projects/Projects'));

const Router = () => {
    return (
        <BrowserRouter>
            <NavBar/>
            <Suspense fallback={null}>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/mon-parcours' element={<Journey/>}/>
                    <Route path='/mes-competences' element={<Skills/>}/>
                    <Route path='/mes-projets' element={<Projects/>}/>
                    <Route path='/a-propos' element={<About/>}/>
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}

export default Router
