# Aperçus — variantes de format

Rendus de référence montrant l'**adaptation des gabarits à chaque format** de réseau
(au-delà du 4:5 par défaut). Pour Claude Design : ce sont des exemples visuels de ce que
donne chaque format.

| Aperçu | Gabarit | Format | Usage |
|--------|---------|--------|-------|
| `couverture-1x1.png` | `composants/couverture-1x1.html` | **1080×1080 (1:1)** | Carré — feed Insta/LinkedIn/X |
| `couverture-9x16.png` | `composants/couverture-9x16.html` | **1080×1920 (9:16)** | Story / Reel — contenu centré dans la zone sûre |
| `proposition-1x1.png` | `composants/proposition-1x1.html` | **1080×1080 (1:1)** | Carré — feed / carrousel |

Le format **4:5 (1080×1350)** par défaut est dans `composants/*.html` (rendus de référence :
`exemples-visuels/`). Spécifications complètes par plateforme : `plateformes.md`.

> Rendre soi-même : `python3 render.py composants/<fichier>.html sortie.png` (depuis ce dépôt).
