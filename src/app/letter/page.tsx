/* eslint-disable react/no-unescaped-entities */
import { Container } from '@/components/Container'

export default function Letter() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          Bienvenue sur <strong>alexandralisabeth.com</strong> — ton futur QG
          d'écrivaine célèbre. 😉
        </h1>

        <div className="prose-zinc prose mt-8 dark:prose-invert">
          <p>
            Bon, déjà : <strong>joyeux anniversaire en retard</strong>. Je sais,
            je sais. Les dates et moi, c'est compliqué. Mais cette fois, ça me
            fait vraiment chier parce que c'est toi, et que justement, je
            pensais à ça bien avant ton anniversaire.
          </p>

          <p>
            Depuis le temps qu'on en parle — Suzy, Toi, tout le monde — qu'il
            faudrait "marketer tes livres sérieusement", augmenter ton audience
            autour de ton écriture. Je prends le truc en route et tu as sûrement
            beaucoup de choses en cours de ce côté-là. Dans tous les cas...
          </p>

          <p>
            <strong>
              J'ai acheté ce domaine et codé ce site vitrine comme point de
              départ.
            </strong>
          </p>

          <p>
            Pas pour me faire pardonner d'être un frère absent (enfin, peut-être
            un peu), mais surtout parce que depuis que tu m'as parlé de ta
            lassitude avec la chiro et de ton envie de vraiment passer à autre
            chose, avec l'idée de faire de l'écriture ton principal...
          </p>

          <p>
            Maintenant que t'as ta maison, ton espace pour écrire sérieusement,
            c'est peut-être le moment de faire une campagne marketing sérieuse
            sur tes livres.
          </p>

          <p>Le problème avec l'autoédition ? C'est deux jobs en un :</p>
          <ul>
            <li>
              <strong>Job 1</strong> : Écrire des bons livres (c'est ton truc,
              ce que t'aimes faire)
            </li>
            <li>
              <strong>Job 2</strong> : Marketing, distribution, Amazon, tout ce
              bordel (ça DEVRAIT PAS être ton job)
            </li>
          </ul>

          <h2>Voilà ce que je propose :</h2>

          <p>
            Mon cadeau, c'est simple : j'ai des idées. Des techniques concrètes
            pour vendre tes livres, des tests à faire pour te faire connaître
            comme autrice.
          </p>

          <p>
            C'est pas un scoop je suis débordé, mais souvent dans mon temps
            libre ou pour me changer les idées, j'ai envie de tester des trucs.
            Donc si je pense à une idée marketing que je connais, je la teste,
            et on voit ce qui marche.
          </p>

          <p>
            Clairement c'est pas un sprint, c'est un marathon. Mais il faut bien
            commencer à courir à un moment.
          </p>

          <h2>
            Si ça te dit, et pour pouvoir commencer efficacement, j'ai besoin de
            savoir où t'en es.
          </h2>

          <p>
            <strong>Sur Amazon et la visibilité :</strong>
          </p>
          <ol>
            <li>
              <strong>As-tu optimisé tes métadonnées Amazon ?</strong> (les
              mots-clés, les catégories, tout ce qu'il faut pour que
              l'algorithme montre ton livre aux bonnes personnes)
            </li>
            <li>
              <strong>C'est quoi tes stats mensuelles sur KDP ?</strong> (pages
              lues par mois, ventes, ce genre de trucs — j'ai besoin de voir la
              baseline)
            </li>
            <li>
              <strong>Est-ce que tu fais de la pub Amazon ?</strong> Si oui,
              quel budget par mois et c'est quoi ton ACOS (coût publicitaire par
              vente) ?
            </li>
          </ol>

          <p>
            <strong>Sur ta relation avec tes lecteurs :</strong>
          </p>
          <ol start={4}>
            <li>
              <strong>As-tu une liste email ?</strong> Si oui, combien d'abonnés
              ? (C'est l'atout qui change tout, si tu l'as pas, c'est priorité
              numéro un)
            </li>
            <li>
              <strong>Combien d'avis as-tu par livre sur Amazon ?</strong> (Le
              nombre exact pour Chronique des Premiers Hommes tome 1, 2, 3??...)
            </li>
            <li>
              <strong>As-tu une équipe ARC</strong> (des lecteurs qui reçoivent
              ton livre en avance et laissent des avis au lancement) ?
            </li>
            <li>
              <strong>Es-tu satisfaite de tes couvertures actuelles ?</strong>{' '}
              (Parce que ça compte BEAUCOUP pour les clics)
            </li>
          </ol>

          <p>
            <strong>Sur la suite :</strong>
          </p>
          <ol start={8}>
            <li>
              <strong>C'est quoi ton plan d'écriture ?</strong> (Prochain livre
              prévu ? quand ? Tu te vois avancer comment dans les 12-24
              prochains mois ?)
            </li>
          </ol>

          <hr />

          <h2>Ce qui se passe ensuite</h2>

          <p>
            À partir de tes réponses, <strong>je me débrouille.</strong>
          </p>

          <p>
            Toi, tu te concentres sur écrire la suite de la saga et prendre ton
            pied. Moi, je teste des choses pour faire en sorte que le monde
            découvre ce que tu écris.
          </p>

          <hr />

          <p>Maintenant, réponds-moi à ces questions et on y va. 🚀</p>

          <div className="not-prose mt-8 text-center">
            <a
              href={`mailto:ugo.lafosse@gmail.com?subject=${encodeURIComponent('Réponses à tes questions')}&body=${encodeURIComponent(`Salut !

Voici mes réponses à tes 8 questions :

**SUR AMAZON & VISIBILITÉ**

1. Métadonnées Amazon optimisées (mots-clés, catégories) ?
[Ta réponse]

2. Stats mensuelles KDP (pages lues, ventes) ?
[Ta réponse]

3. Pub Amazon (budget, ACOS) ?
[Ta réponse]

**SUR TA RELATION AVEC TES LECTEURS**

4. Liste email (nombre d'abonnés) ?
[Ta réponse]

5. Nombre d'avis par livre sur Amazon ?
[Ta réponse]

6. Équipe ARC en place ?
[Ta réponse]

7. Satisfaite de tes couvertures actuelles ?
[Ta réponse]

**SUR LA SUITE**

8. Plan d'écriture (prochains livres, timing) ?
[Ta réponse]

—
Alexandra`)}`}
              className="inline-flex items-center gap-2 rounded-lg bg-yellow-600 px-6 py-3 text-sm font-semibold text-white shadow-lg ring-1 ring-yellow-600/20 transition hover:bg-yellow-500 hover:shadow-xl dark:bg-yellow-500 dark:hover:bg-yellow-400"
            >
              Répondre maintenant
            </a>
          </div>

          <p className="mt-8">
            — Ton frère qui oublie les dates mais pas le plus important 😘
          </p>
        </div>
      </div>
    </Container>
  )
}
