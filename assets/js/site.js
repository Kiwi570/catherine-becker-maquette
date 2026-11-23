/* Catherine Becker : effets propres au projet. Le socle gère l'ouverture, les transitions, l'en-tête, le menu,
   les boucles, les mesures et la bibliothèque d'effets ; ici seulement ce qui est propre à la cliente :
   - « assiette » : l'assiette compartimentée se remplit à l'intro, puis étape par étape dans la méthode ;
   - « ingredients » : basilic, citron et tomate dessinés qui flottent au défilement ;
   - « assiette-tourne » : l'assiette de l'appel final tourne doucement avec le défilement ;
   - « cadran » : horaires des cabinets, statut du moment à l'heure de Paris (page Cabinets et contact) ;
   - « prix » : le prix de la consultation qui se compose (page Tarifs) ;
   - « lettre », « sceau », « frise » : la lettre au médecin qui sort de l'enveloppe, le sceau du métier qui tourne,
     la frise du parcours qui se trace ; et les petits jeux : resservir une assiette, cocher sa préparation,
     les épingles de la carte qui choisissent le cabinet. */
import { demarrer, versObjet, etat, quand, boucle, aller } from './socle/index.js?v=3';
import { preparer as preparerHoraires, maintenant, statut } from './horaires/calcul.js?v=3';
import { init as initPile } from './pile/module.js?v=3';
import { init as initCadran } from './horaires/module.js?v=3';

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
  const contour = (comp, vide) => { const c = $(`[data-contour="${comp}"]`, svg); if (c) gsap.to(c, { opacity: vide ? 1 : 0, duration: 0.35 }); };
  const vider = (comp) => { rempli.delete(comp); contour(comp, true); gsap.to(aliments(svg, comp), { opacity: 0, y: 12, scale: 0.85, duration: 0.3, stagger: 0.004, overwrite: true }); };
  const remplir = (comp) => { if (rempli.has(comp)) return; rempli.add(comp); contour(comp, false); verser(svg, comp, null); };
  /* Un clic sur un compartiment mène à son étape ; le survol d'une étape fait sautiller son compartiment. */
  $$('[data-zone]', svg).forEach((z) => z.addEventListener('click', () => {
    const e = etapes[ordre.indexOf(z.dataset.zone)];
    if (!e) return;
    if (matchMedia('(min-width: 900px)').matches) aller(e); else activer(ordre.indexOf(z.dataset.zone));
  }));
  etapes.forEach((e) => e.addEventListener('pointerenter', () => {
    const comp = e.dataset.etape;
    if (!rempli.has(comp)) return;
    gsap.fromTo(aliments(svg, comp), { y: 0 }, { y: -7, duration: 0.16, yoyo: true, repeat: 1, ease: 'power2.out', stagger: { each: 0.004, from: 'random' }, overwrite: 'auto' });
  }));
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
  quand('retour', () => { gsap.set(tous, { opacity: 1, y: 0, scale: 1 }); gsap.set($$('[data-contour]', svg), { opacity: 0 }); ordre.forEach((c) => rempli.add(c)); });
}

/* ——— Resservir : un clic sur une assiette la vide, puis les aliments retombent (accueil, appel final) ——— */
function resservir() {
  if (!gsap) return;
  $$('[data-resservir]').forEach((b) => {
    const svg = b.parentElement.querySelector('svg.assiette');
    if (!svg) return;
    let occupe = false;
    b.addEventListener('click', () => {
      if (occupe) return;
      occupe = true;
      const tous = $$('.aliment', svg);
      const tl = gsap.timeline({ onComplete: () => { occupe = false; } });
      tl.to(tous, { opacity: 0, y: () => -40 - Math.random() * 60, x: () => (Math.random() - 0.5) * 70, scale: 0.6, duration: 0.32, ease: 'power2.in', stagger: { each: 0.002, from: 'random' } }, 0)
        .set(tous, { x: 0 }, 0.5);
      verser(svg, 'b', tl, 0.55, 0.26);
      verser(svg, 'a', tl, 0.72, 0.28);
      verser(svg, 'c', tl, 0.9, 0.2);
      gsap.fromTo(b.parentElement, { scale: 1 }, { scale: 1.05, duration: 0.18, yoyo: true, repeat: 1, ease: 'power2.out' });
    });
  });
}

/* ——— Visio (accueil) : l'assiette tourne doucement dans l'écran, le voyant « en direct » respire ——— */
function visio() {
  const plat = $('.visio-assiette .assiette');
  if (plat) boucle(plat, (dt, t) => { plat.style.transform = `rotate(${(t * 14) % 360}deg)`; });
  const point = $('.visio-direct');
  if (point) boucle(point, (dt, t) => { point.style.opacity = (0.55 + Math.sin(t * 3) * 0.45).toFixed(2); });
}

/* ——— Préparer sa visite (Consultation) : chaque point se coche ; gardé sur cet appareil si possible ——— */
function preparerVisite() {
  const boutons = $$('[data-coche]');
  const etatEl = $('[data-coche-etat]');
  if (!boutons.length || !etatEl) return;
  const CLE = 'cb-preparer';
  let coches = [];
  try { coches = JSON.parse(localStorage.getItem(CLE) || '[]'); } catch { coches = []; }
  etatEl.hidden = false;
  const maj = (fete) => {
    boutons.forEach((b, i) => {
      const oui = coches.includes(i);
      b.setAttribute('aria-pressed', String(oui));
      b.closest('[data-coche-ligne]').classList.toggle('est-pret', oui);
    });
    const n = coches.length;
    etatEl.textContent = n === 0 ? etatEl.dataset.etat0 : n >= boutons.length ? etatEl.dataset.etattout : etatEl.dataset.etatn.replace('{n}', n);
    etatEl.classList.toggle('est-complet', n >= boutons.length);
    if (fete && n >= boutons.length && gsap) gsap.fromTo($$('[data-coche-ligne] > svg'), { y: 0 }, { y: -12, duration: 0.22, yoyo: true, repeat: 1, ease: 'power2.out', stagger: 0.08 });
  };
  boutons.forEach((b, i) => b.addEventListener('click', () => {
    coches = coches.includes(i) ? coches.filter((x) => x !== i) : [...coches, i];
    try { localStorage.setItem(CLE, JSON.stringify(coches)); } catch { /* stockage indisponible : l'état reste pour la visite */ }
    if (gsap && !coches.includes(i)) { /* décoché */ } else if (gsap) gsap.fromTo(b, { scale: 0.7 }, { scale: 1, duration: 0.4, ease: 'back.out(3)' });
    maj(true);
  }));
  maj(false);
}

/* ——— Lettre au médecin : elle sort de l'enveloppe au défilement ——— */
function lettre() {
  const el = $('[data-effet="lettre"]');
  if (!el || !gsap || !ST) return;
  const tl = gsap.timeline({ scrollTrigger: { trigger: el, start: 'top 90%', end: 'bottom 40%', scrub: 0.6 } });
  tl.fromTo($('.lettre-papier', el), { y: 58 }, { y: -6, ease: 'power1.out' }, 0)
    .fromTo($('.lettre-cachet', el), { rotation: -40, scale: 0.6, transformOrigin: '50% 50%' }, { rotation: 0, scale: 1, ease: 'back.out(2)' }, 0.2);
}

/* ——— Sceau du métier : l'anneau de texte tourne avec le défilement, l'assiette au centre en sens inverse ——— */
function sceau() {
  const el = $('[data-effet="sceau"]');
  if (!el || !gsap || !ST) return;
  const st = { trigger: el, start: 'top bottom', end: 'bottom top', scrub: 0.8 };
  gsap.fromTo($('.metier-anneau', el), { rotation: -50 }, { rotation: 130, ease: 'none', transformOrigin: '50% 50%', scrollTrigger: st });
  gsap.fromTo($('.metier-sceau-centre svg', el), { rotation: 30 }, { rotation: -40, ease: 'none', transformOrigin: '50% 50%', scrollTrigger: { ...st } });
}

/* ——— Frise du parcours : chaque trait se trace, puis son point s'allume ——— */
function frise() {
  const el = $('[data-effet="frise"]');
  if (!el || !gsap || !ST) return;
  const etapes = $$('.frise-etape', el);
  gsap.set(etapes, { '--trait': 0 });
  gsap.timeline({ scrollTrigger: { trigger: el, start: 'top 80%', end: 'bottom 55%', scrub: 0.6 } })
    .to(etapes, { '--trait': 1, ease: 'none', duration: 1, stagger: 0.55 });
  quand('retour', () => gsap.set(etapes, { '--trait': 1 }));
}

/* ——— Carte de la côte (Cabinets et contact) : les épingles tombent, respirent, et choisissent le cabinet ——— */
function epingles() {
  const els = $$('.cote-lien');
  if (!els.length) return;
  $$('.cote-onde').forEach((o, i) => boucle(o, (dt, t) => {
    const p = ((t * 0.55 + i * 0.5) % 1);
    o.setAttribute('r', (10 + p * 22).toFixed(1));
    o.style.opacity = (0.75 * (1 - p)).toFixed(2);
  }));
  /* Le lien mène aux horaires (le socle fait défiler et met l'adresse à jour) ; ici, il choisit d'abord le cabinet. */
  els.forEach((a) => a.addEventListener('click', () => {
    const module = $('[data-module="horaires-ouvert-maintenant"]');
    const choix = module && $$('.horaires__choix', module).find((b) => b.textContent.toLowerCase().includes(a.dataset.cabinet));
    if (choix && choix.getAttribute('aria-pressed') !== 'true') choix.click();
  }));
}
function epinglesTomber(tl, at) {
  const els = $$('.cote-goutte');
  if (!els.length || !gsap) return;
  const vars = { y: 0, opacity: 1, duration: 0.7, ease: 'bounce.out', stagger: 0.18 };
  const depart = { y: -90, opacity: 0 };
  if (tl) tl.fromTo(els, depart, vars, at); else gsap.fromTo(els, depart, { ...vars, delay: 0.25 });
}

/* ——— Ingrédients qui flottent, icônes qui tournent ——— */
function ingredients() {
  if (!gsap || !ST) return;
  $$('.ingredients').forEach((zone) => {
    const section = zone.parentElement;
    const premier = section.classList.contains('hero');
    $$('[data-vitesse]', zone).forEach((el) => {
      const v = parseFloat(el.dataset.vitesse) || 0.2;
      if (premier) gsap.fromTo(el, { y: 0, rotation: 0 }, { y: v * 320, rotation: v * 140, ease: 'none', scrollTrigger: { trigger: section, start: 'top top', end: 'bottom top', scrub: 0.6 } });
      else gsap.fromTo(el, { y: -v * 200, rotation: -v * 90 }, { y: v * 200, rotation: v * 90, ease: 'none', scrollTrigger: { trigger: section, start: 'top bottom', end: 'bottom top', scrub: 0.6 } });
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
    const TYPES = { 'suivi à l’année': 'an', 'pack 5': 'p5', 'pack 3': 'p3', 'unité': 'u' };
    const detail = sortie('[data-calcul-detail]');
    detail.textContent = '';
    Object.entries(compte).forEach(([k], j) => {
      const tag = document.createElement('span');
      tag.className = 'calcul-tag';
      tag.dataset.type = TYPES[k];
      tag.textContent = j ? parts[j] : parts[j].replace(/^./, (c) => c.toUpperCase());
      if (j) detail.append(' + ');
      detail.append(tag);
    });
    /* Une petite assiette par consultation, colorée selon la formule qui la paie. */
    const zone = sortie('[data-calcul-assiettes]');
    if (zone) {
      const types = b.choix.flatMap((x) => Array((PACKS.find((p) => p.nom === x) || { nb: 1 }).nb).fill(TYPES[x]));
      const avant = zone.children.length;
      zone.innerHTML = types.map((t) => `<i data-type="${t}"></i>`).join('');
      if (gsap && types.length > avant) gsap.fromTo([...zone.children].slice(avant), { scale: 0, y: -10 }, { scale: 1, y: 0, duration: 0.45, ease: 'back.out(3)', stagger: 0.04 });
      else if (gsap && n > 0) gsap.fromTo(zone.children, { scale: 0.9 }, { scale: 1, duration: 0.3, ease: 'back.out(2)', stagger: 0.01 });
    }
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
    resservir();
    preparerVisite();
    lettre();
    sceau();
    frise();
    epingles();
    quand('pret', respirer);
    quand('pret', visio);
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
    epinglesTomber(tl, 1.45);
    return tl;
  },

  etatFinal() {
    if (!gsap) return;
    gsap.set('.hero-l', { y: 0, yPercent: 0 });
    $('.hero-titre')?.classList.add('vu');
    gsap.set('.hero-sur, .hero-intro, .hero-actions, .hero-info', { opacity: 1, y: 0 });
    gsap.set('.cote-goutte', { y: 0, opacity: 1 });
    prixFinal();
  },

  arrivee() {
    if (!gsap) return;
    prixJouer(null);
    epinglesTomber(null);
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
