import React from 'react';
import {useSpring, a} from '@react-spring/web';

//import assets
import Left from '../../assets/character/left.png'

//import components
import AboutIcons from './AboutIcons';
import AboutTexts from './AboutTexts';

const About = () => {
    const animation = useSpring({
        x: 0,
        opacity: 1,
        from: {x: -250, opacity: 0},
    });

    return (
        <main className='a-container'>
            <a.div className='a-char' style={animation}>
                <img src={Left} alt='partie gauche du visage du personnage'/>
            </a.div>

            <div>
                <AboutTexts/>
                <AboutIcons/>
            </div>
        </main>
    )
}

export default About
