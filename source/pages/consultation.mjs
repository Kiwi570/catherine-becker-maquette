/* Consultation : grand titre puis bandeau photo ; motifs, déroulé, bilan, préparer sa visite, rythme, modalités, médecin. */
import { html } from '../../outils/gabarit.mjs';
import { assiette } from '../gabarits/assiette.mjs';
import { icone } from '../gabarits/icones.mjs';
import { appelFinal } from '../gabarits/blocs.mjs';

export const page = { cle: 'consultation', fichier: 'consultation', imagePartage: 'grok/consultation-ouverture-1280.webp' };

export default (c) => {
  const D = c.donnees.consultation, M = c.donnees.motifs;
  return html`
<section class="ouv-bandeau" id="debut">
  <div class="conteneur ouv-bandeau-tete">
    <div>
      <p class="surtitre">${D.ouverture.surtitre}</p>
      <h1 class="titre-page" data-anime="lignes">${D.ouverture.titre1} <em>${D.ouverture.titre2}</em></h1>
    </div>
    <div class="ouv-bandeau-texte">
      <p class="chapo masque-ecran-bas masque-petit-ecran">${D.ouverture.texte}</p>
      <p class="ouv-actions">
        <a class="bouton" href="${c.site.doctolib}" target="_blank" rel="noopener" data-action-principale>${c.t('commun.actionEntete')}<span class="visuellement-cache"> ${c.t('commun.nouvelOnglet')}</span></a>
        <span class="info-cle" data-info-cle>${D.ouverture.info}</span>
      </p>
    </div>
  </div>
  <div class="ouv-bandeau-image" data-effet="bandeau">
    ${c.media({ nom: 'grok/consultation-ouverture', alt: D.ouverture.alt, cadrage: '55% 55%', cadrageMobile: '50% 60%', priorite: true, classe: 'ouv-bandeau-media', sizes: '100vw', attrs: 'data-iris-centre' })}
  </div>
</section>

<section class="motifs-detail" id="motifs">
  <div class="conteneur">
    <div class="tete-section">
      <p class="surtitre">${D.motifs.surtitre}</p>
      <h2 class="titre-section" data-anime="lignes">${D.motifs.titre1} <em>${D.motifs.titre2}</em></h2>
      <p class="chapo">${D.motifs.texte}</p>
    </div>
    <nav class="puces" aria-label="Motifs de consultation">
      ${M.map((m) => html`<a class="puce" href="#motif-${m.id}" data-sans-transition data-puce="${m.id}">${icone(m.icone, 'icone puce-icone')}${m.titre}</a>`)}
    </nav>
    <div class="motifs-cartes">
      ${M.map((m) => html`<article class="motif-carte" id="motif-${m.id}" data-motif="${m.id}" data-fx="vitesse" data-fx-force="2">
        <span class="motif-carte-icone">${icone(m.icone)}</span>
        <h3>${m.titre}</h3>
        <ul>${m.liste.map((x) => html`<li>${x}</li>`)}</ul>
      </article>`)}
    </div>
    <p class="note">${D.motifs.hopital}</p>
  </div>
</section>

<section class="deroule" id="deroule">
  <div class="conteneur">
    <div class="tete-section">
      <p class="surtitre">${D.deroule.surtitre}</p>
      <h2 class="titre-section" data-anime="lignes">${D.deroule.titre1} <em>${D.deroule.titre2}</em></h2>
    </div>
    <div class="deroule-frise">
      <svg class="deroule-trait" viewBox="0 0 1000 40" preserveAspectRatio="none" aria-hidden="true" data-fx="trace"><path d="M10 20 C 200 4, 330 36, 500 20 S 800 4, 990 20" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/></svg>
      <ol class="deroule-etapes" data-anime="cascade">
        ${D.deroule.etapes.map((e) => html`<li class="deroule-etape">
          <span class="deroule-n">${e.n}</span>
          <h3>${e.titre}</h3>
          <p>${e.texte}</p>
        </li>`)}
      </ol>
    </div>
  </div>
</section>

<section class="bilan-detail" id="bilan">
  <div class="conteneur bilan-detail-grille">
    <div>
      <p class="surtitre">${D.bilan.surtitre}</p>
      <h2 class="titre-section" data-anime="lignes">${D.bilan.titre1} <em>${D.bilan.titre2}</em></h2>
      <p>${D.bilan.texte}</p>
      <ol class="liste-numeros" data-anime="cascade">${D.bilan.points.map((p) => html`<li>${p}</li>`)}</ol>
    </div>
    <div class="bio" data-fx="vitesse" data-fx-force="2">
      <div class="bio-assiette" aria-hidden="true">${assiette({ id: 'bio' })}</div>
      <h3>${D.bilan.bioTitre}</h3>
      <p>${D.bilan.bioTexte}</p>
      <dl class="bio-mesures" data-anime="cascade">${D.bilan.mesures.map((m) => html`<div><dt>${m.nom}</dt><dd>${m.texte}</dd></div>`)}</dl>
    </div>
  </div>
</section>

<section class="preparer" id="preparer">
  <div class="conteneur preparer-grille">
    ${c.media({ nom: 'cabinet', alt: D.preparer.alt, cadrage: '40% 55%', classe: 'preparer-media', sizes: '(max-width: 760px) 100vw, 45vw', legende: D.preparer.legende, attrs: 'data-anime="rideau"' })}
    <div>
      <p class="surtitre">${D.preparer.surtitre}</p>
      <h2 class="titre-section" data-anime="lignes">${D.preparer.titre1} <em>${D.preparer.titre2}</em></h2>
      <ul class="preparer-liste" data-anime="cascade">
        ${D.preparer.points.map((p) => html`<li data-coche-ligne>${icone(p.icone)}<div><h3>${p.titre}</h3><p>${p.texte}</p></div><button type="button" class="coche" aria-pressed="false" data-coche><svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg><span class="visuellement-cache">${D.preparer.cocher} : ${p.titre}</span></button></li>`)}
      </ul>
      <p class="preparer-etat" data-coche-etat data-etat0="${D.preparer.etat0}" data-etatn="${D.preparer.etatN}" data-etattout="${D.preparer.etatTout}" aria-live="polite" hidden></p>
    </div>
  </div>
</section>

<section class="rythme fond-olive" id="rythme">
  <div class="conteneur">
    <div class="tete-section">
      <p class="surtitre">${D.rythme.surtitre}</p>
      <h2 class="titre-section" data-anime="lignes">${D.rythme.titre1} <em>${D.rythme.titre2}</em></h2>
      <p class="chapo">${D.rythme.texte}</p>
    </div>
    <ol class="jalons" data-effet="jalons">
      ${D.rythme.jalons.map((j) => html`<li class="jalon"><span class="jalon-point" aria-hidden="true"></span><p class="jalon-quand">${j.quand}</p><p>${j.texte}</p></li>`)}
    </ol>
    <p class="rythme-formules">${D.rythme.formules} ${c.lien('tarifs', { ancre: 'packs', classe: 'lien-fleche lien-clair', texte: D.rythme.lien })}</p>
  </div>
</section>

<section class="modalites" id="modalites">
  <div class="conteneur">
    <div class="tete-section">
      <p class="surtitre">${D.modalites.surtitre}</p>
      <h2 class="titre-section" data-anime="lignes">${D.modalites.titre1} <em>${D.modalites.titre2}</em></h2>
    </div>
    <ul class="modalites-grille" data-anime="cascade">
      ${D.modalites.liste.map((m) => html`<li class="modalite" data-survol="incline" data-survol-force="4">${icone(m.icone)}<h3>${m.titre}</h3><p>${m.texte}</p><p class="modalite-prix" data-prix>${m.prix}</p></li>`)}
    </ul>
  </div>
</section>

<section class="medecin" id="medecin">
  <div class="conteneur medecin-grille">
    <div class="medecin-lettre" data-effet="lettre" data-visuel aria-hidden="true"><svg viewBox="0 0 220 210" focusable="false">
      <path d="M18 92 L110 26 L202 92 Z" fill="#D9C7A2"/>
      <path d="M18 92 H202 V196 H18 Z" fill="#E6D7B8"/>
      <g class="lettre-papier">
        <rect x="40" y="44" width="140" height="132" rx="8" fill="#FFFDF8" stroke="#E2D8C4" stroke-width="1.5"/>
        <rect x="58" y="66" width="62" height="7" rx="3.5" fill="#C23E22"/>
        <rect x="58" y="84" width="104" height="6" rx="3" fill="#D6DACB"/>
        <rect x="58" y="98" width="92" height="6" rx="3" fill="#D6DACB"/>
        <rect x="58" y="112" width="100" height="6" rx="3" fill="#D6DACB"/>
        <rect x="58" y="126" width="70" height="6" rx="3" fill="#D6DACB"/>
        <path d="M120 152 c 8 -10 14 4 22 -4 s 10 2 16 -2" fill="none" stroke="#33442F" stroke-width="2.4" stroke-linecap="round"/>
      </g>
      <path d="M18 92 L110 150 L202 92 V196 H18 Z" fill="#F1E6CE"/>
      <path d="M18 196 L92 140 M202 196 L128 140" stroke="#DCCBA8" stroke-width="2.5" stroke-linecap="round" fill="none"/>
      <g class="lettre-cachet" transform="translate(110 150)"><circle r="19" fill="#C23E22"/><circle r="14" fill="none" stroke="#F08A66" stroke-width="1.5"/><path d="M-6 6 C -6 -4 0 -9 7 -9 C 7 -1 3 5 -6 6 Z M-6 6 L 2 -2" fill="#F7F2E8" stroke="#F7F2E8" stroke-width="1.2" stroke-linejoin="round"/></g>
    </svg></div>
    <div>
      <p class="surtitre">${D.medecin.surtitre}</p>
      <h2 class="titre-section titre-moyen" data-anime="lignes">${D.medecin.titre}</h2>
      <p>${D.medecin.texte}</p>
      <p class="note">${D.medecin.texte2}</p>
    </div>
  </div>
</section>

${appelFinal(c, 'consultation')}
`;
};
