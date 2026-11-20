# Rapport d’audit

Projet : `catherine-becker-maquette` · 20/11/2026 17:20:21 · 7 min · 6 page(s) · audit complet (étapes : mesures, ecran)

## Résumé

- Statut : **6 échec(s)**
- Passe : `20261120-161322-complet-partiel` · version ?v=1
- Échecs : **6**
- À regarder : **18**
- Non lancé : **0**
- Contrôles passés : mesures (234), balayage (5)

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261120-155007-standard | standard | toutes | toutes | 59 | 58 | 1 | échecs |
| **20261120-161322-complet-partiel** (celle-ci) | complet | toutes | mesures, ecran | 6 | 18 | 0 | échecs |

## Échecs

### premier écran : bouton principal hors de l’écran (1)

- **premier écran : bouton principal hors de l’écran** — `/` — section#debut > div.hero-texte:nth-of-type(2) > p.hero-actions:nth-of-type(3) > a.bouton:nth-of-type(1) « Prendre rendez-vous (Doctolib, nouvel onglet) » _(1000×560 normal, 1000×560 sansJs, 1000×560 sansWebgl)_

### premier écran : information clé hors de l’écran (3)

- **premier écran : information clé hors de l’écran** — `/` — section#debut > div.hero-texte:nth-of-type(2) > p.hero-info:nth-of-type(4) « Consultation 70 € · sur rendez-vous » _(1000×560 normal, 1000×560 sansJs, 1000×560 sansWebgl)_
- **premier écran : information clé hors de l’écran** — `/presentation` — section#debut > div.ouv-portrait-texte:nth-of-type(1) > p.info-cle:nth-of-type(4) « Enregistrée à l'ARS · ADELI 069500676 · RPPS 10008 » _(844×390 sansJs)_
- **premier écran : information clé hors de l’écran** — `/tarifs` — section#debut > div.ouv-prix-texte > p.ouv-actions:nth-of-type(3) > span.info-cle « À domicile : +15 € · Analyse corporelle incluse » _(1000×560 normal, 1000×560 sansJs, 1000×560 sansWebgl)_

### contraste insuffisant (2)

- **contraste insuffisant** — `/` — div.methode-texte:nth-of-type(1) > ol.etapes > li.etape:nth-of-type(3) > span.etape-n « 3 » — 3.51:1 (minimum 4.5:1) _(1000×560 sansWebgl)_
- **contraste insuffisant** — `/` — div.methode-texte:nth-of-type(1) > ol.etapes > li.etape:nth-of-type(3) > span.etape-n « 3 » — 2.51:1 (minimum 4.5:1) _(1920×1080 sansWebgl)_

## À regarder

### section sans visuel (17)

- **section sans visuel** — `/` — section#motifs « POUR QUI ? Vous venez pour… Tout patient, adressé  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 375×667 normal, 320×568 normal, 320×568 sansJs, 320×568 sansWebgl, 375×667 sansJs, +13)_
- **section sans visuel** — `/` — section#tarifs « TARIFS Des prix clairs, des formules qui suivent.  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 375×667 normal, 320×568 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/` — section#avis « TÉMOIGNAGES Ce qu'en disent ses patients Je suis t » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 375×667 normal, 320×568 normal, 844×390 normal, 320×568 sansJs, 320×568 sansWebgl, +6)_
- **section sans visuel** — `/consultation` — section#motifs « LES MOTIFS Je viens pour… Choisissez ce qui vous a » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(375×667 normal, 320×568 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/consultation` — section#deroule « LE DÉROULÉ Trois étapes, dans cet ordre. 1 Bilan d » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(375×667 normal, 320×568 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/consultation` — section#rythme « LE RYTHME Combien de rendez-vous ? Tout dépend de  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(375×667 normal, 320×568 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/consultation` — section#modalites « OÙ ET COMMENT Quatre façons de consulter Au cabine » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(375×667 normal, 320×568 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/contact` — section#formulaire « ÉCRIRE Une question ? Écrivez-nous. Pour prendre r » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/contact` — section#cabinets « HORAIRES Quand venir au cabinet Consultations sans » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 sansJs, 375×667 sansJs, 390×844 sansJs, 844×390 sansJs, 768×1024 sansJs, 1024×768 sansJs, +7)_
- **section sans visuel** — `/presentation` — section#parcours « PARCOURS De l'hôpital au cabinet. Formation BTS Di » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 1024×768 normal, 768×1024 normal, +33)_
- **section sans visuel** — `/presentation` — section#engagements « SES ENGAGEMENTS Sept engagements, aucun miracle. U » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 1024×768 normal, 768×1024 normal, +33)_
- **section sans visuel** — `/presentation` — section#reseaux « RÉSEAUX Elle travaille en réseau Partenaire des ré » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 1024×768 normal, 768×1024 normal, +33)_
- **section sans visuel** — `/tarifs` — section#consultations « CONSULTATIONS À l'unité Consultation diététique 70 » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/tarifs` — section#packs « PACKS Plus de rendez-vous, un prix qui baisse. Les » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/tarifs` — section#en-ligne « À DISTANCE En ligne, partout en France. Coaching e » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/tarifs` — section#remboursement « REMBOURSEMENT Votre mutuelle peut aider. Les consu » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/tarifs` — section#conditions « PAIEMENT ET ANNULATION Les conditions, sans petite » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_

### texte de contenu sous 13 px (ordinateur) (1)

- **texte de contenu sous 13 px (ordinateur)** — `/tarifs` — section#cadeau > div.conteneur.cadeau-grille > div.carte-cadeau:nth-of-type(1) > p.carte-cadeau-valeur:nth-of-type(2) « VALEUR AU CHOIX » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_

## Non lancé

Tout a été lancé.


## Repères

- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Tient dans l'écran / : aucune section épinglée ou plein écran.
- Tient dans l'écran /consultation : aucune section épinglée ou plein écran.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /presentation : aucune section épinglée ou plein écran.
- Tient dans l'écran /tarifs : aucune section épinglée ou plein écran.

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --complet --pages=/,/presentation,/tarifs --seulement=fichiers,mesures
```
