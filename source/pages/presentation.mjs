/* Présentation : portrait réel en arche et nom en grand ; parcours, métier, engagements, médias, collaborations, réseaux. */
import { html } from '../../outils/gabarit.mjs';
import { icone } from '../gabarits/icones.mjs';
import { appelFinal } from '../gabarits/blocs.mjs';

export const page = { cle: 'presentation', fichier: 'presentation', imagePartage: 'presentation-ouverture-1280.webp' };

export default (c) => {
  const P = c.donnees.presentation;
  const vignette = (v, classe = '') => c.media({ nom: v.nom, alt: v.alt, cadrage: v.cadrage, classe: 'vignette ' + classe, sizes: '(max-width: 760px) 45vw, 18vw', legende: v.legende });
  return html`
<section class="ouv-portrait" id="debut">
  <div class="ouv-portrait-texte">
    <p class="surtitre">${P.ouverture.surtitre}</p>
    <h1 class="titre-geant" data-anime="lignes">${P.ouverture.titre1} <em>${P.ouverture.titre2}</em></h1>
    <p class="chapo masque-ecran-bas masque-petit-ecran">${P.ouverture.texte}</p>
    <p class="ouv-actions">
      <a class="bouton" href="${c.site.doctolib}" target="_blank" rel="noopener" data-action-principale>${c.t('commun.actionEntete')}<span class="visuellement-cache"> ${c.t('commun.nouvelOnglet')}</span></a>
    </p>
    <p class="info-cle" data-info-cle>${P.ouverture.info}</p>
  </div>
  <div class="ouv-portrait-visuel">
    <div class="ouv-portrait-cadre" data-iris-centre>
      ${c.media({ nom: 'presentation-ouverture', alt: P.ouverture.alt, cadrage: '33% 34%', priorite: true, classe: 'ouv-portrait-media', sizes: '(max-width: 760px) 90vw, 40vw', attrs: 'data-fx="zoom" data-fx-force="10"' })}
    </div>
    <span class="ouv-portrait-ingredient" data-effet="ingredients" data-superpose aria-hidden="true" data-vitesse="-0.3">${icone('olive')}</span>
  </div>
</section>

<section class="parcours" id="parcours">
  <div class="conteneur">
    <div class="tete-section">
      <p class="surtitre">${P.parcours.surtitre}</p>
      <h2 class="titre-section" data-anime="lignes">${P.parcours.titre1} <em>${P.parcours.titre2}</em></h2>
    </div>
    <ol class="frise" data-anime="cascade">
      ${P.parcours.etapes.map((e) => html`<li class="frise-etape"><p class="frise-quand">${e.quand}</p><h3>${e.titre}</h3><p>${e.texte}</p></li>`)}
    </ol>
  </div>
</section>

<section class="metier fond-olive" id="metier">
  <div class="conteneur metier-grille">
    <svg class="metier-dessin" viewBox="0 0 200 200" aria-hidden="true" data-fx="trace" data-visuel><circle cx="100" cy="100" r="86" fill="none" stroke="currentColor" stroke-width="3"/><circle cx="100" cy="100" r="70" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M100 30 V170 M30 100 H100" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/></svg>
    <div>
      <p class="surtitre">${P.metier.surtitre}</p>
      <h2 class="titre-section titre-moyen" data-anime="lignes">${P.metier.titre}</h2>
      <p>${P.metier.texte}</p>
      <p class="note">${P.metier.texte2}</p>
    </div>
  </div>
</section>

<section class="engagements" id="engagements">
  <div class="conteneur">
    <div class="tete-section">
      <p class="surtitre">${P.engagements.surtitre}</p>
      <h2 class="titre-section" data-anime="lignes">${P.engagements.titre1} <em>${P.engagements.titre2}</em></h2>
    </div>
    <ul class="engagements-grille" data-anime="cascade">
      ${P.engagements.liste.map((e) => html`<li class="engagement">${icone(e.icone)}<h3>${e.titre}</h3><p>${e.texte}</p></li>`)}
    </ul>
  </div>
</section>

<section class="medias" id="medias">
  <div class="conteneur medias-grille">
    <div>
      <p class="surtitre">${P.medias.surtitre}</p>
      <h2 class="titre-section" data-anime="lignes">${P.medias.titre1} <em>${P.medias.titre2}</em></h2>
      <div class="chiffres-medias">
        ${P.medias.chiffres.map((x) => html`<p class="chiffre-media"><span class="chiffre-grand"><span data-compteur="${x.n}">${x.n}</span>${x.plus}</span><span>${x.texte}</span></p>`)}
      </div>
      <ul class="liste-puces">
        <li>${P.medias.tele}</li><li>${P.medias.radio}</li><li>${P.medias.presse}</li>
      </ul>
    </div>
    <div class="vignettes" data-anime="cascade">
      ${P.medias.vignettes.map((v, i) => html`<div class="vignette-cadre" data-fx="vitesse" data-fx-force="${2 + (i % 3)}">${vignette(v)}</div>`)}
    </div>
  </div>
</section>

<section class="collaborations" id="collaborations">
  <div class="conteneur collab-grille">
    <div class="collab-vignettes" data-anime="cascade">
      ${P.collaborations.vignettes.map((v) => html`<div class="vignette-cadre">${vignette(v, 'vignette--grande')}</div>`)}
    </div>
    <div>
      <p class="surtitre">${P.collaborations.surtitre}</p>
      <h2 class="titre-section" data-anime="lignes">${P.collaborations.titre1} <em>${P.collaborations.titre2}</em></h2>
      <ul class="liste-puces" data-anime="cascade">${P.collaborations.liste.map((x) => html`<li>${x}</li>`)}</ul>
    </div>
  </div>
</section>

<section class="reseaux-pro" id="reseaux">
  <div class="conteneur">
    <p class="surtitre">${P.reseaux.surtitre}</p>
    <h2 class="titre-section titre-moyen" data-anime="lignes">${P.reseaux.titre}</h2>
    <ul class="reseaux-liste" data-anime="cascade">${P.reseaux.liste.map((x) => html`<li>${x}</li>`)}</ul>
  </div>
</section>

${appelFinal(c, 'presentation')}
`;
};
