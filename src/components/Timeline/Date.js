import React from 'react';

//Import assets
import {timelineConstant} from "../../constants/timelineConstants";

const Date = () => {
    return (
        <div className='tl-content dt-content'>
            {timelineConstant.date.map((point, index) => (
                <div className='dt-container' key={index}>
                    <div className='dt-date'>{point}</div>
                </div>
            ))}
        </div>
    )
}

export default Date
