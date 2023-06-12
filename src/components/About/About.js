import React, {Fragment} from 'react';
import {useNavigate} from 'react-router-dom';
import {Fade} from 'react-awesome-reveal';

//import assets
import Left from '../../assets/character/left2.png'

//import constants
import {aboutConstants} from '../../constants/aboutConstants';

//import components
import AboutIcons from "./AboutIcons";

const About = () => {
    const navigate = useNavigate()

    const redirect = (blank, url) => {
        blank ? window.open(url, '_blank') : navigate(url)
    }
    
    return (
        <main className='a-container'>
            <Fade direction='left'>
                <div className='a-char'>
                    <img src={Left} alt='left part of the character'/>
                </div>
            </Fade>

            <div className='a-text-container'>
                {aboutConstants.texts(redirect).map((text, index) =>
                    <Fragment key={index}>{text}</Fragment>)}
            </div>

            <AboutIcons/>
        </main>
    )
}

export default About
