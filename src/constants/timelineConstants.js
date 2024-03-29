//import assets
import OC from '../assets/icons/oc.png';
import Cesi from '../assets/icons/cesi.png';
import UCBL from '../assets/icons/ucbl.png';
import Spie from '../assets/icons/spie.png';
import Safran from '../assets/icons/safran.png';
import CIB from '../assets/icons/cib.png';
import RS from '../assets/icons/rs.png'
import EDAA from '../assets/icons/EDAA.png'
import SCANTECH from '../assets/icons/scantech.png'

const education = [
    {key: '2014', icon: {src: "", alt: ""}, title: "", datePlace: [], description: [], link: false, size: '1'},
    {
        key: '2014',
        icon: {src: UCBL, alt: "logo UCBL"},
        title: "Diplôme universitaire de technologie",
        datePlace: ["Sept. 2014 - Août 2017", "Université Claude Bernard Lyon 1", "Villeurbanne (69100)"],
        description: ["Spécialité Génie Electrique et Informatique Industrielle.", "DUT réalisé en 3 ans avec année de césure en entreprise."],
        link: false,
        size: '6'
    },
    {
        key: '2017',
        icon: {src: Cesi, alt: "logo Cesi"},
        title: "Diplôme d'ingénieur",
        datePlace: ["Sept. 2017 - Oct. 2020", "CESI Toulouse", "Labège (31670)"],
        description: ["Spécialité Systèmes Électriques et Électroniques Embarqués.", "Option 3ème année : mécatronique.", "Formation d’ingénieur en apprentissage."],
        link: false,
        size: '6'
    },
    {key: '2020', icon: {src: "", alt: ""}, title: "", datePlace: [], description: [], link: false, size: '1'},
    {
        key: '2021',
        icon: {src: OC, alt: "logo OpenClassroom"},
        title: "Certification professionnelle",
        datePlace: ["Janv. 2021 - Oct. 2021", "OpenClassroom", "À distance"],
        description: ["Certification professionnelle « Développeur concepteur logiciel »."],
        link: true,
        size: '4'
    },
    {
        key: '2021',
        icon: {src: EDAA, alt: "logo EDAA"},
        title: "Formation graphiste",
        datePlace: ["Oct. 2021 - ...", "EDAA", "À distance"],
        description: ["Formation de graphiste dispensée par l'École D'Art Appliqués à distance.", "Apprentissage des notions et outils liés au graphisme.", "Convaincu de l'importance de la conception graphique dans le domaine du développement front-end, je poursuis activement ma formation pour enrichir mes compétences dans ce domaine."],
        link: false,
        size: '8'
    },
    {key: '2023', icon: {src: "", alt: ""}, title: "", datePlace: [], description: [], link: false, size: '2'},
]

const experience = [
    {key: '2014', icon: {src: "", alt: ""}, title: "", datePlace: [], description: [], link: false, size: '3'},
    {
        key: '2015',
        icon: {src: Spie, alt: "logo Spie"},
        title: "Technicien, dessinateur-projeteur",
        datePlace: ["Sept. 2015 - Août. 2017", "SPIE Sud-est", "Feyzin (69320)"],
        description: ["DUT réalisé en 3 ans avec année de césure en entreprise.", "Installation et maintenances de systèmes électriques.", "Mise en service d’installation.", "Diagnostique de pannes.", "Réalisation et pilotage des essais.", "Dessinateur-projeteur en bureau d’études."],
        link: false,
        size: '4'
    },
    {
        key: '2017',
        icon: {src: Safran, alt: "logo Safran"},
        title: "Ingénieur électrotechnique",
        datePlace: ["Sept. 2017 - Oct. 2020", "Safran Ventilation System", "Blagnac (31700)"],
        description: ["Formation d’ingénieur en apprentissage.", "Conception de moteurs synchrones, asynchrones et de fonctions électrotechniques.", "Calculs analytiques.", "Développement d’outils d’aide au dimensionnement.", "Projet de fin d'étude : « Optimisation du rendement d’une chaîne de traction électrique »."],
        link: false,
        size: '6'
    },
    {key: '2020', icon: {src: "", alt: ""}, title: "", datePlace: [], description: [], link: false, size: '1'},
    {
        key: '2021',
        icon: {src: OC, alt: "logo OpenClassroom"},
        title: "Développeur front-end",
        datePlace: ["Janv. 2021 - Oct. 2021", "OpenClassroom", "À distance"],
        description: ["Réalisation de 14 projets afin d’obtenir la certification professionnelle « Développeur concepteur logiciel ».", "Projets réalisés en autonomie appuyés par un mentor.", "Nécessité de valider chaque projet avec une soutenance oral."],
        link: true,
        size: '4'
    },
    {
        key: '2021',
        icon: {src: CIB, alt: "logo CIB"},
        title: "Ingénieur développeur front-end",
        datePlace: ["Nov. 2021 - Oct. 2022", "CIB Ingénierie", "Villeurbanne (69100)"],
        description: ["Réalisation de projets en agilité avec un développeur back-end et un développeur android.", "Responsable du développement front-end.", "Formation d'un alternant.", "NOMAD : Solution de caisse mobile (back-office). Projet développé en React (javascript)", "WALLEETY : Portefeuille électronique (back-office). Projet développé from scratch en React (typescript).", "EASYTIPS : Solution de pourboires (back-office). Templating TWIG, javascript, JQuery.",],
        link: true,
        size: '5'
    },
    {
        key: '2022',
        icon: {src: RS, alt: "logo rémi sany"},
        title: "Développeur full-stack",
        datePlace: ["Nov. 2022 - ...", "Rémi Sany (Freelance)", "Chaponost (69630)"],
        description: ["Création d’une plateforme destinée aux métiers du paramédical. Développement de l’entièreté du projet en autonomie : front-end et back-end (MERN Stack App).", "Création d'un musée en WEB VR (A-Frame). Projet développé en React (javascript). Application PWA (Progressive Web App).", "Développement d'application. Projet développé en React Native (typescript) pour Web et Android. Back- end avec Apollo Server."],
        link: true,
        size: '3'
    },
    {
        key: '2024',
        icon: {src: SCANTECH, alt: "logo scantech"},
        title: "Ingénieur développeur front-end",
        datePlace: ["Déc. 2024 - ...", "Scantech", "La Motte-Servolex (73290)"],
        description: ["Développement d’une application de visualisation de données pour des lignes de production à destination de l’industrie. Développement en React (javascript). Projet en équipe avec beaucoup d’interaction entre les différentes spécialités."],
        link: true,
        size: '2'
    }
]

const date = ['2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024']

export const timelineConstant = {
    education: education,
    experience: experience,
    date: date
}
