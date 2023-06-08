import React, {useEffect} from 'react';
import {ReactSVG} from 'react-svg';
import {Parallax, ParallaxProvider} from 'react-scroll-parallax';

//import assets
import Hair from '../../assets/character/hair.svg';
import Face from '../../assets/character/face.svg';

//import components
import HomeIcons from './HomeIcons';

const Home = () => {
    useEffect(() => {
       window.scrollTo(0, 0)
    }, [])

    return (
        <main>
            <ParallaxProvider scrollAxis='vertical'>
                <div className='h-parallax'>
                    <div className='h-char'>
                        <Parallax translateY={[100, -100]} className='h-char-translate'>
                            <ReactSVG className='h-char-top' src={Hair}></ReactSVG>
                        </Parallax>
                        <ReactSVG className='h-char-bottom' src={Face}></ReactSVG>
                    </div>

                    <HomeIcons/>
                </div>
            </ParallaxProvider>
        </main>
    )
}

export default Home
