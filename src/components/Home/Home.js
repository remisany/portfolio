import React from 'react';
import {ReactSVG} from 'react-svg';
import {ParallaxProvider} from 'react-scroll-parallax';

//import assets
import Hair from '../../assets/character/hair.svg';
import Face from '../../assets/character/face.svg';
import Smile from '../../assets/character/smile.svg';

//import components
import HomeIcons from './HomeIcons';

const Home = () => {
    return (
        <main>
            <ParallaxProvider scrollAxis='vertical'>
                <ReactSVG className='h-char-hair' src={Hair}></ReactSVG>
                <ReactSVG className='h-char-face' src={Face}></ReactSVG>
                <div className='h-char-smile'>
                    <img src={Smile} alt='part of the inner face of the character'/>
                </div>

                <HomeIcons/>
            </ParallaxProvider>
        </main>
    )
}

export default Home
