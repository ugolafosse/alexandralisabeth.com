interface Testimonial {
  content: string
}

interface TestimonialsProps {
  testimonials: Testimonial[]
  amazonUrl?: string
}

export function Testimonials({ testimonials, amazonUrl }: TestimonialsProps) {
  return (
    <section className="mt-24 sm:mt-32" aria-label="Avis des lecteurs">
      <h2 className="font-display text-center text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
        Ce que disent les lecteurs
      </h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="rounded-2xl border border-zinc-100 bg-white p-6 dark:border-zinc-700/40 dark:bg-zinc-800/50"
          >
            <blockquote className="text-base italic leading-relaxed text-zinc-600 dark:text-zinc-400">
              &ldquo;{testimonial.content}&rdquo;
            </blockquote>
          </div>
        ))}
      </div>

      {amazonUrl && (
        <div className="mt-8 text-center">
          <a
            href={amazonUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
          >
            Voir tous les avis sur Amazon →
          </a>
        </div>
      )}
    </section>
  )
}
