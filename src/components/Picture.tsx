import type { ImgHTMLAttributes } from 'react'

type Props = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> & {
  /** File name in /public/img without extension; .avif/.webp/.jpg must all exist. */
  name: string
  eager?: boolean
}

/** AVIF → WebP → JPG fallback. Every image on this page sits below the hero, so lazy by default. */
export default function Picture({
  name,
  alt = '',
  width = 1536,
  height = 1024,
  eager,
  ...rest
}: Props) {
  return (
    <picture>
      <source type="image/avif" srcSet={`/img/${name}.avif`} />
      <source type="image/webp" srcSet={`/img/${name}.webp`} />
      <img
        src={`/img/${name}.jpg`}
        alt={alt}
        width={width}
        height={height}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        {...rest}
      />
    </picture>
  )
}
