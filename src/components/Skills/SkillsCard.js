import React, {useState} from 'react';
import {useSpring, a} from '@react-spring/web'

const SkillsCard = ({skill, setLoading, index}) => {
    const [flip, setFlip] = useState(false)

    const {transform, opacity} = useSpring({
        opacity: flip ? 1 : 0,
        transform: `perspective(600px) rotateX(${flip ? 180 : 0}deg)`,
        config: {mass: 5, tension: 500, friction: 80}
    })

    return (
        <div className='sc-container' onClick={() => setFlip(prev => !prev)}>
            <a.div className='sc-front sc-content' style={{opacity: opacity.to(o => 1 - o), transform}}>
                <div className='sc-title' >{skill.title}</div>
                <img src={skill.icon} alt={skill.alt} onLoad={() => {
                    setLoading(prev => {
                        const updatedLoading = [...prev]
                        updatedLoading[index] = false
                        return updatedLoading
                    })
                }}/>
            </a.div>
            <a.div className='sc-back sc-content' style={{opacity, transform, rotateX: '180deg'}}>
                <div className='sc-title'>{skill.title}</div>
                {skill.tags.map((tag, index) => (
                    <div className='sc-tags' key={index}>{tag}</div>
                ))}
            </a.div>
        </div>
    )
}

export default SkillsCard
