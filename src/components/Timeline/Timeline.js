import React from 'react';

//import components
import Experience from "./Experience";
import Education from "./Education";
import Date from "./Date";

const Timeline = () => {
    return (
        <main className='tl-container'>
            <Education/>
            <Date/>
            <Experience/>
        </main>
    )
}

export default Timeline
