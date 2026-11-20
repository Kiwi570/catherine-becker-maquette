/* Catherine Becker : effets propres au projet. Le socle gère l'ouverture, les transitions, l'en-tête, le menu,
   les boucles, les mesures et la bibliothèque d'effets ; ici seulement ce qui est propre à la cliente :
   - « assiette » : l'assiette compartimentée se remplit à l'intro, puis étape par étape dans la méthode ;
   - « ingredients » : basilic, citron et tomate dessinés qui flottent au défilement ;
   - « assiette-tourne » : l'assiette de l'appel final tourne doucement avec le défilement ;
   - « cadran » : horaires des cabinets, statut du moment à l'heure de Paris (page Cabinets et contact) ;
   - « prix » : le prix de la consultation qui se compose (page Tarifs). */
import { demarrer, versObjet, etat, quand, boucle } from './socle/index.js?v=1';
import { preparer as preparerHoraires, maintenant, statut } from './horaires/calcul.js?v=1';
import { init as initPile } from './pile/module.js?v=1';
import { init as initCadran } from './horaires/module.js?v=1';

const gsap = window.gsap;
const ST = window.ScrollTrigger;
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];

/* Aliments d'un compartiment, dans l'ordre où ils tombent. */
const aliments = (svg, comp) => $$(`[data-compartiment="${comp}"] .aliment`, svg);

/** Fait tomber les aliments d'un compartiment dans l'assiette (à l'intro ou dans la méthode). */
function verser(svg, comp, tl, at = 0, total = 0.32) {
  const els = aliments(svg, comp);
  if (!els.length) return;
  const chaque = Math.min(0.05, total / els.length);
  const vars = { opacity: 1, y: 0, scale: 1, duration: 0.42, ease: 'back.out(2.2)', stagger: { each: chaque, from: 'random' } };
  const depart = { opacity: 0, y: -46, scale: 1.35, transformOrigin: '50% 50%' };
  if (tl) tl.fromTo(els, depart, vars, at); else gsap.fromTo(els, depart, vars);
}

/* ——— Statut des cabinets (accueil) : à l'heure de Paris, relu chaque minute. ——— */
function statuts() {
  const source = $('script[data-horaires]');
  const cibles = $$('[data-statut]');
  if (!source || !cibles.length) return;
  let d;
  try { d = preparerHoraires(JSON.parse(source.textContent)); } catch { return; }
  const majour = () => cibles.forEach((el) => {
    const a = d.adresses.find((x) => x.id === el.dataset.statut);
    if (!a) return;
    const s = statut(a, maintenant(a.fuseau), d.seuil);
    el.dataset.etat = s.etat;
    const t = el.querySelector('[data-statut-texte]');
    if (t) t.textContent = s.texte;
  });
  majour();
  setInterval(majour, 60000);
}

/* ——— Méthode : chaque étape remplit son compartiment ——— */
function methode() {
  const section = $('.methode');
  const svg = section && $('.methode-assiette svg', section);
  if (!svg || !gsap || !ST) return;
  const etapes = $$('.etape', section);
  const nums = $$('.assiette-num', svg);
  const ordre = etapes.map((e) => e.dataset.etape);
  const rempli = new Set();
  const tous = $$('.aliment', svg);
  gsap.set(tous, { opacity: 0, transformOrigin: '50% 50%' });
  const vider = (comp) => { rempli.delete(comp); gsap.to(aliments(svg, comp), { opacity: 0, y: 12, scale: 0.85, duration: 0.3, stagger: 0.004, overwrite: true }); };
  const remplir = (comp) => { if (rempli.has(comp)) return; rempli.add(comp); verser(svg, comp, null); };
  const activer = (i) => {
    etapes.forEach((e, k) => e.classList.toggle('est-active', k === i));
    nums.forEach((n, k) => n.classList.toggle('est-active', ['1', '2', '3'][i] === n.textContent.trim()));
    ordre.forEach((comp, k) => (k <= i ? remplir(comp) : rempli.has(comp) && vider(comp)));
  };
  const mm = gsap.matchMedia();
  mm.add('(min-width: 900px)', () => {
    etapes.forEach((e, i) => ST.create({ trigger: e, start: 'top 62%', end: 'bottom 62%', onEnter: () => activer(i), onEnterBack: () => activer(i), onLeaveBack: () => i === 0 && activer(-1) }));
  });
  mm.add('(max-width: 899px)', () => {
    ST.create({ trigger: svg, start: 'top 75%', once: true, onEnter: () => {
      ordre.forEach((comp, i) => gsap.delayedCall(i * 0.55, () => activer(i)));
    } });
  });
  /* Au retour arrière : l'assiette est pleine. */
  quand('retour', () => { gsap.set(tous, { opacity: 1, y: 0, scale: 1 }); ordre.forEach((c) => rempli.add(c)); });
}

/* ——— Ingrédients qui flottent, icônes qui tournent ——— */
function ingredients() {
  if (!gsap || !ST) return;
  $$('.ingredients').forEach((zone) => {
    const section = zone.parentElement;
    $$('[data-vitesse]', zone).forEach((el) => {
      const v = parseFloat(el.dataset.vitesse) || 0.2;
      gsap.fromTo(el, { y: 0, rotation: 0 }, { y: v * 320, rotation: v * 140, ease: 'none', scrollTrigger: { trigger: section, start: 'top top', end: 'bottom top', scrub: 0.6 } });
    });
  });
  $$('[data-effet="ingredients"][data-vitesse]').forEach((el) => {
    const v = parseFloat(el.dataset.vitesse);
    gsap.fromTo(el, { y: 0, rotation: 0 }, { y: v * 260, rotation: v * 120, ease: 'none', scrollTrigger: { trigger: el.closest('section'), start: 'top top', end: 'bottom top', scrub: 0.6 } });
  });
  $$('.motifs-grille').forEach((g) => {
    gsap.fromTo($$('[data-tourne] svg', g), { rotation: -14 }, { rotation: 14, ease: 'none', scrollTrigger: { trigger: g, start: 'top bottom', end: 'bottom top', scrub: 0.8 } });
  });
  $$('[data-effet="assiette-tourne"] svg').forEach((svg) => {
    gsap.fromTo(svg, { rotation: -40 }, { rotation: 20, ease: 'none', transformOrigin: '50% 50%', scrollTrigger: { trigger: svg.closest('section'), start: 'top bottom', end: 'bottom top', scrub: 0.8 } });
  });
}

/* ——— Le premier écran vit après l'intro : ingrédients qui flottent, assiette qui respire (boucles arrêtées hors écran) ——— */
function respirer() {
  $$('.ingredient > svg').forEach((svg, i) => {
    boucle(svg, (dt, t) => { svg.style.transform = `translate3d(0, ${(Math.sin(t * 1.3 + i * 2) * 7).toFixed(2)}px, 0) rotate(${(Math.sin(t * 0.9 + i) * 8).toFixed(2)}deg)`; });
  });
  const plat = $('.hero-assiette .assiette');
  if (plat) boucle(plat, (dt, t) => { plat.style.transform = `rotate(${(Math.sin(t * 0.55) * 6).toFixed(2)}deg)`; });
}

/* ——— Prix de la consultation qui se compose (page Tarifs) : les chiffres défilent jusqu'à 7 et 0 ——— */
let prixJoue = false;
function prixPreparer() {
  const el = $('[data-effet="prix"]');
  if (!el || !gsap) return;
  gsap.set($$('.prix-piste', el), { y: 0, yPercent: 0 });
}
function prixJouer(tl, at = 0) {
  const el = $('[data-effet="prix"]');
  if (!el || !gsap || prixJoue) return;
  prixJoue = true;
  const [a, b] = $$('.prix-piste', el);
  const h = (p) => p.firstElementChild.getBoundingClientRect().height;
  const f = (p, n) => ({ y: -n * h(p), duration: 1.2 + n * 0.02, ease: 'power3.inOut' });
  if (tl) tl.to(a, f(a, 10), at).to(b, f(b, 9), at + 0.15);
  else { gsap.to(a, f(a, 10)); gsap.to(b, { ...f(b, 9), delay: 0.15 }); }
}
function prixFinal() {
  const el = $('[data-effet="prix"]');
  if (!el || !gsap) return;
  const [a, b] = $$('.prix-piste', el);
  gsap.set(a, { y: -10 * a.firstElementChild.getBoundingClientRect().height });
  gsap.set(b, { y: -9 * b.firstElementChild.getBoundingClientRect().height });
  prixJoue = true;
}

/* ——— Calculateur des packs (page Tarifs) : coût le plus bas pour n consultations, d'après les vrais prix ——— */
function calculateur() {
  const el = $('[data-calcul]');
  if (!el) return;
  const PACKS = [{ nb: 12, prix: 600, nom: 'suivi à l’année' }, { nb: 5, prix: 250, nom: 'pack 5' }, { nb: 3, prix: 180, nom: 'pack 3' }];
  const UNITE = 70;
  const fmt = (n) => `${n} €`;
  /* Programmation dynamique : meilleur prix pour exactement n consultations. */
  const meilleur = (n) => {
    const m = [{ cout: 0, choix: [] }];
    for (let k = 1; k <= n; k++) {
      let best = { cout: m[k - 1].cout + UNITE, choix: [...m[k - 1].choix, 'unité'] };
      for (const p of PACKS) if (k >= p.nb && m[k - p.nb].cout + p.prix < best.cout) best = { cout: m[k - p.nb].cout + p.prix, choix: [...m[k - p.nb].choix, p.nom] };
      m[k] = best;
    }
    return m[n];
  };
  let n = 5;
  const sortie = (sel) => $(sel, el);
  const maj = () => {
    const b = meilleur(n), unite = n * UNITE;
    sortie('[data-calcul-n]').textContent = n;
    sortie('[data-calcul-unite]').textContent = fmt(unite);
    sortie('[data-calcul-formule]').textContent = fmt(b.cout);
    const compte = {};
    b.choix.forEach((x) => (compte[x] = (compte[x] || 0) + 1));
    const parts = Object.entries(compte).map(([k, v]) => k === 'unité' ? `${v} consultation${v > 1 ? 's' : ''} à l’unité` : `${v > 1 ? v + ' × ' : ''}${k}`);
    sortie('[data-calcul-detail]').textContent = parts.join(' + ').replace(/^./, (c) => c.toUpperCase());
    sortie('[data-calcul-eco]').textContent = fmt(unite - b.cout);
    sortie('[data-calcul-moins]').disabled = n <= 1;
    sortie('[data-calcul-plus]').disabled = n >= 12;
  };
  sortie('[data-calcul-moins]').addEventListener('click', () => { n = Math.max(1, n - 1); maj(); });
  sortie('[data-calcul-plus]').addEventListener('click', () => { n = Math.min(12, n + 1); maj(); });
  maj();
}

/* ——— Jalons du rythme (page Consultation) : la ligne se remplit au défilement ——— */
function jalons() {
  const el = $('[data-effet="jalons"]');
  if (!el || !gsap || !ST) return;
  gsap.fromTo(el, { '--progres': 0 }, { '--progres': 1, ease: 'none', scrollTrigger: { trigger: el, start: 'top 80%', end: 'bottom 45%', scrub: 0.6 } });
  gsap.fromTo($$('.jalon-point', el), { scale: 0.4 }, { scale: 1, ease: 'back.out(3)', stagger: 0.2, scrollTrigger: { trigger: el, start: 'top 75%', toggleActions: 'play none none none' } });
}

/* ——— Motif choisi depuis l'accueil (?motif=…) et puces (page Consultation) ——— */
function motifChoisi() {
  const id = new URLSearchParams(location.search).get('motif') || (location.hash.startsWith('#motif-') ? location.hash.slice(7) : '');
  const marquer = (m) => {
    $$('[data-motif]').forEach((c) => c.classList.toggle('est-choisi', c.dataset.motif === m));
    $$('[data-puce]').forEach((p) => p.classList.toggle('est-choisie', p.dataset.puce === m));
  };
  if (id) marquer(id);
  $$('[data-puce]').forEach((p) => p.addEventListener('click', () => marquer(p.dataset.puce)));
}

/* ——— Bandeau de la consultation : l'image s'ouvre en largeur au défilement ——— */
function bandeau() {
  const el = $('[data-effet="bandeau"]');
  if (!el || !gsap || !ST) return;
  gsap.fromTo(el, { '--marge': '0px' }, { '--marge': 'calc(-1 * var(--gouttiere))', ease: 'none', scrollTrigger: { trigger: el, start: 'top 60%', end: 'bottom 30%', scrub: 0.6 } });
}

demarrer({
  preparer() {
    statuts();
    methode();
    prixPreparer();
    calculateur();
    jalons();
    motifChoisi();
    bandeau();
    quand('pret', respirer);
    ingredients();
    const pile = $('[data-module="temoignages-en-pile"]');
    if (pile) initPile(pile, { textes: { precedent: 'Avis précédent', suivant: 'Avis suivant' } });
    $$('[data-module="horaires-ouvert-maintenant"]').forEach((el) => initCadran(el));
  },

  /* Intro (moins de 3 s) : l'assiette se pose, les aliments y tombent, puis elle glisse jusqu'à l'objet d'ouverture
     de la page et le panneau s'ouvre depuis elle. Sur l'accueil, le titre monte ensuite ligne à ligne. */
  jouer() {
    if (!gsap) return null;
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    const svg = $('.ouverture-objet svg');
    tl.fromTo('.ouverture-objet', { scale: 0.8, rotation: -30, opacity: 0 }, { scale: 1, rotation: 0, opacity: 1, duration: 0.5 }, 0)
      .fromTo('.ouverture-ligne', { y: 14, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4 }, 0.1);
    if (svg) { verser(svg, 'b', tl, 0.35, 0.26); verser(svg, 'a', tl, 0.5, 0.28); verser(svg, 'c', tl, 0.66, 0.2); }
    tl.to('.ouverture-ligne', { opacity: 0, duration: 0.25 }, 1.0);
    versObjet(tl, { a: 1.1, duree: 0.5, ouverture: 0.8 });
    heroEntree(tl, 1.55);
    prixJouer(tl, 1.5);
    return tl;
  },

  etatFinal() {
    if (!gsap) return;
    gsap.set('.hero-l', { y: 0, yPercent: 0 });
    $('.hero-titre')?.classList.add('vu');
    gsap.set('.hero-sur, .hero-intro, .hero-actions, .hero-info', { opacity: 1, y: 0 });
    prixFinal();
  },

  arrivee() {
    if (!gsap) return;
    prixJouer(null);
    if (!$('.hero-l')) return;
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' }, delay: 0.1 });
    heroEntree(tl, 0);
  },
});

/** Entrée du premier écran de l'accueil : titre ligne à ligne, puis texte et boutons. */
function heroEntree(tl, at) {
  const h1 = $('.hero-titre');
  if (!h1) return;
  gsap.set('.hero-l', { y: 0, yPercent: 118 });
  h1.classList.add('vu');
  tl.fromTo('.hero-l', { y: 0, yPercent: 118 }, { y: 0, yPercent: 0, duration: 0.75, stagger: 0.09 }, at)
    .fromTo('.hero-sur, .hero-intro, .hero-actions, .hero-info', { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.06 }, at + 0.1);
}

export { etat };
