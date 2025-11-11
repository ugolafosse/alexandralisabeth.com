import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'À propos',
  description:
    'Alexandra Lisabeth, Autrice de la série "Chronique des Premiers Hommes".',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt="Alexandra Lisabeth"
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="font-display text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Je suis Alexandra Lisabeth, autrice de la série{' '}
            <em>Chronique des Premiers Hommes</em>
          </h1>

          <Link
            href="/letter"
            className="mb-8 inline-flex items-center gap-2 rounded-full bg-teal-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-teal-500 dark:bg-teal-500 dark:hover:bg-teal-400"
          >
            📩 Lire la lettre du frerot !
          </Link>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              Je crée des mondes où la magie est aussi sauvage que la nature qui
              l&apos;entoure, où l&apos;équilibre entre le bien et le mal n&apos;est jamais
              garanti, et où chaque âme porte le poids de son destin. Avec la
              série <em>Chronique des Premiers Hommes</em>, je vous invite dans
              une époque primordiale où la survie, la chasse et la spiritualité
              définissent l&apos;existence même de l&apos;humanité.
            </p>
            <p>
              Mon parcours est un peu atypique : j&apos;ai commencé ma carrière comme
              chiropracteure, passant mes journées à comprendre les mystères du
              corps humain. Mais les histoires qui tournaient dans ma tête — ces
              univers de magie primitive, de destins entrelacés, d&apos;équilibres
              fragiles — ont fini par réclamer toute mon attention. Aujourd&apos;hui,
              je me consacre entièrement à l&apos;écriture de mondes où chaque
              génération possède ses élus, où les Âmes Blanches et Noires
              maintiennent un ordre millénaire... jusqu&apos;à ce que cet ordre soit
              brisé.
            </p>
            <p>
              Ce qui me fascine dans la fantasy épique ? L&apos;opportunité de
              construire des systèmes de magie enracinés dans la nature même du
              monde, des cultures spirituelles qui respirent, des conflits qui
              dépassent le simple bien contre mal. Dans mes histoires, la magie
              a des règles, les âmes ont un but, et chaque choix peut bouleverser
              l&apos;équilibre du monde entier.
            </p>
            <p>
              Quand je n&apos;écris pas sur mes Premiers Hommes, vous me trouverez
              probablement en train de cartographier les territoires sauvages de
              mon univers, de développer les mythologies de ses peuples, ou de
              tisser les fils invisibles qui relient mes personnages à travers
              les générations. Mon ambition ? Créer une saga qui résonne avec
              cette vérité : nous sommes tous connectés à quelque chose de plus
              grand que nous.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="#" icon={InstagramIcon} className="mt-4">
              Suivez moi sur Instagram
            </SocialLink>
            {/* <SocialLink href="#" icon={XIcon}> */}
            {/*   Suivez mon avancement on X */}
            {/* </SocialLink> */}
            {/* </SocialLink> */}
            <SocialLink href="#" icon={LinkedInIcon} className="mt-4">
              Suivez moi sur LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:aelafosse@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              aelafosse@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
