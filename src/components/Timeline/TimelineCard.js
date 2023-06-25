import React, {useEffect, useState} from 'react';
import {useSpring, a} from '@react-spring/web';
import {useNavigate} from 'react-router-dom';

const TimelineCard = ({dates, point, right}) => {
    const navigate = useNavigate()
    
    const [active, setActive] = useState(false)

    useEffect(() => {
        dates.includes(point.key) ? setActive(true) : setActive(false)
    }, [dates])

    const animation = useSpring({
        opacity: active ? 1 : 0,
        x: active ? 0 : (right ? 250 : -250),
        from: {x: right ? 250 : -250},
    });

    return (
        <a.div style={animation} className={`tl-child tl-child-${point.size} ${point.title === '' ? 'tl-child-hidden' : ''}`}>
            <div className='tl-icon'><img src={point.icon.src} alt={point.icon.alt}/></div>

            <div className='tl-text tl-title'>{point.title}</div>

            <div className='tl-text-container'>
                <div className='tl-text-first'>
                    {point.datePlace.map((detail, index) => (
                        <p className='tl-text tl-datePlace' key={index}>{detail}</p>
                    ))}
                </div>

                <div className='tl-text-last'>
                    {point.description.map((detail, index) => (
                        <p className='tl-text' key={index}>{detail}</p>
                    ))}
                    {point.link && <p className='tl-text'>
                        <span onClick={() => navigate('/mes-projets')}>Voir mes projets.</span>
                    </p>}
                </div>
            </div>
        </a.div>
    )
}

export default TimelineCard
