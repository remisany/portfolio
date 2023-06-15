const slides = [
    {tag: 'Freelance', title: "axelia"},
    {tag: 'CIB', title: "easytips"},
    {tag: 'CIB', title: "nomad"},
    {tag: 'Freelance', title: "orthotraînement"},
    {tag: 'CIB', title: "walleety"},
]

const projects = [
    {
        tags: ['A-Frame', 'Firebase', 'Javascript', 'Node.js', 'PWA', 'React', 'Responsive design', 'Three.js', 'WEB VR'],
        descriptions: [
            "Depuis ma visite à l’exposition « Horizon VR » organisée par le centre PHI de Montréal, je suis " +
            "« tombé en amour » pour la réalité virtuelle. Afin d’appréhender cette nouvelle notion, j’ai créé un musée " +
            "en WEB VR. Le musée Axelia propose 4 salles, très différentes les unes des autres, qui mettent en scène 4 séries " +
            "de photographies dans un environnement visuel et sonore qui leur correspondent. Le but étant de mettre en " +
            "valeur le travail de la photographe.",
            "J’ai opté pour une Progressive Web App afin de pouvoir fournir une expérience mobile proche de la réalité " +
            "virtuelle sans pour autant posséder de casque VR."
        ],
        link: {title: 'Musée Axelia', url:'https://museeaxelia.fr/'}
    },
    {
        tags: ['Javascript', 'JQuery', 'Templating: TWIG'],
        descriptions: [
            "Easytips est une solution permettant aux clients d’effectuer des pourboires directement sur les" +
            "terminaux de paiement électronique (TPE) par carte bancaire.",
            "Dans le cadre de ce projet, j’ai été chargé de développer le back-office, qui présente les différents " +
            "paiements, employés et magasins. En raison de contraintes de temps et de la compatibilité avec le back-end " +
            "développé en PHP, nous avons choisi d’utiliser le templating TWIG.",
            "Ce projet a été réalisé en collaboration avec un développeur back-end et un développeur embarqué, en " +
            "adoptant une approche agile. Mon rôle était de prendre en charge le développement front-end."
        ],
        link: {title: 'CIB Ingénierie', url: 'https://www.cib-ingenierie.fr/'}
    },
    {
        tags: ['Javascript', 'React'],
        descriptions: [
            "Nomad est une solution d’encaissement mobile.",
            "Dans le cadre de ce projet, j’ai été chargé de faire une refonte intégrale du back-office, qui offre la " +
            "possibilité de paramétrer toutes les fonctionnalités de l’application telles que les terminaux de paiement " +
            "électronique, les vendeurs, les magasins et les produits, ainsi que de visualiser les transactions. Ce " +
            "projet présentait deux défis majeurs à relever. Le premier consistait à réécrire intégralement le code en " +
            "utilisant les pratiques modernes de React, favorisant notamment la maintenabilité. Le deuxième était de " +
            "proposer une nouvelle l’interface plus intuitive capable de concilier les deux principales fonctionnalités " +
            "du back-office : le paramétrage et les rapports. Il était essentiel de permettre un accès facile et " +
            "efficace aux paramètres de l'application pour effectuer des ajustements personnalisés et de présenter de " +
            "manière claire et compréhensible les éléments graphiques complexes.",
            "Ce projet a été réalisé en collaboration avec un développeur back-end et un développeur Android, en " +
            "adoptant une approche agile. Mon rôle était de prendre en charge le développement front-end."
        ],
        link: {title: 'CIB Ingénierie', url: 'https://www.cib-ingenierie.fr/'}
    },
    {
        tags: ['Express', 'Javascript', 'MERN stack app', 'MongoDB', 'Node.js', 'React', 'Stripe'],
        descriptions: [
            "En échangeant avec une orthoptiste, j’ai identifié un manque au sein de sa profession. C’est ainsi qu’est " +
            "né, Orthotraînement, une plateforme regroupant des jeux et exercices visant à aider les orthoptistes dans " +
            "la rééducation de patients atteints de troubles de l’apprentissage.",
            "Ce projet représente une de mes plus grandes réalisations, que j'ai menée de A à Z en autonomie, depuis " +
            "l’émergence du besoin jusqu'au déploiement de l'application. J'ai été confronté à de nombreux défis tout au " +
            "long de ce projet. Tout d'abord, il a fallu comprendre et définir précisément les besoins. Ensuite, il " +
            "fallait concevoir une interface intuitive pour des utilisateurs qui ne sont pas nécessairement familiers " +
            "avec ce type de plateforme. Aussi, afin de concevoir un système de gestion de comptes, je devais acquérir " +
            "des connaissances en développement back-end, notamment en ce qui concerne un langage de programmation et " +
            "les bases de données. J'ai donc choisi de développer une MERN Stack App car elle semblait être la solution " +
            "la plus pertinente. Il a également été essentiel de trouver un modèle économique viable pour la plateforme, " +
            "c'est pourquoi j'ai opté pour un système d'abonnement mensuel géré d'abord avec Stripe, puis avec Mollie. " +
            "Enfin, il a fallu choisir un serveur, le configurer et déployer la plateforme."
        ],
        link: {title: 'Orthotraînement', url: 'https://orthotrainement.fr/', email: 'test@test.fr', password: 'test'}
    },
    {
        tags: ['React', 'Typescript', 'Tests: React Testing Library'],
        descriptions: [
            "Walleety est solution de porte-monnaie électronique qui permet d’effectuer des encaissements à l’aide de " +
            "cartes privatives.",
            "Ce projet présentait une particularité intéressante : il devait être développé à partir de zéro, sans avoir " +
            "de cahier des charges préétabli. En d'autres termes, l'idée était de créer un back-office répondant à des " +
            "besoins sans que ceux-ci n’aient été explicitement formulés par un client. Cela signifiait que je devais " +
            "émettre des hypothèses, des besoins et des fonctionnalités pertinentes. Ainsi, j'ai conçu un back-office " +
            "offrant la possibilité de paramétrer des fonctionnalités telles que les cartes, la fidélité et les magasins, " +
            "tout en fournissant une visualisation graphique des données clés. Par ailleurs, afin de structurer mon " +
            "développement, j'ai choisi d'aborder deux nouvelles notions : TypeScript et les tests unitaires.",
            "Ce projet a été réalisé en collaboration avec un développeur back-end, un développeur embarqué ainsi qu’un " +
            "développeur Androïd, en adoptant une approche agile. Mon rôle était de prendre en charge le développement " +
            "front-end."
        ],
        link: {title: 'CIB Ingénierie', url: 'https://www.cib-ingenierie.fr/'}
    },
]

export const projectsConstant = {
    slides: slides,
    projects: projects
}
