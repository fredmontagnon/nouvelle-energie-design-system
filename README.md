# Système de design — Nouvelle Énergie pour la France

Dépôt de référence de l'**identité visuelle 2025** de Nouvelle Énergie. Conçu pour être
**ingéré par Claude Design** (et utilisable par Claude Code) afin de générer des visuels
de campagne conformes à la charte, sans repartir de zéro.

## Utilisation avec Claude Design
1. Dans Claude Design → nouveau **système de design**.
2. Champ **« Link code on GitHub »** → coller l'URL de ce dépôt.
3. Vérifier le système extrait, le corriger si besoin avec `design-tokens.json`, puis **publier**.
4. Prompter (« carte Proposition 5 sur l'école… ») et affiner.

➡️ **Avant chaque visuel, Claude Design doit demander la/les plateforme(s)** (X, Instagram,
LinkedIn, Facebook) et l'emplacement, puis produire au bon format — voir **`plateformes.md`**.

Détail pas-à-pas + exemples de prompts : **[00-LISEZ-MOI-claude-design.md](00-LISEZ-MOI-claude-design.md)**.

## Contenu
| | |
|---|---|
| `design-system.md` | Brief de marque (règle plateformes, couleurs, typo, composants, ton) |
| `design-tokens.json` | Palette + typo + formats par plateforme (machine) |
| `plateformes.md` | **Specs X / Instagram / LinkedIn / Facebook (2026) + zones de sécurité** |
| `logo/` | Logo officiel (SVG/PNG/.ai) + déclinaisons |
| `fonts/` | Montserrat (SIL OFL, incluse) |
| `composants/` | Gabarits HTML/CSS de référence (proposition, couverture, stats, citation) + **variantes carré 1:1 / story 9:16** |
| `exemples-visuels/` | 6 visuels originaux publiés = le style à reproduire |
| `photos/` | 10 portraits David Lisnard (citations / photo-en-hexagone) |
| `apercus/` | Rendus des variantes (1:1, 9:16) + exemple citation |
| `render.py` | Rendu HTML → PNG (dépôt **auto-renderable** : `python3 render.py composants/x.html out.png`) |

## Palette (officielle — brand book 2025)
Bleu Principal `#1D257A` · Bleu Sombre `#0F1752` · Chamois `#B0AD85` · Fond `#F9F9F9` · Secondaires `#52C985` / `#F62A72` / `#4A36A3`.
Police : **Montserrat** (SIL OFL) — titres ExtraBold/SemiBold, texte Regular/Bold. Signature : **hexagone flat-top**.

## ⚠️ Notes
- **Police Montserrat incluse** (SIL Open Font License — libre, redistribution autorisée).
  Fichiers `.ttf` + `OFL.txt` dans `fonts/`.
- Pour un rendu **pixel-exact reproductible** (HTML → PNG via `render.py`), voir le kit
  complémentaire `charte-ne/` (hors de ce dépôt).
