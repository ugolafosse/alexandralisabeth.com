/* eslint-disable react/no-unescaped-entities */
import { Container } from '@/components/Container'

export default function Letter() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          Joyeux anniversaire
        </h1>

        <div className="prose prose-zinc mt-8 dark:prose-invert">
          <p>Oui, je l'ai encore oublié. Et non, ça me fait pas juste "un peu" chier.</p>

          <p>
            Parce que cette fois, j'y pensais. Depuis des semaines. Depuis
            notre discussion où tu m'as parlé de ta lassitude avec la chiro,
            de ton envie de faire de l'écriture ton truc principal.
          </p>

          <p>Ça m'a pas lâché.</p>

          <p>
            Tu viens d'avoir ta maison. Ton espace pour écrire. C'est le
            moment. Alors j'ai acheté ce nom de domaine.
          </p>

          <p>
            Pas pour me faire pardonner. Pour te montrer que je suis sérieux.
          </p>

          <h2>La proposition</h2>

          <p>
            Depuis le temps qu'on en parle — toi, moi, Suzy — qu'il faudrait
            "vendre tes livres", faire du marketing, tout ça...
          </p>

          <p><strong>Voilà ce que je propose : on commence.</strong></p>

          <p>
            Mon cadeau, c'est simple : j'ai des idées. Ça fait un moment que
            j'y pense. Des trucs concrets, des quick wins, des tests à faire.
          </p>

          <p>Le problème avec l'autoédition ? C'est deux jobs en un :</p>

          <ul>
            <li>
              <strong>Job 1</strong> : Écrire des bons livres (c'est ton
              truc, ce que t'aimes faire)
            </li>
            <li>
              <strong>Job 2</strong> : Marketing, distribution, Amazon, tout
              ce bordel (ça DEVRAIT PAS être ton job)
            </li>
          </ul>

          <p>
            Alors dans mon temps libre, je vais tester des trucs. Pas un gros
            projet. Juste : je pense à une tactique, je la teste, on voit ce
            qui marche.
          </p>

          <p><em>C'est pas un sprint, c'est un marathon. Mais il faut bien commencer à courir.</em></p>

          <h2>Les questions</h2>

          <p>
            Mais pour pouvoir t'aider efficacement, j'ai besoin de savoir
            exactement où t'en es :
          </p>

          <p><strong>Sur Amazon et la visibilité :</strong></p>
          <ol>
            <li>As-tu optimisé tes métadonnées Amazon ? (les mots-clés, les catégories, tout ce bordel technique qui fait que l'algorithme montre ton livre aux bonnes personnes)</li>
            <li>C'est quoi tes stats mensuelles sur KDP ? (pages lues par mois, ventes, ce genre de trucs — j'ai besoin de voir la baseline)</li>
            <li>Est-ce que tu fais de la pub Amazon ? Si oui, quel budget par mois et c'est quoi ton ACOS (coût publicitaire par vente) ?</li>
          </ol>

          <p><strong>Sur ta relation avec tes lecteurs :</strong></p>
          <ol start={4}>
            <li>As-tu une liste email ? Si oui, combien d'abonnés ? (C'est l'asset qui change tout, si tu l'as pas, c'est priorité numéro un)</li>
            <li>Combien d'avis as-tu par livre sur Amazon ? (Le nombre exact pour Chronique des Premiers Hommes tome 1, 2, 3...)</li>
            <li>As-tu une équipe ARC (des lecteurs qui reçoivent ton livre en avance et laissent des avis au lancement) ?</li>
          </ol>

          <p><strong>Sur la suite :</strong></p>
          <ol start={7}>
            <li>Es-tu satisfaite de tes couvertures actuelles ? (Parce que ça compte BEAUCOUP pour les clics)</li>
            <li>C'est quoi ton plan d'écriture ? (Prochain livre prévu ? quand ? Tu te vois avancer comment dans les 12-24 prochains mois ?)</li>
          </ol>

          <h2>Ce qui se passe ensuite</h2>

          <p>À partir de tes réponses, je monte un plan d'action concret.</p>

          <p>
            Et ensuite, je teste et j'exécute. Toi, tu te concentres sur écrire
            la suite de la saga et prendre ton pied. Moi, je teste des choses
            pour faire en sorte que le monde découvre ce que tu écris.
          </p>

          <hr />

          <p>
            Maintenant, <a href="mailto:aelafosse@gmail.com">réponds-moi à ces questions</a> et on y va.
          </p>

          <p><em>— Ton frère qui oublie les dates mais pas le plus important</em></p>
        </div>
      </div>
    </Container>
  )
}
