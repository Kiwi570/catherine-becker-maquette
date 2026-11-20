/* Page 404 : « Cette page n'est pas au menu », une assiette vide et un seul petit pois. */
import { html } from '../../outils/gabarit.mjs';

export const page = { cle: '404', fichier: '404', partage: false };

export default (c) => html`
<section class="introuvable" id="debut">
  ${c.media({ nom: 'grok/page-404', alt: c.s('introuvable.alt'), cadrage: '62% 50%', priorite: true, classe: 'introuvable-media', sizes: '100vw', attrs: 'data-fx="zoom" data-fx-force="8" data-iris-centre' })}
  <div class="conteneur introuvable-texte"><div class="introuvable-carte">
    <p class="surtitre">${c.t('introuvable.surtitre')}</p>
    <h1 class="titre-page" data-anime="lignes">${c.t('introuvable.titre')}</h1>
    <p data-anime>${c.t('introuvable.texte')}</p>
    <p data-anime>${c.lien('accueil', { classe: 'bouton', texte: c.t('introuvable.retour'), attrs: 'data-action-principale' })} <a class="lien-fleche" href="tel:${c.site.contact.telephoneLien}" data-info-cle>${c.t('commun.rdvAppeler')}</a></p>
  </div></div>
</section>
`;
