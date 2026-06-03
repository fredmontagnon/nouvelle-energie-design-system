# Photothèque — David Lisnard

10 portraits optimisés (2000 px, ~0,2 Mo, EXIF nettoyé) pour les visuels « Nouvelle
Énergie » (citations, couvertures, photo-en-hexagone). Toutes en **paysage** → recadrées
au centre dans l'hexagone.

> 📷 Photos d'une **personnalité publique** — incluses dans **ce dépôt** (`photos/`). Lisibles par Claude Design (qui ingère ce repo) et par le gabarit `composants/citation.html`.

| Fichier | Contexte | Tenue | Expression | Bon pour |
|---------|----------|-------|------------|----------|
| `dl-01.jpg` | Extérieur, terrasse / verdure | Costume sombre | Posé | Couverture, citation sérieuse |
| `dl-02.jpg` | **Studio, fond bleu + drapeau** | Costume-cravate | **Sourire franc** | Citation chaleureuse, officiel |
| `dl-03.jpg` | Studio, fond bleu + drapeau | Costume | Posé / officiel | Citation institutionnelle |
| `dl-04.jpg` | Extérieur, urbain | Costume | Neutre | Couverture, terrain |
| `dl-05.jpg` | Extérieur, terrasse | Costume | Posé | Citation, couverture |
| `dl-06.jpg` | Extérieur, décontracté | Plus casual | Détendu | Proximité, ton léger |
| `dl-07.jpg` | Studio, drapeau | Costume | Officiel | Citation institutionnelle |
| `dl-08.jpg` | Extérieur, portrait serré | Costume | Posé | Portrait, couverture |
| `dl-09.jpg` | **Extérieur, place / palmiers** | Costume | **Sourire** | Citation chaleureuse, proximité |
| `dl-10.jpg` | **Bureau, en train d'écrire** | Chemise + cravate | Concentré | Citation « au travail / praticien » |

*Descriptions indicatives (à affiner selon ton œil). Le recadrage dans l'hexagone se règle
par `object-position` dans `templates/citation.html` si un visage est mal centré.*

## Générer un carrousel de citations
```bash
python3 carrousel-citations.py            # exemple par défaut (3 cartes)
python3 carrousel-citations.py mes-citations.json
```
Format `mes-citations.json` :
```json
[
  {"photo":"dl-02.jpg","quote":"Votre citation.","author":"David Lisnard","role":"Président de Nouvelle Énergie"},
  {"photo":"dl-09.jpg","quote":"Autre citation.","author":"David Lisnard","role":""}
]
```
→ une image `exemples/carrousel-NN.png` par citation.
