import { Footer } from '@/components/footer'

export interface FullPageLayoutProps {
  children: React.ReactNode
}

export const FullPageLayout = ({ children }: FullPageLayoutProps) => {
  return (
    <>
      <main
        id="content-wrapper"
        className="flex w-full flex-1 items-start space-x-6 py-10"
      >
        {children}
      </main>
      <Footer />
    </>
  )
}
