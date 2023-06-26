import React from 'react';
import {Parallax} from 'react-scroll-parallax';
import {ReactSVG} from 'react-svg';
import {useNavigate} from 'react-router-dom';

//import assets
import Projects from '../../assets/icons/projects.svg'
import Journey from '../../assets/icons/journey.svg'
import Skills from '../../assets/icons/skills.svg'

const HomeIcons = () => {
    const navigate = useNavigate()

    return (
        <div className='hi-icons-container'>
            <Parallax className='hi-icons-parallax hi-icons-parallax-first' scale={[0, 1.5]} translateX={[50, -200]} onClick={() => navigate('/mon-parcours')}>
                <ReactSVG className='hi-icons' src={Journey}></ReactSVG>
                <div className='hi-icons-title'>Mon parcours</div>
            </Parallax>

            <Parallax className='hi-icons-parallax' scale={[0, 1.5]} onClick={() => navigate('/mes-competences')}>
                <ReactSVG className='hi-icons' src={Skills}></ReactSVG>
                <div className='hi-icons-title'>Mes compétences</div>
            </Parallax>

            <Parallax className='hi-icons-parallax hi-icons-parallax-last' scale={[0, 1.5]} translateX={[-50, 200]} onClick={() => navigate('/mes-projets')}>
                <ReactSVG className='hi-icons' src={Projects}></ReactSVG>
                <div className='hi-icons-title'>Mes projets</div>
            </Parallax>
        </div>
    )
}

export default HomeIcons
