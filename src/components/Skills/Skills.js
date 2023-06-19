import React, {useEffect, useState} from 'react';
import {a, useTrail} from '@react-spring/web';

//import components
import SkillsCard from './SkillsCard';

//import constants
import {skillsConstant} from '../../constants/skillsConstant';

const Skills = () => {
    const [loading, setLoading] = useState(skillsConstant.skills.map(() => true))
    const [display, setDisplay] = useState(false)

    const trail = useTrail(skillsConstant.skills.length, {
        config: {mass: 5, tension: 2000, friction: 200},
        opacity: display ? 1 : 0,
        y: display ? 0 : 100,
        from: {opacity: 0, y: 100},
    })

    useEffect(() => {
        !loading.includes(true) && setDisplay(true)
    }, [loading])

    return (
        <main className={`skills-container ${display ? 'visible' : 'hidden'}`}>
            {trail.map(({...style}, index) => (
                <a.div className='skills-content' style={style} key={index}>
                    <SkillsCard skill={skillsConstant.skills[index]} setLoading={setLoading} index={index}/>
                </a.div>
            ))}
        </main>
    )
}

export default Skills
