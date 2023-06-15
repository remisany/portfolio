import React, {useEffect, useState} from 'react';

//import constants
import {projectsConstant} from '../../constants/projectsConstant';

const Detail = ({index}) => {
    const [project, setProject] = useState(projectsConstant.projects[index])
    
    useEffect(() => {
        setProject(projectsConstant.projects[index])
    }, [index])

    return (
        <div className='d-container'>
            <div className='d-tag-container'>
                {project.tags.map((tag, index) => <div className='d-tag' key={index}>{tag}</div>)}
            </div>

            <div className='d-description-container'>
                <div>
                    {project.descriptions.map((description, index) => <div className='d-description' key={index}>{description}</div>)}
                </div>

                <div className='d-description-link' onClick={() => window.open(project.link.url, '_blank')}>
                    <span>{project.link.title}</span>
                    {project.link.email && ' (Email : ' + project.link.email + ' - Mot de passe : ' + project.link.password + ')'}
                </div>
            </div>
        </div>
    )
}

export default Detail
