# Portfolio Louka Rousseau - Guide d'utilisation

## 📁 Structure du projet

```
portfolio/
├── index.html      # Structure HTML du site
├── styles.css      # Styles et animations CSS
├── script.js       # Interactions JavaScript
└── README.md       # Ce fichier
```

## 🎨 Personnalisation rapide

### Modifier les couleurs

Ouvrir `styles.css` et modifier les variables au début du fichier (lignes 1-20) :

```css
:root {
    --color-bg: #0a0a0a;              /* Fond principal */
    --color-bg-secondary: #141414;     /* Fond secondaire */
    --color-text: #e8e8e8;             /* Texte principal */
    --color-text-secondary: #a0a0a0;   /* Texte secondaire */
    --color-accent: #ff6b35;           /* Couleur accent (orange basket) */
    --color-accent-hover: #ff8c42;     /* Couleur accent au survol */
}
```

**Exemple de palettes alternatives :**
- **Bleu sport** : `--color-accent: #0066cc;`
- **Vert tennis** : `--color-accent: #00ff88;`
- **Rouge passion** : `--color-accent: #ff3333;`

### Modifier les polices

Dans `styles.css`, ligne 15-16 :

```css
--font-display: 'Bebas Neue', sans-serif;  /* Titres */
--font-body: 'DM Sans', sans-serif;         /* Corps de texte */
```

Pour changer de police :
1. Chercher une police sur [Google Fonts](https://fonts.google.com/)
2. Copier le lien dans `index.html` (ligne 11)
3. Modifier les variables CSS ci-dessus

### Changer les textes

Ouvrir `index.html` et modifier directement le contenu :

**Nom et titre (ligne 40-45) :**
```html
<span class="hero-name">Louka Rousseau</span>
<span class="hero-subtitle">UX/UI Designer & Créatif Digital</span>
```

**Email et coordonnées (lignes 340-350) :**
```html
<a href="mailto:ton-email@exemple.fr" class="contact-button">
```

## 🎯 Ajouter un projet

1. Ouvrir `index.html`
2. Chercher `<!-- Projet 1 -->` (ligne 160)
3. Copier tout le bloc `<article class="project-card">...</article>`
4. Coller en dessous des autres projets
5. Modifier le contenu :

```html
<article class="project-card">
    <div class="project-image">
        <div class="project-placeholder">
            <span>TON TEXTE</span>
        </div>
    </div>
    <div class="project-info">
        <h3 class="project-title">Titre du Projet</h3>
        <p class="project-description">
            Description de ton projet...
        </p>
        <div class="project-tags">
            <span class="tag">Tag1</span>
            <span class="tag">Tag2</span>
        </div>
    </div>
</article>
```

**Pour ajouter une vraie image :**
Remplacer `<div class="project-placeholder">` par :
```html
<img src="chemin/vers/ton-image.jpg" alt="Description">
```

## ⚡ Modifier les animations

### Vitesse des animations

Ouvrir `styles.css`, lignes 18-21 :

```css
--transition-fast: 0.2s ease;   /* Rapide */
--transition-base: 0.4s ease;   /* Normal */
--transition-slow: 0.6s ease;   /* Lent */
```

Augmenter les valeurs pour ralentir, diminuer pour accélérer.

### Désactiver une animation

Ouvrir `script.js` et commenter la fonction d'initialisation :

```javascript
// initBasketballInteraction();  // ← Désactive l'interaction avec le ballon
// initProjectCards();            // ← Désactive l'animation des cartes
```

### Modifier l'animation du ballon

Dans `script.js`, ligne 80-90 :

```javascript
// Changer la vitesse du mouvement
const moveX = (mouseX - window.innerWidth / 2) / 50;  // Diviser par un nombre plus grand = mouvement plus lent
```

Dans `styles.css`, ligne 295 :

```css
animation: float 3s ease-in-out infinite, spin 20s linear infinite;
/* 3s = vitesse de flottement | 20s = vitesse de rotation */
```

## 🎨 Modifier les compétences

Ouvrir `index.html`, chercher `<!-- Compétences -->` (ligne 260) :

```html
<div class="skill-item">
    <div class="skill-info">
        <span class="skill-name">NOM DE LA COMPÉTENCE</span>
        <span class="skill-level">85%</span>  <!-- Niveau affiché -->
    </div>
    <div class="skill-bar">
        <div class="skill-progress" data-progress="85"></div>  <!-- Niveau de la barre -->
    </div>
</div>
```

⚠️ **Important** : Le pourcentage dans `skill-level` et `data-progress` doivent être identiques.

## 📱 Responsive

Le site est déjà responsive. Les breakpoints sont dans `styles.css` :

- **Tablettes** : 1024px et moins
- **Mobiles** : 768px et moins

Pour modifier ces valeurs, chercher `@media` dans `styles.css` (lignes 780+).

## 🎮 Easter Eggs

Le site contient des easter eggs :

- **Konami Code** (↑↑↓↓←→←→BA) : Fait tomber des ballons
- **Click sur le ballon** : Rebond
- **Scroll jusqu'aux projets** : Le ballon tombe dans le panier

Pour désactiver :
```javascript
// Commenter dans script.js :
// document.addEventListener('keydown', (e) => {...});  // Ligne 210
```

## 🚀 Déploiement

### Option 1 : GitHub Pages
1. Créer un repo sur GitHub
2. Upload des fichiers
3. Aller dans Settings > Pages
4. Sélectionner la branche main
5. Ton site sera sur `username.github.io/repo-name`

### Option 2 : Netlify
1. Créer un compte sur [Netlify](https://netlify.com)
2. Drag & drop le dossier du portfolio
3. Site déployé instantanément !

### Option 3 : Serveur personnel
Upload via FTP sur ton hébergeur web.

## 🛠️ Outils utilisés

- **HTML5** : Structure
- **CSS3** : Design et animations
- **Vanilla JavaScript** : Interactions (pas de framework)
- **Google Fonts** : Bebas Neue + DM Sans

Pas de dépendances externes = site ultra-rapide et facile à maintenir !

## 📊 Performance

Pour optimiser :
1. **Images** : Compresser avec [TinyPNG](https://tinypng.com)
2. **CSS** : Minifier avec un outil en ligne
3. **JS** : Minifier avec [JSCompress](https://jscompress.com)

## ❓ Questions fréquentes

**Q : Comment ajouter Google Analytics ?**
A : Ajouter le script GA dans `<head>` de `index.html`

**Q : Le site ne s'affiche pas correctement ?**
A : Vérifier la console (F12) pour les erreurs

**Q : Comment changer le favicon ?**
A : Créer un fichier `favicon.ico` et ajouter dans `<head>` :
```html
<link rel="icon" type="image/x-icon" href="favicon.ico">
```

**Q : Les animations ne marchent pas ?**
A : Vérifier que `script.js` est bien chargé et qu'il n'y a pas d'erreurs dans la console

## 📞 Support

Si tu as des questions :
- Ouvre la console (F12) pour voir les erreurs
- Vérifie que tous les fichiers sont dans le même dossier
- Assure-toi que les chemins des fichiers sont corrects

## 🎓 Crédits

Portfolio créé pour Louka Rousseau - BUT MMI
Thème basketball subtil et professionnel
Design moderne et responsive

---

**Bon courage pour tes candidatures en master ! 🏀🚀**
