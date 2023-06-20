import React from 'react';

//Import assets
import {timelineConstant} from "../../constants/timelineConstants";

const Date = () => {
    return (
        <div className='tl-content'>
            {timelineConstant.date.map((point, index) => (
                <div className='dt-container' key={index}>{point}</div>
            ))}
        </div>
    )
}

export default Date
