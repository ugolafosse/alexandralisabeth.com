/* eslint-disable react/no-unescaped-entities */
'use client'

import Image from 'next/image'
import { Container } from '@/components/Container'
import { Disclosure } from '@headlessui/react'

function ChevronDownIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 8 6" aria-hidden="true" {...props}>
      <path
        d="M1.75 1.75 4 4.25l2.25-2.5"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="currentColor"
      />
    </svg>
  )
}

const diagnosticQuestions = [
  {
    section: 'Amazon & Visibilité',
    questions: [
      {
        title: 'Est-ce que ton livre est facile à trouver sur Amazon ?',
        content: `Quand tu tapes "fantasy épique" ou ton nom, est-ce qu'il apparaît dans les premiers résultats ? Si non, c'est le premier problème à régler. Amazon, c'est pas magique : si personne te trouve, personne t'achète.`
      },
      {
        title: 'Est-ce que ton blurb Amazon (ta description du livre) donne envie ?',
        content: `Pas besoin d'un roman. Juste une accroche qui fait dire au lecteur : "J'veux savoir la suite." Si ton blurb ressemble à un résumé scolaire, y'a du boulot.`
      },
      {
        title: 'Est-ce que ta couverture fait pro ou fait "fait maison" ?',
        content: `Pas besoin de dire que si c'est moche, personne clique. Les lecteurs jugent un livre à sa couverture, et c'est comme ça.`
      }
    ]
  },
  {
    section: 'Relation avec Lecteurs',
    questions: [
      {
        title: `Est-ce que t'as une liste email ou une communauté ?`,
        content: `Si t'as pas au moins 50 personnes qui attendent ton prochain livre avec impatience, commence par ça. Les réseaux sociaux, c'est cool, mais une liste email, c'est de l'or.`
      },
      {
        title: `Est-ce que les gens qui lisent ton livre en parlent ?`,
        content: `Si personne laisse d'avis Amazon ou recommande ton livre à ses potes, c'est soit qu'ils l'ont pas aimé, soit qu'ils ont oublié ton existence 5 minutes après avoir fini. Les deux, c'est un problème.`
      },
      {
        title: `Est-ce que t'as une présence en ligne qui te ressemble ?`,
        content: `Un site web basique, un compte Instagram où tu partages un peu de ton univers... Les lecteurs veulent voir que t'existes, pas juste ton livre.`
      }
    ]
  },
  {
    section: 'Qualité & Produit',
    questions: [
      {
        title: `Est-ce que ton manuscrit a été relu/édité par quelqu'un qui sait ce qu'il fait ?`,
        content: `Pas ta meilleure amie qui trouve tout génial. Quelqu'un qui peut te dire : "Ça, c'est pas clair" ou "Ce chapitre traîne en longueur." Si non, y'a du travail.`
      },
      {
        title: `Est-ce que ton livre est disponible dans plusieurs formats (ebook, papier, audio) ?`,
        content: `Si t'es que sur Amazon en ebook, t'es en train de te tirer une balle dans le pied. Y'a des gens qui lisent que du papier, d'autres qui écoutent en voiture.`
      }
    ]
  },
  {
    section: 'Planification',
    questions: [
      {
        title: `Est-ce que t'as un plan pour sortir régulièrement du contenu (pas forcément des livres, mais des nouvelles, des posts, etc.) ?`,
        content: `Les auteurs qui percent, c'est ceux qui restent visibles. Si t'as sorti un livre y'a 2 ans et qu'on t'a plus vue depuis, les lecteurs t'ont oubliée.`
      }
    ]
  }
]

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
            <p className="font-semibold text-zinc-800 dark:text-zinc-100">
              Bienvenue sur ton site d'écrivaine, Alex.
            </p>

            <p className="mt-6">
              Voilà, c'est fait. T'as maintenant un coin du web qui est à toi, où tu peux montrer qui tu es, ce que tu fais, et surtout, pourquoi ton univers mérite qu'on s'y plonge.
            </p>

            <p className="mt-4">
              Mais bon, soyons honnêtes : ce site, c'est juste le début. Le vrai travail, c'est pas d'avoir un site qui brille. C'est de transformer cette vitrine en machine à attirer des lecteurs, à les garder, et à leur donner envie de revenir chercher tes prochaines histoires.
            </p>

            <p className="mt-4">
              Parce qu'écrire, c'est cool. Mais vendre tes livres ? Ça, c'est un autre sport.
            </p>

            <h2 className="mt-10 text-2xl font-bold text-zinc-800 dark:text-zinc-100">
              Alors, voilà le deal :
            </h2>

            <p className="mt-6">
              Je t'ai monté ce site pour que t'aies une base solide. Mais maintenant, faut qu'on creuse pour comprendre où t'en es vraiment avec tes livres. Parce qu'avant de te dire "fais ci, fais ça", faut savoir où sont les vrais problèmes.
            </p>

            <p className="mt-4">
              Et je sais ce que tu te dis : <em>"Ouais, mais j'ai déjà essayé plein de trucs, ça marche pas."</em>
            </p>

            <p className="mt-4">
              Eh ben justement. C'est probablement parce que t'as pas identifié LE truc qui bloque. Peut-être que ton blurb Amazon est nul. Peut-être que ta couverture fait amateur. Peut-être que personne sait que tu existes parce que t'as zéro visibilité sur les bons canaux.
            </p>

            <p className="mt-4">
              Bref, avant de foncer tête baissée, on va faire un diagnostic. Genre médical, mais pour ton business d'auteure.
            </p>
          </div>
        </div>

        {/* Diagnostic Questions */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100 mb-8">
            Diagnostic : Où est-ce que ça coince ?
          </h2>

          <p className="text-base text-zinc-600 dark:text-zinc-400 mb-8">
            Réponds à ces questions (dans ta tête ou sur un coin de table). Ça va nous donner une idée de ce qu'on doit bosser en priorité.
          </p>

          <div className="space-y-8">
            {diagnosticQuestions.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100 mb-4">
                  {section.section}
                </h3>
                <div className="space-y-3">
                  {section.questions.map((q, qIdx) => (
                    <Disclosure key={qIdx}>
                      {({ open }) => (
                        <div className="rounded-lg border border-zinc-200 dark:border-zinc-700/40">
                          <Disclosure.Button className="flex w-full items-center justify-between px-4 py-3 text-left hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                            <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                              {q.title}
                            </span>
                            <ChevronDownIcon
                              className={`h-5 w-5 text-zinc-500 transition-transform ${
                                open ? 'rotate-180' : ''
                              }`}
                            />
                          </Disclosure.Button>
                          <Disclosure.Panel className="px-4 pb-3 pt-2 text-sm text-zinc-600 dark:text-zinc-400 border-t border-zinc-200 dark:border-zinc-700/40">
                            {q.content}
                          </Disclosure.Panel>
                        </div>
                      )}
                    </Disclosure>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 prose prose-zinc dark:prose-invert max-w-none">
          <div className="text-base leading-7 text-zinc-600 dark:text-zinc-400">
            <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">
              Et maintenant ?
            </h2>

            <p className="mt-6">
              Maintenant, tu me réponds. Par mail, par message, peu importe. Tu me dis où t'en es avec ces questions, et on discute de ce qu'on peut faire concrètement pour que ton prochain livre se vende mieux que le précédent.
            </p>

            <p className="mt-4">
              Parce que franchement, t'as un talent pour raconter des histoires. Ce serait dommage que personne les lise à cause de détails techniques ou marketing que tu sais pas gérer (et c'est normal, c'est pas ton taff).
            </p>

            <p className="mt-4">
              Alors vas-y, fais-moi un retour. On verra ensemble comment transformer ce site en vrai outil pour ton succès.
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
