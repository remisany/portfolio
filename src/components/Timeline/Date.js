import React, {useEffect, useRef} from 'react';
import {useSpring, a} from '@react-spring/web';

//Import assets
import {timelineConstant} from '../../constants/timelineConstants';

const Date = ({dates, setDates}) => {
    const markerRef = useRef(null)
    const dateRefs = useRef([])

    const spring = useSpring({
        y: 0,
        opacity: 1,
        from: {y: -500, opacity: 0},
        config: {duration: 600},
        onRest: () => {
            detectCollision()
        }
    });

    const detectCollision = () => {
        const markerRect = markerRef.current.getBoundingClientRect()

        dateRefs.current.forEach((dateRef, index) => {
            const dateRect = dateRef.getBoundingClientRect()
            const newDate = timelineConstant.date[index]

            if (markerRect.bottom >= dateRect.top) {
                !dates.includes(newDate) && setDates(prev => [...prev, newDate])
            } else {
                if (dates.includes(newDate)) {
                    const updatedDates = dates.filter(date => date !== newDate);
                    setDates(updatedDates);
                }
            }
        })
    }

    useEffect(() => {
        window.addEventListener('scroll', detectCollision)

        return () => window.removeEventListener('scroll', detectCollision)
    }, [dates])

    return (
        <div className='tl-content dt-content'>
            {timelineConstant.date.map((point, index) => {
                return(
                    <div className={`dt-container ${point === '2021' ? 'dt-container-8' : ''}`} key={index}>
                        <div
                            className={`dt-date ${dates.includes(point) ? 'dt-date-active' : ''}`}
                            ref={ref => (dateRefs.current[index] = ref)}>{point}
                        </div>
                    </div>
                )
            })}

            <a.div className='tl-marker' ref={markerRef} style={spring}></a.div>
        </div>
    )
}

export default Date
