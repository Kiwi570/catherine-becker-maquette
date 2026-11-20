/* L'assiette compartimentée en inox (celle de la box du coaching en ligne), dessinée en SVG.
   Trois compartiments : « a » la grande moitié droite (légumes verts), « b » le quart haut gauche (céréales et
   légumineuses), « c » le quart bas gauche (tomates). Chaque aliment porte la classe .aliment (il tombe dans
   l'assiette à l'intro) ; chaque compartiment est un groupe [data-compartiment] (la méthode les allume un à un).
   Dessin déterministe : même assiette sur toutes les pages, sans hasard. */
import { brut } from '../../outils/gabarit.mjs';

/* Générateur pseudo-aléatoire stable. */
function hasard(graine) {
  let s = graine >>> 0;
  return () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; };
}
const n = (x) => Math.round(x * 10) / 10;

function feuille(x, y, l, r, ton, nervure) {
  return `<g class="aliment" transform="translate(${n(x)} ${n(y)}) rotate(${n(r)})"><path d="M0 ${-l} C ${n(l * .62)} ${n(-l * .55)} ${n(l * .58)} ${n(l * .45)} 0 ${l} C ${n(-l * .58)} ${n(l * .45)} ${n(-l * .62)} ${n(-l * .55)} 0 ${-l} Z" fill="${ton}"/><path d="M0 ${n(-l * .86)} L0 ${n(l * .86)}" stroke="${nervure}" stroke-width="2" stroke-linecap="round" fill="none"/></g>`;
}
function concombre(x, y, rr) {
  return `<g class="aliment" transform="translate(${n(x)} ${n(y)})"><circle r="${rr}" fill="#7d9d55"/><circle r="${n(rr - 3.5)}" fill="#e6efc4"/><circle r="${n(rr * .42)}" fill="#cfdf9e"/>${[0, 1, 2, 3, 4, 5].map((k) => { const a = k / 6 * Math.PI * 2; return `<ellipse cx="${n(Math.cos(a) * rr * .3)}" cy="${n(Math.sin(a) * rr * .3)}" rx="1.6" ry="3" transform="rotate(${n(a * 180 / Math.PI + 90)} ${n(Math.cos(a) * rr * .3)} ${n(Math.sin(a) * rr * .3)})" fill="#f5f8e6"/>`; }).join('')}</g>`;
}
function tomate(x, y, rr, r) {
  return `<g class="aliment" transform="translate(${n(x)} ${n(y)}) rotate(${n(r)})"><circle r="${rr}" fill="#c23e22"/><circle r="${n(rr - 3)}" fill="#e2603f"/><path d="M0 ${n(-rr + 5)} L0 ${n(rr - 5)} M${n(-rr + 5)} 0 L${n(rr - 5)} 0" stroke="#f08a66" stroke-width="2.4" stroke-linecap="round"/>${[[-1, -1], [1, -1], [-1, 1], [1, 1]].map(([a, b]) => `<ellipse cx="${n(a * rr * .38)}" cy="${n(b * rr * .38)}" rx="${n(rr * .2)}" ry="${n(rr * .14)}" fill="#f7c27a"/>`).join('')}</g>`;
}
function citron(x, y, rr, r) {
  return `<g class="aliment" transform="translate(${n(x)} ${n(y)}) rotate(${n(r)})"><path d="M${-rr} 0 A ${rr} ${rr} 0 0 1 ${rr} 0 Z" fill="#e8c437"/><path d="M${n(-rr + 3)} 0 A ${n(rr - 3)} ${n(rr - 3)} 0 0 1 ${n(rr - 3)} 0 Z" fill="#f8e58a"/>${[0.18, 0.5, 0.82].map((t) => { const a = Math.PI * (1 + t); return `<path d="M0 0 L${n(Math.cos(a) * (rr - 5))} ${n(Math.sin(a) * (rr - 5))}" stroke="#fbf1c2" stroke-width="1.6"/>`; }).join('')}</g>`;
}

/* Contenu de chaque compartiment, calculé une fois. */
const CONTENU = (() => {
  const h = hasard(7);
  /* a : moitié droite (x > 200), feuilles de salade, rondelles de concombre. */
  let a = '';
  const verts = ['#6f8f4e', '#86a862', '#5b7a3e', '#9bbb6e'];
  for (let k = 0; k < 15; k++) {
    let x, y; do { x = 214 + h() * 150; y = 44 + h() * 312; } while (Math.hypot(x - 200, y - 200) > 150);
    a += feuille(x, y, 26 + h() * 12, h() * 180, verts[k % 4], '#c9dba6');
  }
  for (const [x, y] of [[262, 118], [318, 210], [252, 268], [300, 300], [330, 140]]) a += concombre(x, y, 19);
  /* b : quart haut gauche, lentilles et pois chiches. */
  let b = '';
  const ocres = ['#d9a441', '#c98f2e', '#e7be6a', '#b8822a'];
  for (let k = 0; k < 64; k++) {
    let x, y; do { x = 44 + h() * 150; y = 44 + h() * 150; } while (Math.hypot(x - 200, y - 200) > 156 || x > 190 || y > 190);
    b += k % 5 === 0
      ? `<circle class="aliment" cx="${n(x)}" cy="${n(y)}" r="7.5" fill="#e9c98a" stroke="#c99b55" stroke-width="1.2"/>`
      : `<ellipse class="aliment" cx="${n(x)}" cy="${n(y)}" rx="5.2" ry="3.6" transform="rotate(${n(h() * 180)} ${n(x)} ${n(y)})" fill="${ocres[k % 4]}"/>`;
  }
  /* c : quart bas gauche, tomates cerises, citron, basilic. */
  let c = '';
  for (const [x, y, r] of [[92, 238, 10], [150, 236, 40], [70, 290, 70], [126, 292, 15], [176, 290, 110], [112, 340, 60], [160, 336, 20]]) c += tomate(x, y, 21, r);
  c += citron(64, 250, 22, -30);
  c += feuille(184, 228, 16, 40, '#4f7a37', '#9fc07a') + feuille(58, 322, 15, -50, '#4f7a37', '#9fc07a');
  return { a, b, c };
})();

/**
 * @param {object} o
 * @param {string} o.id        préfixe unique (dégradés)
 * @param {string} [o.classe]
 * @param {boolean} [o.numeros] numéros des étapes dans les compartiments (méthode)
 * @param {string} [o.attrs]   attributs en plus sur le svg
 * @param {string} [o.titre]   texte pour les lecteurs d'écran (sinon décoratif)
 */
export function assiette({ id, classe = '', numeros = false, attrs = '', titre = '' } = {}) {
  const A = 'M200 32 A168 168 0 0 1 200 368 Z';
  const B = 'M200 200 L32 200 A168 168 0 0 1 200 32 Z';
  const C = 'M200 200 L200 368 A168 168 0 0 1 32 200 Z';
  const num = (x, y, t) => numeros ? `<g class="assiette-num" transform="translate(${x} ${y})"><circle r="17"/><text y="1">${t}</text></g>` : '';
  return brut(`<svg class="assiette ${classe}" viewBox="0 0 400 400" ${titre ? `role="img" aria-label="${titre}"` : 'aria-hidden="true" focusable="false"'} ${attrs}>
<defs>
<radialGradient id="${id}-inox" cx="38%" cy="32%" r="78%"><stop offset="0" stop-color="#fbfbf9"/><stop offset=".55" stop-color="#dcdcd7"/><stop offset=".8" stop-color="#c9c9c3"/><stop offset="1" stop-color="#e9e9e4"/></radialGradient>
<radialGradient id="${id}-fond" cx="40%" cy="35%" r="75%"><stop offset="0" stop-color="#f6f6f3"/><stop offset="1" stop-color="#e2e2dd"/></radialGradient>
<clipPath id="${id}-a"><path d="${A}"/></clipPath><clipPath id="${id}-b"><path d="${B}"/></clipPath><clipPath id="${id}-c"><path d="${C}"/></clipPath>
</defs>
<g class="assiette-corps">
<circle cx="200" cy="200" r="194" fill="url(#${id}-inox)" stroke="#b9b9b2" stroke-width="1.5"/>
<circle cx="200" cy="200" r="170" fill="url(#${id}-fond)"/>
<circle cx="200" cy="200" r="169" fill="none" stroke="#c4c4be" stroke-width="3"/>
</g>
<g data-compartiment="b" clip-path="url(#${id}-b)">${CONTENU.b}</g>
<g data-compartiment="a" clip-path="url(#${id}-a)">${CONTENU.a}</g>
<g data-compartiment="c" clip-path="url(#${id}-c)">${CONTENU.c}</g>
<g class="assiette-cloisons"><path d="M200 30 L200 370 M30 200 L200 200" stroke="#cfcfca" stroke-width="11" stroke-linecap="round" fill="none"/><path d="M198 32 L198 368 M32 198 L200 198" stroke="#fbfbf9" stroke-width="2.5" stroke-linecap="round" fill="none"/></g>
${num(286, 72, '2')}${num(118, 92, '1')}${num(118, 318, '3')}
</svg>`);
}
