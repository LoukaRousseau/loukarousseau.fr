/* ========================================
   DONNÉES DES PROJETS - PORTFOLIO
   Structure externe pour garder le HTML propre
   ======================================== */

export const PROJECTS_DATA = [
    {
        id: 'site-evenementiel',
        title: 'Site Événementiel',
        category: 'WEB',
        shortDescription: 'Conception et développement d\'un site web événementiel immersif avec animations avancées et expérience utilisateur optimisée.',
        tags: ['Web Design', 'Développement', 'Animation'],

        // Sections de contenu (ordre d'affichage)
        content: [
            {
                type: 'text',
                title: 'Contexte du Projet',
                text: 'Création d\'un site web pour un événement sportif majeur. L\'objectif était de créer une expérience immersive permettant aux visiteurs de découvrir l\'événement, les participants et de réserver leurs places en ligne.'
            },
            {
                type: 'stats',
                title: 'Résultats',
                stats: [
                    { label: 'Visiteurs uniques', value: '15K+', icon: '👥' },
                    { label: 'Taux de conversion', value: '34%', icon: '📈' },
                    { label: 'Temps moyen', value: '4min 30s', icon: '⏱️' },
                    { label: 'Score Performance', value: '98/100', icon: '⚡' }
                ]
            },
            {
                type: 'text',
                title: 'Défi Technique',
                text: 'Intégration d\'animations complexes tout en maintenant d\'excellentes performances. Utilisation de GSAP et optimisation des assets pour garantir une expérience fluide sur tous les appareils.'
            },
            {
                type: 'big-image',
                src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200',
                alt: 'Interface du site événementiel'
            },
            {
                type: 'gallery',
                title: 'Captures d\'écran',
                images: [
                    { src: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=600', alt: 'Vue mobile' },
                    { src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600', alt: 'Dashboard' },
                    { src: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600', alt: 'Analytics' }
                ]
            },
            {
                type: 'text',
                title: 'Technologies Utilisées',
                text: 'HTML5, CSS3, JavaScript ES6+, GSAP, Webpack, Responsive Design, Optimisation SEO'
            }
        ]
    },

    {
        id: 'chad-communication-360',
        title: 'CHAD – Stratégie 360° & Refonte Web',
        category: 'COMMUNICATION',
        shortDescription: 'Projet de fin d’étude réalisé en groupe de 4 sur une période de 6 mois pour Le Quarante (Conservatoire de Laval) afin de répondre à une baisse d’inscriptions à la Classe à Horaires Aménagés Danse à travers une stratégie de communication 360° et la création d’un site web dédié.',
        tags: ['Stratégie 360°', 'UX/UI', 'Développement Web', 'Branding', 'Communication'],

        content: [
            {
                type: 'text',
                title: 'Mission',
                text: 'Accompagner Le Quarante dans la valorisation de la Classe à Horaires Aménagés Danse (CHAD) face à une baisse d’inscriptions. Concevoir une stratégie de communication globale et développer un site web clair, attractif et orienté conversion pour rassurer les familles et moderniser l’image du dispositif.'
            },
            {
                type: 'text',
                title: 'Problématique',
                text: 'Manque de visibilité du programme, informations dispersées, image perçue comme institutionnelle et peu engageante pour les collégiens et leurs parents.'
            },
            {
                type: 'text',
                title: 'Approche Stratégique',
                text: 'Audit de l’existant, benchmark concurrentiel, définition des cibles (élèves / parents), clarification du positionnement et création d’un univers visuel moderne. Mise en place d’un parcours utilisateur optimisé pour faciliter la compréhension et encourager la prise de contact.'
            },
            {
                type: 'stats',
                title: 'Dispositif 360°',
                stats: [
                    { 
                        label: 'Audit du site web et des réseaux sociaux, étude concurrentielle', 
                        value: 'Analyse de l’existant', 
                        icon: '🔍' 
                    },
                    { 
                        label: 'Définition des cibles, des canaux et des supports, stratégie éditoriale et de communication', 
                        value: 'Plan d’action', 
                        icon: '🧠' 
                    },
                    { 
                        label: 'Création de templates pour les différents canaux de communication (réseaux, vidéo, posts, newsletter, print…)', 
                        value: 'Templates prêts à l’emploi', 
                        icon: '🎨' 
                    },
                    { 
                        label: 'Création de wireframes, prototypes interactifs et intégration WordPress', 
                        value: 'Création de site web', 
                        icon: '💻' 
                    }                ]
            },
            {
                type: 'gallery',
                title: 'Livrables',
                images: [
                    {
                        src: "CHAD-CHARTE-GRAPHIQUE.webp",
                        alt: "Première page charte graphique",
                        title: 'Charte graphique',
                        tools: ['Affinity', 'Lightroom Classic'],
                        description: 'Création d\'une charte graphique clair',  
                        link: "https://drive.google.com/file/d/1KKvXNE3NtJvJDAvxHLJxtdTe2NR4NcnK/view?usp=sharing"
                    },
                    {
                        src: "CHAD-PORTES-OUVERTES.webp",
                        alt: "Premiere page maquette",
                        title: 'Affiche porte ouverte',
                        tools: ['Affinity'],
                        description: 'Réalisation d’affiches pour les différentes portes ouvertes',  
                        link: "https://drive.google.com/drive/folders/1qhgjo6GNsAHnOkE-T8uDmucWPw-qrale?usp=sharing"
                    },
                    {
                        src: "CHAD-TEMPLATES.webp",
                        alt: "Mockups et Templates",
                        title: 'Mockups et Templates',
                        tools: ['Affinity', 'Lightroom Classic'],
                        description: ' Création de différents mockups ainsi que de templates pour le conservatoire, afin de reprendre la main suite à notre projet',  
                        link: "https://drive.google.com/drive/folders/1ZnGRIg9QMNr3viTzFc9b4wlEfEGggqDi?usp=sharing"
                    },
                    {
                        src: "CHAD-CHARTE-GRAPHIQUE.webp",
                        alt: "Première page charte graphique",
                        title: 'Charte graphique',
                        tools: ['Affinity', 'Lightroom Classic'],
                        description: 'Création d\'une charte graphique clair',  
                        link: "https://drive.google.com/file/d/1KKvXNE3NtJvJDAvxHLJxtdTe2NR4NcnK/view?usp=sharing"
                    },
                    {
                        src: "CHAD-PORTES-OUVERTES.webp",
                        alt: "Premiere page maquette",
                        title: 'Affiche porte ouverte',
                        tools: ['Affinity'],
                        description: 'Réalisation d’affiches pour les différentes portes ouvertes',  
                        link: "https://drive.google.com/drive/folders/1qhgjo6GNsAHnOkE-T8uDmucWPw-qrale?usp=sharing"
                    },
                    {
                        src: "CHAD-TEMPLATES.webp",
                        alt: "Mockups et Templates",
                        title: 'Mockups et Templates',
                        tools: ['Affinity', 'Lightroom Classic'],
                        description: ' Création de différents mockups ainsi que de templates pour le conservatoire, afin de reprendre la main suite à notre projet',  
                        link: "https://drive.google.com/drive/folders/1ZnGRIg9QMNr3viTzFc9b4wlEfEGggqDi?usp=sharing"
                    },
                ]
            }
        ]
    },

    {
        id: 'branding-club',
        title: 'Vendée Challans Basket – Communication & Image de Marque',
        category: 'SPORT',
        shortDescription: 'Pilotage de la communication digitale et valorisation de l’image du club en ELITE 2 : stratégie social media, production de contenus et activation communautaire.',
        tags: ['Social Media', 'Stratégie', 'Photo / Vidéo', 'Branding', 'Sport'],

        content: [
            {
                type: 'text',
                title: 'Contexte',
                text: 'Alternance au sein du Vendée Challans Basket (ELITE 2) avec pour mission de renforcer la visibilité digitale du club, moderniser son image et dynamiser l’engagement de la communauté locale.'
            },
            {
                type: 'big-image',
                src: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=1200',
                alt: 'Couverture match basket'
            },
            {
                type: 'text',
                title: 'Missions',
                text: 'Définition et mise en œuvre de la stratégie social media, création de contenus photo/vidéo (matchs, coulisses, événements), gestion éditoriale des réseaux sociaux et valorisation des partenaires et actions du club (tournois, basket santé, baskin).'
            },
            {
                type: 'stats',
                title: 'Actions Clés',
                stats: [
                    { label: 'Captation photos/vidéos, création de contenus Reels/stories, caméraman live', value: 'Couverture de plus de 60 matchs', icon: '🏀' },
                    { label: 'Augmentation de 30% des impressions sur Instagram et Facebook', value: '+30%', icon: '📈' },
                    { label: 'Livret d\'accueil, LEDs bord de terrain, vidéo verticale..', value: 'Nouveaux Formats développés', icon: '📱' },
                    { label: 'Mise en place d\'un planning éditorial, stratégie social média, reporting dfe performance et analyse statistiques', value: 'Organisation stratégique', icon: '🎯' }
                ]
            },
            {
                type: 'gallery',
                title: 'Applications',
                images: [
                    {
                        src: "GAME-DAY-AFFICHE.webp",
                        alt: "Exemple post Instagram basket",
                        title: 'Exemple de post',
                        tools: ['Affinity', 'Lightroom Classic'],
                        description: 'Conception d\'une identité visuel pour le club',  
                        link: "https://drive.google.com/drive/folders/14z5iPEgy2IBjFHtu5tXc08p_cyMldc2y?usp=sharing"
                    },
                    {
                        src: "PHOTO-JOUEUR.webp",
                        alt: "Exemple de série de photo",
                        title: 'Série de photo',
                        tools: ['Lightroom Classic', 'Affinity'],
                        description: 'Série de photo pour les Espoirs de Challans',  
                        link: "https://drive.google.com/drive/folders/136IhQNDaX2ekpRa8W7VMyzhMfB6of3x1?usp=sharing"
                    },
                    {
                        src: "LIVRET-ACCUEIL.webp",
                        alt: "Exemple de livret d'accueil support PRINT",
                        title: 'Livret d\'accueil',
                        tools: ['Affinity'],
                        description: 'Réalisation livret d\'accueil pour l\'arrivée des joueurs',  
                        link: "https://www.flipbookpdf.net/web/site/c5dcb3c6ec235db2bc3994da8e9a717a42658e0a202602.pdf.html#page/1"
                    },
                    {
                        src: "VIDEO-CDF.webp",
                        alt: "Exemple de vidéo format horizontal",
                        title: 'Vidéo horizontale',
                        tools: ['Davinci Resolve', 'Trello'],
                        description: 'Écriture, tournage et réalisation d\'une vidéo vidéo de présentation du CDF',  
                        link: "https://www.youtube.com/watch?v=9g71bYCV3U4"
                    },
                    {
                        src: "LIVRET-PARTENAIRE.webp",
                        alt: "Exemple de plaquette partenaire support PRINT",
                        title: 'Plaquette partenaire',
                        tools: ['Affinity'],
                        description: 'Conception et réalisation d\'une plaquette partenaire pour pouvoir démarcher les partenaires',  
                        link: "https://www.flipbookpdf.net/web/site/911f8f6c979a9d7d10ea5255971ed1a3af26061b202602.pdf.html#page/1"
                    },
                    {
                        src: "MONTAGE.webp",
                        alt: "Exemple de montage",
                        title: 'Vidéo vertical',
                        tools: ['Davinci Resolve'],
                        description: 'Mise en place d\'une stratégie visant à redynamiser en explorant le format vertical',  
                        link: "https://www.instagram.com/vcbofficiel/reels/"
                    },
                ]
            }
        ]
    },

    {
        id: 'app-mobile',
        title: 'Refonte Application Mobile',
        category: 'UX/UI',
        shortDescription: 'Redesign complet d\'une application de suivi sportif avec focus sur l\'expérience utilisateur et l\'accessibilité.',
        tags: ['UX Research', 'UI Design', 'Prototype'],

        content: [
            {
                type: 'text',
                title: 'Problématique',
                text: 'Une application de suivi sportif existante souffrait d\'un taux d\'abandon élevé et de retours négatifs sur l\'ergonomie. Mission : repenser complètement l\'UX/UI.'
            },
            {
                type: 'text',
                title: 'Recherche UX',
                text: 'Interviews utilisateurs (15 personnes), analyse des parcours, tests A/B, étude de la concurrence, création de personas et mapping des user journeys.'
            },
            {
                type: 'stats',
                title: 'Améliorations',
                stats: [
                    { label: 'Rétention J7', value: '+67%', icon: '📲' },
                    { label: 'Taux complétion', value: '+89%', icon: '✅' },
                    { label: 'NPS Score', value: '8.5/10', icon: '⭐' },
                    { label: 'Temps de tâche', value: '-40%', icon: '⚡' }
                ]
            },
            {
                type: 'big-image',
                src: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200',
                alt: 'Maquettes UI'
            },
            {
                type: 'gallery',
                title: 'Écrans Clés',
                images: [
                    { src: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600', alt: 'Dashboard' },
                    { src: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600', alt: 'Profil' },
                    { src: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600', alt: 'Statistiques' }
                ]
            },
            {
                type: 'text',
                title: 'Outils',
                text: 'Figma (design & prototypage), Miro (workshops), Maze (tests utilisateurs), Optimal Workshop (card sorting), Adobe XD (animations)'
            }
        ]
    }
];

// Export pour utilisation dans le script principal
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { PROJECTS_DATA };
}