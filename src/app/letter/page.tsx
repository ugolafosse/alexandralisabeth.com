/* eslint-disable react/no-unescaped-entities */
'use client'

import { Container } from '@/components/Container'
import Link from 'next/link'

function EmailButton({ className = '' }: { className?: string }) {
  const emailSubject = "Réponses à tes questions"
  const emailBody = `Salut !

Voici mes réponses à tes 9 questions :

**AMAZON & VISIBILITÉ**

1. Métadonnées Amazon optimisées ?
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

7. Beta-lecture / Édition professionnelle ?
[Ta réponse]

8. Satisfaite de tes couvertures ?
[Ta réponse]

9. Plan d'écriture (prochains livres, timing) ?
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

          {/* Section 2: Le deal */}
          <div className="mt-12 space-y-4 rounded-xl border-l-4 border-teal-500 bg-zinc-50 p-6 shadow-sm dark:bg-zinc-800/50">
            <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">
              Le deal
            </h2>
            <p className="text-lg font-medium text-zinc-800 dark:text-zinc-100">
              Toi, tu écris. Moi, je vends tes livres.
            </p>
            <p>
              Pas parce que tu peux pas le faire toi-même. Mais parce que ton
              job, c'est d'écrire des univers qui tiennent debout. Le mien,
              c'est de faire en sorte que les gens les découvrent.
            </p>
            <p>
              La distribution, le marketing, Amazon, les communautés de
              lecteurs. Tu gardes le contrôle créatif total. Je m'occupe du
              reste.
            </p>
          </div>

          {/* Section 3: Exemples concrets */}
          <div className="mt-12 space-y-4">
            <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">
              Concrètement, voici ce que je vais faire
            </h2>
            <div className="space-y-3 text-sm">
              <div className="flex gap-3">
                <span className="mt-1 text-teal-500">▸</span>
                <p>
                  <strong>Optimisation Amazon</strong> : Tester 50
                  combinaisons de mots-clés et catégories jusqu'à trouver celles
                  qui maximisent ta visibilité
                </p>
              </div>
              <div className="flex gap-3">
                <span className="mt-1 text-teal-500">▸</span>
                <p>
                  <strong>Liste email</strong> : Construire une landing page et
                  une stratégie pour passer de 0 à 1000 abonnés qualifiés en 6
                  mois
                </p>
              </div>
              <div className="flex gap-3">
                <span className="mt-1 text-teal-500">▸</span>
                <p>
                  <strong>Équipe ARC</strong> : Recruter 50 lecteurs early
                  access qui laisseront des avis le jour du lancement
                </p>
              </div>
              <div className="flex gap-3">
                <span className="mt-1 text-teal-500">▸</span>
                <p>
                  <strong>Pub Amazon</strong> : Budget test de 200-500€/mois
                  pour valider ce qui fonctionne, puis scaler
                </p>
              </div>
            </div>
          </div>

          {/* Section 4: Les questions */}
          <div className="mt-12">
            <h2 className="mb-6 text-2xl font-bold text-zinc-800 dark:text-zinc-100">
              Les 9 questions
            </h2>
            <p className="mb-8 text-zinc-600 dark:text-zinc-400">
              Pour te construire un plan d'action sur mesure, j'ai besoin de
              savoir exactement où t'en es.
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
                  { q: 'Beta-lecture / Édition pro ?' },
                  { q: 'Satisfaite de tes couvertures ?' },
                  { q: 'Plan d\'écriture ?', detail: '(prochains livres)' },
                ]}
              />
            </div>
          </div>

          {/* Section 5: Timeline */}
          <div className="mt-12 rounded-xl bg-gradient-to-br from-teal-50 to-zinc-50 p-8 shadow-sm dark:from-zinc-800/50 dark:to-zinc-900/50">
            <h2 className="mb-8 text-2xl font-bold text-zinc-800 dark:text-zinc-100">
              Ce qui se passe ensuite
            </h2>

            <div className="grid gap-6 md:grid-cols-4">
              <div className="relative">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-teal-500 text-xl font-bold text-white">
                  1
                </div>
                <h3 className="mb-2 font-semibold text-zinc-800 dark:text-zinc-100">
                  Tu réponds
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  Clique sur "Répondre maintenant" et envoie-moi tes 9 réponses
                </p>
              </div>

              <div className="relative">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-teal-500 text-xl font-bold text-white">
                  2
                </div>
                <h3 className="mb-2 font-semibold text-zinc-800 dark:text-zinc-100">
                  J'analyse
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  Je regarde où sont les plus gros gaps et opportunités
                </p>
              </div>

              <div className="relative">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-teal-500 text-xl font-bold text-white">
                  3
                </div>
                <h3 className="mb-2 font-semibold text-zinc-800 dark:text-zinc-100">
                  Je planifie
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  Plan d'action concret avec ordre de priorité
                </p>
              </div>

              <div className="relative">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-teal-500 text-xl font-bold text-white">
                  4
                </div>
                <h3 className="mb-2 font-semibold text-zinc-800 dark:text-zinc-100">
                  J'exécute
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  Je teste, j'optimise, je construis ton infrastructure
                </p>
              </div>
            </div>
          </div>

          {/* Section 6: Finale */}
          <div className="mt-12 space-y-4 text-center">
            <p className="text-lg text-zinc-800 dark:text-zinc-100">
              T'as le talent. T'as les livres. T'as maintenant l'espace pour
              écrire.
            </p>
            <p className="text-lg text-zinc-800 dark:text-zinc-100">
              Ce qui te manque, c'est quelqu'un qui s'occupe du business pendant
              que tu fais ce que tu fais de mieux.
            </p>
            <p className="text-xl font-medium text-zinc-900 dark:text-zinc-50">
              Alors voilà. C'est moi.
            </p>

            <div className="pt-6">
              <EmailButton />
            </div>

            <p className="pt-8 font-semibold italic text-zinc-700 dark:text-zinc-300">
              — Ton frère qui rate les dates mais tient ses promesses
            </p>
          </div>
        </div>
      </div>
    </Container>
  )
}
