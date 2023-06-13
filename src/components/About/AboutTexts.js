import React from 'react';
import {useNavigate} from 'react-router-dom';
import {useTrail, a} from '@react-spring/web'

//import constants
import {aboutConstants} from '../../constants/aboutConstants';

const AboutTexts = () => {
    const navigate = useNavigate()

    const redirect = (blank, url) => {
        blank ? window.open(url, '_blank') : navigate(url)
    }

    const texts = aboutConstants.texts(redirect);

    const trail = useTrail(texts.length, {
        config: {mass: 5, tension: 2000, friction: 200},
        opacity: 1,
        x: 0,
        from: {opacity: 0, x: 60},
    })
    
    return (
        <div className='a-text-container'>
            {trail.map(({...style}, index) => (
                <a.div key={index} style={style}>{texts[index]}</a.div>
            ))}
        </div>
    )
}

export default AboutTexts
