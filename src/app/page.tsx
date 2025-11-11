import { type Metadata } from 'next'
import Link from 'next/link'

import { Banner } from '@/components/Banner'
import { AuthorBanner } from '@/components/AuthorBanner'
import { AuthorCTA } from '@/components/AuthorCTA'
import { Container } from '@/components/Container'
import { HeroImage } from '@/components/HeroImage'
import { Testimonials } from '@/components/Testimonials'
import coverImage from '@/images/cover-chronique-vol1.jpg'

export const metadata: Metadata = {
  title: 'Alexandra Lisabeth - Chronique des Premiers Hommes',
  description:
    "Découvrez Chronique des Premiers Hommes, une saga de fantasy épique où la magie primitive et le destin des âmes définissent l'humanité.",
  openGraph: {
    title: "Chronique des Premiers Hommes - Tome 1 : L'Éveil des Âmes",
    description:
      "Plongez dans une époque primordiale où la survie, la chasse et la spiritualité définissent l'existence même de l'humanité.",
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Alexandra Lisabeth',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Chronique des Premiers Hommes - Couverture du Tome 1',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Chronique des Premiers Hommes - Tome 1 : L'Éveil des Âmes",
    description:
      "Une saga de fantasy épique où la magie primitive et le destin des âmes définissent l'humanité.",
    images: ['/og-image.jpg'],
  },
}

export default function Home() {
  return (
    <>
      <Banner />
      <AuthorBanner />
      {/* Hero Section */}
      <section
        aria-label="Hero"
        className="relative flex min-h-[100svh] flex-col lg:min-h-screen lg:flex-row"
      >
        {/* Content - 60% width */}
        <div className="relative flex h-auto min-h-[50svh] w-full items-center justify-center px-6 py-12 lg:h-screen lg:w-[60%] lg:px-16 lg:py-0">
          <div className="flex max-w-2xl flex-col justify-center">
            <h1 className="font-display tracking-tight text-zinc-800 dark:text-zinc-100">
              <span className="block text-4xl font-light sm:text-5xl md:text-5xl">
                Chronique des
              </span>
              <span className="mt-1 block text-5xl font-bold uppercase sm:text-5xl md:text-6xl">
                Premiers Hommes
              </span>
            </h1>
            <p className="mt-4 font-display text-3xl font-light italic text-zinc-700 dark:text-zinc-300">
              Tome 1 : L&apos;Éveil des Âmes
            </p>
            {/* <p className="mt-6 text-xl leading-relaxed font-medium text-zinc-800 dark:text-zinc-100"> */}
            {/*   Le loup vous fixe. Vous devez prendre sa vie. Un ami */}
            {/* </p> */}
            <p className="mt-4 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
              De mémoire de plus anciens sages de clans, la forêt primordiale et
              sa nature sauvage a toujours coexisté en harmonie avec eux. Ce
              lien établi avant l arrivee des premiers hommes, est sur le point
              de se briser.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/prologue"
                aria-label="Lire le prologue gratuitement"
                className="group inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full bg-[#f0bb48] px-6 py-3 text-base font-semibold text-zinc-900 transition-all duration-200 hover:scale-105 hover:bg-[#e5ad35] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f0bb48] focus-visible:ring-offset-2 motion-safe:transition-all dark:bg-[#f0bb48] dark:text-zinc-900 dark:hover:bg-[#e5ad35]"
              >
                Lire le prologue gratuitement
              </Link>
              <Link
                href="https://www.amazon.fr/Chroniques-Premiers-Hommes-L%C3%89veil-Chronique-ebook/dp/B07L8HCQPJ"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Commander sur Amazon"
                className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full border-2 border-zinc-300 px-6 py-3 text-base font-semibold text-zinc-900 transition-all duration-200 hover:border-zinc-400 hover:bg-zinc-50 focus-visible:ring-2 focus-visible:ring-zinc-300 focus-visible:ring-offset-2 focus-visible:outline-none dark:border-zinc-700 dark:text-zinc-100 dark:hover:border-zinc-600 dark:hover:bg-zinc-800/50"
              >
                Commander sur Amazon
              </Link>
            </div>
          </div>
        </div>
        {/* Book Cover - 40% width, absolute full bleed with gradient fade */}
        <div className="relative h-auto min-h-[50svh] w-full lg:h-screen lg:w-[40%]">
          <HeroImage
            src={coverImage}
            alt="Chronique des Premiers Hommes - Tome 1 : L'Éveil des Âmes"
            priority
            sizes="(min-width: 1024px) 40vw, 100vw"
          />
          {/* Gradient overlays to blend wolf into darkness */}
          {/* Left edge fade */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'linear-gradient(to right, #060102 0%, rgba(6, 1, 2, 0.8) 3%, rgba(6, 1, 2, 0.4) 10%, transparent 20%)',
            }}
            aria-hidden="true"
          />
          {/* Top edge fade */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'linear-gradient(to bottom, #060102 0%, rgba(6, 1, 2, 0.6) 5%, rgba(6, 1, 2, 0.3) 10%, transparent 18%)',
            }}
            aria-hidden="true"
          />
          {/* Bottom edge fade */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'linear-gradient(to top, #060102 0%, rgba(6, 1, 2, 0.6) 5%, rgba(6, 1, 2, 0.3) 10%, transparent 18%)',
            }}
            aria-hidden="true"
          />
        </div>
      </section>

      {/* Below the Fold - Book Details */}
      <Container className="mt-24 sm:mt-32" role="main">
        <article className="mx-auto max-w-3xl">
          {/* Book Description */}
          {/* <header className="text-center"> */}
          {/*   <h2 className="font-display text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100"> */}
          {/*     Une saga de fantasy épique */}
          {/*   </h2> */}
          {/*   <p className="mt-6 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400"> */}
          {/*     Les clans des premiers hommes vive au coeur de la forêt */}
          {/*     primordiale. à perte de vue, la nature sauvage co-existe en */}
          {/*     harmonie avec eux, dans un lien etablit aux commencement du */}
          {/*     monde... cet équilibre millénaire est sur le point de se briser. */}
          {/*   </p> */}
          {/* </header> */}

          {/* Key Themes */}
          {/* <section aria-label="Key Themes" className="mt-16 space-y-8"> */}
          {/*   <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"> */}
          {/*     <h3 className="font-display text-xl font-semibold text-zinc-800 dark:text-zinc-100"> */}
          {/*       Magie primitive et équilibre ancestral */}
          {/*     </h3> */}
          {/*     <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400"> */}
          {/*       Un système de magie enraciné dans la nature même du monde, où */}
          {/*       l&apos;équilibre entre les forces est fragile et constamment */}
          {/*       menacé. */}
          {/*     </p> */}
          {/*   </div> */}

          {/*   <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"> */}
          {/*     <h3 className="font-display text-xl font-semibold text-zinc-800 dark:text-zinc-100"> */}
          {/*       Âmes Blanches et Noires */}
          {/*     </h3> */}
          {/*     <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400"> */}
          {/*       Chaque génération possède ses élus, porteurs d&apos;âmes */}
          {/*       spéciales qui maintiennent un ordre millénaire... jusqu&apos;à */}
          {/*       ce que cet ordre soit brisé. */}
          {/*     </p> */}
          {/*   </div> */}

          {/*   <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"> */}
          {/*     <h3 className="font-display text-xl font-semibold text-zinc-800 dark:text-zinc-100"> */}
          {/*       Destins entrelacés à travers les générations */}
          {/*     </h3> */}
          {/*     <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400"> */}
          {/*       Des personnages dont les vies sont tissées ensemble par des fils */}
          {/*       invisibles, connectés à quelque chose de plus grand qu&apos;eux. */}
          {/*     </p> */}
          {/*   </div> */}
          {/* </section> */}

          {/* Testimonials */}
          <Testimonials
            testimonials={[
              {
                content:
                  "Impossible de le lâcher. Ce livre est une perle, totalement immersif... Seul bémol, on n'en a pas assez et l'attente d'une suite est éprouvante. Un conseil, réservez votre week-end !",
              },
              {
                content:
                  "Le genre d'ouvrage qui vous prend dans sa danse et que l'on ne veut surtout pas quitter! Les descriptions vous envoûtent tant que l'on ne sait plus si l'on est dans la lecture ou devant un écran!",
              },
              {
                content:
                  "Ce que nous appelons 'fiction' devient au travers de son écriture une réalité presque tangible. Il se lit comme on regarde un film qui nous emporte.",
              },
            ]}
            amazonUrl="https://www.amazon.fr/Chroniques-Premiers-Hommes-L%C3%89veil-Chronique-ebook/dp/B07L8HCQPJ#customerReviews"
          />

          {/* Author CTA */}
          <AuthorCTA />
        </article>
      </Container>
    </>
  )
}
