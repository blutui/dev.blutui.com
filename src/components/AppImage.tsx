import Image from 'next/image'

export interface AppImageProps {
  src: string
  alt?: string
  title?: string
}

export const AppImage = ({ src, alt, title }: AppImageProps) => {
  return (
    <>
      <span className="not-prose block overflow-hidden rounded-lg">
        <Image src={src} alt={alt ?? ''} width={768} height={768} />
      </span>
    </>
  )
}
