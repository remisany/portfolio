import React, {useEffect, useState} from 'react';
import {useSpring, a} from "@react-spring/web";

//import components
import Carousel from './Carousel';
import Detail from './Detail';

//import assets
import Github from '../../assets/icons/github.png'
import Hand from '../../assets/character/hand.png'

const Projects = () => {
    const [index, setIndex] = useState(0)
    const [display, setDisplay] = useState(true)
    const [scroll, setScroll] = useState(false)

    const animation = useSpring({
        opacity: 1,
        from: {opacity: 0}
    });

    useEffect(() => {
        window.scrollTo(0, 0);
        setScroll(true)
    }, [])

    return (
        scroll && <main>
            <Carousel setIndex={setIndex} setDisplay={setDisplay}/>
            <Detail index={index} display={display}/>

            <a.div className='p-char-container' style={animation} onClick={() => window.open('https://github.com/remisany', '_blank')}>
                <img src={Hand} alt='main du personnage'/>
                <img className='p-char-icon' src={Github} alt='logo Github'/>
            </a.div>
        </main>
    )
}

export default Projects
