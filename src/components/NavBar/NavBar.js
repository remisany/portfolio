import React, {useEffect, useRef} from 'react';
import {ReactSVG} from 'react-svg';
import {Player} from '@lottiefiles/react-lottie-player';
import {useNavigate} from 'react-router-dom';
import {saveAs} from 'file-saver';

//import assets
import CV from '../../assets/icons/cv.svg'
import Hi from '../../assets/animations/hi.json'
import PDFCV from '../../assets/pdf/CV_SANY.pdf';

//import components
import Title from './Title';

const NavBar = () => {
    const playerRef = useRef()

    const navigate = useNavigate()

    useEffect(() => {
        const interval = setInterval(() => playerRef.current.play(), 10000)

        return () => clearInterval(interval)
    }, [])

    const downloadPDF = () => {
        saveAs(PDFCV, 'CV_SANY.pdf')
    }

    return (
        <nav className='nb'>
            <div className='nb-container'>
                <h1 className='nb-title' onClick={() => navigate('/')}>Rémi Sany</h1>

                <Title/>

                <div className='nb-end'>
                    <ReactSVG className='nb-end-icon' src={CV} onClick={() => downloadPDF()}></ReactSVG>
                    <div className='nb-end-anim' onClick={() => navigate('/a-propos')} onMouseEnter={() => playerRef.current.play()}>
                        <Player ref={playerRef} src={Hi}/>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
