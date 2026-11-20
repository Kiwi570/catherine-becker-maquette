# Catherine Becker : maquette du site

Maquette de présentation du futur site de Catherine Becker, diététicienne nutritionniste à Cannes et à Nice.
Direction artistique « L'assiette du marché » : lin, olive et tomate, titres en Young Serif, texte en Outfit, et l'assiette compartimentée en inox de sa box qui se remplit au fil du site.

Adresse en ligne prévue : https://catherine-becker-maquette.vercel.app

## Pages (v1)

| Page | Ouverture | Contenu |
|---|---|---|
| Accueil `/` | Grande photo du marché et assiette dessinée (l'intro la remplit) | Motifs, méthode en 3 temps, bilan, deux cabinets et la visio, tarifs, qui vous reçoit, avis, rendez-vous |
| Consultation `/consultation` | Grand titre puis bandeau photo | Motifs détaillés, déroulé, bilan et bio-impédancemétrie, préparer sa visite, rythme du suivi, quatre façons de consulter, courrier au médecin |
| Tarifs `/tarifs` | « 70 € » en très grand, agrumes | Consultations, packs et calculateur, à domicile, en ligne, remboursement et réseaux, paiement et annulation, bon cadeau |
| Présentation `/presentation` | Portrait réel en arche, nom en grand | Parcours, le métier, sept engagements, médias, collaborations, réseaux |
| Cabinets et contact `/contact` | Carte dessinée de la côte | Horaires avec cadran et statut à l'heure de Paris, accès, formulaire simulé, coordonnées |
| 404 | Assiette vide, un petit pois | « Cette page n'est pas au menu » |

Pages du site actuel non reprises en v1 (disponibles en v2) : Coaching en ligne, Pros, Blog.

## Informations à fournir par le client (à compléter)

- **Mentions légales** : éditeur (nom, adresse, SIRET), directeur de la publication, hébergeur : Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis (adresse donnée par la politique de confidentialité de Vercel, vérifiée le 20 novembre 2026).
- **Politique de confidentialité** (RGPD) : usage des données du formulaire de contact, durée de conservation, droits d'accès.
- **CGV** : le site actuel en a ; à reprendre.
- **Assurance responsabilité civile professionnelle**, si elle souhaite l'afficher.
- **Crédits des illustrations générées** : 9 images créées avec Grok (marquées « Illustration générée » sur le site). Cette mention reste sur le site final.

### Retiré ou remplacé faute d'information

- **Horaires des jours fériés** et **congés** : inconnus. Les jours fériés, aucun statut n'est affiché (« Jour férié : renseignez-vous au secrétariat ») ; la liste « À noter » les signale « horaires à confirmer ». Page Cabinets et contact, accueil.
- **Samedi à Cannes** : « ouverture exceptionnelle » sans horaires : mentionné en texte, sans statut.
- **Témoignages** : seuls les extraits visibles sur le site actuel sont repris (Virginie, Aurélie, Alexia, Estelle). Les textes complets sont à fournir. Le passage de Virginie sur le poids perdu a été retiré (pas de promesse de résultat).
- **Logos des références** (Géant, Sodexo, Quitoque…) : remplacés par les noms des médias en texte ; logos en bonne qualité à fournir si elle les veut.
- **Photos** : les photos de plats et de légumes du site actuel viennent de banques d'images ; elles sont remplacées par des illustrations générées. Des photos réelles du cabinet de Nice et de celui de Cannes, de la box du coaching en ligne et des ateliers seraient précieuses.

### Incohérences du site actuel, à trancher

- Page Contact : « du lundi au samedi 8 h-20 h », alors que les cabinets ne consultent que certains jours (repris ici : les horaires de la page Les cabinets).
- Le prix du coaching en ligne n'apparaît pas sur sa page (59 € sur la page Tarifs).
- La liste des mutuelles Santéclair date de janvier 2017.
- La téléconsultation est indiquée « valable 1 an » sur la page Tarifs.

## Ce qui est simulé (à retirer ou brancher à la mise en ligne)

- `noindex` : balise robots dans `source/gabarits/commun.mjs` et en-tête `X-Robots-Tag` dans `vercel.json`.
- Formulaire de contact : simulé, rien n'est envoyé (à brancher sur un service d'envoi).
- Calculateur des packs : indicatif, d'après les tarifs affichés.
- Mentions « à compléter » du pied de page et du formulaire.
- À garder : la mention « Illustration générée » sur les images créées par IA.

La prise de rendez-vous renvoie vers la vraie page Doctolib de Catherine Becker.

## Mettre à jour

Les textes et les données sont dans `donnees/` (un fichier par sujet : `textes/fr.json`, `tarifs.json`, `horaires.json`, `motifs.json`…). Les pages se génèrent avec `node outils/generer.mjs` ; ne jamais modifier les fichiers `.html` à la main.
Horaires : `donnees/horaires.json` (semaine type, jours fériés, exceptions à ajouter pour les congés).
