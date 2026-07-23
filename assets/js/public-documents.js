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
  // Ressources pédagogiques : du niveau le plus bas au plus haut.
  {
    id: "cahier-calcul-mental-litteral",
    section: "enseignement",
    title: "Cahier de calcul mental et de calcul littéral",
    kind: "Ressource pédagogique",
    context: "Automatismes du collège · Édition 2026",
    pages: 19,
    version: "édition 2026",
    abstract: "Ce cahier propose un parcours progressif, sans calculatrice, pour consolider les automatismes du collège : calcul numérique, fractions, pourcentages, puissances, conversions et calcul littéral, jusqu’aux équations et inéquations. Des exercices courts, dix séances chronométrées et un tableau de suivi structurent l’entraînement.",
    file: "assets/documents/Cahier%20de%20calcul%20mental.pdf"
  },
  {
    id: "cours-mathematiques-seconde",
    section: "enseignement",
    title: "Cours de mathématiques — Seconde générale",
    kind: "Notes de cours",
    context: "De la Troisième vers la Première · Programme 2026–2027",
    pages: 155,
    version: "version de juillet 2026",
    abstract: "Ce cours couvre le programme de mathématiques de seconde générale : calcul numérique et littéral, fonctions, géométrie repérée, statistiques, probabilités et algorithmique avec Python. Il comprend un diagnostic d’entrée, des automatismes, des exercices gradués, des problèmes de synthèse et des annexes de révision.",
    file: "assets/documents/Cours_de_mathematiques_Seconde.pdf"
  },
  {
    id: "cours-mathematiques-premiere",
    section: "enseignement",
    title: "Cours de mathématiques — Première",
    kind: "Notes de cours",
    context: "Version incomplète · 2026",
    pages: 32,
    version: "version de juillet 2026",
    abstract: "Ce cours de Première est en cours de rédaction et reste incomplet. La version actuellement disponible traite les trinômes du second degré, les suites numériques et la dérivation ; d’autres chapitres seront ajoutés progressivement.",
    file: "assets/documents/Cours_de_mathematiques_Premiere_Terminale.pdf",
    status: "En cours de rédaction"
  },
  {
    id: "cours-mathematiques-terminale",
    section: "enseignement",
    title: "Cours de mathématiques — Terminale",
    kind: "Notes de cours",
    context: "Rubrique prévue",
    abstract: "Le cours de Terminale n’est pas encore disponible. Cette rubrique sera complétée lors de sa publication.",
    file: null,
    status: "À venir"
  },
  {
    id: "lecon-hyperplans",
    section: "enseignement",
    title: "Leçon sur les hyperplans",
    kind: "Leçon",
    context: "PCSI · Algèbre linéaire",
    pages: 15,
    version: "version de juillet 2026",
    abstract: "Cette leçon introduit les hyperplans à partir des sommes de sous-espaces vectoriels, puis en présente plusieurs caractérisations, notamment comme noyaux de formes linéaires. Des exercices d’entraînement et d’approfondissement accompagnés de leurs corrections complètent le cours.",
    file: "assets/documents/lecon-hyperplans.pdf"
  },
  {
    id: "banque-exercices-sans-corrections",
    section: "enseignement",
    title: "Questions de cours et exercices pour les classes préparatoires",
    kind: "Ressource pédagogique",
    context: "Classes préparatoires · Sans corrections",
    pages: 45,
    version: "mise à jour du 23 juillet 2026",
    abstract: "Cette banque rassemble des questions de cours et plus de 250 exercices sans correction, classés par thèmes. Elle couvre notamment l’analyse, l’algèbre linéaire, l’arithmétique, les nombres complexes, les probabilités et l’informatique.",
    file: "assets/documents/Banque_exercices_sans_corrections.pdf"
  },
  {
    id: "cours-mathematiques-pcx",
    section: "enseignement",
    title: "Cours de mathématiques — PCX",
    kind: "Notes de cours",
    context: "Analyse, algèbre et probabilités",
    pages: 108,
    version: "version de juillet 2026",
    abstract: "Ces notes couvrent le programme de mathématiques de la classe de PC*, de l’algèbre linéaire et de la réduction aux séries de fonctions, aux probabilités, aux intégrales à paramètre, aux équations différentielles et au calcul différentiel.",
    file: "assets/documents/cours-mathematiques-pcx.pdf"
  },
  // Travaux de recherche : après les ressources pédagogiques.
  {
    id: "probabilites-analyse-fonctionnelle",
    section: "recherche",
    title: "Autour de quelques résultats de probabilités et d’analyse fonctionnelle",
    kind: "Rapport de stage",
    context: "Stage de recherche · 2025",
    pages: 47,
    version: "révision de juillet 2026",
    abstract: "Issu d’un stage au Laboratoire de Probabilités, Statistique et Modélisation, ce travail part de l’intégrale de Riemann–Stieltjes et du théorème de Radon–Nikodym pour aborder l’espérance conditionnelle, les espaces polonais, la convergence faible et le théorème de Donsker.",
    file: "assets/documents/probabilites-analyse-fonctionnelle.pdf"
  },
  {
    id: "controle-lineaire-dimension-finie",
    section: "recherche",
    title: "Éléments de théorie du contrôle linéaire en dimension finie",
    kind: "Rapport de stage",
    context: "Stage de recherche · 2026",
    abstract: "Ce travail porte sur les systèmes linéaires en dimension finie, la contrôlabilité, l’observabilité et les critères de Kalman et de Hautus. Le document sera ajouté à cette rubrique lorsqu’il sera prêt à être publié.",
    file: null,
    status: "À venir"
  }
];
