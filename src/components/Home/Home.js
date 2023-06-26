import React from 'react';
import {ParallaxProvider} from 'react-scroll-parallax';
import {useSpring, a} from '@react-spring/web';

//import assets
import Hair from '../../assets/character/hair.png';
import Face from '../../assets/character/face.png';

//import components
import HomeIcons from './HomeIcons';

const Home = () => {
    const animation = useSpring({
        opacity: 1,
        from: {opacity: 0},
    });

    return (
        <main>
            <ParallaxProvider scrollAxis='vertical'>
                <a.div style={animation} className='h-animate'>
                    <div className='h-char-hair'>
                        <img src={Hair} alt='visage du personnage'/>
                    </div>

                    <div className='h-char-face'>
                        <img src={Face} alt='visage du personnage'/>
                    </div>
                </a.div>

                <HomeIcons/>
            </ParallaxProvider>
        </main>
    )
}

export default Home
