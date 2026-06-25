/* ========================================
   DONNÉES DES PROJETS - PORTFOLIO
   ======================================== */

export const PROJECTS_DATA = [
    {
        id: 'open-blast-rotterdam',
        title: 'Open Blast Rotterdam',
        category: 'PHOTO',
        shortDescription: 'Couverture photographique de l\'Open Blast Rotterdam, compétition internationale de Counter Strike 2.',
        tags: ['Photographie Sportive', 'Événementiel', 'Lightroom'],

        content: [
            {
                type: 'text',
                title: 'Contexte',
                text: 'Prise de photos lors des BLAST Open Rotterdam, un événement majeur de la scène Counter-Strike devant plus de 15 000 personnes présentes sur place. J’ai capturé les moments forts, l’ambiance et les joueurs.'
            },
            {
                type: 'stats',
                title: 'En chiffres',
                stats: [
                    { label: 'Photos prises sur l\'événement', value: '600+', icon: '📸' },
                    { label: 'Athlètes internationaux couverts', value: '30+', icon: '🏋️' },
                    { label: 'Photos sélectionnées et retouchées', value: '50', icon: '✅' },
                    { label: 'Accréditation presse officielle', value: 'OUI', icon: '🎫' }
                ]
            },
            {
                type: 'photo-gallery',   // ← nouveau type dédié
                title: 'Galerie – Open Blast Rotterdam',
                photos: [
                    { src: 'APEX-1.webp', alt: '', category: 'Action' },
                    { src: 'CND-KRL-2.webp', alt: '', category: 'Ambiance' },
                    { src: 'MEZII.webp', alt: '', category: 'Portrait' },
                    { src: 'Navi.webp', alt: '', category: 'Ambiance' },
                    { src: 'Speaker.webp', alt: '', category: 'Ambiance' },
                    { src: 'KRL-1.webp', alt: '', category: 'Portrait' },
                    { src: 'VITA-NAVI.webp', alt: '', category: 'Action' },
                    { src: 'Zywoo-1.webp', alt: '', category: 'Ambiance' },
                    { src: 'XQTZZZ.webp', alt: '', category: 'Portrait' },
                    { src: 'APEX-KRL-CND.webp', alt: '', category: 'Action' },
                    { src: 'TCHECK.webp', alt: '', category: 'Ambiance' },
                    { src: 'CND-KRL.webp', alt: '', category: 'Ambiance' },
                    { src: 'TROPHY-SCENE.webp', alt: '', category: 'Ambiance' },
                    { src: 'VITA.webp', alt: '', category: 'Ambiance' },
                    { src: 'CROWD.webp', alt: '', category: 'Action' },
                ]

            },
            {
                type: 'text',
                title: 'Compétences mobilisées',
                text: 'Photographie événementielle, Gestion du terrain sous contrainte de temps, Cadrage et sélection, Retouche Lightroom'
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
                    }]
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
                ]
            },
            {
                type: 'text',
                title: 'Compétences mobilisées',
                text: 'Stratégie de communication 360°, Audit et diagnostic de l\'existant, Branding et identité visuelle, UX/UI design (wireframes, prototypes), Développement WordPress, Travail en équipe sur 6 mois'
            },
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
                src: "Challans-elite2.webp",
                alt: 'Couverture match basket'
            },
            {
                type: 'text',
                title: 'Missions',
                text: 'Définition et mise en œuvre de la stratégie social media, création de contenus photo/vidéo (matchs, coulisses, événements), gestion éditoriale des réseaux sociaux et valorisation des partenaires et actions du club (tournois, basket santé, baskin).'
            },
            {
                type: 'text',
                title: 'Méthode',
                text: 'Diagnostic de l\'existant (communication réactive, peu si ce n\'est pas format long, aucun outil de suivi). Définition d\'une stratégie éditoriale en deux logiques complémentaires pour acquérir et retenir de l\'audience avec le snack content (TikTok, Reels Instagram, 3-4 publications/semaine) pour acquérir l\'audience, et slow content (YouTube, interviews, teaser institutionnel) pour fidéliser. Analyse mensuelle des performances via Meta Business Suite, TikTok Analytics et YouTube Studio. Reporting partenaires à chaque fin de saison.'
            },
            {
                type: 'stats',
                title: 'Résultats mesurés',
                stats: [
                    { label: 'Abonnés YouTube en 2 ans (1 630 → 3 765)', value: '+131%', icon: '📈' },
                    { label: 'Abonnés Instagram en 2 ans (6 224 → 10 225)', value: '+64%', icon: '📸' },
                    { label: 'Vues totales TikTok sur la période', value: '565 900', icon: '🎵' },
                    { label: 'Vues YouTube sur la période dont 73,1% de non-abonnés', value: '210 611', icon: '▶️' }
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
                
            },
            {
                type: 'text',
                title: 'Compétences mobilisées',
                text: 'Stratégie de contenu vidéo, production photo/vidéo (snack & slow content), analyse de données (Meta Business Suite, TikTok Analytics, YouTube Studio), motion design (LED, identité visuelle), gestion de projet avec équipe de bénévoles, reporting partenaires'
            },
        ]
    },


];

// Export pour utilisation dans le script principal
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { PROJECTS_DATA };
}