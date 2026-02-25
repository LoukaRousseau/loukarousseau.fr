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
        shortDescription: 'Projet de fin d’étude réalisé pour Le Quarante (Conservatoire de Laval) afin de répondre à une baisse d’inscriptions à la Classe à Horaires Aménagés Danse à travers une stratégie de communication 360° et la création d’un site web dédié.',
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
                    { label: 'Audit & Benchmark', value: 'Analyse complète', icon: '🔍' },
                    { label: 'Stratégie éditoriale', value: 'Plan d’action', icon: '🧠' },
                    { label: 'Maquettes UX/UI', value: 'Figma', icon: '🎨' },
                    { label: 'Site développé', value: 'Responsive', icon: '💻' }
                ]
            },
            {
                type: 'gallery',
                title: 'Livrables',
                images: [
                    { src: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600', alt: 'Maquette UI' },
                    { src: 'https://images.unsplash.com/photo-1529336953121-a0ce75aafac3?w=600', alt: 'Identité visuelle' },
                    { src: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=600', alt: 'Site responsive' }
                ]
            },
            {
                type: 'text',
                title: 'Outils et Processus',
                text: 'Figma (UX/UI), Adobe Creative Suite (Illustrator, Photoshop), développement web (HTML, CSS, JS / WordPress selon ton stack), méthodologie de projet agile et logique orientée utilisateur.'
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
                    { src: "./PROJET-1/GAME-DAY-AFFICHE.webp", alt: "Exemple post Instagram basket", link: "https://youtube.com" },
                    { src: "./PROJET-1/PHOTO-JOUEUR.webp", alt: "Exemple de série de photo", link: "https://lien-vers-realisation2.com" },
                    { src: "./PROJET-1/LIVRET-ACCUEIL.webp", alt: "Exemple de livret d'accueil support PRINT", link: "https://lien-vers-realisation3.com" },
                    { src: "./PROJET-1/VIDEO-CDF.webp", alt: "Exemple de vidéo format horizontal", link: "https://lien-vers-realisation4.com" },
                    { src: "./PROJET-1/LIVRET-PARTENAIRE.webp", alt: "Exemple de plaquette partenaire support PRINT", link: "https://lien-vers-realisation5.com" },
                    { src: "./PROJET-1/MONTAGE.webp", alt: "Exemple de montage", link: "https://lien-vers-realisation6.com" },
                ]
            },
            {
                type: 'text',
                title: 'Outils et Processus',
                text: 'DaVinci Resolve (montage vidéo), photographie sportive, Canva & Adobe Suite, planification éditoriale, analyse des performances et adaptation des formats selon les résultats.'
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