import React from 'react';

//import assets
import {timelineConstant} from "../../constants/timelineConstants";

const Education = () => {
    return (
        <div className='tl-content'>
            {timelineConstant.education.map((point, index) => (
                <div className={`tl-child tl-child-${point.size} ${point.title === '' ? 'tl-child-hidden' : ''}`} key={index}>
                    <div className='tl-icon'><img src={point.icon.src} alt={point.icon.alt}/></div>
                    <div className='tl-text tl-title'>{point.title}</div>
                    <div className='tl-text-container'>
                        <div className='tl-text-first'>{point.datePlace.map((detail, index) => (
                            <p className='tl-text tl-datePlace' key={index}>{detail}</p>
                        ))}</div>
                        <div className='tl-text-last'>{point.description.map((detail, index) => (
                            <p className='tl-text' key={index}>{detail}</p>
                        ))}</div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Education
