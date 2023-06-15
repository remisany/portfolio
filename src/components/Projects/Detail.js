import React, {useEffect, useState} from 'react';
import {useSpring, a} from '@react-spring/web';

//import constants
import {projectsConstant} from '../../constants/projectsConstant';

const Detail = ({index, display}) => {
    const [project, setProject] = useState(projectsConstant.projects[index])

    const animation = useSpring({
        opacity: display ? 1 : 0,
        scale: display ? 1 : 0.96,
        from: {scale: 0.6, opacity: 0},
    });

    useEffect(() => {
        setProject(projectsConstant.projects[index])
    }, [index])

    return (
        <a.div className='d-container' style={animation}>
            <div className='d-tag-container'>
                {project.tags.map((tag, index) => <div className='d-tag' key={index}>{tag}</div>)}
            </div>

            <div className='d-description-container'>
                <div>
                    {project.descriptions.map((description, index) => <div className='d-description' dangerouslySetInnerHTML={{__html: description}} key={index}></div>)}
                </div>

                <div className='d-description-link'>
                    <span onClick={() => window.open(project.link.url, '_blank')}>{project.link.title}</span>
                    {project.link.email && ' (Email : ' + project.link.email + ' - Mot de passe : ' + project.link.password + ')'}
                </div>
            </div>
        </a.div>
    )
}

export default Detail
