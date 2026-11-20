# Rapport d’audit

Projet : `catherine-becker-maquette` · 20/11/2026 17:31:08 · 6 min · 2 page(s) · audit standard ciblé sur /,/consultation (étapes : fichiers, mesures, parcours, mouvement)

## Résumé

- Statut : **2 échec(s)**
- Passe : `20261120-162535-standard-cible-partiel` · version ?v=1
- Échecs : **2**
- À regarder : **8**
- Non lancé : **0**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), mesures (22), balayage (2), intro accélérable et passable (5), menu (1), clavier (2), liens et boutons (2), liens profonds (16), liens vers la page en cours (2), changements de hauteur (2), parcours du projet (1), mouvement (4), effets du plan (5), souris immobile (4)

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261120-155007-standard | standard | toutes | toutes | 59 | 58 | 1 | échecs |
| 20261120-161317-standard-partiel | standard | toutes | fichiers, mesures, parcours, mouvement | 9 | 21 | 0 | échecs |
| 20261120-161322-complet-partiel | complet | toutes | mesures, ecran | 6 | 18 | 0 | échecs |
| 20261120-162531-complet-cible-partiel | complet | /,/presentation,/tarifs | fichiers, mesures | 1 | 13 | 0 | échecs |
| **20261120-162535-standard-cible-partiel** (celle-ci) | standard | /,/consultation | fichiers, mesures, parcours, mouvement | 2 | 8 | 0 | échecs |

## Échecs

### intro pas accélérée par une touche (1)

- **intro pas accélérée par une touche** — `/` — fin 1527 ms après l'action _(1366×768 intro)_

### intro pas accélérée par la molette (1)

- **intro pas accélérée par la molette** — `/` — fin 1611 ms après l'action _(1366×768 intro)_

## À regarder

### « à compléter » visible (1)

- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### section sans visuel (7)

- **section sans visuel** — `/` — section#tarifs « TARIFS Des prix clairs, des formules qui suivent.  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 1366×768 normal, 1920×1080 normal, +5)_
- **section sans visuel** — `/` — section#motifs « POUR QUI ? Vous venez pour… Tout patient, adressé  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 320×568 normal, 390×844 sansJs, 390×844 sansWebgl, 1366×768 sansJs, 320×568 sansJs)_
- **section sans visuel** — `/` — section#avis « TÉMOIGNAGES Ce qu'en disent ses patients Je suis t » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **section sans visuel** — `/consultation` — section#motifs « LES MOTIFS Je viens pour… Choisissez ce qui vous a » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 390×844 normal, 768×1024 normal, 844×390 normal, 1366×768 normal, 390×844 sansJs, +5)_
- **section sans visuel** — `/consultation` — section#deroule « LE DÉROULÉ Trois étapes, dans cet ordre. 1 Bilan d » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 390×844 normal, 768×1024 normal, 844×390 normal, 1366×768 normal, 390×844 sansJs, +5)_
- **section sans visuel** — `/consultation` — section#rythme « LE RYTHME Combien de rendez-vous ? Tout dépend de  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 390×844 normal, 768×1024 normal, 844×390 normal, 1366×768 normal, 390×844 sansJs, +5)_
- **section sans visuel** — `/consultation` — section#modalites « OÙ ET COMMENT Quatre façons de consulter Au cabine » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 390×844 normal, 768×1024 normal, 844×390 normal, 1366×768 normal, 390×844 sansJs, +5)_

## Non lancé

Tout a été lancé.


## Repères

- Numéro de version des fichiers : ?v=1
- Journal v1 : 5 étape(s) notée(s), 37 min de travail pour 115 min de budget, 11 min d’attente de l’utilisateur.
- Audit standard : étapes lourdes sur /, /consultation.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --pages=/ --seulement=fichiers,parcours
```
