import React from 'react';

//import assets
import {timelineConstant} from "../../constants/timelineConstants";

const Education = () => {
    return (
        <div className='tl-content'>
            {timelineConstant.education.map((point, index) => (
                <div className={`tl-child tl-child-${point.size} ${point.title === '' ? 'tl-child-hidden' : ''}`} key={index}>
                    {point.title}
                </div>
            ))}
        </div>
    )
}

export default Education
