/* eslint-disable react/no-unescaped-entities */
import { Container } from '@/components/Container'

export default function Letter() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          Bienvenue sur ton site d'écrivaine !
        </h1>

        <div className="prose prose-zinc mt-8 dark:prose-invert">
          <p>
            Bon, déjà : <strong>joyeux anniversaire en retard</strong>. Je sais, je sais. Les dates et moi, c'est compliqué. Mais cette fois, ça me fait vraiment chier parce que c'est toi, et que justement, je pensais à toi bien avant ton anniversaire.
          </p>

          <p>
            La preuve ? <strong>J'ai acheté ce nom de domaine et codé ce site vitrine simple.</strong>
          </p>

          <p>
            Bienvenue sur <strong>alexandralisabeth.com</strong> — ton futur QG d'écrivaine reconnue.
          </p>

          <p>
            Pas pour me faire pardonner (enfin, peut-être un peu), mais surtout parce que depuis notre discussion où tu m'as parlé de ta lassitude avec la chiro et de ton envie de vraiment passer à autre chose, de faire de l'écriture ton principal... et Maintenant que t'as ta maison, ton espace pour écrire sérieusement, c'est peut-être le moment de faire une campagne marketing sérieuse sur tes livres.
          </p>

          <h2>La proposition</h2>

          <p>
            Depuis le temps qu'on en parle — toi, moi, Suzy — qu'il faudrait "vendre tes livres", faire du marketing, tout ça...
          </p>

          <p>
            Voilà ce que je propose : <strong>on commence.</strong>
          </p>

          <p>
            Mon cadeau, c'est simple : j'ai des idées. Ça fait un moment que j'y pense. Des trucs concrets, des quick wins, des tests à faire.
          </p>

          <p>Le problème avec l'autoédition ? C'est deux jobs en un :</p>
          <ul>
            <li><strong>Job 1</strong> : Écrire des bons livres (c'est ton truc, ce que t'aimes faire)</li>
            <li><strong>Job 2</strong> : Marketing, distribution, Amazon, tout ce bordel (ça DEVRAIT PAS être ton job)</li>
          </ul>

          <p>
            Alors dans mon temps libre, je vais tester des trucs. Pas un gros projet. Juste : je pense à une tactique, je la teste, on voit ce qui marche.
          </p>

          <p>
            C'est pas un sprint, c'est un marathon. Mais il faut bien commencer à courir.
          </p>

          <h2>Mais pour pouvoir t'aider efficacement, j'ai besoin de savoir exactement où t'en es.</h2>

          <p><strong>Sur Amazon et la visibilité :</strong></p>
          <ol>
            <li><strong>As-tu optimisé tes métadonnées Amazon ?</strong> (les mots-clés, les catégories, tout ce bordel technique qui fait que l'algorithme montre ton livre aux bonnes personnes)</li>
            <li><strong>C'est quoi tes stats mensuelles sur KDP ?</strong> (pages lues par mois, ventes, ce genre de trucs — j'ai besoin de voir la baseline)</li>
            <li><strong>Est-ce que tu fais de la pub Amazon ?</strong> Si oui, quel budget par mois et c'est quoi ton ACOS (coût publicitaire par vente) ?</li>
          </ol>

          <p><strong>Sur ta relation avec tes lecteurs :</strong></p>
          <ol start={4}>
            <li><strong>As-tu une liste email ?</strong> Si oui, combien d'abonnés ? (C'est l'asset qui change tout, si tu l'as pas, c'est priorité numéro un)</li>
            <li><strong>Combien d'avis as-tu par livre sur Amazon ?</strong> (Le nombre exact pour Chronique des Premiers Hommes tome 1, 2, 3...)</li>
            <li><strong>As-tu une équipe ARC</strong> (des lecteurs qui reçoivent ton livre en avance et laissent des avis au lancement) ?</li>
            <li><strong>Es-tu satisfaite de tes couvertures actuelles ?</strong> (Parce que ça compte BEAUCOUP pour les clics)</li>
          </ol>

          <p><strong>Sur la suite :</strong></p>
          <ol start={8}>
            <li><strong>C'est quoi ton plan d'écriture ?</strong> (Prochain livre prévu ? quand ? Tu te vois avancer comment dans les 12-24 prochains mois ?)</li>
          </ol>

          <hr />

          <h2>Ce qui se passe ensuite</h2>

          <p>
            À partir de tes réponses, <strong>je monte un plan d'action concret.</strong>
          </p>

          <p>
            Et ensuite, <strong>je teste et j'exécute.</strong> Toi, tu te concentres sur écrire la suite de la saga et prendre ton pied. Moi, je teste des choses pour faire en sorte que le monde découvre ce que tu écris.
          </p>

          <hr />

          <h2>Pour finir</h2>

          <p>
            Bienvenue sur <strong>alexandralisabeth.com</strong> — ton futur QG d'écrivaine reconnue.
          </p>

          <p>
            Maintenant, réponds-moi à ces questions et on y va. 🚀
          </p>

          <p>
            — Ton frère qui oublie les dates mais pas le plus important 😘
          </p>
        </div>
      </div>
    </Container>
  )
}
