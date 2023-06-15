import React, {useState} from 'react';

//import components
import Carousel from './Carousel';
import Detail from './Detail';

const Projects = () => {
    const [index, setIndex] = useState(0)
    const [display, setDisplay] = useState(true)

    return (
        <main>
            <Carousel setIndex={setIndex}/>
            <Detail index={index}/>
        </main>
    )
}

export default Projects
