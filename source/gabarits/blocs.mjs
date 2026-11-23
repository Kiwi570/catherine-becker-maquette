/* Blocs qui reviennent d'une page à l'autre : horaires en texte, données des horaires, appel final. */
import { html, brut } from '../../outils/gabarit.mjs';
import { assiette } from './assiette.mjs';

const JOURS = ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'];
const h = (t) => { const [a, b] = t.split(':'); return `${+a} h${b !== '00' ? ' ' + b : ''}`; };
const maj = (t) => t.charAt(0).toUpperCase() + t.slice(1);

/** Jours de consultation d'un cabinet, en texte (lisible sans JavaScript). */
export function horairesTexte(a) {
  const jours = JOURS.filter((j) => (a.semaine[j] || []).length);
  return html`<dl class="horaires-court" aria-label="Jours de consultation à ${a.nom}">${jours.map((j) => html`<div><dt>${maj(j)}</dt><dd>${a.semaine[j].map((c) => c.split('-').map(h).join('–')).join(', ')}</dd></div>`)}</dl>`;
}

/** Données des horaires pour le statut du moment (lues par site.js). */
export function scriptHoraires(H) {
  return brut(`<script type="application/json" data-horaires>${JSON.stringify(H).replace(/</g, '\\u003c')}</script>`);
}

/** Appel final : prendre rendez-vous, sur fond olive, avec l'assiette qui tourne doucement. */
/** Bouton posé sur une assiette : un clic la vide et la remplit de nouveau (jeu, sans conséquence). */
export function boutonResservir(c) {
  return html`<button type="button" class="assiette-jeu" data-resservir><span class="assiette-indice"><svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 11a8 8 0 1 0-2.3 5.7"/><path d="M20 4v7h-7"/></svg>${c.t('commun.resservir')}<span class="visuellement-cache"> ${c.t('commun.resservirCache')}</span></span></button>`;
}

export function appelFinal(c, cle) {
  return html`<section class="appel fond-olive" id="rendez-vous">
  <div class="conteneur appel-grille">
    <div class="appel-assiette" data-effet="assiette-tourne">${assiette({ id: 'appel-' + cle })}${boutonResservir(c)}</div>
    <div class="appel-texte">
      <h2 class="titre-section" data-anime="lignes">${c.t('commun.rdvTitre')}</h2>
      <p>${c.t('commun.rdvTexte')}</p>
      <p class="appel-actions">
        <a class="bouton bouton--clair" href="${c.site.doctolib}" target="_blank" rel="noopener" data-survol="magnetique">${c.t('commun.rdvDoctolib')}<span class="visuellement-cache"> ${c.t('commun.nouvelOnglet')}</span></a>
        <a class="bouton bouton--contour" href="tel:${c.site.contact.telephoneLien}">${c.t('commun.rdvAppeler')}</a>
      </p>
      <p class="note">${c.t('commun.rdvApporter')}</p>
    </div>
  </div>
</section>`;
}
