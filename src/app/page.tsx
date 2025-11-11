import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/components/Container'
import coverImage from '@/images/cover-chronique-vol1.jpg'

export const metadata: Metadata = {
  title: 'Alexandra Lisabeth - Chronique des Premiers Hommes',
  description:
    'Découvrez Chronique des Premiers Hommes, une saga de fantasy épique où la magie primitive et le destin des âmes définissent l&apos;humanité.',
}

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-12 lg:gap-y-12">
          {/* Book Cover */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative max-w-md">
              <Image
                src={coverImage}
                alt="Chronique des Premiers Hommes - Tome 1 : L'Éveil des Âmes"
                className="rounded-2xl shadow-2xl"
                priority
                sizes="(min-width: 1024px) 28rem, 20rem"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center">
            <h1 className="font-display text-5xl font-bold tracking-tight text-zinc-800 sm:text-6xl dark:text-zinc-100">
              Chronique des Premiers Hommes
            </h1>
            <p className="mt-4 font-display text-2xl italic text-zinc-600 dark:text-zinc-400">
              Tome 1 : L&apos;Éveil des Âmes
            </p>
            <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400">
              Dans un monde où la magie est aussi sauvage que la nature qui
              l&apos;entoure, où l&apos;équilibre entre le bien et le mal
              n&apos;est jamais garanti, découvrez une époque primordiale où
              chaque âme porte le poids de son destin.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/letter"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-teal-600 px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:bg-teal-500 dark:bg-teal-500 dark:hover:bg-teal-400"
              >
                📩 Lire la lettre du frerot
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-zinc-100 px-6 py-3 text-base font-semibold text-zinc-900 shadow-md transition hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
              >
                Découvrir l&apos;univers
              </Link>
            </div>
          </div>
        </div>
      </Container>

      {/* Below the Fold - Book Details */}
      <Container className="mt-24 sm:mt-32">
        <div className="mx-auto max-w-3xl">
          {/* Book Description */}
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
              Une saga de fantasy épique
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
              Plongez dans une époque primordiale où la survie, la chasse et la
              spiritualité définissent l&apos;existence même de l&apos;humanité.
              Une saga où la magie a des règles, les âmes ont un but, et chaque
              choix peut bouleverser l&apos;équilibre du monde entier.
            </p>
          </div>

          {/* Key Themes */}
          <div className="mt-16 space-y-8">
            <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
              <h3 className="font-display text-xl font-semibold text-zinc-800 dark:text-zinc-100">
                Magie primitive et équilibre ancestral
              </h3>
              <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400">
                Un système de magie enraciné dans la nature même du monde, où
                l&apos;équilibre entre les forces est fragile et constamment
                menacé.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
              <h3 className="font-display text-xl font-semibold text-zinc-800 dark:text-zinc-100">
                Âmes Blanches et Noires
              </h3>
              <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400">
                Chaque génération possède ses élus, porteurs d&apos;âmes
                spéciales qui maintiennent un ordre millénaire... jusqu&apos;à
                ce que cet ordre soit brisé.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
              <h3 className="font-display text-xl font-semibold text-zinc-800 dark:text-zinc-100">
                Destins entrelacés à travers les générations
              </h3>
              <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400">
                Des personnages dont les vies sont tissées ensemble par des
                fils invisibles, connectés à quelque chose de plus grand
                qu&apos;eux.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
