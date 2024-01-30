import Image from 'next/image'

export interface AppImageProps {
  src: string
  alt?: string
  title?: string
}

export function AppImage({ src, alt, title }: AppImageProps) {
  return (
    <>
      <span className="not-prose block overflow-hidden rounded-lg">
        <Image
          src={src}
          alt={alt ?? ''}
          title={title}
          width={768}
          height={432}
        />
      </span>
    </>
  )
}
