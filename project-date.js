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
        id: 'campagne-social',
        title: 'Campagne Réseaux Sociaux',
        category: 'SOCIAL',
        shortDescription: 'Stratégie et création de contenu pour une campagne digitale sur les réseaux sociaux, avec forte croissance d\'engagement.',
        tags: ['Social Media', 'Content', 'Motion'],
        
        content: [
            {
                type: 'text',
                title: 'Mission',
                text: 'Développement d\'une stratégie de communication digitale complète pour le Vendée Challans Basket, incluant la création de contenu photo/vidéo et la gestion quotidienne des réseaux sociaux.'
            },
            {
                type: 'stats',
                title: 'Impact',
                stats: [
                    { label: 'Croissance abonnés', value: '+145%', icon: '📱' },
                    { label: 'Engagement moyen', value: '8.2%', icon: '❤️' },
                    { label: 'Portée mensuelle', value: '250K', icon: '👁️' },
                    { label: 'Contenus créés', value: '120+', icon: '🎬' }
                ]
            },
            {
                type: 'text',
                title: 'Approche Créative',
                text: 'Création de formats innovants adaptés à chaque plateforme (Instagram, Facebook, TikTok). Développement d\'une identité visuelle cohérente tout en gardant l\'authenticité du club.'
            },
            {
                type: 'gallery',
                title: 'Exemples de Contenus',
                images: [
                    { src: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600', alt: 'Post Instagram' },
                    { src: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600', alt: 'Story' },
                    { src: 'https://images.unsplash.com/photo-1504309092620-4d0ec726efa4?w=600', alt: 'Carrousel' }
                ]
            },
            {
                type: 'text',
                title: 'Outils & Process',
                text: 'Adobe Creative Suite (Premiere Pro, After Effects, Photoshop), Canva Pro, Planification avec Meta Business Suite, Analyse avec Instagram Insights et Facebook Analytics.'
            }
        ]
    },
    
    {
        id: 'branding-club',
        title: 'Identité Visuelle Club',
        category: 'BRANDING',
        shortDescription: 'Création d\'une identité visuelle moderne pour un club sportif local, incluant logo, charte graphique et déclinaisons digitales.',
        tags: ['Branding', 'Print', 'Digital'],
        
        content: [
            {
                type: 'text',
                title: 'Brief Client',
                text: 'Refonte complète de l\'identité visuelle d\'un club sportif amateur souhaitant moderniser son image tout en conservant son héritage et ses valeurs.'
            },
            {
                type: 'big-image',
                src: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200',
                alt: 'Nouvelle identité visuelle'
            },
            {
                type: 'text',
                title: 'Processus de Création',
                text: 'Recherche et analyse de la concurrence, ateliers avec les membres du club, développement de plusieurs propositions, tests utilisateurs, et finalisation avec la création d\'une charte graphique complète.'
            },
            {
                type: 'stats',
                title: 'Livrables',
                stats: [
                    { label: 'Logos créés', value: '12', icon: '🎨' },
                    { label: 'Pages charte', value: '45', icon: '📄' },
                    { label: 'Templates', value: '20+', icon: '📐' },
                    { label: 'Satisfaction', value: '100%', icon: '⭐' }
                ]
            },
            {
                type: 'gallery',
                title: 'Applications',
                images: [
                    { src: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600', alt: 'Cartes de visite' },
                    { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600', alt: 'Merchandising' },
                    { src: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600', alt: 'Signalétique' }
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