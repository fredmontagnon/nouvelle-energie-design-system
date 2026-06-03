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
Politique, institutionnelle, mais **moderne et offensive**. Valeurs : **dynamisme,
stabilité, ouverture** (clarté & nouveauté). Affirmations courtes et tranchées, **une idée
par visuel**. Le **mot-clé** d'une phrase est mis en valeur en **chamois**. L'**hexagone**
est la signature graphique omniprésente.
Slogans : « Pour la Liberté, l'Ordre et la Dignité. » · « Pour une société prospère, un État
performant et une nation unie. » — site : **nouvelleénergie.fr**.

## 2. Couleurs (OFFICIELLES — brand book ; voir `design-tokens.json`)
**Primaires**
- **Bleu Principal `#1D257A`** (Pantone 2735 C) — fonds, bandeaux, titres, texte sur fond clair, hexagones, logo.
- **Bleu Sombre `#0F1752`** (2766 C) — fonds profonds, fin de dégradé, contraste.
- **Chamois Désaturé `#B0AD85`** (452 C) — accent doux : contours d'hexagones, **grands titres sur fond bleu**.
- **Chamois Sombre `#98955F`** (451 C) — mots-clés / labels sur fond **clair** (lisibilité).
- **Blanc `#F9F9F9`** — fond clair (jamais blanc 100%). **`#FFFFFF`** pour texte/logo sur bleu.
- **Gainsboro `#DCDFDF`** (7541 C) — gris clair neutre.

**Secondaires — 5 à 15 % MAX** (boutons, lueurs, traits, mentions, accents) :
- **Vert Émeraude `#52C985`** · **Rose Électrique `#F62A72`** · **Indigo `#4A36A3`** (chacune a une teinte plus claire).

Règles : le chamois ne surligne que **2–5 mots**, jamais un bloc. Sur fond clair → texte
**bleu** ; sur fond bleu → texte **blanc** ou **chamois** + accents secondaires. Dégradé de
couverture : `#1D257A → #0F1752`.

## 3. Typographie — Montserrat (police unique, SIL OFL, incluse)
*Police officielle de la marque.* 5 graisses retenues : **Light (300), Regular (400),
SemiBold (600), Bold (700), ExtraBold (800)**.
- **Titres** : Montserrat ExtraBold/SemiBold, en **CAPITALES** ou casse normale, interligne court.
- **Texte courant** : Montserrat Regular, **Bold** pour l'emphase.
- Labels (« PROPOSITION 3 : ») : Montserrat SemiBold, capitales, interlettrage large, en chamois.
- Légendes de chiffres : Montserrat **italique**.
- **Une seule famille** : hiérarchie par le **poids** et la **casse**. (`.ttf` dans `fonts/`.)

## 4. Symbole hexagone, patterns & dispositifs
L'**hexagone flat-top** (arête horizontale haut/bas, coins **légèrement arrondis**) est LA
signature — `clip-path: polygon(25% 0%,75% 0%,100% 50%,75% 100%,25% 100%,0% 50%)` (ajouter un
léger `border-radius` pour les coins).
- **Déclinaisons** : lignes (contours concentriques) · surface pleine · **points** (trame demi-teinte) · **rayures** (hachures).
- **Usages de base** : puce / icône / numéro (plein bleu) ; cadre de chiffre (contour chamois) ; filigrane ; logo.
- **Patterns de fond** : motifs hexagonaux (lignes ou points) en chamois ou indigo sur bleu — surtout web/digital.
- **Photo en hexagone** : images **masquées dans un hexagone** (`object-fit:cover; object-position:center 42%`). **Toujours centrer sur le VISAGE** : nos portraits sont pré-recadrés carré, centrés sur le visage (détection auto) → aucun réglage par photo. Petits hexagones pleins (dégradé rose/émeraude/indigo) éparpillés autour. *Photothèque David Lisnard dans **`photos/`** de ce dépôt (10 portraits `dl-01..10`, personnalité publique). Gabarit : `citation.html`.*
- **Lueur demi-teinte** : trame de points en dégradé (rose/indigo) formant une lueur hexagonale derrière un mot fort.

**Dégradés (8 officiels)** — subtils en fond ou en accent sur formes géométriques : bleu
`#1D257A→#0F1752`, chamois `#B0AD85→#98955F`, + 6 mélanges (bleu↔rose, rose↔chamois,
bleu↔indigo, bleu↔chamois, bleu↔émeraude, émeraude↔chamois).

**Boutons (web / CTA)** : coins arrondis, **plein** (secondaire : émeraude « adhérer », rose
« suivre ») ou **contour** (bleu/rose). Libellés courts : adhérer · faire un don · suivre · s'inscrire.

**Citation / verbatim** : grands guillemets bleus + citation **bleue gras** + attribution en
*italique* ; photo en hexagone à côté.

## 5. Logo (voir `logo/`)
Hexagone flat-top contenant : « NOUVELLE » (chamois) / **« ÉNERGIE »** (bleu, mot héros) /
« POUR LA FRANCE » (bleu). Versions : `logo-officiel.svg` (fond clair), `logo-blanc.svg`
(fond bleu/photo), `logo-blanc-bleu.png` (fond bleu moyen). Toujours **centré en bas**.
Ne jamais déformer ni recolorer hors charte.

---

## 6. Composants & patterns de mise en page
Trois gabarits de référence (code dans `composants/`, rendus dans `exemples-visuels/`).
Format par défaut **1080 × 1350** (4:5), marge de sécurité 84 px.

### A. Couverture / Manifeste — `couverture.html` → `exemples-visuels/couverture-genie.jpg`
Fond **bleu** (dégradé `#1D257A→#0F1752`, ou photo voilée de bleu). Gros titre Montserrat
capitales **blanc** avec **1 mot en chamois**. Filet chamois. Sous-titre Montserrat. Logo blanc
centré en bas. Filigrane hexagone discret. → *la phrase d'ouverture qui claque.*

### B. Proposition / Mesure — `proposition.html` → `exemples-visuels/proposition-{1-fiscalite,2-epargne,3-experimentation}.jpg`
Fond **crème**. En-tête : hexagone plein bleu + label chamois « PROPOSITION N : » + titre
Montserrat bleu (1 ligne). Accroche chamois en capitales. **Liste de 2–4 mesures** : puce
hexagone + texte Montserrat (mot-clé en chamois dense), filets chamois entre les items. **Bandeau
bleu** de conclusion en bas (barre chamois verticale + 1 phrase, mots-clés chamois). Logo officiel. → *une proposition = une carte.*

### C. Chiffres / Data — `stats.html` → `exemples-visuels/stats-etat-de-sante.jpg`
Fond **crème**. Titre 2 niveaux (fin + gras). **Grille d'hexagones-contours chamois** (3×2),
chacun = **gros chiffre** Montserrat bleu + **légende italique** dessous. (Variante violet
possible pour la santé/data.) → *les chiffres qui frappent.*

### D. Objectif / Liste verticale — `exemples-visuels/objectif-deserts-medicaux.jpg`
Variante « feuille de route » : grand **numéro dans un hexagone** + titre en italique, puis
une **colonne de mesures** reliées par une **timeline verticale d'hexagones** à gauche
(chaque item : sous-titre en capitales bleu + phrase, mot-clé surligné). Bande latérale
bleue à gauche. *Sur ce gabarit thématique, l'accent peut être **vert** (objectifs/santé)
au lieu du chamois.* → *développer un objectif en plusieurs mesures.*

### E. Citation / Verbatim — `citation.html`
Fond clair. **Photo masquée dans un hexagone** (+ hexagone d'accent indigo derrière), grand
guillemet bleu, citation en **Bleu Principal** (Montserrat ExtraBold), attribution en
*italique*, logo. Idéal pour un **carrousel de citations** (1 photo par slide). *Portraits
dans `photos/` (`dl-01..10`, personnalité publique). Exemple rendu : `apercus/citation.png`.*

> **✅ Couleurs officielles (brand book).** La palette des tokens vient de l'*Identité
> visuelle 2025* : Bleu Principal `#1D257A`, Chamois `#B0AD85`, fond `#F9F9F9` — quasi
> identique à ce que montrent les visuels de référence. Accents secondaires (≤ 15 %) :
> émeraude `#52C985`, rose `#F62A72`, indigo `#4A36A3`.

---

## 7. Mise en page & rythme
Hiérarchie verticale : label → titre → contenu → conclusion → logo. Textes longs alignés à
gauche ; couvertures et logo centrés. **Beaucoup d'air**, ne jamais remplir jusqu'aux bords.
Le **bandeau bleu** ferme les cartes « proposition ».

## 8. Ton éditorial
Phrases courtes au présent, verbes d'action. **Un mot-clé en chamois dense par phrase.**
Titres en capitales, corps en casse normale. Pas de jargon dans les titres.

## 9. À NE JAMAIS faire
Couleur hors palette · bloc entier en chamois · 3ᵉ police · hexagone pointe en haut · texte
jusqu'aux bords · logo recoloré/déformé · blanc pur en fond · plus d'une idée par visuel ·
ancienne identité (magenta / Cormorant).
