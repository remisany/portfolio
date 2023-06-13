import React from 'react';
import {useSpring, a} from "@react-spring/web";

//import assets
import Left from '../../assets/character/left2.png'

//import components
import AboutIcons from "./AboutIcons";
import AboutTexts from "./AboutTexts";

const About = () => {
    const spring = useSpring({
        x: 0,
        opacity: 1,
        from: {x: -250, opacity: 0},
    });

    return (
        <main className='a-container'>
            <a.div className='a-char' style={spring}>
                <img src={Left} alt='left part of the character'/>
            </a.div>

            <div>
                <AboutTexts/>
                <AboutIcons/>
            </div>
        </main>
    )
}

export default About
