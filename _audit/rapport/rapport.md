# Rapport d’audit

Projet : `catherine-becker-maquette` · 20/11/2026 17:53:57 · 19 min · 6 page(s) · audit standard

## Résumé

- Statut : **tout a tourné, aucun échec**
- Passe : `20261120-163459-standard` · version ?v=1
- Échecs : **0**
- À regarder : **24**
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

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261120-155007-standard | standard | toutes | toutes | 59 | 58 | 1 | échecs |
| 20261120-161317-standard-partiel | standard | toutes | fichiers, mesures, parcours, mouvement | 9 | 21 | 0 | échecs |
| 20261120-161322-complet-partiel | complet | toutes | mesures, ecran | 6 | 18 | 0 | échecs |
| 20261120-162531-complet-cible-partiel | complet | /,/presentation,/tarifs | fichiers, mesures | 1 | 13 | 0 | échecs |
| 20261120-162535-standard-cible-partiel | standard | /,/consultation | fichiers, mesures, parcours, mouvement | 2 | 8 | 0 | échecs |
| 20261120-163131-standard-cible-partiel | standard | / | fichiers, parcours | 0 | 1 | 0 | complet |
| 20261120-163345-complet-cible-partiel | complet | /tarifs | fichiers, mesures | 0 | 7 | 0 | complet |
| **20261120-163459-standard** (celle-ci) | standard | toutes | toutes | 0 | 24 | 1 | complet |

## Échecs

Aucun.

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
- **section sans visuel** — `/tarifs` — section#consultations « CONSULTATIONS À l'unité Consultation diététique 70 » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1920×1080 normal, +5)_
- **section sans visuel** — `/tarifs` — section#packs « PACKS Plus de rendez-vous, un prix qui baisse. Les » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1920×1080 normal, +5)_
- **section sans visuel** — `/tarifs` — section#en-ligne « À DISTANCE En ligne, partout en France. Coaching e » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1920×1080 normal, +5)_
- **section sans visuel** — `/tarifs` — section#remboursement « REMBOURSEMENT Votre mutuelle peut aider. Les consu » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1920×1080 normal, +5)_
- **section sans visuel** — `/tarifs` — section#conditions « PAIEMENT ET ANNULATION Les conditions, sans petite » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1920×1080 normal, +5)_

### texte de contenu sous 13 px (ordinateur) (1)

- **texte de contenu sous 13 px (ordinateur)** — `/tarifs` — section#cadeau > div.conteneur.cadeau-grille > div.carte-cadeau:nth-of-type(1) > p.carte-cadeau-valeur:nth-of-type(2) « VALEUR AU CHOIX » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_

### rechargement au milieu de la page (1)

- **rechargement au milieu de la page** — `/contact` — écran différent à la même position après rechargement (5.7 %), voir comparaisons/rechargement-contact-*.png _(1366×768)_

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
- Journal v1 : 5 étape(s) notée(s), 37 min de travail pour 115 min de budget, 11 min d’attente de l’utilisateur.
- Audit standard : étapes lourdes sur /, /consultation, /contact, /presentation, /tarifs.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture / (1366×768) : 2687 ms depuis le premier octet
- Ouverture /consultation (1366×768) : 2565 ms depuis le premier octet
- Ouverture /contact (1366×768) : 2581 ms depuis le premier octet
- Ouverture /presentation (1366×768) : 2627 ms depuis le premier octet
- film de l'ouverture /presentation 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /tarifs (1366×768) : 2874 ms depuis le premier octet
- Ouverture / (390×844) : 2648 ms depuis le premier octet
- film de l'ouverture / 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /consultation (390×844) : 2531 ms depuis le premier octet
- Ouverture /contact (390×844) : 2563 ms depuis le premier octet
- Ouverture /presentation (390×844) : 2644 ms depuis le premier octet
- Ouverture /tarifs (390×844) : 2882 ms depuis le premier octet
- film de l'ouverture /tarifs 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- bords de l’écran / 1920×1080 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Bords de l’écran : 448 images d’intro, 9 de voile et 134 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Tient dans l'écran / : aucune section épinglée ou plein écran.
- Tient dans l'écran /consultation : aucune section épinglée ou plein écran.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /presentation : aucune section épinglée ou plein écran.
- Tient dans l'écran /tarifs : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 1 % d'images lentes sur 427, tâche la plus longue 87 ms
- Fluidité /consultation 1366×768 (molette) : 0 % d'images lentes sur 385, tâche la plus longue 0 ms
- Fluidité /contact 1366×768 (molette) : 0 % d'images lentes sur 232, tâche la plus longue 0 ms
- Fluidité /presentation 1366×768 (molette) : 0 % d'images lentes sur 287, tâche la plus longue 0 ms
- Fluidité /tarifs 1366×768 (molette) : 0 % d'images lentes sur 329, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1422, tâche la plus longue 0 ms
- Fluidité /consultation 390×844 (doigt) : 0 % d'images lentes sur 1347, tâche la plus longue 0 ms
- Fluidité /contact 390×844 (doigt) : 0 % d'images lentes sur 1345, tâche la plus longue 0 ms
- Fluidité /presentation 390×844 (doigt) : 0 % d'images lentes sur 1341, tâche la plus longue 0 ms
- Fluidité /tarifs 390×844 (doigt) : 0 % d'images lentes sur 1336, tâche la plus longue 0 ms
- Vitesse / : 0.61 s de calcul au chargement (téléphone ralenti).
- Vitesse /consultation : 0.41 s de calcul au chargement (téléphone ralenti).
- Vitesse /contact : 0.24 s de calcul au chargement (téléphone ralenti).
- Vitesse /presentation : 0.29 s de calcul au chargement (téléphone ralenti).
- Vitesse /tarifs : 0.31 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`
