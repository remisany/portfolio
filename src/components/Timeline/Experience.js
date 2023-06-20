import React from 'react';

//Import assets
import {timelineConstant} from "../../constants/timelineConstants";

const Experience = () => {
    return (
        <div className='tl-content'>
            {timelineConstant.experience.map((point, index) => (
                <div className={`tl-child tl-child-${point.size} ${point.title === '' ? 'tl-child-hidden' : ''}`} key={index}>
                    {point.title}
                </div>
            ))}
        </div>
    )
}

export default Experience
