import Image from 'next/image'
import Link from 'next/link'
import avatarImage from '@/images/avatar.jpg'

export function AuthorCTA() {
  return (
    <section className="mt-16 text-center" aria-label="Découvrir l'auteur">
      <div className="flex flex-col items-center gap-6">
        <Link
          href="/about"
          className="group relative block overflow-hidden rounded-full transition hover:opacity-90"
        >
          <Image
            src={avatarImage}
            alt="Alexandra Lisabeth"
            className="h-32 w-32 object-cover sm:h-40 sm:w-40"
            priority
          />
        </Link>

        <div className="flex flex-col items-center gap-4">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 rounded-lg border-2 border-zinc-200 bg-white px-6 py-3 text-base font-semibold text-zinc-900 transition hover:border-zinc-300 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:border-zinc-600 dark:hover:bg-zinc-700"
          >
            Découvrir l&apos;autrice
          </Link>
        </div>
      </div>
    </section>
  )
}
