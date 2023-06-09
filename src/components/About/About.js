import React, {useEffect, useState} from 'react';
import {useSpring, a} from '@react-spring/web';

//import assets
import Left from '../../assets/character/left.png'

//import components
import AboutIcons from './AboutIcons';
import AboutTexts from './AboutTexts';

const About = () => {
    const [scroll, setScroll] = useState(false)
    
    const animation = useSpring({
        x: 0,
        opacity: 1,
        from: {x: -250, opacity: 0},
    });

    useEffect(() => {
        window.scrollTo(0, 0);
        setScroll(true)
    }, [])

    return (
        scroll && <main className='a-container'>
            <a.div className='a-char' style={animation}>
                <img src={Left} alt='partie gauche du visage du personnage'/>
            </a.div>

            <div className='a-container-right'>
                <AboutTexts/>
                <AboutIcons/>
            </div>
        </main>
    )
}

export default About
