import React, {useEffect, useState} from 'react';

//import components
import Experience from "./Experience";
import Education from "./Education";
import Date from "./Date";

const Timeline = () => {
    const [scroll, setScroll] = useState(false)
    const [dates, setDates] = useState([])

    useEffect(() => {
        window.scrollTo(0, 0);
        setScroll(true)
    }, [])

    return (
        scroll && <main className='tl-container'>
            <Education dates={dates}/>
            <Date dates={dates} setDates={setDates}/>
            <Experience dates={dates}/>
        </main>
    )
}

export default Timeline
