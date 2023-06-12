import {Fade} from 'react-awesome-reveal';

import Linkedin from '../assets/icons/linkedin.svg';
import Mail from '../assets/icons/mail.svg';
import Phone from '../assets/icons/phone.svg'

function text (redirect) {
    return [
        <Fade direction='up'><div>Moi, c’est <span>Rémi</span>. J’étais ingénieur dans l’électrotechnique, puis, je me suis posé la question <span>« comment fait-on une page internet ? »</span>. Depuis, je suis tombé dans le développement web et n’en suis jamais reparti. Passionné par la conception graphique, j'ai naturellement choisi de me spécialiser dans le <span className='a-text-link' onClick={() => redirect(false, '/mon-parcours')}>développement front-end.</span></div></Fade>,
        <Fade direction='up' delay={300}><div>J’ai également acquis des <span className='a-text-link' onClick={() => redirect(false, '/mes-competences')}>compétences en back-end</span>. Cela m’était indispensable pour créer <span className='a-text-link' onClick={() => redirect(true, 'https://orthotrainement.fr/')}>mon plus gros projet personnel</span> : une plateforme d’exercices pour aider les orthoptistes à la rééducation de patients atteints de trouble de l’apprentissage.</div></Fade>,
        <Fade direction='up' delay={600}><div>Aussi, depuis ma visite à l’exposition « Horizon VR » organisée par le centre PHI de Montréal, je suis <span>« tombé en amour » pour la réalité virtuelle </span>. À mon sens, cette technologie permet et permettra d’associer le développement informatique, avec le graphisme et l’art en général. Pour appréhender cette nouvelle notion, <span className='a-text-link' onClick={() => redirect(true, 'https://museeaxelia.fr/')}>j’ai créé un musée en WEB VR</span>, exposant quatre séries de photographies.</div></Fade>,
        <Fade direction='up' delay={900}><div>J’ai également réalisé <span className='a-text-link' onClick={() => redirect(false, '/mes-projets')}>d’autres projets</span>, mais j’ai souhaité mettre en avant ces deux-là car <span>ils représentent ce qui me définit et ce que j’apprécie le plus dans le développement</span> : autonomie, défi, rigueur, persévérance et apprentissage.</div></Fade>,
        <Fade direction='up' delay={1100}><div>J’espère que ce court texte a réussi à vous transmettre <span>l’énergie, la passion et toute la soif d'apprendre qui m’animent</span>. Si mon profil, mon expérience et mes projets suscitent votre intérêt, n'hésitez pas à <span>me contacter via les médias suivants</span>. Je serais ravi d'échanger avec vous et d'envisager de nouvelles opportunités de collaboration.</div></Fade>
    ]
}

function icons (redirect) {
    return [
        {icon: Phone, text: '+33 6 41 98 09 21'},
        {icon: Mail, text: 'remi.sany@laposte.net'},
        {icon: Linkedin, text: '/rémi-sany'}
    ]
}

export const aboutConstants = {
    texts: text,
    icons: icons
}
