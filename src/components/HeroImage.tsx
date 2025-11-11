'use client'

import { useState } from 'react'
import Image, { type StaticImageData } from 'next/image'

interface HeroImageProps {
  src: StaticImageData
  alt: string
  priority?: boolean
  sizes?: string
}

export function HeroImage({ src, alt, priority, sizes }: HeroImageProps) {
  const [hasError, setHasError] = useState(false)

  if (hasError) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-zinc-900 to-zinc-800">
        <div className="text-center">
          <div className="mb-4 text-6xl">📖</div>
          <p className="text-lg font-semibold text-zinc-100">
            Chronique des Premiers Hommes
          </p>
          <p className="mt-2 text-sm text-zinc-400">Tome 1 : L&apos;Éveil des Âmes</p>
        </div>
      </div>
    )
  }

  return (
    <Image
      src={src}
      alt={alt}
      className="object-cover object-center"
      priority={priority}
      fill
      sizes={sizes}
      onError={() => setHasError(true)}
    />
  )
}
