import Image from 'next/image'
import Link from 'next/link'
import avatarImage from '@/images/avatar.jpg'

export function AuthorBanner() {
  return (
    <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-zinc-100 px-6 py-3 backdrop-blur-sm after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-zinc-900/10 dark:bg-zinc-800 sm:px-3.5">
      <div className="flex flex-1 items-center justify-center gap-x-4">
        <Link
          href="/about"
          className="group flex items-center gap-x-4 transition hover:opacity-80"
        >
          <div className="relative size-10 overflow-hidden rounded-full">
            <Image
              src={avatarImage}
              alt="Alexandra Lisabeth"
              className="object-cover"
              fill
            />
          </div>
          <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            Découvrir l&apos;autrice
            <svg
              viewBox="0 0 2 2"
              aria-hidden="true"
              className="mx-2 inline size-0.5 fill-current"
            >
              <circle r={1} cx={1} cy={1} />
            </svg>
            <span className="text-zinc-600 dark:text-zinc-400">
              En savoir plus sur Alexandra Lisabeth
            </span>
          </p>
        </Link>
      </div>
    </div>
  )
}
