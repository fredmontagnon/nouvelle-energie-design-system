# 🎨 Kit Claude Design — Nouvelle Énergie

Bundle prêt à charger dans **Claude Design** pour générer des visuels conformes à la charte,
**sans code**. Claude Design construit sa cohérence en lisant des fichiers de marque : c'est
exactement ce que contient ce dossier.

> Accès : Claude Design est un produit **Anthropic Labs (research preview)**, disponible
> pour les abonnements **Pro, Max, Team, Enterprise**. En Enterprise, un admin doit
> l'activer. L'interface peut évoluer — les étapes ci-dessous décrivent le principe.

## Contenu du bundle
```
00-LISEZ-MOI-claude-design.md   ← ce fichier
design-system.md                ← le brief de marque (couleurs, typo, composants, ton)
design-tokens.json              ← la palette + typo en format machine
logo/                           ← logo officiel (svg, png, .ai) + déclinaisons
fonts/                          ← Montserrat (SIL OFL, incluse)
composants/                     ← les 3 gabarits HTML/CSS de référence
exemples-visuels/               ← 6 visuels originaux publiés (le style à reproduire)
```

## Mise en place (une fois)
1. Ouvrez **Claude Design** → créez un **système de design** (ou « brand »).
2. **Importez les fichiers de ce dossier** : en priorité `design-system.md`,
   `design-tokens.json`, le dossier `logo/`, les `fonts/`, puis `composants/` et
   `exemples-visuels/`. (Si l'upload d'un dossier n'est pas possible, glissez les fichiers ;
   ou pointez Claude Design sur le dépôt s'il est connecté à votre code.)
3. **Vérifiez le système extrait.** S'il se trompe d'une couleur ou d'une police, corrigez
   avec les valeurs exactes de `design-tokens.json` :
   - Bleu marine `#16216C` · Indigo `#1D2582` · Kaki `#ADAB85` · Fond `#F8F8F8`
   - Police = **Montserrat** (titres ExtraBold/SemiBold, texte Regular/Bold)
4. **Publiez** le système pour que tous les nouveaux projets en héritent.

## Créer un visuel
**Étape 0 — précisez toujours la/les plateforme(s) et l'emplacement** (X, Instagram,
LinkedIn, Facebook · fil / story-reel / carrousel). Claude Design est configuré pour le
demander ; sinon, dites-le dans le prompt. Tailles et zones de sécurité : **`plateformes.md`**.

Puis décrivez en langage naturel. Exemples de prompts (format 4:5 par défaut) :

- « Une **carte Proposition 5 – ÉCOLE**, format 1080×1350. Accroche : *Rendons à l'école son
  autorité et son exigence*. 3 mesures, mot-clé en kaki : (1) uniforme et respect du
  **cadre**, (2) retour aux **savoirs fondamentaux**, (3) autorité rendue aux **professeurs**.
  Conclusion : *L'école de la République doit reprendre la main.* Style identique à
  `exemples-visuels/proposition-3-experimentation.jpg`. »
- « Une **couverture** sur fond bleu : *La France a les talents. Donnons-leur les moyens.*,
  'talents' en kaki. Comme `exemples-visuels/couverture-genie.jpg`. »
- « Une **carte chiffres** (grille d'hexagones) avec ces 6 statistiques : … Style de
  `exemples-visuels/stats-etat-de-sante.jpg`. »

💡 **Astuce** : joignez l'image de référence correspondante dans le prompt — Claude Design
a un modèle de vision, il s'en sert pour coller au style.

Puis **affinez** visuellement (« agrandis le titre », « mets ce mot en kaki », « plus d'air
en bas »).

## Exporter
Menu Export : **Canva, PDF, PPTX, HTML**.
- Pour un **post réseaux sociaux 1080×1350** → passez par le **handoff Canva**, réglez le
  format sur *Instagram portrait (4:5)* et exportez l'image.
- Pour intégrer au site / à un mail → **HTML**.
- Pour un porter-en-production pixel-exact → **handoff vers Claude Code** + le kit
  `charte-ne/` (gabarits + `render.py`).

## ⚠️ À garder en tête
- **Research preview** : pensé pour le 1er jet rapide plus que pour le pixel-exact. Pour une
  **série répétée à l'identique** (les « Propositions »), les **gabarits HTML** de
  `charte-ne/` restent plus fiables.
- Vérifiez sur 1–2 essais que **logo, polices et bleu `#16216C`** sont bien respectés avant
  de produire en série.
- Gardez `design-tokens.json` sous la main pour recorriger le système si besoin.
