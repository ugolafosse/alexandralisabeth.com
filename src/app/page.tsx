/* eslint-disable react/no-unescaped-entities */
'use client'

import { Container } from '@/components/Container'

export default function Home() {
  return (
    <>
      <Container className="mt-16 sm:mt-32">
        {/* Hero Section */}
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Alexandra Lisabeth
          </h1>
          <p className="mt-6 text-xl text-zinc-600 dark:text-zinc-400">
            Auteure de Fantasy Épique
          </p>
        </div>

        {/* Welcome Letter */}
        <div className="mt-16 prose prose-zinc dark:prose-invert max-w-none">
          <div className="text-base leading-7 text-zinc-600 dark:text-zinc-400">
            <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">
              Bienvenue sur ton site d'écrivaine, Alex
            </h2>

            <p className="mt-6">
              Bon, déjà : joyeux anniversaire en retard. Je sais, je sais. Les dates et moi, c'est compliqué. Mais cette fois, ça me fait vraiment chier parce que c'est toi, et que justement, je pensais à toi bien avant ton anniversaire.
            </p>

            <p className="mt-4">
              La preuve ? J'ai acheté ce nom de domaine.
            </p>

            <p className="mt-4">
              Pas pour me faire pardonner (enfin, peut-être un peu), mais surtout parce que depuis notre discussion où tu m'as parlé de ta lassitude avec la chiro et de ton envie de vraiment passer à autre chose, de faire de l'écriture ton truc principal... ça m'a pas lâché.
            </p>

            <p className="mt-4">
              Maintenant que t'as ta maison, ton espace pour écrire sérieusement, t'as plus besoin de juste "écrire sur le côté". T'as besoin d'une stratégie qui va avec. Et du support qui va avec.
            </p>

            <p className="mt-4">
              Alors voilà le deal que je te propose.
            </p>

            <h2 className="mt-10 text-2xl font-bold text-zinc-800 dark:text-zinc-100">
              Ce que je veux faire (et pourquoi)
            </h2>

            <p className="mt-6">
              Toi, tu écris. Moi, je m'occupe de vendre tes livres.
            </p>

            <p className="mt-4">
              Pas parce que je suis charitable (quoique, t'es ma sœur). Mais parce que je crois sincèrement que tu peux devenir une écrivaine reconnue. Et que pour ça, il faut pas juste écrire des bons bouquins — il faut que les gens les trouvent.
            </p>

            <p className="mt-4">
              Et ça, la distribution, le marketing, la stratégie Amazon, les communautés de lecteurs, toute cette mécanique... c'est pas ton job. C'est le mien.
            </p>

            <p className="mt-4">
              Dans mon temps libre, je vais tester des trucs, optimiser ta présence, construire ton infrastructure de vente. Tu gardes le contrôle créatif total, évidemment. Mais tout ce qui est "faire en sorte que les lecteurs découvrent tes livres"? Je prends.
            </p>

            <p className="mt-4">
              Mais pour pouvoir t'aider efficacement, j'ai besoin de savoir exactement où t'en es.
            </p>

            <h2 className="mt-10 text-2xl font-bold text-zinc-800 dark:text-zinc-100">
              Les questions (réponds-moi honnêtement, y'a pas de mauvaises réponses)
            </h2>

            <div className="mt-6">
              <p className="font-semibold text-zinc-800 dark:text-zinc-100 mt-6">
                Sur Amazon et la visibilité :
              </p>

              <ol className="mt-4 space-y-4 list-decimal list-inside">
                <li className="text-zinc-600 dark:text-zinc-400">
                  As-tu optimisé tes métadonnées Amazon ? (les mots-clés, les catégories, tout ce bordel technique qui fait que l'algorithme montre ton livre aux bonnes personnes)
                </li>
                <li className="text-zinc-600 dark:text-zinc-400">
                  C'est quoi tes stats mensuelles sur KDP ? (pages lues par mois, ventes, ce genre de trucs — j'ai besoin de voir la baseline)
                </li>
                <li className="text-zinc-600 dark:text-zinc-400">
                  Est-ce que tu fais de la pub Amazon ? Si oui, quel budget par mois et c'est quoi ton ACOS (coût publicitaire par vente) ?
                </li>
              </ol>

              <p className="font-semibold text-zinc-800 dark:text-zinc-100 mt-8">
                Sur ta relation avec tes lecteurs :
              </p>

              <ol className="mt-4 space-y-4 list-decimal list-inside" start={4}>
                <li className="text-zinc-600 dark:text-zinc-400">
                  As-tu une liste email ? Si oui, combien d'abonnés ? (C'est THE asset qui change tout, si tu l'as pas, c'est priorité numéro un)
                </li>
                <li className="text-zinc-600 dark:text-zinc-400">
                  Combien d'avis as-tu par livre sur Amazon ? (Le nombre exact pour Chronique des Premiers Hommes tome 1, 2, 3...)
                </li>
                <li className="text-zinc-600 dark:text-zinc-400">
                  As-tu une équipe ARC (des lecteurs qui reçoivent ton livre en avance et laissent des avis au lancement) ?
                </li>
              </ol>

              <p className="font-semibold text-zinc-800 dark:text-zinc-100 mt-8">
                Sur la qualité et le produit :
              </p>

              <ol className="mt-4 space-y-4 list-decimal list-inside" start={7}>
                <li className="text-zinc-600 dark:text-zinc-400">
                  Tes livres ont été beta-lus ou édités professionnellement ? (Je veux savoir si le produit est solide ou s'il y a des ajustements à faire)
                </li>
                <li className="text-zinc-600 dark:text-zinc-400">
                  Es-tu satisfaite de tes couvertures actuelles ? (Parce que ça compte BEAUCOUP pour les clics)
                </li>
              </ol>

              <p className="font-semibold text-zinc-800 dark:text-zinc-100 mt-8">
                Sur la suite :
              </p>

              <ol className="mt-4 space-y-4 list-decimal list-inside" start={9}>
                <li className="text-zinc-600 dark:text-zinc-400">
                  C'est quoi ton plan d'écriture ? (Prochain livre prévu quand ? Tu veux sortir combien de livres dans les 12-24 prochains mois ?)
                </li>
              </ol>
            </div>

            <h2 className="mt-10 text-2xl font-bold text-zinc-800 dark:text-zinc-100">
              Ce qui se passe ensuite
            </h2>

            <p className="mt-6">
              Tu me réponds à ces questions (tranquille, prends ton temps, mais réponds quand même).
            </p>

            <p className="mt-4">
              À partir de tes réponses, je te monte un plan d'action concret. Pas des idées vagues, des trucs actionnables avec un ordre de priorité.
            </p>

            <p className="mt-4">
              Et ensuite, je teste et j'exécute. Toi, tu te concentres sur écrire la suite de la saga et devenir encore meilleure dans ton craft. Moi, je fais en sorte que le monde découvre ce que tu crées.
            </p>

            <h2 className="mt-10 text-2xl font-bold text-zinc-800 dark:text-zinc-100">
              Pour finir
            </h2>

            <p className="mt-6">
              T'as le talent. T'as les livres. T'as maintenant la maison et l'espace pour écrire sérieusement.
            </p>

            <p className="mt-4">
              Ce qui te manque, c'est juste quelqu'un qui s'occupe de la partie business pendant que tu fais ce que tu fais de mieux.
            </p>

            <p className="mt-4">
              Alors voilà, c'est moi. Et ce site, c'est le début.
            </p>

            <p className="mt-4">
              Bienvenue sur alexandralisabeth.com — ton futur QG d'écrivaine reconnue.
            </p>

            <p className="mt-4">
              Maintenant, réponds-moi à ces questions et on y va. 🚀
            </p>

            <p className="mt-6 font-semibold text-zinc-800 dark:text-zinc-100">
              — Ton frère qui oublie les dates mais pas les projets importants
            </p>
          </div>
        </div>
      </Container>
    </>
  )
}
