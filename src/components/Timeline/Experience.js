import React from 'react';

//Import assets
import {timelineConstant} from '../../constants/timelineConstants';

//import components
import TimelineCard from './TimelineCard';

const Experience = ({dates}) => {
    return (
        <div className='tl-content'>
            {timelineConstant.experience.map((point, index) => (
                <TimelineCard key={index} point={point} dates={dates} right={true}/>
            ))}
        </div>
    )
}

export default Experience
