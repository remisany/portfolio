import React from 'react';
import {skillsConstant} from "../../constants/skillsConstant";

const SkillsList = () => {
    return (
        <div className='sl-container'>
            {skillsConstant.skills.map((skill, sCIndex) => (
                <div key={sCIndex} className='sl-skills-container'>
                    <div className='sl-skills-title'>{skill.title}</div>
                    {skill.tags.map((tag, sIndex) => (
                        <div className='sl-skills-tags' key={sIndex}>{tag}</div>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default SkillsList
