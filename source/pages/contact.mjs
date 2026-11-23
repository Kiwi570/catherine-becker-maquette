/* Cabinets et contact : carte dessinée de la côte (Cannes, Nice, visio) ; horaires avec cadran, accès, formulaire. */
import { html, brut } from '../../outils/gabarit.mjs';
import { scriptHoraires } from '../gabarits/blocs.mjs';

export const page = { cle: 'contact', fichier: 'contact', imagePartage: 'cabinet-960.webp' };

/* Côte schématique, de Cannes à Nice (dessin indicatif, pas à l'échelle) : baie de Cannes et îles de Lérins,
   cap d'Antibes, baie des Anges. Les épingles mènent aux horaires et choisissent leur cabinet. */
const COTE = 'M0 292 C 50 284 96 300 140 292 C 176 286 204 272 232 276 C 254 279 266 296 274 314 C 284 336 300 350 318 350 C 336 350 352 338 360 318 C 368 296 376 274 398 258 C 434 234 470 222 506 202 C 540 184 566 170 596 168 C 626 166 646 180 662 176 C 680 172 690 160 700 158';
const epingle = (id, nom, x, y) => `<g class="cote-epingle cote-epingle--${id}" transform="translate(${x} ${y})">
<circle class="cote-onde" cy="-38" r="10" fill="none" stroke="#C23E22" stroke-width="2.5"/>
<g class="cote-goutte"><ellipse cy="2" rx="12" ry="4" fill="#33442F" opacity=".18"/><path d="M0 0 C -14 -18 -20 -28 -20 -38 A 20 20 0 0 1 20 -38 C 20 -28 14 -18 0 0 Z" fill="#C23E22"/><circle cy="-38" r="8" fill="#F7F2E8"/></g>
<text x="0" y="-72" text-anchor="middle">${nom}</text></g>`;
const carte = (titre, visio, aria) => brut(`<div class="cote-cadre">
${['cannes', 'nice'].map((id) => `<a class="cote-lien" href="#cabinets" data-cabinet="${id}" data-sans-transition aria-label="${aria[id]}"></a>`).join('')}
<svg class="cote" viewBox="0 0 700 420" role="group" aria-label="${titre}">
<defs><linearGradient id="mer" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#cfdad3"/><stop offset="1" stop-color="#b9cbc4"/></linearGradient><linearGradient id="terre" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FBF7EE"/><stop offset="1" stop-color="#EFE5CF"/></linearGradient></defs>
<rect class="cote-terre" width="700" height="420" fill="url(#terre)"/>
<path class="cote-mer" d="${COTE} V420 H0 Z" fill="url(#mer)"/>
<g class="cote-vagues" fill="none" stroke="#F7F2E8" stroke-width="2" stroke-linecap="round" opacity=".7"><path d="M60 352 q 10 -6 20 0 t 20 0"/><path d="M420 300 q 10 -6 20 0 t 20 0"/><path d="M560 250 q 10 -6 20 0 t 20 0"/><path d="M250 392 q 10 -6 20 0 t 20 0"/></g>
<g class="cote-iles" fill="#E8DCC3" stroke="#33442F" stroke-width="2"><ellipse cx="150" cy="326" rx="26" ry="7"/><ellipse cx="198" cy="334" rx="17" ry="5.5"/></g>
<path class="cote-trait" data-fx-trait d="${COTE}" fill="none" stroke="#33442F" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path class="cote-collines" d="M40 200 C 120 150 170 170 230 140 S 330 120 380 110 S 470 80 520 70" fill="none" stroke="#B9C4A0" stroke-width="2" stroke-dasharray="1 7" stroke-linecap="round"/>
<path class="cote-route" d="M120 270 C 220 230 330 220 420 196 S 540 150 586 150" fill="none" stroke="#C23E22" stroke-width="2.5" stroke-dasharray="2 9" stroke-linecap="round"/>
${epingle('cannes', 'Cannes', 120, 270)}
${epingle('nice', 'Nice', 586, 150)}
<g class="cote-visio" transform="translate(500 350)"><rect x="-122" y="-26" width="244" height="52" rx="26" fill="#33442F"/><text x="0" y="6" text-anchor="middle" fill="#F7F2E8">${visio.replace(' : ', '\u00a0: ')}</text></g>
</svg></div>`);

export default (c) => {
  const D = c.donnees.contact, H = c.donnees.horaires, F = D.formulaire;
  return html`
<section class="ouv-carte" id="debut">
  <div class="ouv-carte-texte">
    <p class="surtitre">${D.ouverture.surtitre}</p>
    <h1 class="titre-page" data-anime="lignes">${D.ouverture.titre1} <em>${D.ouverture.titre2}</em></h1>
    <p class="chapo masque-ecran-bas masque-petit-ecran">${D.ouverture.texte}</p>
    <p class="ouv-actions">
      <a class="bouton" href="${c.site.doctolib}" target="_blank" rel="noopener" data-action-principale>${c.t('commun.actionEntete')}<span class="visuellement-cache"> ${c.t('commun.nouvelOnglet')}</span></a>
      <a class="bouton bouton--contour" href="tel:${c.site.contact.telephoneLien}">${c.site.contact.telephone}</a>
    </p>
    <p class="info-cle" data-info-cle>${c.t('commun.cannes')} · ${c.t('commun.nice')}</p>
  </div>
  <div class="ouv-carte-visuel" data-iris-centre data-effet="cote" data-fx="trace">${carte(D.ouverture.carte, D.ouverture.visio, { cannes: 'Cannes : horaires et accès', nice: 'Nice : horaires et accès' })}</div>
</section>

<section class="horaires horaires-contact" id="cabinets" data-module="horaires-ouvert-maintenant" aria-labelledby="horaires-titre">
  <div class="conteneur horaires__grille">
    <div class="horaires__cadran" aria-hidden="true" data-effet="cadran"></div>
    <div class="horaires__texte">
      <p class="surtitre">${D.cabinets.surtitre}</p>
      <h2 class="titre-section" id="horaires-titre" data-anime="lignes">${D.cabinets.titre1} <em>${D.cabinets.titre2}</em></h2>
      <p>${D.cabinets.intro}</p>
      <div class="horaires__adresses" data-horaires-choix role="group" aria-label="Choisir un cabinet"></div>
      <p class="horaires__statut" data-horaires-statut><span class="horaires__pastille" aria-hidden="true"></span><span>Sur rendez-vous</span></p>
      <noscript><style>.horaires__cadran{display:none!important}.horaires__grille{grid-template-columns:minmax(0,1fr)!important}</style></noscript>
      ${brut(`<script type="application/json" data-horaires>${JSON.stringify(H).replace(/</g, '\\u003c')}</script>`)}
      <div class="horaires__texte-adresse" data-horaires-texte>${H.adresses.map((a) => html`<div class="horaires__bloc"><h3 class="horaires__nom">${a.nom}</h3><dl class="horaires__semaine">${['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi'].map((j) => html`<div class="horaires__jour"><dt>${j.charAt(0).toUpperCase() + j.slice(1)}</dt><dd>${a.semaine[j].length ? a.semaine[j].join(', ').replace(/:00/g, ' h').replace(/:30/g, ' h 30').replace(/-/g, ' – ').replace(/\b0(\d)/g, '$1') : html`<span class="horaires__ferme">Pas de consultation</span>`}</dd></div>`)}</dl></div>`)}</div>
      <p class="note">${D.cabinets.indicatif}</p>
    </div>
  </div>
</section>

<section class="acces" id="acces">
  <div class="conteneur acces-grille" data-anime="cascade">
    ${D.acces.map((a) => html`<article class="acces-carte" id="acces-${a.id}">
      <h3>${a.nom}</h3>
      <p class="acces-lieu">${a.lieu}</p>
      <p class="acces-adresse">${a.adresse}</p>
      <dl>${a.lignes.map(([k, v]) => html`<div><dt>${k}</dt><dd>${v}</dd></div>`)}</dl>
    </article>`)}
    <article class="acces-carte acces-carte--photo">
      ${c.media({ nom: 'cabinet', alt: D.cabinetPhoto.alt, cadrage: '45% 55%', classe: 'acces-media', sizes: '(max-width: 760px) 100vw, 33vw', legende: D.cabinetPhoto.legende, attrs: 'data-fx="parallaxe"' })}
      <h3>${D.distance.titre}</h3>
      <p>${D.distance.texte}</p>
    </article>
  </div>
</section>

<section class="ecrire" id="formulaire">
  <div class="conteneur ecrire-grille">
    <div>
      <p class="surtitre">${F.surtitre}</p>
      <h2 class="titre-section" data-anime="lignes">${F.titre1} <em>${F.titre2}</em></h2>
      <p>${F.texte}</p>
      <dl class="coordonnees" data-anime="cascade">
        <div><dt>${D.coordonnees.tel}</dt><dd><a href="tel:${c.site.contact.telephoneLien}">${c.site.contact.telephone}</a></dd></div>
        <div><dt>${D.coordonnees.email}</dt><dd class="courriel">${c.site.contact.email}</dd></div>
        <div><dt>${D.coordonnees.courrier}</dt><dd>${D.coordonnees.courrierTexte}</dd></div>
      </dl>
    </div>
    <form data-formulaire class="formulaire" action="#" novalidate>
      <div class="champs-2">
        <div class="champ"><label for="f-nom">${F.nom}</label><input id="f-nom" name="nom" autocomplete="name" required></div>
        <div class="champ"><label for="f-tel">${F.tel}</label><input id="f-tel" name="tel" type="tel" autocomplete="tel"></div>
      </div>
      <div class="champ"><label for="f-email">${F.email}</label><input id="f-email" name="email" type="email" autocomplete="email" required></div>
      <div class="champs-2">
        <div class="champ"><label for="f-objet">${F.objet}</label><select id="f-objet" name="objet">${F.objets.map(([v, t]) => html`<option value="${v}">${t}</option>`)}</select></div>
        <div class="champ"><label for="f-cabinet">${F.cabinet}</label><select id="f-cabinet" name="cabinet">${F.cabinets.map(([v, t]) => html`<option value="${v}">${t}</option>`)}</select></div>
      </div>
      <div class="champ"><label for="f-message">${F.message}</label><textarea id="f-message" name="message" rows="5" required></textarea></div>
      <p class="mention-donnees">${c.tb('contact.donnees')}</p>
      <button type="submit" class="bouton">${F.envoyer}</button>
      <p data-message-envoi role="status" tabindex="-1" hidden></p>
    </form>
  </div>
</section>
`;
};
