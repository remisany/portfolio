import React, {useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';
import {useTransition, a, useSpringRef} from '@react-spring/web';

//import constants
import {navbarConstant} from "../../constants/navbarConstant";

const Title = () => {
    const [currentPath, setCurrentPath] = useState('');

    const location = useLocation()

    const transRef = useSpringRef()

    useEffect(() => {
        setCurrentPath(location.pathname);
    }, [location.pathname]);
    useEffect(() => {
        transRef.start()
    }, [currentPath])

    const transitions = useTransition(currentPath || '', {
        ref: transRef,
        keys: null,
        from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
        enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
        leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
    })

    return (
        <div className='nb-pathname'>
            {transitions((style, index) => (
                <a.div style={{ ...style}}>{navbarConstant.title[index]}</a.div>
            ))}
        </div>
    )
}

export default Title
