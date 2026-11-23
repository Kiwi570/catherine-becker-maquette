/* Accueil : bien manger, sans régime miracle. Ordre du visiteur : est-ce pour moi (motifs), comment (méthode, bilan),
   où et quand (cabinets), combien (tarifs), qui (Catherine), ce qu'en disent les patients, rendez-vous. */
import { html, brut } from '../../outils/gabarit.mjs';
import { assiette } from '../gabarits/assiette.mjs';
import { icone } from '../gabarits/icones.mjs';
import { horairesTexte, appelFinal, scriptHoraires, boutonResservir } from '../gabarits/blocs.mjs';

export const page = { cle: 'accueil', fichier: 'index', imagePartage: 'grok/accueil-ouverture-1280.webp' };

const prix = (n) => html`<span class="prix" data-prix><span data-compteur="${n}">${n}</span>&nbsp;€</span>`;

export default (c) => {
  const D = c.donnees, T = D.tarifs, H = D.horaires;
  return html`
<section class="hero" id="debut">
  <div class="ingredients" data-effet="ingredients" data-superpose aria-hidden="true">
    <span class="ingredient ingredient--1" data-vitesse="-0.35">${icone('basilic')}</span>
    <span class="ingredient ingredient--2" data-vitesse="0.25">${icone('citron')}</span>
  </div>
  <div class="hero-texte">
    <p class="surtitre hero-sur" data-anime="gsap">${c.t('accueil.hero.surtitre')}</p>
    <h1 class="hero-titre" data-anime="gsap">
      <span class="hero-masque"><span class="hero-l">${c.t('accueil.hero.titre1')}</span></span>
      <span class="hero-masque"><span class="hero-l"><em>${c.t('accueil.hero.titre2a')}</em> ${c.t('accueil.hero.titre2b')}</span></span>
      <span class="hero-masque"><span class="hero-l">${c.t('accueil.hero.titre3')}</span></span>
    </h1>
    <p class="hero-intro masque-ecran-tres-bas masque-petit-ecran" data-anime="gsap">${c.t('accueil.hero.texte')}</p>
    <p class="hero-actions" data-anime="gsap">
      <a class="bouton" href="${c.site.doctolib}" target="_blank" rel="noopener" data-action-principale data-survol="magnetique">${c.t('commun.actionEntete')}<span class="visuellement-cache"> ${c.t('commun.nouvelOnglet')}</span></a>
      ${c.lien('tarifs', { classe: 'bouton bouton--contour', texte: c.t('accueil.hero.tarifs') })}
    </p>
    <p class="hero-info" data-anime="gsap" data-info-cle>${c.t('accueil.hero.info')}</p>
  </div>
  <div class="hero-visuel">
    ${c.media({ nom: 'grok/accueil-ouverture', alt: c.s('accueil.hero.alt'), cadrage: '55% 45%', priorite: true, classe: 'hero-media', sizes: '(max-width: 760px) 100vw, 46vw', attrs: 'data-fx="parallaxe" data-fx-force="6"' })}
    <div class="hero-assiette" data-iris-centre="disque" data-grille="manipuler">${assiette({ id: 'hero' })}${boutonResservir(c)}</div>
  </div>
</section>

<section class="motifs" id="motifs">
  <div class="conteneur">
    <div class="tete-section">
      <p class="surtitre">${c.t('accueil.motifs.surtitre')}</p>
      <h2 class="titre-section" data-anime="lignes">${c.t('accueil.motifs.titre1')} <em>${c.t('accueil.motifs.titre2')}</em></h2>
      <p class="chapo">${c.t('accueil.motifs.texte')}</p>
    </div>
    <ul class="motifs-grille" data-anime="cascade">
      ${D.motifs.map((m) => html`<li class="motif" data-survol="incline" data-survol-force="4">
        <span class="motif-icone" data-tourne>${icone(m.icone)}</span>
        <h3>${m.titre}</h3>
        <p>${m.court}</p>
        ${c.lien('consultation', { ancre: 'motif-' + m.id, params: 'motif=' + m.id, classe: 'lien-fleche', texte: html`${c.t('accueil.motifs.voir')}<span class="visuellement-cache"> : ${m.titre}</span>` })}
      </li>`)}
    </ul>
  </div>
</section>

<section class="methode fond-olive" id="methode">
  <div class="conteneur methode-grille">
    <div class="methode-texte">
      <div class="tete-section">
        <p class="surtitre">${c.t('accueil.methode.surtitre')}</p>
        <h2 class="titre-section" data-anime="lignes">${c.t('accueil.methode.titre')}</h2>
        <p class="chapo">${c.t('accueil.methode.texte')}</p>
      </div>
      <ol class="etapes">
        ${D.etapes.map((e) => html`<li class="etape" data-etape="${e.compartiment}">
          <span class="etape-n">${e.n}</span>
          <div><h3>${e.titre}</h3><p>${e.texte}</p></div>
        </li>`)}
      </ol>
      <p>${c.lien('consultation', { ancre: 'deroule', classe: 'lien-fleche lien-clair', texte: c.t('accueil.methode.lien') })}</p>
    </div>
    <div class="methode-visuel">
      <div class="methode-assiette" data-effet="assiette">${assiette({ id: 'methode', numeros: true, titre: c.s('accueil.methode.assiette') })}</div>
    </div>
  </div>
</section>

<section class="bilan conteneur" id="bilan">
  ${c.media({ nom: 'grok/accueil-bilan', alt: c.s('accueil.bilan.alt'), classe: 'bilan-media', sizes: '(max-width: 760px) 100vw, 48vw', attrs: 'data-anime="rideau"' })}
  <div class="bilan-texte">
    <p class="surtitre">${c.t('accueil.bilan.surtitre')}</p>
    <h2 class="titre-section" data-anime="lignes">${c.t('accueil.bilan.titre')}</h2>
    <p>${c.t('accueil.bilan.texte')}</p>
    <p class="mesures-titre">${c.t('accueil.bilan.mesure')}</p>
    <ul class="mesures" data-anime="cascade">${D.mesures.map((m) => html`<li><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12.5l5 5L20 6.5"/></svg>${m}</li>`)}</ul>
    <p class="note">${c.t('accueil.bilan.inclus')}</p>
    <p>${c.lien('consultation', { ancre: 'bilan', classe: 'lien-fleche', texte: c.t('accueil.bilan.lien') })}</p>
  </div>
</section>

<section class="cabinets" id="cabinets">
  <div class="conteneur">
    <div class="tete-section">
      <p class="surtitre">${c.t('accueil.cabinets.surtitre')}</p>
      <h2 class="titre-section" data-anime="lignes">${c.t('accueil.cabinets.titre1')} <em>${c.t('accueil.cabinets.titre2')}</em></h2>
    </div>
    <div class="cabinets-grille" data-anime="cascade">
      ${H.adresses.map((a) => html`<article class="cabinet" data-fx="vitesse" data-fx-force="2">
        ${c.media({ nom: a.id === 'cannes' ? 'grok/cannes-lumiere' : 'grok/nice-oliviers', alt: a.id === 'cannes' ? 'Ombre de palmier sur un mur crème, volet vert ouvert' : "Branches d'olivier dans la lumière de l'après-midi", classe: 'cabinet-media', sizes: '(max-width: 760px) 100vw, 30vw' })}
        <div class="cabinet-corps">
          <h3>${a.nom}</h3>
          <p class="cabinet-adresse">${a.adresse}</p>
          ${horairesTexte(a)}
          <p class="statut" data-statut="${a.id}"><span class="statut-pastille" aria-hidden="true"></span><span data-statut-texte>${c.t('accueil.cabinets.lien')}</span></p>
        </div>
      </article>`)}
      <article class="cabinet cabinet--visio" data-fx="vitesse" data-fx-force="2">
        <div class="cabinet-dessin visio" data-visuel aria-hidden="true">
          ${icone('menthe', 'icone visio-menthe')}
          <div class="visio-ecran">
            <span class="visio-barre"><i></i><i></i><i></i></span>
            <span class="visio-direct"></span>
            <div class="visio-assiette">${assiette({ id: 'visio' })}</div>
            <span class="visio-pip">${icone('tasse')}</span>
            <span class="visio-commandes"><i></i><i></i><i class="visio-raccroche"></i></span>
          </div>
        </div>
        <div class="cabinet-corps">
          <h3>${c.t('accueil.cabinets.visioTitre')}</h3>
          <p>${c.t('accueil.cabinets.visioTexte')}</p>
          <p class="note">${c.t('accueil.cabinets.domicile')}</p>
        </div>
      </article>
    </div>
    <p class="note cabinets-note">${c.t('accueil.cabinets.indicatif')} ${c.lien('contact', { ancre: 'cabinets', classe: 'lien-fleche', texte: c.t('accueil.cabinets.lien') })}</p>
  </div>
  ${scriptHoraires(H)}
</section>

<section class="tarifs-accueil" id="tarifs">
  <div class="ingredients" data-effet="ingredients" data-superpose aria-hidden="true">
    <span class="ingredient ingredient--t1" data-vitesse="-0.3">${icone('carotte')}</span>
    <span class="ingredient ingredient--t2" data-vitesse="0.28">${icone('pomme')}</span>
  </div>
  <div class="conteneur">
    <div class="tete-section">
      <p class="surtitre">${c.t('accueil.tarifs.surtitre')}</p>
      <h2 class="titre-section" data-anime="lignes">${c.t('accueil.tarifs.titre1')} <em>${c.t('accueil.tarifs.titre2')}</em></h2>
    </div>
    <div class="tarifs-grille" data-anime="cascade">
      <article class="tarif tarif--phare">
        <h3>${T.consultation.titre}</h3>
        <p class="tarif-prix">${prix(T.consultation.prix)}</p>
        <p>${T.consultation.detail}</p>
        <p class="note">${T.consultation.plus}</p>
      </article>
      ${T.packs.map((p) => html`<article class="tarif">
        <h3>${p.titre}</h3>
        <p class="tarif-prix">${prix(p.prix)}</p>
        <p><strong>${p.unite}&nbsp;€ la consultation</strong> · ${p.validite}</p>
        ${p.plus ? html`<p class="note">${p.plus}</p>` : ''}
      </article>`)}
    </div>
    <p class="note tarifs-note">${c.t('accueil.tarifs.remboursement')} ${c.lien('tarifs', { classe: 'lien-fleche', texte: c.t('accueil.tarifs.lien') })}</p>
  </div>
</section>

<section class="catherine" id="catherine">
  <div class="conteneur catherine-grille">
    <div class="catherine-photos">
      ${c.media({ nom: 'catherine-cabinet', alt: c.s('accueil.catherine.alt'), cadrage: '33% 30%', classe: 'catherine-media', sizes: '(max-width: 760px) 100vw, 40vw', attrs: 'data-anime="rideau"' })}
      ${c.media({ nom: 'france-bleu-azur', alt: c.s('accueil.catherine.altRadio'), cadrage: '40% 62%', classe: 'catherine-radio', sizes: '(max-width: 760px) 40vw, 14vw', legende: c.t('accueil.catherine.legendeRadio'), attrs: 'data-fx="vitesse" data-fx-force="3"' })}
    </div>
    <div class="catherine-texte">
      <p class="surtitre">${c.t('accueil.catherine.surtitre')}</p>
      <h2 class="titre-section" data-anime="lignes">${c.t('accueil.catherine.titre1')} <em>${c.t('accueil.catherine.titre2')}</em></h2>
      <p>${c.t('accueil.catherine.texte')}</p>
      <p>${c.t('accueil.catherine.texte2')}</p>
      <p class="note">${c.t('commun.ars')}</p>
      <p>${c.lien('presentation', { classe: 'lien-fleche', texte: c.t('accueil.catherine.lien') })}</p>
    </div>
  </div>
  <div class="medias-ruban" data-fx="mots-geants" data-fx-force="18" aria-hidden="true" data-ruban data-visuel>
    <p data-fx-rangee>${[...D.medias, ...D.medias].map((m, i) => html`<span>${m}</span><span class="medias-sep">${icone(['citron', 'tomate', 'basilic', 'pomme'][i % 4])}</span>`)}</p>
  </div>
</section>

<section class="avis tep" id="avis" data-module="temoignages-en-pile" aria-labelledby="avis-titre">
  <div class="conteneur avis-grille">
    <div class="avis-texte">
      <p class="surtitre">${c.t('accueil.temoignages.surtitre')}</p>
      <h2 class="titre-section" id="avis-titre" data-anime="lignes">${c.t('accueil.temoignages.titre1')} <em>${c.t('accueil.temoignages.titre2')}</em></h2>
      ${c.media({ nom: 'grok/accueil-table', alt: c.s('accueil.temoignages.alt'), classe: 'avis-media masque-ecran-tres-bas', sizes: '(max-width: 760px) 100vw, 40vw', attrs: 'data-fx="parallaxe"' })}
    </div>
    <div class="tep__scene" data-effet="pile">
      <ol class="tep__pile">
        ${D.temoignages.map((t, i) => html`<li class="tep__carte${t.texte.length < 90 ? ' tep__carte--courte' : ''}">
          <span class="tep__deco" aria-hidden="true">${icone(['citron', 'basilic', 'tomate', 'olive'][i % 4])}</span>
          <blockquote class="tep__citation"><p>${t.texte}</p></blockquote>
          <p class="tep__auteur"><span class="tep__nom">${t.nom}</span><span class="tep__contexte">${t.source}</span></p>
        </li>`)}
      </ol>
      <div class="tep__commandes">
        <button type="button" class="tep__prec" aria-label="${c.s('accueil.temoignages.precedent')}"><svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 5l-7 7 7 7"/></svg></button>
        <p class="tep__compte" aria-live="polite">1 / ${D.temoignages.length}</p>
        <button type="button" class="tep__suiv" aria-label="${c.s('accueil.temoignages.suivant')}"><svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 5l7 7-7 7"/></svg></button>
      </div>
      <p class="note tep__note-source">${c.t('accueil.temoignages.source')}</p>
    </div>
  </div>
</section>

${appelFinal(c, 'accueil')}
`;
};
