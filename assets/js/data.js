/* Données éditoriales du site. Modifier ce fichier suffit pour mettre à jour
   le parcours, les projets et les documents affichés. */
window.siteData = {
  documentsPublic: true,

  profile: {
    name: "Stéphane Tholon",
    email: "stephane.tholon@icloud.com"
  },

  timeline: [
    {
      period: "Été 2026",
      place: "Inria — équipe CAGE · Laboratoire Jacques-Louis Lions",
      title: "Stage de recherche en théorie du contrôle",
      text: "Étude des systèmes linéaires en dimension finie, de la contrôlabilité, de l’observabilité et des critères algébriques associés.",
      accent: true
    },
    {
      period: "2025 — 2028",
      place: "",
      title: "Master Mathématiques et Applications",
      text: "Formation approfondie en analyse fonctionnelle, théorie des distributions, calcul des variations et analyse convexe."
    },
    {
      period: "Été 2025",
      place: "Laboratoire de Probabilités, Statistique et Modélisation",
      title: "Stage de recherche en probabilités",
      text: "Mesures de probabilité sur les espaces polonais, convergence en loi, espérance conditionnelle et intégrale de Riemann–Stieltjes."
    },
    {
      period: "2024 — 2025",
      place: "",
      title: "Licence 3 de mathématiques",
      text: "Formation généraliste en analyse, algèbre, topologie et probabilités. Mention bien."
    },
    {
      period: "2023 — 2024",
      place: "Mines Saint-Étienne",
      title: "Cycle ingénieur civil des mines",
      text: "Première année du cycle ingénieur avant une réorientation vers les mathématiques fondamentales."
    },
    {
      period: "2022 — 2023",
      place: "Lycée Fénelon, Paris",
      title: "Classe préparatoire PC*",
      text: "Approfondissement en mathématiques, physique et chimie, préparation aux concours des grandes écoles."
    },
    {
      period: "2021 — 2022",
      place: "Lycée Lavoisier, Paris",
      title: "Classe préparatoire PCSI",
      text: "Formation scientifique intensive en mathématiques, physique, chimie et sciences de l’ingénieur."
    }
  ],

  coursework: [
    "Analyse fonctionnelle", "Analyse complexe", "Équations aux dérivées partielles",
    "Théorie de la mesure", "Probabilités", "Topologie", "Théorie des distributions",
    "Calcul des variations", "Théorie du contrôle", "Géométrie différentielle"
  ],

  interests: [
    {
      number: "01",
      title: "Analyse fonctionnelle",
      summary: "Étudier les espaces fonctionnels et les opérateurs qui structurent une grande partie de l’analyse moderne.",
      topics: ["Espaces de Banach et de Hilbert", "Dualité", "Opérateurs linéaires", "Topologies faibles"]
    },
    {
      number: "02",
      title: "Théorie des distributions",
      summary: "Étendre les notions de fonction et de dérivée afin d’étudier des problèmes au-delà du cadre classique.",
      topics: ["Distributions", "Distributions tempérées", "Convolution", "Transformée de Fourier", "Solutions faibles"]
    },
    {
      number: "03",
      title: "Équations aux dérivées partielles",
      summary: "Étudier l’existence, l’unicité et la régularité des solutions par des méthodes fonctionnelles et variationnelles.",
      topics: ["Espaces de Sobolev", "Solutions faibles", "Méthodes variationnelles", "Problèmes d’évolution"]
    },
    {
      number: "04",
      title: "Théorie spectrale",
      summary: "Étudier le spectre des opérateurs afin de relier leur structure aux propriétés des équations associées.",
      topics: ["Spectre et résolvante", "Opérateurs compacts", "Opérateurs auto-adjoints", "Décomposition spectrale", "Applications aux EDP"]
    }
  ],

  projects: [
    {
      year: "2026",
      title: "Éléments de théorie du contrôle linéaire en dimension finie",
      institution: "Inria, équipe CAGE · Laboratoire Jacques-Louis Lions",
      supervisor: "Kévin Le Balc’h",
      summary: "Une introduction structurée aux équations différentielles linéaires, puis aux notions de contrôlabilité et d’observabilité des systèmes de contrôle.",
      topics: ["EDO linéaires", "Critère de Kalman", "Critère de Hautus", "Observabilité", "Dualité", "Gramien"],
      file: null
    },
    {
      year: "2025",
      title: "Sur quelques notions de probabilités et d’analyse fonctionnelle",
      institution: "Laboratoire de Probabilités, Statistique et Modélisation",
      supervisor: "Thomas Le Guerch",
      summary: "Un parcours allant de l’intégrale de Riemann–Stieltjes aux mesures de probabilité sur les espaces polonais et à la convergence en loi.",
      topics: ["Riemann–Stieltjes", "Radon–Nikodym", "Espérance conditionnelle", "Espaces polonais", "Convergence en loi"],
      file: null
    }
  ],

  documents: window.siteDocuments || []
};
