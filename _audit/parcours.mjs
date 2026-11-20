/* Parcours propres au projet Catherine Becker :
   - calculateur des packs (page Tarifs) : coût le plus bas recalculé ici, comparé à l'affichage, de 1 à 12 consultations ;
   - motif choisi depuis l'accueil (?motif=…) : la bonne carte est marquée sur la page Consultation ;
   - formulaire de contact prérempli par ?objet=cadeau. */
export default async function ({ contexte, attendrePret, attendre, BASE, R, T }) {
  const { ctx, page } = await contexte({ taille: T('390×844') });
  try {
    await page.goto(BASE + '/tarifs#packs', { waitUntil: 'load' });
    await attendrePret(page);
    const PACKS = [[12, 600], [5, 250], [3, 180]];
    const meilleur = (n) => { const m = [0]; for (let k = 1; k <= n; k++) { let b = m[k - 1] + 70; for (const [nb, p] of PACKS) if (k >= nb) b = Math.min(b, m[k - nb] + p); m[k] = b; } return m[n]; };
    const lire = () => page.evaluate(() => {
      const t = (s) => parseFloat(document.querySelector(s).textContent.replace(/[^\d]/g, ''));
      return { n: t('[data-calcul-n]'), unite: t('[data-calcul-unite]'), formule: t('[data-calcul-formule]'), eco: t('[data-calcul-eco]') };
    });
    for (let i = 0; i < 6; i++) await page.click('[data-calcul-moins]', { force: true }).catch(() => {});
    for (let n = 1; n <= 12; n++) {
      await attendre(80);
      const v = await lire();
      if (v.n !== n) { R.echec('calculateur des packs', `nombre affiché ${v.n} au lieu de ${n}`, { page: '/tarifs', taille: '390×844' }); break; }
      const attendu = meilleur(n);
      if (v.unite !== n * 70 || v.formule !== attendu || v.eco !== n * 70 - attendu) R.echec('calculateur des packs', `pour ${n} : ${v.unite}/${v.formule}/${v.eco} au lieu de ${n * 70}/${attendu}/${n * 70 - attendu}`, { page: '/tarifs', taille: '390×844' });
      if (n < 12) await page.click('[data-calcul-plus]');
    }

    await page.goto(BASE + '/consultation?motif=digestion#motif-digestion', { waitUntil: 'load' });
    await attendrePret(page);
    const marque = await page.evaluate(() => document.querySelector('[data-motif="digestion"]')?.classList.contains('est-choisi'));
    if (!marque) R.echec('motif choisi', 'la carte « Mieux digérer » n’est pas marquée après ?motif=digestion', { page: '/consultation', taille: '390×844' });

    await page.goto(BASE + '/contact?objet=cadeau#formulaire', { waitUntil: 'load' });
    await attendrePret(page);
    const objet = await page.evaluate(() => document.querySelector('#f-objet')?.value);
    if (objet !== 'cadeau') R.echec('formulaire prérempli', `objet « ${objet} » au lieu de « cadeau » après ?objet=cadeau`, { page: '/contact', taille: '390×844' });
  } finally { await ctx.close(); }
}
