import { useRouter } from 'next/router'
import Link from 'next/link'

import { useArticleContext } from '@/context/article-context'
import { getGuideBySlug } from '@/navigation/guides'
import { Section } from '@/utils/collect-headings'

import { ArrowLongLeft } from '@/components/icons/arrow-long-left'
import { Footer } from '@/components/footer'
import { TableOfContents } from '@/components/table-of-contents'
import { Feedback } from '@/components/feedback'

export interface GuidesLayoutProps {
  toc: Section[]
  children: React.ReactNode
}

export const GuidesLayout = ({ toc, children }: GuidesLayoutProps) => {
  const { pathname } = useRouter()
  const articleContext = useArticleContext()

  const slug = pathname.split('/')[2]
  const guide = getGuideBySlug(slug)

  let title = null

  title = articleContext?.title

  return (
    <main>
      <header id="header" className="border-b py-8 dark:border-zinc-800">
        <div className="mx-auto max-w-8xl px-8">
          <div className="mb-4">
            <Link
              href="/guides"
              className="inline-flex items-center gap-2 text-sm text-zinc-600 transition hover:text-zinc-400 dark:text-zinc-400 dark:hover:text-zinc-500"
            >
              <ArrowLongLeft className="size-5" />
              Back to guides
            </Link>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-200 lg:text-4xl">
            {title}
          </h1>
          {guide && (
            <div className="mt-6 flex items-center gap-4 text-zinc-500 dark:text-zinc-400">
              <span className="text-sm font-medium">
                {guide.authors.join(', ')}
              </span>
              <span>—</span>
              <span className="text-xs uppercase">
                {new Date(guide.createdAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
            </div>
          )}
        </div>
      </header>
      <div className="mx-auto w-full max-w-8xl p-8">
        <div className="flex gap-8">
          <TableOfContents title="In this guide" toc={toc} />
          <div className="w-full md:max-w-(--breakpoint-md)">
            <div id="content-wrapper" className="mb-8">
              {children}
            </div>
            <Feedback />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
