import React from 'react';
import {a, useTrail} from "@react-spring/web";

//import constants
import {aboutConstants} from "../../constants/aboutConstants";

const AboutIcons = () => {
    const icons = aboutConstants.icons();

    const trail = useTrail(icons.length, {
        config: {mass: 5, tension: 1500, friction: 200},
        opacity: 1,
        height: '15rem',
        from: {opacity: 0, height: '0rem'},
    })

    return (
        <div className='ai-container'>
            {trail.map(({...style }, index) => (
                <a.div key={index} style={style}>{icons[index]}</a.div>
            ))}
        </div>
    )
}

export default AboutIcons
