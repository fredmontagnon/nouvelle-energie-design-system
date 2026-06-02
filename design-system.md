# Système de design — Nouvelle Énergie pour la France

> Document de référence à charger dans **Claude Design**. Il décrit la marque, ses tokens
> (voir `design-tokens.json`), ses composants (voir `composants/`) et son style (voir les
> images dans `exemples-visuels/`). Objectif : que tout visuel généré soit **conforme à
> la charte**, jamais générique.

---

## 0. 🔴 RÈGLE DE PRODUCTION — toujours demander la plateforme
**Avant de créer un visuel, TOUJOURS demander :** (1) **pour quelle(s) plateforme(s) ?**
(X, Instagram, LinkedIn, Facebook) et (2) **quel emplacement ?** (fil, story/reel,
carrousel, aperçu de lien). Puis produire **un fichier par plateforme × emplacement**, au
bon format et avec les zones de sécurité. Tailles et bonnes pratiques détaillées :
**`plateformes.md`**. Défaut si non précisé : portrait **4:5 (1080×1350)** + proposer une
**story 9:16** si pertinent.

## 1. Essence de la marque
Politique, institutionnelle, mais **moderne et offensive**. Affirmations courtes et
tranchées, **une idée par visuel**. Le **mot-clé** d'une phrase est mis en valeur en
**kaki**. L'**hexagone** est la signature graphique omniprésente.

## 2. Couleurs (voir `design-tokens.json` — palette relevée sur les visuels publiés)
- **Bleu marine `#16216C`** — primaire : fonds, bandeaux, titres, texte sur fond clair, logo.
- **Indigo `#1D2582`** — hexagones (puces, icônes) et gros chiffres (un peu plus vif).
- **Kaki `#ADAB85`** — mots-clés surlignés, labels (« PROPOSITION N »), filets, contours d'hexagones. *Volontairement doux sur fond clair.*
- **Blanc cassé `#F8F8F8`** — fond des cartes claires (jamais de blanc pur).
- **Blanc `#FFFFFF`** — texte/logo sur fond bleu.
- Accents thématiques *optionnels* : **Violet `#4B3F9E`** (données/santé), **Vert `#33945F`** (feuilles de route « Objectif »).

Règles : le kaki ne surligne que **2–5 mots**, jamais un bloc entier. Sur fond clair →
texte marine ; sur fond bleu → texte blanc + accent kaki. Seul dégradé autorisé :
`#16216C → #0E1A57` (couvertures).

## 3. Typographie
- **Titres = Tubqal Pro** (ExtraBold 800 / SemiBold 600), en **CAPITALES**, interligne court.
- **Texte = Tango Sans** (Regular 400 / Bold 700), casse normale.
- Labels (« PROPOSITION 3 : ») : Tubqal SemiBold, capitales, interlettrage large, en kaki dense.
- Légendes de chiffres : Tango Sans **italique gras**.
- Jamais plus de 2 polices. (Fichiers dans `fonts/`.)

## 4. Hexagone (motif central)
**Flat-top** uniquement (arête horizontale en haut/bas, comme le logo) —
`clip-path: polygon(25% 0%,75% 0%,100% 50%,75% 100%,25% 100%,0% 50%)`. Usages : puce de
liste (plein bleu), icône/numéro (plein bleu), cadre de chiffre (contour kaki), filigrane,
logo.

## 5. Logo (voir `logo/`)
Hexagone flat-top contenant : « NOUVELLE » (kaki) / **« ÉNERGIE »** (bleu, mot héros) /
« POUR LA FRANCE » (bleu). Versions : `logo-couleur.svg` (fond clair), `logo-blanc.svg`
(fond bleu/photo), `logo-blanc-bleu.png` (fond bleu moyen). Toujours **centré en bas**.
Ne jamais déformer ni recolorer hors charte.

---

## 6. Composants & patterns de mise en page
Trois gabarits de référence (code dans `composants/`, rendus dans `exemples-visuels/`).
Format par défaut **1080 × 1350** (4:5), marge de sécurité 84 px.

### A. Couverture / Manifeste — `couverture.html` → `exemples-visuels/couverture-genie.jpg`
Fond **bleu** (dégradé `#16216C→#0E1A57`, ou photo voilée de bleu). Gros titre Tubqal
capitales **blanc** avec **1 mot en kaki**. Filet kaki. Sous-titre Tango Sans. Logo blanc
centré en bas. Filigrane hexagone discret. → *la phrase d'ouverture qui claque.*

### B. Proposition / Mesure — `proposition.html` → `exemples-visuels/proposition-{1-fiscalite,2-epargne,3-experimentation}.jpg`
Fond **crème**. En-tête : hexagone plein bleu + label kaki « PROPOSITION N : » + titre
Tubqal bleu (1 ligne). Accroche kaki en capitales. **Liste de 2–4 mesures** : puce
hexagone + texte Tango (mot-clé en kaki dense), filets kaki entre les items. **Bandeau
bleu** de conclusion en bas (barre kaki verticale + 1 phrase, mots-clés kaki). Logo
couleur. → *une proposition = une carte.*

### C. Chiffres / Data — `stats.html` → `exemples-visuels/stats-etat-de-sante.jpg`
Fond **crème**. Titre 2 niveaux (fin + gras). **Grille d'hexagones-contours kaki** (3×2),
chacun = **gros chiffre** Tubqal bleu + **légende italique** dessous. (Variante violet
possible pour la santé/data.) → *les chiffres qui frappent.*

### D. Objectif / Liste verticale — `exemples-visuels/objectif-deserts-medicaux.jpg`
Variante « feuille de route » : grand **numéro dans un hexagone** + titre en italique, puis
une **colonne de mesures** reliées par une **timeline verticale d'hexagones** à gauche
(chaque item : sous-titre en capitales bleu + phrase, mot-clé surligné). Bande latérale
bleue à gauche. *Sur ce gabarit thématique, l'accent peut être **vert** (objectifs/santé)
au lieu du kaki.* → *développer un objectif en plusieurs mesures.*

### E. Citation / Verbatim
Variante de la couverture : une phrase forte centrée sur fond bleu + logo blanc.

> **✅ Couleurs alignées.** La palette des tokens (`#16216C` marine · `#1D2582` indigo ·
> `#ADAB85` kaki · `#F8F8F8` fond) a été **relevée directement sur ces visuels publiés** :
> images de référence et `design-tokens.json` sont donc **cohérents**. Certains visuels
> portent un **accent thématique** (violet `#4B3F9E` pour data/santé, vert `#33945F` pour
> les feuilles de route « Objectif »).

---

## 7. Mise en page & rythme
Hiérarchie verticale : label → titre → contenu → conclusion → logo. Textes longs alignés à
gauche ; couvertures et logo centrés. **Beaucoup d'air**, ne jamais remplir jusqu'aux bords.
Le **bandeau bleu** ferme les cartes « proposition ».

## 8. Ton éditorial
Phrases courtes au présent, verbes d'action. **Un mot-clé en kaki dense par phrase.**
Titres en capitales, corps en casse normale. Pas de jargon dans les titres.

## 9. À NE JAMAIS faire
Couleur hors palette · bloc entier en kaki · 3ᵉ police · hexagone pointe en haut · texte
jusqu'aux bords · logo recoloré/déformé · blanc pur en fond · plus d'une idée par visuel ·
ancienne identité (magenta / Cormorant).
