import React from 'react';
import {ReactSVG} from 'react-svg';

//import assets
import Round from '../../assets/icons/round.svg'

const Slide = ({tag, title}) => {
    return (
        <div className='s-container'>
            <ReactSVG className='s-icon' src={Round}></ReactSVG>
            <p className={`s-tag ${tag === 'Freelance' ? 's-tag-freelance' : ''}`}>{tag}</p>
            <p className='s-title'>{title}</p>
        </div>
    )
}

export default Slide
