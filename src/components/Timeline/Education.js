import React from 'react';

//import assets
import {timelineConstant} from '../../constants/timelineConstants';

//import components
import TimelineCard from './TimelineCard';

const Education = ({dates}) => {
    return (
        <div className='tl-content'>
            {timelineConstant.education.map((point, index) => (
                <TimelineCard key={index} point={point} dates={dates} right={false}/>
            ))}
        </div>
    )
}

export default Education
