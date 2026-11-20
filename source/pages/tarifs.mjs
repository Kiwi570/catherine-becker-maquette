/* Tarifs : le prix de la consultation en très grand à côté des agrumes ; consultations, packs et calculateur,
   chez vous, en ligne, remboursement, conditions, bon cadeau. */
import { html } from '../../outils/gabarit.mjs';
import { icone } from '../gabarits/icones.mjs';
import { appelFinal } from '../gabarits/blocs.mjs';

export const page = { cle: 'tarifs', fichier: 'tarifs', imagePartage: 'grok/tarifs-ouverture-1280.webp' };

const euros = (n) => html`<span class="prix" data-prix>${n}&nbsp;€</span>`;

export default (c) => {
  const P = c.donnees.tarifsPage, T = c.donnees.tarifs;
  return html`
<section class="ouv-prix" id="debut">
  <div class="ouv-prix-texte">
    <p class="surtitre">${P.ouverture.surtitre}</p>
    <h1 class="titre-page titre-page--moyen" data-anime="lignes">${P.ouverture.titre} <em>${P.ouverture.titre2}</em></h1>
    <div class="prix-geant" data-effet="prix" data-iris-centre>
      <p class="prix-geant-chiffres"><span class="visuellement-cache">${T.consultation.prix} euros</span><span class="prix-col" aria-hidden="true" data-audit-ignorer><span class="prix-piste">${'0123456789'.split('').map((d) => html`<span>${d}</span>`)}<span>7</span></span></span><span class="prix-col" aria-hidden="true" data-audit-ignorer><span class="prix-piste">${'1234567890'.split('').map((d) => html`<span>${d}</span>`)}</span></span><span class="prix-euro" aria-hidden="true">€</span></p>
      <p class="prix-geant-legende">${P.ouverture.prixLegende}</p>
    </div>
    <p class="chapo masque-ecran-bas masque-petit-ecran">${P.ouverture.texte}</p>
    <p class="ouv-actions">
      <a class="bouton" href="${c.site.doctolib}" target="_blank" rel="noopener" data-action-principale>${c.t('commun.actionEntete')}<span class="visuellement-cache"> ${c.t('commun.nouvelOnglet')}</span></a>
      <span class="info-cle" data-info-cle>${T.consultation.plus} · ${T.analyse.titre.replace(' seule', '')} incluse</span>
    </p>
  </div>
  ${c.media({ nom: 'grok/tarifs-ouverture', alt: P.ouverture.alt, cadrage: '40% 32%', priorite: true, classe: 'ouv-prix-media', sizes: '(max-width: 760px) 100vw, 44vw', attrs: 'data-fx="parallaxe" data-fx-force="7"' })}
</section>

<section class="tarifs-unite" id="consultations">
  <div class="conteneur">
    <div class="tete-section">
      <p class="surtitre">${P.consultations.surtitre}</p>
      <h2 class="titre-section" data-anime="lignes">${P.consultations.titre1}</h2>
    </div>
    <div class="tarifs-grille tarifs-grille--3" data-anime="cascade">
      <article class="tarif tarif--phare"><h3>${T.consultation.titre}</h3><p class="tarif-prix"><span class="prix" data-prix><span data-compteur="${T.consultation.prix}">${T.consultation.prix}</span>&nbsp;€</span></p><p>${T.consultation.detail}</p></article>
      <article class="tarif"><h3>${P.consultations.domicile}</h3><p class="tarif-prix">${euros('+15')}</p><p>${P.consultations.domicileTexte}</p></article>
      <article class="tarif"><h3>${P.consultations.teleTitre}</h3><p class="tarif-prix">${euros(70)}</p><p>${P.consultations.teleTexte}</p></article>
    </div>
    <p class="note tarifs-note">${T.analyse.titre}&nbsp;: ${T.analyse.prix}&nbsp;€. ${T.analyse.detail}</p>
  </div>
</section>

<section class="packs" id="packs">
  <div class="conteneur packs-grille">
    <div>
      <p class="surtitre">${P.packs.surtitre}</p>
      <h2 class="titre-section" data-anime="lignes">${P.packs.titre1} <em>${P.packs.titre2}</em></h2>
      <p>${P.packs.texte}</p>
      <ul class="packs-liste" data-anime="cascade">
        ${T.packs.map((p) => html`<li class="pack">
          <div><h3>${p.titre}</h3><p class="note">${p.validite}${p.plus ? html` · ${p.plus}` : ''}</p></div>
          <p class="pack-prix"><span class="prix" data-prix><span data-compteur="${p.prix}">${p.prix}</span>&nbsp;€</span><small>${p.unite}&nbsp;€ la consultation · ${P.packs.economie} ${p.nb * 70}&nbsp;€</small></p>
        </li>`)}
      </ul>
    </div>
    <div class="calcul" data-calcul>
      <h3>${P.packs.calcTitre}</h3>
      <div class="calcul-choix">
        <button type="button" class="calcul-bouton" data-calcul-moins aria-label="${P.packs.calcMoins}">−</button>
        <output class="calcul-n" data-calcul-n aria-live="polite">5</output>
        <button type="button" class="calcul-bouton" data-calcul-plus aria-label="${P.packs.calcPlus}">+</button>
      </div>
      <dl class="calcul-resultat">
        <div><dt>${P.packs.calcUnite}</dt><dd data-calcul-unite>350&nbsp;€</dd></div>
        <div><dt>${P.packs.calcFormule}</dt><dd data-calcul-formule>250&nbsp;€</dd></div>
        <div class="calcul-detail"><dt class="visuellement-cache">Détail</dt><dd data-calcul-detail>Pack 5 consultations</dd></div>
        <div class="calcul-eco"><dt>${P.packs.calcEconomie}</dt><dd data-calcul-eco>100&nbsp;€</dd></div>
      </dl>
      <p class="note">${P.packs.calcNote}</p>
    </div>
  </div>
</section>

<section class="domicile" id="domicile">
  <div class="conteneur domicile-grille">
    ${c.media({ nom: 'grok/tarifs-cuisine', alt: P.domicile.alt, classe: 'domicile-media', sizes: '(max-width: 760px) 100vw, 50vw', attrs: 'data-anime="rideau"' })}
    <div>
      <p class="surtitre">${P.domicile.surtitre}</p>
      <h2 class="titre-section" data-anime="lignes">${P.domicile.titre1} <em>${P.domicile.titre2}</em></h2>
      <p>${P.domicile.texte}</p>
      <ul class="lignes-prix" data-anime="cascade">
        ${T.domicile.map((d) => html`<li><div><h3>${d.titre}</h3><p class="note">${d.detail ? d.detail + ' ' : ''}${d.validite}</p></div>${euros(d.prix)}</li>`)}
      </ul>
    </div>
  </div>
</section>

<section class="en-ligne" id="en-ligne">
  <div class="conteneur">
    <div class="tete-section">
      <p class="surtitre">${P.enLigne.surtitre}</p>
      <h2 class="titre-section" data-anime="lignes">${P.enLigne.titre1} <em>${P.enLigne.titre2}</em></h2>
    </div>
    <div class="tarifs-grille tarifs-grille--2" data-anime="cascade">
      ${T.enLigne.filter((x) => x.titre !== 'Téléconsultation').map((x, i) => html`<article class="tarif tarif--large" data-survol="incline" data-survol-force="3">
        ${icone(i ? 'tasse' : 'citron')}
        <h3>${x.titre}</h3><p class="tarif-prix">${euros(x.prix)}</p><p>${x.detail}</p>
      </article>`)}
    </div>
  </div>
</section>

<section class="remboursement fond-olive" id="remboursement">
  <div class="conteneur remboursement-grille">
    <div>
      <p class="surtitre">${P.remboursement.surtitre}</p>
      <h2 class="titre-section" data-anime="lignes">${P.remboursement.titre1} <em>${P.remboursement.titre2}</em></h2>
      <ul class="liste-puces" data-anime="cascade">${P.remboursement.points.map((x) => html`<li>${x}</li>`)}</ul>
    </div>
    <div class="reseaux" data-fx="vitesse" data-fx-force="2">
      <h3>${P.remboursement.reseauxTitre}</h3>
      ${T.reseaux.map((r) => html`<p class="reseau"><strong>${r.nom}</strong><span>${r.texte}</span></p>`)}
      <p class="note">${P.remboursement.reseauxNote}</p>
    </div>
  </div>
</section>

<section class="conditions" id="conditions">
  <div class="conteneur">
    <div class="tete-section">
      <p class="surtitre">${P.conditions.surtitre}</p>
      <h2 class="titre-section" data-anime="lignes">${P.conditions.titre1} <em>${P.conditions.titre2}</em></h2>
    </div>
    <div class="conditions-grille" data-anime="cascade">
      <div class="condition"><h3>${P.conditions.paiementTitre}</h3><ul class="liste-puces">${P.conditions.paiement.map((x) => html`<li>${x}</li>`)}</ul></div>
      <div class="condition"><h3>${P.conditions.annulationTitre}</h3><ul class="liste-puces">${P.conditions.annulation.map((x) => html`<li>${x}</li>`)}</ul></div>
    </div>
  </div>
</section>

<section class="cadeau" id="cadeau">
  <div class="conteneur cadeau-grille">
    <div class="carte-cadeau" data-fx="vitesse" data-fx-force="4" data-visuel aria-hidden="true">
      <img src="/assets/images/monogramme-clair.png" alt="" width="92" height="48" loading="lazy">
      <p class="carte-cadeau-nom">${P.cadeau.carteNom}</p>
      <p class="carte-cadeau-valeur">${P.cadeau.carteValeur}</p>
      <span class="carte-cadeau-ruban"></span>
      ${icone('citron', 'icone carte-cadeau-citron')}
    </div>
    <div>
      <p class="surtitre">${P.cadeau.surtitre}</p>
      <h2 class="titre-section" data-anime="lignes">${P.cadeau.titre1} <em>${P.cadeau.titre2}</em></h2>
      <p>${P.cadeau.texte}</p>
      <p>${c.lien('contact', { ancre: 'formulaire', params: 'objet=cadeau', classe: 'bouton bouton--contour', texte: P.cadeau.lien })}</p>
    </div>
  </div>
</section>

${appelFinal(c, 'tarifs')}
`;
};
