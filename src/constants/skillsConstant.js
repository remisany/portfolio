//import assets
import Front from '../assets/character/front.png';
import Back from '../assets/character/back.png';
import Tools from '../assets/character/tools.png';
import Soft from '../assets/character/soft.png';

const skills = [
    {
        title: 'Front-end',
        tags: ['Animations', 'Javascript', 'jQuery', 'React', 'React Native', 'React Testing Library', 'Redux', 'Requêtes API', 'Responsive design', 'Sass', 'Templating : TWIG, EJS', 'Three.js', 'Typescript', 'WebVR : A-Frame'],
        icon: Front,
        alt: "personnage de face"
    },
    {
        title: 'Back-end',
        tags: ['API RESTful', 'Firebase', 'Express.js', 'GraphQL', 'MongoDB', 'Node.js'],
        icon: Back,
        alt: "personnage de dos"
    },
    {
        title: 'Outils',
        tags: ['Adobe Illustrator', 'Adobe InDesign', 'Adobe Photoshop', 'Expo', 'Jira', 'Postman', 'Versionning : Git', 'Webstorm'],
        icon: Tools,
        alt: "personnage habillé en bricoleur"
    },
    {
        title: 'Soft skills',
        tags: ['Anglais : TOIEC 850 en 2020', 'Autonomie', 'Curiosité', 'Esprit créatif', 'Méthode agile : SCRUM', 'Persévérance', 'Rigueur', 'Volonté d’apprendre'],
        icon: Soft,
        alt: "personnage représentant les soft skills"
    }
]

export const skillsConstant = {
    skills: skills
}
