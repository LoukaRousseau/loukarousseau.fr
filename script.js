import { PROJECTS_DATA } from './project-date.js';

/* ========================================
   PORTFOLIO INTERACTIF - LOUKA ROUSSEAU
   JavaScript pour animations et interactions
   ======================================== */

// ========================================
// VARIABLES GLOBALES
// ========================================
let mouseX = 0;
let mouseY = 0;
let basketballFell = false;

// ========================================
// INITIALISATION AU CHARGEMENT
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    initScrollAnimations();
    initQuarterIndicators();
    initBasketballInteraction();
    initSkillBars();
    initSmoothScroll();
    initProjectCards();
});

// ========================================
// ANIMATIONS AU SCROLL
// ========================================
function initScrollAnimations() {
    const sections = document.querySelectorAll('.section');
    const basketContainer = document.querySelector('.basket-container');
    
    // Observer pour les sections
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Déclencher l'animation du panier quand on arrive aux projets
                if (entry.target.classList.contains('projects') && basketContainer) {
                    setTimeout(() => {
                        basketContainer.classList.add('visible');
                        animateBasketballFall();
                    }, 800);
                }
                
                // Activer les barres de compétences
                if (entry.target.classList.contains('skills')) {
                    setTimeout(() => {
                        animateSkillBars();
                    }, 400);
                }
            }
        });
    }, {
        threshold: 0.2
    });
    
    sections.forEach(section => {
        sectionObserver.observe(section);
    });
}

// ========================================
// INDICATEURS DE QUART-TEMPS
// ========================================
function initQuarterIndicators() {
    const sections = document.querySelectorAll('[data-quarter]');
    const dots = document.querySelectorAll('.quarter-dot');
    
    const quarterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const quarter = entry.target.dataset.quarter;
                
                // Retirer active de tous les dots
                dots.forEach(dot => dot.classList.remove('active'));
                
                // Ajouter active au dot correspondant
                const activeDot = document.querySelector(`[data-quarter="${quarter}"]`);
                if (activeDot) {
                    activeDot.classList.add('active');
                }
            }
        });
    }, {
        threshold: 0.5
    });
    
    sections.forEach(section => {
        quarterObserver.observe(section);
    });
    
    // Click sur les dots pour navigation
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            const quarter = dot.dataset.quarter;
            const section = document.querySelector(`[data-quarter="${quarter}"]`);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// ========================================
// INTERACTION AVEC LE BALLON
// ========================================
function initBasketballInteraction() {
    const basketball = document.querySelector('.basketball');
    
    if (!basketball) return;
    
    // Suivre la souris avec un effet de parallaxe léger
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Calculer le mouvement (limité pour rester subtil)
        const moveX = (mouseX - window.innerWidth / 2) / 50;
        const moveY = (mouseY - window.innerHeight / 2) / 50;
        
        basketball.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
    
    // Rebond au click
    basketball.addEventListener('click', () => {
        basketball.style.animation = 'none';
        setTimeout(() => {
            basketball.style.animation = 'float 3s ease-in-out infinite, spin 20s linear infinite, bounce 0.6s ease';
        }, 10);
    });
}
// ========================================
// ANIMATION CHUTE DU BALLON DANS LE PANIER
// ========================================
function animateBasketballFall() {
    if (basketballFell) return;
    
    const basketball = document.querySelector('.basketball');
    const heroSection = document.querySelector('.hero');
    const projectsSection = document.querySelector('.projects');
    
    if (!basketball || !projectsSection) return;
    
    // Créer un clone du ballon pour l'animation
    const basketballClone = basketball.cloneNode(true);
    basketballClone.style.position = 'fixed';
    basketballClone.style.zIndex = '999';
    basketballClone.style.top = '20%';
    basketballClone.style.right = '10%';
    basketballClone.style.width = '100px';
    basketballClone.style.height = '100px';
    basketballClone.style.animation = 'none';
    basketballClone.style.transition = 'all 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    
    document.body.appendChild(basketballClone);
    
    // Animer la chute après un court délai
    setTimeout(() => {
        basketballClone.style.top = '50%';
        basketballClone.style.transform = 'translateY(200px) rotate(720deg) scale(0.8)';
        basketballClone.style.opacity = '0.5';
    }, 100);
    
    // Supprimer le clone après l'animation
    setTimeout(() => {
        basketballClone.remove();
        basketballFell = true;
    }, 1600);
}

// ========================================
// BARRES DE COMPÉTENCES
// ========================================
function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const barObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progress = entry.target.dataset.progress;
                entry.target.style.width = progress + '%';
            }
        });
    }, {
        threshold: 0.5
    });
    
    skillBars.forEach(bar => {
        barObserver.observe(bar);
    });
}

function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    skillBars.forEach((bar, index) => {
        setTimeout(() => {
            const progress = bar.dataset.progress;
            bar.style.width = progress + '%';
        }, index * 100);
    });
}

// ========================================
// CARTES DE PROJETS
// ========================================
function initProjectCards() {
    const projectCards = document.querySelectorAll('.project-card');
    
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 150); // Décalage pour effet de cascade
            }
        });
    }, {
        threshold: 0.2
    });
    
    projectCards.forEach(card => {
        cardObserver.observe(card);
    });
}

// ========================================
// SMOOTH SCROLL POUR LES LIENS
// ========================================
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ========================================
// EFFET DE PARALLAXE SUR LE HERO
// ========================================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        hero.style.opacity = 1 - (scrolled / 600);
    }
});

// ========================================
// ANIMATION DU SCOREBOARD (effet compteur)
// ========================================
function animateCounters() {
    const counters = document.querySelectorAll('.scoreboard-value');
    
    counters.forEach(counter => {
        const target = parseInt(counter.textContent);
        let current = 0;
        const increment = target / 50;
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.ceil(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };
        
        updateCounter();
    });
}

// Observer pour déclencher l'animation des compteurs
const scoreboard = document.querySelector('.scoreboard');
if (scoreboard) {
    const scoreboardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                scoreboardObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5
    });
    
    scoreboardObserver.observe(scoreboard);
}

// ========================================
// EASTER EGG : Konami Code
// ========================================
let konamiCode = [];
const konamiSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // ↑↑↓↓←→←→BA

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.keyCode);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join('') === konamiSequence.join('')) {
        activateEasterEgg();
    }
});

function activateEasterEgg() {
    // Faire tomber plein de ballons !
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            createFallingBasketball();
        }, i * 200);
    }
}

function createFallingBasketball() {
    const ball = document.createElement('div');
    ball.innerHTML = `
        <svg class="falling-ball" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="90" fill="url(#ballGradient)"/>
            <path d="M 100,10 Q 100,100 100,190" stroke="#1a1a1a" stroke-width="2" fill="none"/>
            <path d="M 10,100 Q 100,100 190,100" stroke="#1a1a1a" stroke-width="2" fill="none"/>
        </svg>
    `;
    
    ball.style.position = 'fixed';
    ball.style.top = '-100px';
    ball.style.left = Math.random() * window.innerWidth + 'px';
    ball.style.width = '50px';
    ball.style.height = '50px';
    ball.style.zIndex = '9999';
    ball.style.pointerEvents = 'none';
    ball.style.transition = 'all 3s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    
    document.body.appendChild(ball);
    
    setTimeout(() => {
        ball.style.top = window.innerHeight + 'px';
        ball.style.transform = 'rotate(720deg)';
    }, 10);
    
    setTimeout(() => {
        ball.remove();
    }, 3000);
}

// ========================================
// GESTION DU CURSEUR PERSONNALISÉ (OPTIONNEL)
// ========================================
const customCursor = document.createElement('div');
customCursor.className = 'custom-cursor';
customCursor.style.cssText = `
    position: fixed;
    width: 20px;
    height: 20px;
    border: 2px solid var(--color-accent);
    border-radius: 50%;
    pointer-events: none;
    z-index: 10000;
    transition: transform 0.15s ease;
    display: none;
`;
document.body.appendChild(customCursor);

// Activer le curseur personnalisé sur desktop uniquement
if (window.innerWidth > 1024) {
    customCursor.style.display = 'block';
    
    document.addEventListener('mousemove', (e) => {
        customCursor.style.left = e.clientX - 10 + 'px';
        customCursor.style.top = e.clientY - 10 + 'px';
    });
    
    // Agrandir le curseur sur les éléments cliquables
    const clickables = document.querySelectorAll('a, button, .project-card');
    clickables.forEach(element => {
        element.addEventListener('mouseenter', () => {
            customCursor.style.transform = 'scale(2)';
        });
        element.addEventListener('mouseleave', () => {
            customCursor.style.transform = 'scale(1)';
        });
    });
}


// Timeline

const section = document.querySelector('.experience-section');
const progress = document.querySelector('.timeline-progress');
const cards = document.querySelectorAll('.exp-card');

window.addEventListener('scroll', () => {
  const rect = section.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (rect.top < windowHeight && rect.bottom > 0) {

    const scrollPercent = Math.min(
      Math.max((windowHeight - rect.top) / (windowHeight + rect.height), 0),
      1
    );

    progress.style.width = scrollPercent * 100 + '%';

    cards.forEach((card, index) => {
      if (scrollPercent > index * 0.1) {
        card.style.opacity = 1;
        card.style.transform = "translateY(0)";
      }
    });

  }
});

 /* ========================================
   TIMELINE PARCOURS - VERSION SIMPLE (SANS GSAP)
   Animation classique au scroll sans blocage
   À ajouter dans ton script.js
   ======================================== */

(function() {
    'use strict';
    
    // ========================================
    // CONFIGURATION
    // ========================================
    const CONFIG = {
        // Vitesse de la barre de progression (en ms)
        progressSpeed: 800,
        
        // Délai entre l'apparition de chaque carte (en ms)
        cardDelay: 200,
        
        // Seuil de visibilité (0.2 = 20% visible)
        threshold: 0.2,
        
        // Facteur de déclenchement de la barre (plus petit = plus tôt)
        // 0.3 = très tôt, 0.5 = tôt, 0.8 = normal, 1.0 = tard
        progressTrigger: 0.8
    };
    
    // ========================================
    // INITIALISATION
    // ========================================
    function initTimeline() {
        const section = document.querySelector('.timeline-section');
        const items = document.querySelectorAll('.timeline-item');
        const progressBar = document.querySelector('.timeline-progress');
        const navButtons = document.querySelectorAll('.timeline-nav-btn');
        
        if (!section || !items.length) {
            console.log('Timeline non trouvée');
            return;
        }
        
        // Animation des cartes au scroll
        animateCards(items);
        
        // Animation de la barre de progression
        animateProgressBar(section, progressBar);
        
        // Navigation interactive
        setupNavigation(items, navButtons);
        
        console.log('Timeline initialisée (version simple)');
    }
    
    // ========================================
    // ANIMATION DES CARTES
    // ========================================
    function animateCards(items) {
        // Observer pour détecter quand les cartes entrent dans le viewport
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    // Ajouter un délai pour un effet de cascade
                    setTimeout(() => {
                        entry.target.classList.add('visible');
                    }, index * CONFIG.cardDelay);
                    
                    // Ne plus observer cet élément (animation une seule fois)
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: CONFIG.threshold,
            rootMargin: '0px'
        });
        
        // Observer chaque item
        items.forEach(item => {
            observer.observe(item);
        });
    }
    
    // ========================================
    // ANIMATION DE LA BARRE DE PROGRESSION
    // ========================================
    function animateProgressBar(section, progressBar) {
        if (!section || !progressBar) return;
        
        let ticking = false;
        
        function updateProgress() {
            const rect = section.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            // Calculer le pourcentage de scroll
            // La barre commence à se remplir dès que la section entre dans le viewport
            let progress = 0;
            
            // Démarrer l'animation plus tôt
            if (rect.top < windowHeight && rect.bottom > 0) {
                // Calculer la progression basée sur la position de la section
                const sectionVisible = windowHeight - rect.top;
                const totalDistance = windowHeight + (rect.height * CONFIG.progressTrigger);
                
                progress = Math.max(0, Math.min(1, sectionVisible / totalDistance));
            }
            
            // Si la section est complètement passée
            if (rect.bottom < 0) {
                progress = 1;
            }
            
            // Mettre à jour la largeur de la barre
            progressBar.style.width = `${progress * 100}%`;
            
            ticking = false;
        }
        
        // Optimisation avec requestAnimationFrame
        function onScroll() {
            if (!ticking) {
                window.requestAnimationFrame(updateProgress);
                ticking = true;
            }
        }
        
        // Écouter le scroll
        window.addEventListener('scroll', onScroll, { passive: true });
        
        // Premier calcul
        updateProgress();
    }
    
    // ========================================
    // NAVIGATION INTERACTIVE
    // ========================================
    function setupNavigation(items, navButtons) {
        navButtons.forEach((btn, index) => {
            btn.addEventListener('click', () => {
                // Retirer la classe active de tous les boutons et items
                navButtons.forEach(b => b.classList.remove('active'));
                items.forEach(i => i.classList.remove('active'));
                
                // Ajouter active au bouton cliqué
                btn.classList.add('active');
                
                // Ajouter active à l'item correspondant
                if (items[index]) {
                    items[index].classList.add('active');
                    
                    // Scroller vers l'item avec smooth scroll
                    const card = items[index].querySelector('.timeline-card');
                    if (card) {
                        // Calculer la position pour centrer l'élément
                        const cardRect = card.getBoundingClientRect();
                        const absoluteTop = cardRect.top + window.pageYOffset;
                        const middle = absoluteTop - (window.innerHeight / 2) + (cardRect.height / 2);
                        
                        window.scrollTo({
                            top: middle,
                            behavior: 'smooth'
                        });
                        
                        // Animation de pulse sur la carte
                        card.style.transform = 'scale(1.05)';
                        setTimeout(() => {
                            card.style.transform = '';
                        }, 300);
                    }
                }
            });
        });
    }
    
    // ========================================
    // GESTION DU RESIZE
    // ========================================
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            // Recalculer la progression au resize
            const section = document.querySelector('.timeline-section');
            const progressBar = document.querySelector('.timeline-progress');
            if (section && progressBar) {
                animateProgressBar(section, progressBar);
            }
        }, 250);
    });
    
    // ========================================
    // AUTO-INITIALISATION
    // ========================================
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initTimeline);
    } else {
        initTimeline();
    }
    
})();


/* ========================================
   SYSTÈME DE MODALE AVEC EFFET VAGUE
   À ajouter à la fin de ton script.js
   ======================================== */

// ========================================
// VARIABLES GLOBALES MODALE
// ========================================
let currentProjectId = null;
let clickX = 0;
let clickY = 0;

// ========================================
// INITIALISATION MODALE
// ========================================
function initProjectModals() {
    const projectCards = document.querySelectorAll('.project-card');
    const modal = document.querySelector('.project-modal');
    const closeBtn = document.querySelector('.modal-close-btn');
    
    if (!modal || !closeBtn) {
        console.warn('Modale non trouvée dans le DOM');
        return;
    }
    
    // Attacher les événements de clic sur chaque carte
    projectCards.forEach((card, index) => {
        card.addEventListener('click', (e) => {
            // Récupérer l'ID du projet ou utiliser l'index
            const projectId = card.dataset.projectId || PROJECTS_DATA[index]?.id;
            
            if (projectId) {
                openProjectModal(projectId, e);
            }
        });
        
        // Ajouter l'attribut data-project-id s'il n'existe pas
        if (!card.dataset.projectId && PROJECTS_DATA[index]) {
            card.dataset.projectId = PROJECTS_DATA[index].id;
        }
    });
    
    // Event fermeture
    closeBtn.addEventListener('click', closeProjectModal);
    
    // Fermeture au clic sur l'overlay (optionnel)
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeProjectModal();
        }
    });
    
    // Fermeture avec Échap
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('opening')) {
            closeProjectModal();
        }
    });
}

// ========================================
// OUVERTURE MODALE AVEC EFFET VAGUE
// ========================================
function openProjectModal(projectId, event) {
    const modal = document.querySelector('.project-modal');
    const project = PROJECTS_DATA.find(p => p.id === projectId);
    
    if (!project || !modal) return;
    
    currentProjectId = projectId;
    
    // Récupérer les coordonnées du clic
    clickX = event.clientX;
    clickY = event.clientY;
    
    // Convertir en pourcentage pour clip-path
    const clickXPercent = (clickX / window.innerWidth) * 100;
    const clickYPercent = (clickY / window.innerHeight) * 100;
    
    // Bloquer le scroll
    document.body.classList.add('modal-open');
    
    // Générer le contenu
    renderModalContent(project);
    
    // Appliquer le point d'origine de la vague
    modal.style.clipPath = `circle(0% at ${clickXPercent}% ${clickYPercent}%)`;
    
    // Forcer un reflow pour que l'animation fonctionne
    modal.offsetHeight;
    
    // Ouvrir avec animation
    modal.classList.add('opening');
    modal.style.clipPath = `circle(150% at ${clickXPercent}% ${clickYPercent}%)`;
    modal.style.transition = 'clip-path 0.8s cubic-bezier(0.77, 0, 0.175, 1)';
}

// Précharge les images au survol de la carte
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        const id = card.getAttribute('data-project-id');
        const project = PROJECTS_DATA.find(p => p.id === id);
        if (project && project.content) {
            project.content.forEach(item => {
                if (item.type === 'big-image' || item.type === 'gallery') {
                    const img = new Image();
                    img.src = item.src || (item.images && item.images[0].src);
                }
            });
        }
    });
});

// ========================================
// FERMETURE MODALE AVEC EFFET INVERSE
// ========================================
function closeProjectModal() {
    const modal = document.querySelector('.project-modal');
    
    if (!modal) return;
    
    // Calculer le point de fermeture (centre ou dernier clic)
    const clickXPercent = (clickX / window.innerWidth) * 100;
    const clickYPercent = (clickY / window.innerHeight) * 100;
    
    // Animation de fermeture
    modal.classList.add('closing');
    modal.style.clipPath = `circle(0% at ${clickXPercent}% ${clickYPercent}%)`;
    
    // Attendre la fin de l'animation
    setTimeout(() => {
        modal.classList.remove('opening', 'closing');
        document.body.classList.remove('modal-open');
        
        // Vider le contenu
        const wrapper = document.getElementById('modal-content-wrapper');
        if (wrapper) {
            wrapper.innerHTML = '';
        }
        
        currentProjectId = null;
    }, 800);
}

// ========================================
// GÉNÉRATION DU CONTENU MODALE
// ========================================
function renderModalContent(project) {
    const wrapper = document.getElementById('modal-content-wrapper');
    
    if (!wrapper) return;
    
    // Construire le HTML
    let html = `
        <!-- Header -->
        <div class="modal-header">
            <div class="modal-category">${project.category}</div>
            <h2 class="modal-title">${project.title}</h2>
            <p class="modal-description">${project.shortDescription}</p>
            <div class="modal-tags">
                ${project.tags.map(tag => `<span class="modal-tag">${tag}</span>`).join('')}
            </div>
        </div>
        
        <!-- Body avec sections -->
        <div class="modal-body">
    `;
    
    // Générer chaque section selon son type
    project.content.forEach(section => {
        html += renderSection(section);
    });
    
    html += '</div>';
    
    wrapper.innerHTML = html;
}

// ========================================
// RENDU DES DIFFÉRENTES SECTIONS
// ========================================
function renderSection(section) {
    switch(section.type) {
        case 'text':
            return renderTextSection(section);
        case 'stats':
            return renderStatsSection(section);
        case 'gallery':
            return renderGallerySection(section);
        case 'big-image':
            return renderBigImageSection(section);
        default:
            return '';
    }
}

// Section texte
function renderTextSection(section) {
    return `
        <div class="content-section section-text">
            <h3>${section.title}</h3>
            <p>${section.text}</p>
        </div>
    `;
}

// Section statistiques
function renderStatsSection(section) {
    return `
        <div class="content-section section-stats">
            <h3>${section.title}</h3>
            <div class="stats-grid">
                ${section.stats.map(stat => `
                    <div class="stat-item">
                        <div class="stat-icon">${stat.icon}</div>
                        <div class="stat-value">${stat.value}</div>
                        <div class="stat-label">${stat.label}</div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

// Section galerie
function renderGallerySection(section) {
    return `
        <div class="content-section section-gallery">
            <h3>${section.title}</h3>
            <div class="gallery-grid">
                ${section.images.map(img => `
                    <div class="gallery-item">
                        <img src="${img.src}" alt="${img.alt}" loading="lazy">
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

// Section grande image
function renderBigImageSection(section) {
    return `
        <div class="content-section section-big-image">
            <div class="big-image">
                <img src="${section.src}" alt="${section.alt}" loading="lazy">
            </div>
        </div>
    `;
}

// ========================================
// INITIALISATION AUTO
// ========================================
// Ajouter l'initialisation dans ton DOMContentLoaded existant
// ou appeler directement :
document.addEventListener('DOMContentLoaded', () => {
    // Attendre que PROJECTS_DATA soit chargé
    if (typeof PROJECTS_DATA !== 'undefined') {
        initProjectModals();
        console.log('Système de modale initialisé');
    } else {
        console.error('PROJECTS_DATA non chargé - vérifier que projects-data.js est inclus');
    }
});

/* ========================================
   UTILITAIRES (OPTIONNELS)
   ======================================== */

// Fonction pour ouvrir une modale par ID (utilisation programmatique)
function openModalById(projectId) {
    const fakeEvent = {
        clientX: window.innerWidth / 2,
        clientY: window.innerHeight / 2
    };
    openProjectModal(projectId, fakeEvent);
}

// Fonction pour précharger les images (améliore la performance)
function preloadProjectImages() {
    PROJECTS_DATA.forEach(project => {
        project.content.forEach(section => {
            if (section.type === 'big-image') {
                const img = new Image();
                img.src = section.src;
            }
            if (section.type === 'gallery') {
                section.images.forEach(image => {
                    const img = new Image();
                    img.src = image.src;
                });
            }
        });
    });
}

// Appeler au chargement pour précharger (optionnel)
// preloadProjectImages();












