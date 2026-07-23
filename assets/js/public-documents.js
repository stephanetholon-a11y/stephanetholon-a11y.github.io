/*
 * CONTENU DES TRAVAUX
 *
 * Pour ajouter un résumé, écrire simplement le texte entre les guillemets
 * après `abstract:`. Exemple :
 * abstract: "Ce travail présente…",
 *
 * Si le champ reste vide (`abstract: ""`), aucun résumé n’est affiché.
 */

window.siteCv = {
  file: "assets/documents/cv-stephane-tholon.pdf"
};

window.siteDocuments = [
  // Travaux de recherche : du plus récent au plus ancien.
  {
    id: "probabilites-analyse-fonctionnelle",
    title: "Autour de quelques résultats de probabilités et d’analyse fonctionnelle",
    kind: "Rapport",
    context: "Stage de recherche · 2025",
    abstract: "Issu d’un stage au Laboratoire de Probabilités, Statistique et Modélisation, ce rapport part de l’intégrale de Riemann–Stieltjes et du théorème de Radon–Nikodym pour aborder l’espérance conditionnelle, les espaces polonais, la convergence faible et le théorème de Donsker.",
    file: "assets/documents/probabilites-analyse-fonctionnelle.pdf"
  },
  // Ressources d’enseignement : du niveau le plus bas au plus haut.
  {
    id: "cahier-calcul-mental-litteral",
    title: "Cahier de calcul mental et de calcul littéral",
    kind: "Ressource pédagogique",
    context: "Automatismes du collège · Édition 2026",
    abstract: "Ce cahier propose un parcours progressif, sans calculatrice, pour consolider les automatismes du collège : calcul numérique, fractions, pourcentages, puissances, conversions et calcul littéral, jusqu’aux équations et inéquations. Des exercices courts, dix séances chronométrées et un tableau de suivi structurent l’entraînement.",
    file: "assets/documents/Cahier%20de%20calcul%20mental.pdf"
  },
  {
    id: "cours-mathematiques-seconde",
    title: "Cours de mathématiques — Seconde générale",
    kind: "Notes de cours",
    context: "De la Troisième vers la Première · Programme 2026–2027",
    abstract: "Ce cours couvre le programme de mathématiques de seconde générale : calcul numérique et littéral, fonctions, géométrie repérée, statistiques, probabilités et algorithmique avec Python. Il comprend un diagnostic d’entrée, des automatismes, des exercices gradués, des problèmes de synthèse et des annexes de révision.",
    file: "assets/documents/Cours_de_mathematiques_Seconde.pdf"
  },
  {
    id: "cours-mathematiques-premiere-terminale",
    title: "Cours de mathématiques — De la Première vers la Terminale",
    kind: "Notes de cours",
    context: "Trinômes, suites et dérivation · 2026",
    abstract: "Ces notes accompagnent la transition de la Première vers la Terminale autour de trois thèmes : les trinômes du second degré, les suites numériques et la dérivation. Le cours associe définitions, démonstrations, méthodes, exercices et prolongements vers l’enseignement supérieur.",
    file: "assets/documents/Cours_de_mathematiques_Premiere_Terminale.pdf"
  },
  {
    id: "lecon-hyperplans",
    title: "Leçon sur les hyperplans",
    kind: "Leçon",
    context: "PCSI · Algèbre linéaire",
    abstract: "Cette leçon introduit les hyperplans à partir des sommes de sous-espaces vectoriels, puis en présente plusieurs caractérisations, notamment comme noyaux de formes linéaires. Des exercices d’entraînement et d’approfondissement accompagnés de leurs corrections complètent le cours.",
    file: "assets/documents/lecon-hyperplans.pdf"
  },
  {
    id: "banque-exercices-sans-corrections",
    title: "Questions de cours et exercices pour les classes préparatoires",
    kind: "Ressource pédagogique",
    context: "Classes préparatoires · Sans corrections",
    abstract: "Cette banque rassemble des questions de cours et plus de 250 exercices sans correction, classés par thèmes. Elle couvre notamment l’analyse, l’algèbre linéaire, l’arithmétique, les nombres complexes, les probabilités et l’informatique.",
    file: "assets/documents/Banque_exercices_sans_corrections.pdf"
  },
  {
    id: "cours-mathematiques-pcx",
    title: "Cours de mathématiques — PCX",
    kind: "Notes de cours",
    context: "Analyse, algèbre et probabilités",
    abstract: "Ces notes couvrent le programme de mathématiques de la classe de PC*, de l’algèbre linéaire et de la réduction aux séries de fonctions, aux probabilités, aux intégrales à paramètre, aux équations différentielles et au calcul différentiel.",
    file: "assets/documents/cours-mathematiques-pcx.pdf"
  }
];
