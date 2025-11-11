'use client'

import { useState } from 'react'
import Image, { type StaticImageData } from 'next/image'

interface PortraitImageProps {
  src: StaticImageData
  alt: string
  sizes?: string
  className?: string
}

export function PortraitImage({
  src,
  alt,
  sizes,
  className,
}: PortraitImageProps) {
  const [hasError, setHasError] = useState(false)

  if (hasError) {
    return (
      <div
        className={`flex items-center justify-center bg-gradient-to-br from-zinc-800 to-zinc-900 ${className}`}
      >
        <div className="text-center">
          <div className="mb-4 text-6xl">✍️</div>
          <p className="text-lg font-semibold text-zinc-100">
            Alexandra Lisabeth
          </p>
          <p className="mt-2 text-sm text-zinc-400">Autrice</p>
        </div>
      </div>
    )
  }

  return (
    <Image
      src={src}
      alt={alt}
      sizes={sizes}
      className={className}
      onError={() => setHasError(true)}
    />
  )
}
