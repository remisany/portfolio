import {ReactSVG} from 'react-svg';

//import assets
import Phone from '../assets/icons/phone.svg';
import Mail from '../assets/icons/mail.svg';
import Linkedin from '../assets/icons/linkedin.svg';

function texts (redirect) {
    return [
        <div>Moi, c’est <span>Rémi</span>. J’étais ingénieur dans l’électrotechnique, puis, je me suis posé la question <span>« comment fait-on une page internet ? »</span>. Depuis, je suis tombé dans le développement web et n’en suis jamais reparti. Passionné par la conception graphique, j'ai naturellement choisi de me spécialiser dans le <span className='a-text-link' onClick={() => redirect(false, '/mon-parcours')}>développement front-end.</span></div>,
        <div>J’ai également acquis des <span className='a-text-link' onClick={() => redirect(false, '/mes-competences')}>compétences en back-end</span>. Cela m’était indispensable pour créer <span className='a-text-link' onClick={() => redirect(true, 'https://orthotrainement.fr/')}>mon plus gros projet personnel</span> : une plateforme d’exercices pour aider les orthoptistes à la rééducation de patients atteints de trouble de l’apprentissage.</div>,
        <div>Aussi, depuis ma visite à l’exposition « Horizon VR » organisée par le centre PHI de Montréal, je suis <span>« tombé en amour » pour la réalité virtuelle </span>. À mon sens, cette technologie permet et permettra d’associer le développement informatique, avec le graphisme et l’art en général. Pour appréhender cette nouvelle notion, <span className='a-text-link' onClick={() => redirect(true, 'https://museeaxelia.fr/')}>j’ai créé un musée en WEB VR</span>, exposant quatre séries de photographies.</div>,
        <div>J’ai également réalisé <span className='a-text-link' onClick={() => redirect(false, '/mes-projets')}>d’autres projets</span>, mais j’ai souhaité mettre en avant ces deux-là car <span>ils représentent ce qui me définit et ce que j’apprécie le plus dans le développement</span> : autonomie, défi, rigueur, persévérance et apprentissage.</div>,
        <div>J’espère que ce court texte a réussi à vous transmettre <span>l’énergie, la passion et toute la soif d'apprendre qui m’animent</span>. Si mon profil, mon expérience et mes projets suscitent votre intérêt, n'hésitez pas à <span>me contacter via les médias suivants</span>. Je serais ravi d'échanger avec vous et d'envisager de nouvelles opportunités de collaboration.</div>
    ]
}

function icons () {
    return [
        <div className='ai-icon-container'>
            <ReactSVG className='ai-icon' src={Phone}></ReactSVG>
            <p>+33 6 41 98 09 21</p>
        </div>,
        <a className='ai-icon-container ai-icon-container-clickable' href='mailto:remi.sany@laposte.net'>
            <ReactSVG className='ai-icon' src={Mail}></ReactSVG>
            <p>remi.sany@laposte.net</p>
        </a>,
        <div className='ai-icon-container ai-icon-container-clickable' onClick={() => window.open('https://www.linkedin.com/in/remi-sany/', '_blank')}>
            <ReactSVG className='ai-icon' src={Linkedin}></ReactSVG>
            <p>/rémi-sany</p>
        </div>
    ]
}

export const aboutConstant = {
    texts: texts,
    icons: icons
}
