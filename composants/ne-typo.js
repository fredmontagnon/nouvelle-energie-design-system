/* =====================================================================
   NOUVELLE ÉNERGIE — ne-typo.js
   Outillage des règles typographiques françaises du brand book.
   Les fautes corrigées à la main reviennent toujours : on les automatise.

   Usage :
     import { neTypo, neTypoLint } from './ne-typo.js';
     el.innerHTML = neTypo(texte);        // correction
     console.table(neTypoLint(document)); // audit d'un visuel
   ===================================================================== */

const NBSP = ' ';        // espace insécable
const NNBSP = ' ';       // espace fine insécable

export function neTypo(s){
  return s
    // apostrophe typographique
    .replace(/(\p{L})'(\p{L})/gu, '$1’$2')
    // guillemets français
    .replace(/"([^"]+)"/g, '«' + NBSP + '$1' + NBSP + '»')
    // fine insécable avant ; ! ?  — insécable avant : et dans « »
    .replace(/\s*([;!?])/g, NNBSP + '$1')
    .replace(/\s*(:)/g, NBSP + '$1')
    // pas de double espace
    .replace(/ {2,}/g, ' ');
}

const RULES = [
  { id:'apostrophe',  test:/(\p{L})'(\p{L})/u,  msg:"Apostrophe droite — utiliser ’" },
  { id:'guillemets',  test:/"/,                 msg:'Guillemets droits — utiliser « … »' },
  { id:'ponctuation', test:/[^  ][;:!?]/, msg:'Espace insécable manquante avant ; : ! ?' },
  { id:'emoji',       test:/\p{Extended_Pictographic}/u, msg:'Emoji interdit par la charte' },
  { id:'ellipse',     test:/\.\.\./,            msg:'Points de suspension — utiliser …' },
];

/* Audit d'un document : retourne les fautes avec leur nœud. */
export function neTypoLint(root = document){
  const out = [];
  const walker = document.createTreeWalker(root.body || root, NodeFilter.SHOW_TEXT);
  let n;
  while ((n = walker.nextNode())) {
    const t = n.nodeValue.trim();
    if (!t) continue;
    for (const r of RULES) {
      if (r.test.test(t)) out.push({ regle:r.id, message:r.msg, texte:t.slice(0,60), noeud:n.parentElement });
    }
  }
  return out;
}

/* Contrôles de lisibilité du brand book (planchers de taille). */
export function neLisibiliteLint(root = document){
  const out = [];
  for (const el of (root.body || root).querySelectorAll('*')) {
    if (!el.childNodes.length || !el.textContent.trim()) continue;
    const cs = getComputedStyle(el);
    const px = parseFloat(cs.fontSize);
    const direct = [...el.childNodes].some(c => c.nodeType === 3 && c.nodeValue.trim());
    if (!direct) continue;
    if (px < 26) out.push({ regle:'plancher-26', message:`${Math.round(px)}px < 26px (plancher légende)`, noeud:el });
    const col = cs.color.replace(/\s/g,'');
    const chamoisClair = col === 'rgb(176,173,133)';
    if (chamoisClair && px < 999) out.push({ regle:'chamois-clair', message:'Chamois clair ne porte jamais de texte sur fond clair', noeud:el });
    if (col === 'rgb(152,149,95)' && (px < 30 || parseInt(cs.fontWeight,10) < 600))
      out.push({ regle:'chamois-sombre', message:'Chamois sombre : ≥30px ET gras uniquement', noeud:el });
  }
  return out;
}
