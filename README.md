# Site académique — Stéphane Tholon

Site statique publié avec GitHub Pages :

<https://stephanetholon-a11y.github.io>

Le site utilise uniquement des fichiers HTML, CSS et JavaScript. Il ne contient ni base de données, ni fonction serveur, ni service payant.

## Prévisualisation locale

Ouvrir `index.html` directement ou lancer, dans ce dossier :

```sh
python3 -m http.server 8080
```

Puis ouvrir <http://localhost:8080>.

## Contenu éditorial

Les données affichées sont regroupées dans `assets/js/data.js` : parcours, centres d'intérêt et projets.

## Documents privés

Les PDF, la page `documents.html`, les miniatures et `assets/js/documents-data.js` restent locaux. Ils sont explicitement exclus du dépôt par `.gitignore` et ne doivent pas être ajoutés au site public sans décision ultérieure explicite.
