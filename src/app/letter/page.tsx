/* eslint-disable react/no-unescaped-entities */
'use client'

import { Container } from '@/components/Container'
import Link from 'next/link'

function EmailButton({ className = '' }: { className?: string }) {
  const emailSubject = "Réponses à tes questions"
  const emailBody = `Salut !

Voici mes réponses à tes 8 questions :

**AMAZON & VISIBILITÉ**

1. Métadonnées Amazon optimisées (mots-clés, catégories) ?
[Ta réponse]

2. Stats mensuelles KDP (pages lues, ventes) ?
[Ta réponse]

3. Pub Amazon (budget, ACOS) ?
[Ta réponse]

**RELATION LECTEURS**

4. Liste email (nombre d'abonnés) ?
[Ta réponse]

5. Nombre d'avis par livre ?
[Ta réponse]

6. Équipe ARC en place ?
[Ta réponse]

**QUALITÉ & SUITE**

7. Satisfaite de tes couvertures ?
[Ta réponse]

8. Plan d'écriture (prochains livres, timing) ?
[Ta réponse]

—
Alexandra`

  return (
    <a
      href={`mailto:aelafosse@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`}
      className={`inline-flex items-center gap-2 rounded-lg bg-teal-600 px-6 py-3 text-sm font-semibold text-white shadow-lg ring-1 ring-teal-600/20 transition hover:bg-teal-500 hover:shadow-xl dark:bg-teal-500 dark:hover:bg-teal-400 ${className}`}
    >
      Répondre maintenant
    </a>
  )
}

function QuestionCard({
  title,
  questions,
}: {
  title: string
  questions: { q: string; detail?: string }[]
}) {
  return (
    <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-zinc-700 dark:bg-zinc-800/50">
      <h3 className="mb-4 text-lg font-semibold text-zinc-800 dark:text-zinc-100">
        {title}
      </h3>
      <ol className="space-y-3">
        {questions.map((q, i) => (
          <li
            key={i}
            className="text-sm text-zinc-600 dark:text-zinc-400"
            style={{ listStyleType: 'decimal', marginLeft: '1.25rem' }}
          >
            <span className="font-medium">{q.q}</span>
            {q.detail && (
              <span className="ml-1 text-zinc-500 dark:text-zinc-500">
                {q.detail}
              </span>
            )}
          </li>
        ))}
      </ol>
    </div>
  )
}

export default function Letter() {
  return (
    <Container className="mt-16 sm:mt-32">
      {/* Hero */}
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          Joyeux anniversaire
        </h1>
        <div className="mt-6">
          <EmailButton />
        </div>
      </div>

      {/* Letter Content */}
      <div className="prose-zinc prose mt-16 max-w-none dark:prose-invert">
        <div className="text-base leading-7 text-zinc-600 dark:text-zinc-400">
          {/* Section 1: L'anniversaire */}
          <div className="space-y-4">
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

            <p className="font-medium text-zinc-800 dark:text-zinc-100">
              Pas pour me faire pardonner. Pour te montrer que je suis sérieux.
            </p>
          </div>

          {/* Section 2: La proposition */}
          <div className="mt-12 space-y-4 rounded-xl border-l-4 border-teal-500 bg-zinc-50 p-6 shadow-sm dark:bg-zinc-800/50">
            <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">
              La proposition
            </h2>
            <p>
              Depuis le temps qu'on en parle — toi, moi, Suzy — qu'il faudrait
              "vendre tes livres", faire du marketing, tout ça...
            </p>
            <p className="text-lg font-medium text-zinc-800 dark:text-zinc-100">
              Voilà ce que je propose : on commence.
            </p>
            <p>
              Mon cadeau, c'est simple : j'ai des idées. Ça fait un moment que
              j'y pense. Des trucs concrets, des quick wins, des tests à faire.
            </p>
            <div className="space-y-2">
              <p className="font-medium text-zinc-800 dark:text-zinc-100">
                Le problème avec l'autoédition ? C'est deux jobs en un :
              </p>
              <ul className="ml-4 space-y-1">
                <li>
                  <strong>Job 1</strong> : Écrire des bons livres (c'est ton
                  truc, ce que t'aimes faire)
                </li>
                <li>
                  <strong>Job 2</strong> : Marketing, distribution, Amazon, tout
                  ce bordel (ça DEVRAIT PAS être ton job)
                </li>
              </ul>
            </div>
            <p>
              Alors dans mon temps libre, je vais tester des trucs. Pas un gros
              projet. Juste : je pense à une tactique, je la teste, on voit ce
              qui marche.
            </p>
            <p className="italic text-zinc-700 dark:text-zinc-300">
              C'est pas un sprint, c'est un marathon. Mais il faut bien
              commencer à courir.
            </p>
          </div>

          {/* Section 3: Les questions */}
          <div className="mt-12">
            <h2 className="mb-6 text-2xl font-bold text-zinc-800 dark:text-zinc-100">
              Les 8 questions
            </h2>
            <p className="mb-8 text-zinc-600 dark:text-zinc-400">
              Mais pour pouvoir t'aider efficacement, j'ai besoin de savoir
              exactement où t'en es.
            </p>

            <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3">
              <QuestionCard
                title="Amazon & Visibilité"
                questions={[
                  {
                    q: 'Métadonnées Amazon optimisées ?',
                    detail: '(mots-clés, catégories)',
                  },
                  {
                    q: 'Stats mensuelles KDP ?',
                    detail: '(pages lues, ventes)',
                  },
                  { q: 'Pub Amazon ?', detail: '(budget, ACOS)' },
                ]}
              />
              <QuestionCard
                title="Relation lecteurs"
                questions={[
                  { q: 'Liste email ?', detail: '(nombre d\'abonnés)' },
                  { q: 'Nombre d\'avis par livre ?' },
                  { q: 'Équipe ARC en place ?' },
                ]}
              />
              <QuestionCard
                title="Qualité & Suite"
                questions={[
                  { q: 'Satisfaite de tes couvertures ?' },
                  { q: 'Plan d\'écriture ?', detail: '(prochains livres, timing)' },
                ]}
              />
            </div>
          </div>

          {/* Section 4: Timeline */}
          <div className="mt-12 rounded-xl bg-gradient-to-br from-teal-50 to-zinc-50 p-8 shadow-sm dark:from-zinc-800/50 dark:to-zinc-900/50">
            <h2 className="mb-8 text-2xl font-bold text-zinc-800 dark:text-zinc-100">
              Ce qui se passe ensuite
            </h2>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="relative">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-teal-500 text-xl font-bold text-white">
                  1
                </div>
                <h3 className="mb-2 font-semibold text-zinc-800 dark:text-zinc-100">
                  Tu réponds
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  Clique sur "Répondre maintenant" et envoie-moi tes 8 réponses
                </p>
              </div>

              <div className="relative">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-teal-500 text-xl font-bold text-white">
                  2
                </div>
                <h3 className="mb-2 font-semibold text-zinc-800 dark:text-zinc-100">
                  Je monte un plan d'action
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  À partir de tes réponses, je construis un plan concret
                </p>
              </div>

              <div className="relative">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-teal-500 text-xl font-bold text-white">
                  3
                </div>
                <h3 className="mb-2 font-semibold text-zinc-800 dark:text-zinc-100">
                  Je teste et j'exécute
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  Je teste des trucs pour faire découvrir tes livres
                </p>
              </div>
            </div>
          </div>

          {/* Section 5: Finale */}
          <div className="mt-12 space-y-4 text-center">
            <p className="text-lg text-zinc-800 dark:text-zinc-100">
              Toi, tu te concentres sur écrire la suite de la saga et prendre
              ton pied. Moi, je teste des choses pour faire en sorte que le
              monde découvre ce que tu écris.
            </p>

            <div className="pt-6">
              <EmailButton />
            </div>

            <p className="pt-8 font-semibold italic text-zinc-700 dark:text-zinc-300">
              — Ton frère qui oublie les dates mais pas le plus important
            </p>
          </div>
        </div>
      </div>
    </Container>
  )
}
