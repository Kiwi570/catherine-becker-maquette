# Rapport d’audit

Projet : `catherine-becker-maquette` · 20/11/2026 17:09:03 · 19 min · 6 page(s) · audit standard

## Résumé

- Statut : **59 échec(s)**
- Passe : `20261120-155007-standard` · version ?v=1
- Échecs : **59**
- À regarder : **58**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (3), mesures (66), balayage (5), films d’ouverture (10), films de transition (10), bords de l’écran (6), intro accélérable et passable (7), menu (1), clavier (6), liens et boutons (6), liens profonds (16), liens vers la page en cours (5), changements de hauteur (5), parcours du projet (1), fluidité (10), défilement selon l’appareil (5), mouvement (10), effets du plan (5), souris immobile (7), vitesse (5), captures (1)

## Grille wouahou

| Point | État | Détail |
|---|---|---|
| 1. L’effet signature se manipule | ✗ absent | aucun data-grille="manipuler" sur l’accueil |
| 2. L’intro devient la page | ✓ présent | objet d’ouverture sur 5 page(s), versObjet dans l’intro |
| 3. La transition reprend le motif | ✓ présent | voile en rideau |
| 4. Quelque chose relie les sections et les pages | ✗ absent | sur aucune page |
| 5. Un titre fait l’événement sur chaque page | ✗ absent | sur aucune page |
| 6. La scène est un geste du métier | · sans objet | aucune scène épinglée marquée ni galerie générique |
| 7. L’action principale a un retour physique | ✗ absent | sur aucune page |

Le script vérifie les marques (`data-grille`, `data-iris-centre`, forme du voile, `versObjet`) ; la force et la justesse de chaque point se jugent sur les captures et les films.

## Échecs

### lien vers le site actuel (6)

- **lien vers le site actuel** — `404.html` — mailto:contact@catherinebecker.fr
- **lien vers le site actuel** — `consultation.html` — mailto:contact@catherinebecker.fr
- **lien vers le site actuel** — `contact.html` — mailto:contact@catherinebecker.fr
- **lien vers le site actuel** — `index.html` — mailto:contact@catherinebecker.fr
- **lien vers le site actuel** — `presentation.html` — mailto:contact@catherinebecker.fr
- **lien vers le site actuel** — `tarifs.html` — mailto:contact@catherinebecker.fr

### image de partage (5)

- **image de partage** — `consultation.html` — fichier introuvable : /assets/partage/consultation-fr.jpg
- **image de partage** — `contact.html` — fichier introuvable : /assets/partage/contact-fr.jpg
- **image de partage** — `index.html` — fichier introuvable : /assets/partage/accueil-fr.jpg
- **image de partage** — `presentation.html` — fichier introuvable : /assets/partage/presentation-fr.jpg
- **image de partage** — `tarifs.html` — fichier introuvable : /assets/partage/tarifs-fr.jpg

### premier écran : information clé hors de l’écran (5)

- **premier écran : information clé hors de l’écran** — `/` — section#debut > div.hero-texte:nth-of-type(2) > p.hero-info:nth-of-type(4) « Consultation 70 € · sur rendez-vous » _(320×568 normal, 320×568 sansJs)_
- **premier écran : information clé hors de l’écran** — `/404` — section#debut > div.conteneur.introuvable-texte > p:nth-of-type(3) > a.lien-fleche:nth-of-type(2) « Appeler le 04 89 82 09 06 » _(1366×768 sansJs)_
- **premier écran : information clé hors de l’écran** — `/consultation` — div.conteneur.ouv-bandeau-tete:nth-of-type(1) > div.ouv-bandeau-texte:nth-of-type(2) > p.ouv-actions:nth-of-type(2) > span.info-cle « Consultation 70 € · bilan avec bio-impédancemétrie » _(320×568 normal, 320×568 sansJs)_
- **premier écran : information clé hors de l’écran** — `/presentation` — section#debut > div.ouv-portrait-texte:nth-of-type(1) > p.info-cle:nth-of-type(4) « Enregistrée à l'ARS · ADELI 069500676 · RPPS 10008 » _(320×568 normal)_
- **premier écran : information clé hors de l’écran** — `/tarifs` — section#debut > div.ouv-prix-texte > p.ouv-actions:nth-of-type(3) > span.info-cle « À domicile : +15 € · Analyse corporelle incluse » _(320×568 normal, 844×390 normal, 320×568 sansJs)_

### zone tactile sous 44 px (6)

- **zone tactile sous 44 px** — `/` — nav > ul > li:nth-of-type(3) > a « Tarifs » — 42 × 44 px _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 390×844 sansWebgl, +1)_
- **zone tactile sous 44 px** — `/404` — nav > ul > li:nth-of-type(3) > a « Tarifs » — 40 × 44 px _(320×568 normal, 390×844 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 390×844 sansWebgl, +1)_
- **zone tactile sous 44 px** — `/consultation` — nav > ul > li:nth-of-type(3) > a « Tarifs » — 40 × 44 px _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 390×844 sansWebgl, +1)_
- **zone tactile sous 44 px** — `/contact` — nav > ul > li:nth-of-type(3) > a « Tarifs » — 40 × 44 px _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 390×844 sansWebgl, +1)_
- **zone tactile sous 44 px** — `/presentation` — nav > ul > li:nth-of-type(3) > a « Tarifs » — 40 × 44 px _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 390×844 sansWebgl, +1)_
- **zone tactile sous 44 px** — `/tarifs` — nav > ul > li:nth-of-type(3) > a « Tarifs » — 42 × 44 px _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 390×844 sansWebgl, +1)_

### contraste insuffisant (3)

- **contraste insuffisant** — `/` — div.conteneur > div.tarifs-grille.fx-fini:nth-of-type(2) > article.tarif.tarif--phare:nth-of-type(1) > p.note:nth-of-type(3) « À domicile : +15 € » — 4.27:1 (minimum 4.5:1) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 1920×1080 normal, 1366×768 normal, +2)_
- **contraste insuffisant** — `/` — div.conteneur > div.tarifs-grille:nth-of-type(2) > article.tarif.tarif--phare:nth-of-type(1) > p.note:nth-of-type(3) « À domicile : +15 € » — 4.27:1 (minimum 4.5:1) _(390×844 sansJs, 1366×768 sansJs, 320×568 sansJs)_
- **contraste insuffisant** — `/contact` — div#horaires-cannes > div.horaires__noter > p.horaires__noter-titre « À NOTER » — 4.23:1 (minimum 4.5:1) _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 1366×768 normal, 1920×1080 normal, +2)_

### accessibilité (axe) : color-contrast (3)

- **accessibilité (axe) : color-contrast** — `/` — .tarif--phare > .note — Elements must meet minimum color contrast ratio thresholds _(390×844 normal)_
- **accessibilité (axe) : color-contrast** — `/` — li[data-etape="b"] > div > p ; li[data-etape="a"] > div > p ; .tarif--phare > .note — Elements must meet minimum color contrast ratio thresholds _(1366×768 normal)_
- **accessibilité (axe) : color-contrast** — `/contact` — .horaires__noter-titre — Elements must meet minimum color contrast ratio thresholds _(390×844 normal, 1366×768 normal)_

### élément sans nom accessible (2)

- **élément sans nom accessible** — `/` — div.conteneur.avis-grille > div.tep__scene:nth-of-type(2) > div.tep__commandes > button.tep__prec:nth-of-type(1) _(390×844 sansJs, 1366×768 sansJs)_
- **élément sans nom accessible** — `/` — div.conteneur.avis-grille > div.tep__scene:nth-of-type(2) > div.tep__commandes > button.tep__suiv:nth-of-type(2) _(390×844 sansJs, 1366×768 sansJs)_

### contraste sur image (2)

- **contraste sur image** — `/404` — section#debut > div.conteneur.introuvable-texte > p.surtitre:nth-of-type(1) « ERREUR 404 » — 4.40:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(1366×768 normal)_
- **contraste sur image** — `/404` — section#debut > div.conteneur.introuvable-texte > p:nth-of-type(3) > a.lien-fleche:nth-of-type(2) « Appeler le 04 89 82 09 06 » — 3.18:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(1366×768 normal)_

### premier écran : bouton principal hors de l’écran (2)

- **premier écran : bouton principal hors de l’écran** — `/404` — section#debut > div.conteneur.introuvable-texte > p:nth-of-type(3) > a.bouton:nth-of-type(1) « Revenir à l'accueil » _(1366×768 sansJs)_
- **premier écran : bouton principal hors de l’écran** — `/tarifs` — section#debut > div.ouv-prix-texte > p.ouv-actions:nth-of-type(3) > a.bouton « Prendre rendez-vous (Doctolib, nouvel onglet) » _(320×568 normal, 844×390 normal, 320×568 sansJs)_

### textes qui se chevauchent (14)

- **textes qui se chevauchent** — `/presentation` — section#debut > div.ouv-portrait-texte:nth-of-type(1) > p.surtitre:nth-of-type(1) « PRÉSENTATION » — avec section#debut > div.ouv-portrait-texte:nth-of-type(1) > h1.titre-geant « Catherine Becker » _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **textes qui se chevauchent** — `/tarifs` — li.pack:nth-of-type(1) > p.pack-prix > span.prix > span « 180 » — avec ul.packs-liste.fx-fini > li.pack:nth-of-type(1) > p.pack-prix > small « 60 € la consultation · au lieu de 210 € » _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 1366×768 normal, 1920×1080 normal, +2)_
- **textes qui se chevauchent** — `/tarifs` — ul.packs-liste.fx-fini > li.pack:nth-of-type(1) > p.pack-prix > span.prix « 180 € » — avec ul.packs-liste.fx-fini > li.pack:nth-of-type(1) > p.pack-prix > small « 60 € la consultation · au lieu de 210 € » _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 1366×768 normal, 1920×1080 normal, +2)_
- **textes qui se chevauchent** — `/tarifs` — li.pack:nth-of-type(2) > p.pack-prix > span.prix > span « 250 » — avec ul.packs-liste.fx-fini > li.pack:nth-of-type(2) > p.pack-prix > small « 50 € la consultation · au lieu de 350 € » _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 1366×768 normal, 1920×1080 normal, +2)_
- **textes qui se chevauchent** — `/tarifs` — ul.packs-liste.fx-fini > li.pack:nth-of-type(2) > p.pack-prix > span.prix « 250 € » — avec ul.packs-liste.fx-fini > li.pack:nth-of-type(2) > p.pack-prix > small « 50 € la consultation · au lieu de 350 € » _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 1366×768 normal, 1920×1080 normal, +2)_
- **textes qui se chevauchent** — `/tarifs` — section#packs > div.conteneur.packs-grille > div.calcul:nth-of-type(2) > h3 « Combien de consultations prévoyez-vous ? » — avec div.conteneur.packs-grille > div.calcul:nth-of-type(2) > div.calcul-choix > output.calcul-n « 5 » _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 390×844 sansWebgl, +1)_
- **textes qui se chevauchent** — `/tarifs` — li.pack:nth-of-type(3) > p.pack-prix > span.prix > span « 600 » — avec ul.packs-liste.fx-fini > li.pack:nth-of-type(3) > p.pack-prix > small « 50 € la consultation · au lieu de 840 € » _(390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansWebgl)_
- **textes qui se chevauchent** — `/tarifs` — ul.packs-liste.fx-fini > li.pack:nth-of-type(3) > p.pack-prix > span.prix « 600 € » — avec ul.packs-liste.fx-fini > li.pack:nth-of-type(3) > p.pack-prix > small « 50 € la consultation · au lieu de 840 € » _(390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansWebgl)_
- **textes qui se chevauchent** — `/tarifs` — li.pack:nth-of-type(1) > p.pack-prix > span.prix > span « 180 » — avec ul.packs-liste > li.pack:nth-of-type(1) > p.pack-prix > small « 60 € la consultation · au lieu de 210 € » _(390×844 sansJs, 1366×768 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/tarifs` — ul.packs-liste > li.pack:nth-of-type(1) > p.pack-prix > span.prix « 180 € » — avec ul.packs-liste > li.pack:nth-of-type(1) > p.pack-prix > small « 60 € la consultation · au lieu de 210 € » _(390×844 sansJs, 1366×768 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/tarifs` — li.pack:nth-of-type(2) > p.pack-prix > span.prix > span « 250 » — avec ul.packs-liste > li.pack:nth-of-type(2) > p.pack-prix > small « 50 € la consultation · au lieu de 350 € » _(390×844 sansJs, 1366×768 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/tarifs` — ul.packs-liste > li.pack:nth-of-type(2) > p.pack-prix > span.prix « 250 € » — avec ul.packs-liste > li.pack:nth-of-type(2) > p.pack-prix > small « 50 € la consultation · au lieu de 350 € » _(390×844 sansJs, 1366×768 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/tarifs` — li.pack:nth-of-type(3) > p.pack-prix > span.prix > span « 600 » — avec ul.packs-liste > li.pack:nth-of-type(3) > p.pack-prix > small « 50 € la consultation · au lieu de 840 € » _(390×844 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/tarifs` — ul.packs-liste > li.pack:nth-of-type(3) > p.pack-prix > span.prix « 600 € » — avec ul.packs-liste > li.pack:nth-of-type(3) > p.pack-prix > small « 50 € la consultation · au lieu de 840 € » _(390×844 sansJs, 320×568 sansJs)_

### accessibilité (axe) : aria-prohibited-attr (1)

- **accessibilité (axe) : aria-prohibited-attr** — `/tarifs` — .prix-geant-chiffres — Elements must only use permitted ARIA attributes _(390×844 normal, 1366×768 normal)_

### débordement horizontal (1)

- **débordement horizontal** — `/contact` — page large de 377 px — largeurs : 320, 360, 880, 920 px _(balayage 320–1920 normal)_

### lien profond (9)

- **lien profond** — `/ → /consultation?motif=poids#motif-poids` — section cachée sous l'en-tête (17 px) _(1366×768 lien profond, 390×844 lien profond)_
- **lien profond** — `/ → /consultation?motif=sante#motif-sante` — section cachée sous l'en-tête (17 px) _(1366×768 lien profond, 390×844 lien profond)_
- **lien profond** — `/ → /consultation?motif=digestion#motif-digestion` — section cachée sous l'en-tête (17 px) _(1366×768 lien profond)_
- **lien profond** — `/ → /consultation?motif=digestion#motif-digestion` — section cachée sous l'en-tête (16 px) _(390×844 lien profond)_
- **lien profond** — `/ → /consultation?motif=femmes#motif-femmes` — section cachée sous l'en-tête (17 px) _(1366×768 lien profond, 390×844 lien profond)_
- **lien profond** — `/ → /consultation?motif=comportement#motif-comportement` — section cachée sous l'en-tête (17 px) _(1366×768 lien profond)_
- **lien profond** — `/ → /consultation?motif=intolerances#motif-intolerances` — section cachée sous l'en-tête (17 px) _(1366×768 lien profond)_
- **lien profond** — `/ → /consultation?motif=sport#motif-sport` — section cachée sous l'en-tête (17 px) _(1366×768 lien profond)_
- **lien profond** — `/ → /consultation?motif=equilibre#motif-equilibre` — section cachée sous l'en-tête (17 px) _(1366×768 lien profond)_

## À regarder

### « à compléter » visible (1)

- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### grille : effet signature qui ne se manipule pas (point 1) (1)

- **grille : effet signature qui ne se manipule pas (point 1)** — `/` — aucun élément data-grille="manipuler" sur l’accueil : objet à attraper, faire tourner ou glisser (module objet-a-faire-tourner, lumiere-au-pointeur…)

### grille : rien ne relie les sections (point 4) (1)

- **grille : rien ne relie les sections (point 4)** — sur aucune page : élément du métier qui relie les sections et les pages (fil dans la marge, objet unique qui change, lumière qui passe, carte, folio, frise), marqué data-grille="fil"

### grille : aucun titre ne fait l’événement (point 5) (1)

- **grille : aucun titre ne fait l’événement (point 5)** — sur aucune page : titre fabriqué par le métier, axe de police animé ou titre joué avec l’image (modules axes-au-defilement, titre-cousu, texte-grave-en-direct), marqué data-grille="typo"

### grille : action principale sans retour physique (point 7) (1)

- **grille : action principale sans retour physique (point 7)** — ajout au panier, réservation, envoi ou filtre : quelque chose de l’objet part, se pose ou se transforme (module envol-vers-le-panier, tampon « reçu »), marqué data-grille="retour"

### section sans visuel (17)

- **section sans visuel** — `/` — section#tarifs « TARIFS Des prix clairs, des formules qui suivent.  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1920×1080 normal, +5)_
- **section sans visuel** — `/` — section#motifs « POUR QUI ? Vous venez pour… Tout patient, adressé  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 320×568 normal, 390×844 sansJs, 390×844 sansWebgl, 1366×768 sansJs, 320×568 sansJs)_
- **section sans visuel** — `/` — section#avis « TÉMOIGNAGES Ce qu'en disent ses patients Je suis t » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **section sans visuel** — `/consultation` — section#motifs « LES MOTIFS Je viens pour… Choisissez ce qui vous a » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1920×1080 normal, +5)_
- **section sans visuel** — `/consultation` — section#deroule « LE DÉROULÉ Trois étapes, dans cet ordre. 1 Bilan d » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1920×1080 normal, +5)_
- **section sans visuel** — `/consultation` — section#rythme « LE RYTHME Combien de rendez-vous ? Tout dépend de  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1920×1080 normal, +5)_
- **section sans visuel** — `/consultation` — section#modalites « OÙ ET COMMENT Quatre façons de consulter Au cabine » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1920×1080 normal, +5)_
- **section sans visuel** — `/contact` — section#formulaire « ÉCRIRE Une question ? Écrivez-nous. Pour prendre r » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/contact` — section#cabinets « HORAIRES Quand venir au cabinet Consultations sans » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 sansJs, 1366×768 sansJs, 320×568 sansJs)_
- **section sans visuel** — `/presentation` — section#parcours « PARCOURS De l'hôpital au cabinet. Formation BTS Di » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/presentation` — section#engagements « SES ENGAGEMENTS Sept engagements, aucun miracle. U » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/presentation` — section#reseaux « RÉSEAUX Elle travaille en réseau Partenaire des ré » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/tarifs` — section#consultations « CONSULTATIONS À l'unité Consultation diététique 70 » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/tarifs` — section#packs « PACKS Plus de rendez-vous, un prix qui baisse. Les » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/tarifs` — section#en-ligne « À DISTANCE En ligne, partout en France. Coaching e » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/tarifs` — section#remboursement « REMBOURSEMENT Votre mutuelle peut aider. Les consu » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/tarifs` — section#conditions « PAIEMENT ET ANNULATION Les conditions, sans petite » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_

### texte de contenu sous 13 px (ordinateur) (28)

- **texte de contenu sous 13 px (ordinateur)** — `/` — section#debut > div.hero-visuel:nth-of-type(3) > figure.media.hero-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#bilan > figure.media.bilan-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.cabinets-grille.fx-fini:nth-of-type(2) > article.cabinet:nth-of-type(1) > figure.media.cabinet-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.cabinets-grille.fx-fini:nth-of-type(2) > article.cabinet:nth-of-type(2) > figure.media.cabinet-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.conteneur.catherine-grille:nth-of-type(1) > div.catherine-photos:nth-of-type(1) > figure.media.catherine-radio:nth-of-type(2) > figcaption.media-legende « Au micro de France Bleu Azur » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.conteneur.avis-grille > div.avis-texte:nth-of-type(1) > figure.media.avis-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.cabinets-grille:nth-of-type(2) > article.cabinet:nth-of-type(1) > figure.media.cabinet-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 sansJs)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.cabinets-grille:nth-of-type(2) > article.cabinet:nth-of-type(2) > figure.media.cabinet-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 sansJs)_
- **texte de contenu sous 13 px (ordinateur)** — `/404` — section#debut > figure.media.introuvable-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1366×768 sansJs, 1920×1080 normal, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/consultation` — section#debut > div.ouv-bandeau-image:nth-of-type(2) > figure.media.ouv-bandeau-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/contact` — div.conteneur.horaires__grille > div.horaires__cadran:nth-of-type(1) > div.horaires__centre > span « HEURE DE PARIS » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/contact` — dl.horaires__semaine > div.horaires__jour.est-aujourdhui:nth-of-type(5) > dt > span.horaires__auj « · aujourd'hui » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/contact` — div.conteneur.acces-grille > article.acces-carte.acces-carte--photo:nth-of-type(3) > figure.media.acces-media > figcaption.media-legende « Un cabinet clair, au calme » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/presentation` — div.vignettes.fx-fini:nth-of-type(2) > div.vignette-cadre:nth-of-type(1) > figure.media.vignette > figcaption.media-legende « France Bleu Azur » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/presentation` — div.vignettes.fx-fini:nth-of-type(2) > div.vignette-cadre:nth-of-type(3) > figure.media.vignette > figcaption.media-legende « 100 % Mag, M6 » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/presentation` — div.vignettes.fx-fini:nth-of-type(2) > div.vignette-cadre:nth-of-type(4) > figure.media.vignette > figcaption.media-legende « Nutrition Infos » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/presentation` — div.vignettes.fx-fini:nth-of-type(2) > div.vignette-cadre:nth-of-type(5) > figure.media.vignette > figcaption.media-legende « L'Observateur de Monaco » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/presentation` — div.collab-vignettes.fx-fini:nth-of-type(1) > div.vignette-cadre:nth-of-type(1) > figure.media.vignette > figcaption.media-legende « Les Étoiles de Mougins, 2014 » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/presentation` — div.collab-vignettes.fx-fini:nth-of-type(1) > div.vignette-cadre:nth-of-type(2) > figure.media.vignette > figcaption.media-legende « Méridien Beach Plaza, Monaco » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/presentation` — div.vignettes:nth-of-type(2) > div.vignette-cadre:nth-of-type(1) > figure.media.vignette > figcaption.media-legende « France Bleu Azur » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 sansJs)_
- **texte de contenu sous 13 px (ordinateur)** — `/presentation` — div.vignettes:nth-of-type(2) > div.vignette-cadre:nth-of-type(3) > figure.media.vignette > figcaption.media-legende « 100 % Mag, M6 » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 sansJs)_
- **texte de contenu sous 13 px (ordinateur)** — `/presentation` — div.vignettes:nth-of-type(2) > div.vignette-cadre:nth-of-type(4) > figure.media.vignette > figcaption.media-legende « Nutrition Infos » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 sansJs)_
- **texte de contenu sous 13 px (ordinateur)** — `/presentation` — div.vignettes:nth-of-type(2) > div.vignette-cadre:nth-of-type(5) > figure.media.vignette > figcaption.media-legende « L'Observateur de Monaco » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 sansJs)_
- **texte de contenu sous 13 px (ordinateur)** — `/presentation` — div.collab-vignettes:nth-of-type(1) > div.vignette-cadre:nth-of-type(1) > figure.media.vignette > figcaption.media-legende « Les Étoiles de Mougins, 2014 » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 sansJs)_
- **texte de contenu sous 13 px (ordinateur)** — `/presentation` — div.collab-vignettes:nth-of-type(1) > div.vignette-cadre:nth-of-type(2) > figure.media.vignette > figcaption.media-legende « Méridien Beach Plaza, Monaco » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 sansJs)_
- … et 3 autres (rapport.json)

### typographie française (4)

- **typographie française** — `/contact` — div.ouv-carte-visuel:nth-of-type(2) > svg.cote > g.cote-visio:nth-of-type(3) > text — espace insécable manquante avant ou après « : » _(1366×768 normal)_
- **typographie française** — `/contact` — div#horaires-cannes > div.horaires__noter > ul > li:nth-of-type(1) « Vendredi 25 décembre : Noël, horaires à confirmer  » — espace insécable manquante avant ou après « : » _(1366×768 normal)_
- **typographie française** — `/contact` — div#horaires-cannes > div.horaires__noter > ul > li:nth-of-type(2) « Vendredi 1 janvier : Jour de l'an, horaires à conf » — espace insécable manquante avant ou après « : » _(1366×768 normal)_
- **typographie française** — `/tarifs` — section#consultations > div.conteneur > p.note.tarifs-note « Analyse corporelle seule : 12 €. Pourcentage de gr » — espace insécable manquante avant ou après « : » _(1366×768 normal)_

### rechargement au milieu de la page (1)

- **rechargement au milieu de la page** — `/contact` — écran différent à la même position après rechargement (5.7 %), voir comparaisons/rechargement-contact-*.png _(1366×768)_

### effet qui ne bouge pas au défilement (3)

- **effet qui ne bouge pas au défilement** — `/consultation` — svg — trace : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(1366×768 normal)_
- **effet qui ne bouge pas au défilement** — `/contact` — form.formulaire — formulaire : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(1366×768 normal, 390×844 normal)_
- **effet qui ne bouge pas au défilement** — `/tarifs` — div.calcul — calcul : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(1366×768 normal, 390×844 normal)_

## Non lancé

- **Safari (WebKit)** : WebKit ne peut pas s’installer ici : vérification à faire dans Safari sur le Mac (liste dans le rapport)

### À vérifier dans Safari sur le Mac (WebKit indisponible ici)

- Ouverture de chaque page : rien qui clignote, intro complète au premier chargement et au rechargement.
- Changement de page : le voile couvre l’écran, pas de page blanche ; retour arrière sans intro ni voile resté.
- Défilement : fluide (natif), en-tête qui se cache et revient sans clignoter, sections épinglées entières.
- Menu sur iPhone (mode Responsive de Safari) : ouverture, fermeture, page bloquée derrière.
- Polices, images, mention « Illustration générée », formulaires et barre fixe du bas.

## Repères

- Numéro de version des fichiers : ?v=1
- Journal v1 : 4 étape(s) notée(s), 29 min de travail pour 75 min de budget, 11 min d’attente de l’utilisateur.
- Audit standard : étapes lourdes sur /, /consultation, /contact, /presentation, /tarifs.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture / (1366×768) : 2736 ms depuis le premier octet
- Ouverture /consultation (1366×768) : 2544 ms depuis le premier octet
- Ouverture /contact (1366×768) : 2568 ms depuis le premier octet
- Ouverture /presentation (1366×768) : 2576 ms depuis le premier octet
- film de l'ouverture /presentation 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /tarifs (1366×768) : 2872 ms depuis le premier octet
- Ouverture / (390×844) : 2743 ms depuis le premier octet
- Ouverture /consultation (390×844) : 2580 ms depuis le premier octet
- Ouverture /contact (390×844) : 2554 ms depuis le premier octet
- Ouverture /presentation (390×844) : 2533 ms depuis le premier octet
- Ouverture /tarifs (390×844) : 2883 ms depuis le premier octet
- bords de l’écran /consultation 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Bords de l’écran : 481 images d’intro, 12 de voile et 134 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Tient dans l'écran / : aucune section épinglée ou plein écran.
- Tient dans l'écran /consultation : aucune section épinglée ou plein écran.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /presentation : aucune section épinglée ou plein écran.
- Tient dans l'écran /tarifs : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 0 % d'images lentes sur 428, tâche la plus longue 0 ms
- Fluidité /consultation 1366×768 (molette) : 0 % d'images lentes sur 331, tâche la plus longue 0 ms
- Fluidité /contact 1366×768 (molette) : 0 % d'images lentes sur 222, tâche la plus longue 0 ms
- Fluidité /presentation 1366×768 (molette) : 0 % d'images lentes sur 285, tâche la plus longue 0 ms
- Fluidité /tarifs 1366×768 (molette) : 0 % d'images lentes sur 324, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1418, tâche la plus longue 0 ms
- Fluidité /consultation 390×844 (doigt) : 0 % d'images lentes sur 1336, tâche la plus longue 0 ms
- Fluidité /contact 390×844 (doigt) : 0 % d'images lentes sur 1342, tâche la plus longue 0 ms
- Fluidité /presentation 390×844 (doigt) : 0 % d'images lentes sur 1341, tâche la plus longue 0 ms
- Fluidité /tarifs 390×844 (doigt) : 0 % d'images lentes sur 1337, tâche la plus longue 0 ms
- Vitesse / : 0.58 s de calcul au chargement (téléphone ralenti).
- Vitesse /consultation : 0.37 s de calcul au chargement (téléphone ralenti).
- Vitesse /contact : 0.41 s de calcul au chargement (téléphone ralenti).
- Vitesse /presentation : 0.29 s de calcul au chargement (téléphone ralenti).
- Vitesse /tarifs : 0.50 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --seulement=fichiers,mesures,parcours
```
