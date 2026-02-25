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
    initBurgerMenu();

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
    if (!section) return; // ← ajoute juste ça
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

(function () {
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



        // Animation des cartes au scroll
        animateCards(items);

        // Animation de la barre de progression
        animateProgressBar(section, progressBar);

        // Navigation interactive
        setupNavigation(items, navButtons);

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
    switch (section.type) {
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
// 1. Ajoute ce dictionnaire d'icônes en haut de ton script (ou avant renderGallerySection)
const SOFTWARE_ICONS = {
    'Affinity': `<svg viewBox="0 0 960 960" xmlns="http://www.w3.org/2000/svg" width="20" height="20"> <defs><linearGradient id="silverGradientAffinity" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#e0e0e0" /><stop offset="50%" style="stop-color:#959595" /><stop offset="100%" style="stop-color:#606060" /></linearGradient></defs>
    <g transform="translate(0.000000,960.000000) scale(0.100000,-0.100000)" fill="url(#silverGradientAffinity)" stroke="none">
        <path d="M4815 7904 c-729 -38 -1472 -168 -2152 -376 l-103 -31 0 -869 0 -869 58 42 c205 148 525 346 792 489 697 374 1484 633 2205 726 176 23 643 26 775 6 300 -48 497 -148 565 -287 22 -44 27 -68 27 -127 -1 -180 -119 -331 -377 -483 -248 -146 -563 -261 -1490 -544 -896 -273 -1326 -431 -1735 -635 -398 -200 -618 -352 -861 -595 -234 -236 -363 -445 -444 -726 -47 -162 -59 -256 -59 -455 0 -198 10 -287 51 -445 147 -570 587 -939 1224 -1030 140 -20 437 -19 581 1 1036 144 1983 1065 2822 2742 97 194 120 233 134 227 9 -4 43 -16 75 -27 31 -11 57 -26 57 -33 0 -29 -184 -415 -308 -645 -77 -144 -247 -442 -407 -715 -442 -754 -620 -1107 -694 -1372 l-20 -73 895 0 894 0 0 1835 0 1835 -205 0 -205 0 -88 -182 c-353 -731 -752 -1329 -1157 -1733 -276 -276 -522 -441 -790 -531 -452 -151 -874 -15 -1006 323 -34 87 -38 252 -10 364 68 269 262 497 633 742 245 162 490 291 1088 572 623 293 953 467 1195 633 397 271 607 542 655 845 17 105 8 288 -20 392 -46 173 -139 324 -281 459 -310 295 -817 471 -1544 536 -123 11 -645 20 -770 14z"/>
    </g>
</svg>`,
'Davinci Resolve': `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
    <defs>
        <linearGradient id="silverDavinciResolve" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#e0e0e0" />
            <stop offset="50%" style="stop-color:#959595" />
            <stop offset="100%" style="stop-color:#606060" />
        </linearGradient>
    </defs>
    <path fill="url(#silverDavinciResolve)" d="M17.621 0 5.977.004c-1.37 0-2.756.345-3.762 1.11a4.925 4.925 0 0 0-1.61 2.003C.233 3.93 0 5.02 0 5.951l.012 12.2c.002 1.604.479 3.057 1.461 4.112.984 1.056 2.462 1.683 4.331 1.691L16.856 24c1.26.005 3.095-.036 4.303-.714 1.075-.605 2.025-1.556 2.497-2.984.278-.84.345-2.084.344-3.147l-.021-11.13c-.002-.888-.15-2.023-.547-2.934-.425-.976-1.181-1.815-2.322-2.425C20.353.26 19.123 0 17.622 0zm0 .93c1.378 0 2.538.295 3.04.565.977.523 1.544 1.166 1.889 1.96.315.721.47 1.793.473 2.572l.018 11.13c.002 1.013-.097 2.257-.298 2.86-.396 1.202-1.146 1.946-2.063 2.462-.814.457-2.612.593-3.82.588l-11.05-.044c-1.657-.007-2.832-.534-3.626-1.386-.792-.851-1.212-2.06-1.212-3.485L.999 5.95c0-.829.196-1.827.474-2.437.345-.757.75-1.207 1.365-1.674C3.585 1.27 4.868.97 6.08.97zm-5.66 3.423c-1.976.089-3.204 1.658-3.214 3.29.019 1.443 1.635 3.481 2.884 4.53.12.099.154.109.33.18.062.025.198-.047.327-.135.36-.245.993-.947 1.648-1.738a7.67 7.67 0 0 0 1.031-1.683c.409-.89.261-1.599.235-1.888a3.983 3.983 0 0 0-.99-1.692 3.36 3.36 0 0 0-2.251-.864zm4.172 7.922a10.185 10.185 0 0 0-3.244.61c-.15.058-.26.1-.374.17-.057.036-.11.135-.105.292.017.433.29 1.278.624 2.27.384 1.135 1.066 2.27 1.844 2.74a3.23 3.23 0 0 0 2.53.342c.832-.243 1.595-.868 1.962-1.546.986-1.818.19-3.548-1.121-4.417-.447-.296-1.133-.445-1.89-.46-.074 0-.15-.002-.226-.001zm-8.432.038a6.201 6.201 0 0 0-.752.047c-.596.078-.932.273-1.29.51a3.177 3.177 0 0 0-1.365 1.979c-.075.552-.086 1.053.033 1.507.433 1.389 1.326 2.222 2.847 2.452.636.028 1.37-.063 1.99-.45 1.269-.782 2.08-3.17 2.412-4.742.053-.176.035-.357-.013-.42-.005-.067-.044-.113-.19-.183-.398-.192-1.32-.417-2.375-.6a7.68 7.68 0 0 0-1.297-.1z"/>
</svg>`,    'Trello': `<svg viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
    <defs>
        <linearGradient id="silverGradientTrello" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#e0e0e0" />
            <stop offset="50%" style="stop-color:#959595" />
            <stop offset="100%" style="stop-color:#606060" />
        </linearGradient>
    </defs>
<g fill="url(#silverGradientTrello)">
    <path d="M16.5 15.833c0 0.365-0.302 0.667-0.667 0.667h-14.666c-0.364 0-0.667-0.302-0.667-0.667v-14.666c0-0.365 0.302-0.667 0.667-0.667h14.667c0.364 0 0.667 0.302 0.667 0.667v14.666zM7.833 2.5c0-0.188-0.146-0.333-0.333-0.333h-5c-0.188 0-0.333 0.146-0.333 0.333v10.667c0 0.187 0.146 0.333 0.333 0.333h5c0.188 0 0.333-0.146 0.333-0.333v-10.667zM14.833 2.5c0-0.188-0.146-0.333-0.333-0.333h-5c-0.188 0-0.333 0.146-0.333 0.333v6.667c0 0.187 0.145 0.333 0.333 0.333h5c0.188 0 0.333-0.146 0.333-0.333v-6.667z"/>
</g>
</svg>`, 'Lightroom Classic': `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
    <defs>
        <linearGradient id="silverGradientLightroom" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#e0e0e0" />
            <stop offset="50%" style="stop-color:#959595" />
            <stop offset="100%" style="stop-color:#606060" />
        </linearGradient>
    </defs>
<g fill="url(#silverGradientLightroom)">
    <path d="M27.709 12.451c0.001 0.007 0.001 0.014 0.001 0.022 0 0.066-0.029 0.125-0.076 0.165l-0 0c-0.024 0.012-0.052 0.019-0.082 0.019s-0.058-0.007-0.083-0.019l0.001 0.001c-0.26-0.14-0.563-0.245-0.883-0.298l-0.017-0.002c-0.334-0.064-0.719-0.1-1.112-0.1-0.022 0-0.044 0-0.066 0l0.003-0c-0.022-0.001-0.048-0.001-0.073-0.001-0.645 0-1.249 0.177-1.766 0.484l0.016-0.009c-0.508 0.319-0.909 0.765-1.166 1.293l-0.008 0.019c-0.261 0.559-0.413 1.214-0.413 1.904 0 0.034 0 0.067 0.001 0.1l-0-0.005c-0.001 0.028-0.001 0.061-0.001 0.094 0 0.487 0.073 0.958 0.21 1.4l-0.009-0.034c0.134 0.41 0.321 0.767 0.557 1.085l-0.007-0.010c0.213 0.291 0.474 0.533 0.774 0.718l0.012 0.007c0.552 0.329 1.214 0.527 1.923 0.537l0.003 0c0.014 0 0.031 0 0.048 0 0.366 0 0.727-0.019 1.083-0.055l-0.045 0.004c0.326-0.042 0.622-0.116 0.902-0.221l-0.028 0.009c0.027-0.027 0.065-0.044 0.107-0.044 0.035 0 0.067 0.012 0.093 0.032l-0-0c0.040 0.039 0.065 0.094 0.065 0.155 0 0.011-0.001 0.023-0.003 0.034l0-0.001v1.862c0.001 0.010 0.002 0.022 0.002 0.035 0 0.132-0.076 0.247-0.187 0.302l-0.002 0.001c-0.295 0.119-0.637 0.207-0.994 0.248l-0.018 0.002c-0.37 0.057-0.796 0.090-1.23 0.090-0.020 0-0.039-0-0.059-0l0.003 0c-0.649-0.001-1.277-0.092-1.872-0.26l0.049 0.012c-0.606-0.164-1.135-0.421-1.602-0.76l0.014 0.010c-0.48-0.343-0.885-0.753-1.213-1.221l-0.011-0.016c-0.341-0.491-0.615-1.061-0.791-1.672l-0.010-0.041c-0.176-0.637-0.277-1.368-0.277-2.122 0-0.027 0-0.053 0-0.080l-0 0.004c-0.001-0.047-0.002-0.103-0.002-0.159 0-1.126 0.268-2.189 0.745-3.129l-0.018 0.040c0.481-0.919 1.188-1.663 2.049-2.173l0.025-0.014c0.875-0.489 1.92-0.777 3.032-0.777 0.055 0 0.109 0.001 0.164 0.002l-0.008-0c0.449 0 0.892 0.027 1.327 0.080l-0.052-0.005c0.31 0.036 0.593 0.11 0.858 0.22l-0.021-0.008c0.085 0.055 0.14 0.15 0.14 0.258 0 0.015-0.001 0.030-0.003 0.044l0-0.002zM18.712 14.463c0 0.1-0.062 0.137-0.176 0.137-0.090-0.007-0.194-0.011-0.3-0.011-0.665 0-1.293 0.161-1.846 0.447l0.023-0.011c-0.237 0.123-0.44 0.277-0.611 0.461l-0.001 0.001v6.373c0 0.126-0.050 0.176-0.15 0.176h-2.174c-0.125 0-0.175-0.064-0.175-0.2v-6.923c0-0.3 0-0.612-0.012-0.937 0-0.325-0.012-0.65-0.025-0.975q-0.019-0.414-0.075-0.826c-0.001-0.005-0.001-0.012-0.001-0.018 0-0.035 0.010-0.068 0.026-0.095l-0 0.001c0.019-0.010 0.042-0.017 0.066-0.017 0.012 0 0.024 0.002 0.035 0.004l-0.001-0h1.974c0.112 0 0.187 0.062 0.237 0.2 0.040 0.083 0.070 0.18 0.087 0.281l0.001 0.006c0.025 0.125 0.037 0.262 0.050 0.387 0.012 0.137 0.012 0.287 0.012 0.45 0.33-0.43 0.728-0.788 1.181-1.064l0.019-0.011c0.463-0.283 1.023-0.45 1.622-0.45 0.018 0 0.037 0 0.055 0l-0.003-0c0.112 0 0.162 0.062 0.162 0.175zM11.714 21.86c-0.003 0.061-0.032 0.114-0.075 0.151l-0 0c-0.031 0.022-0.070 0.036-0.112 0.036h-7.136c-0.125 0-0.175-0.076-0.175-0.225v-12.77c0-0.125 0.050-0.175 0.162-0.175h2.212c0.087 0 0.125 0.050 0.125 0.137v10.497h5.199c0.112 0 0.15 0.061 0.125 0.175zM25.685 1.379h-19.369c-0.001 0-0.003 0-0.004 0-2.931 0-5.307 2.376-5.307 5.307 0 0.002 0 0.003 0 0.005v-0 18.62c0 0.001 0 0.003 0 0.004 0 2.931 2.376 5.307 5.307 5.307 0.002 0 0.003 0 0.005 0h19.369c0.001 0 0.003 0 0.004 0 2.931 0 5.307-2.376 5.307-5.307 0-0.002 0-0.003 0-0.005v0-18.62c0-0.001 0-0.003 0-0.004 0-2.931-2.376-5.307-5.307-5.307-0.002 0-0.003 0-0.005 0h0z"/>
</g>
</svg>`,

};

// 2. Ta fonction de galerie mise à jour
function renderGallerySection(section) {
    return `
        <div class="content-section section-gallery">
            <h3>${section.title}</h3>
            <div class="gallery-grid">
                ${section.images.map(img => {
        const projectLink = img.link || "#";
        const itemTitle = img.title ? `<h4 class="gallery-item-title">${img.title}</h4>` : "";
        const itemDesc = img.description ? `<p class="gallery-item-description">${img.description}</p>` : "";

        // Génération des icônes SVG
        const toolsHtml = img.tools ? `
                        <div class="gallery-item-tools">
                            ${img.tools.map(toolName => `
                                <div class="tool-svg-wrapper" title="${toolName}">
                                    ${SOFTWARE_ICONS[toolName] || `<span class="tool-badge-fallback">${toolName}</span>`}
                                </div>
                            `).join('')}
                        </div>
                    ` : "";

        return `
                    <div class="gallery-item">
                        <div class="gallery-image-wrapper">
                            <img src="${img.src}" alt="${img.alt}" loading="lazy">
                        </div>
                        <div class="gallery-footer">
                            ${itemTitle}
                            ${toolsHtml}
                            ${itemDesc}
                            <a href="${projectLink}" target="_blank" class="gallery-link-btn">
                                Voir la réalisation <span>→</span>
                            </a>
                        </div>
                    </div>
                `}).join('')}
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
                const gallerySection = document.createElement('div');
                gallerySection.className = 'modal-section gallery-section';
                if (section.title) {
                    gallerySection.innerHTML = `<h3 class="modal-subtitle">${section.title}</h3>`;
                }

                const galleryGrid = document.createElement('div');
                galleryGrid.className = 'modal-gallery-grid';

                section.images.forEach(image => {
                    const galleryItem = document.createElement('div');
                    galleryItem.className = 'gallery-item';

                    const linkUrl = image.link || "#";

                    galleryItem.innerHTML = `
                        <a href="${linkUrl}" target="_blank" class="gallery-link-container">
                            <div class="gallery-image-wrapper">
                                <img src="${image.src}" alt="${image.alt}" loading="lazy">
                                <div class="gallery-overlay">
                                    <span class="btn-action">Voir la réalisation</span>
                                </div>
                            </div>
                        </a>
                    `;
                    galleryGrid.appendChild(galleryItem);
                });

                gallerySection.appendChild(galleryGrid);
                contentWrapper.appendChild(gallerySection);
            }
        });
    });
}

// Appeler au chargement pour précharger (optionnel)
// preloadProjectImages();




// Burger Menu
function initBurgerMenu() {
    const burgerBtn = document.querySelector('.burger-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    if (!burgerBtn || !mobileMenu) return;
    const closeBtn = mobileMenu.querySelector('.mobile-menu-close');
    if (closeBtn) closeBtn.addEventListener('click', closeMenu);

    function openMenu() {
        burgerBtn.classList.add('is-active');
        burgerBtn.setAttribute('aria-expanded', 'true');
        mobileMenu.classList.add('is-open');
        document.body.style.overflow = 'hidden';
        burgerBtn.style.zIndex = '9999'; // ← ajoute
    }

    function closeMenu() {
        burgerBtn.classList.remove('is-active');
        burgerBtn.setAttribute('aria-expanded', 'false');
        mobileMenu.classList.remove('is-open');
        document.body.style.overflow = '';
        burgerBtn.style.zIndex = ''; // ← ajoute
    }


    burgerBtn.addEventListener('click', () => {
        mobileMenu.classList.contains('is-open') ? closeMenu() : openMenu();
    });

    // Fermer au clic sur un lien
    mobileMenu.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Fermer avec Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeMenu();
    });
}

// puis appelle la fonction dans ton DOMContentLoaded :
// initBurgerMenu();













