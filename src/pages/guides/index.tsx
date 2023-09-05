import Link from 'next/link'

import { FullPageLayout } from '@/layouts/full-page'
import { GuidesNavigationItem, guidesNavigation } from '@/navigation/guides'

import { usePagination } from '@/utils/use-pagination'

const GuideItem = ({ item }: { item: GuidesNavigationItem }) => {
  const formattedDate = new Date(item.createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <Link className="block" href={`/guides/${item.slug}`}>
      <div className="flex w-full flex-col rounded-lg border p-6 transition hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800">
        <div className="mb-4 flex items-center gap-4">
          {item.featured && (
            <span className="dark:bg-han-500/30 ring-han-300/50 bg-han-500/10 text-han-600 dark:text-han-100 inline-flex rounded-full px-3.5 py-1 text-xs font-semibold uppercase tracking-widest ring-1">
              Featured
            </span>
          )}
          <span className="text-xs uppercase text-zinc-500 dark:text-zinc-400">
            {formattedDate}
          </span>
        </div>
        <h4 className="mb-2 text-xl font-bold leading-6 tracking-tight text-zinc-700 dark:text-white">
          {item.title}
        </h4>
        <div className="text-zinc-500 dark:text-zinc-400">
          <p>{item.description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {item.tags.map((tag, i) => (
            <span
              key={i}
              className="rounded-md px-2 py-1 text-xs font-medium uppercase text-zinc-500 ring-1 ring-zinc-200 dark:text-zinc-500 dark:ring-zinc-600"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}

export default function Guides() {
  const sortedGuides = guidesNavigation.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  )

  const { items: guides, hasMorePages, loadMore } = usePagination(sortedGuides)

  const guideItems = guides.filter((items) => {
    return !items.featured
  })

  const featuredGuideItems = guides.filter((items) => {
    return items.featured
  })

  const countMarkup = (
    <div className="text-xs font-semibold uppercase text-zinc-400 dark:text-zinc-500">
      Showing {guides.length} of {guidesNavigation.length} guides
    </div>
  )

  return (
    <div className="w-full">
      <div className="max-w-8xl mx-auto w-full px-8">
        <div className="mb-6 pb-6">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-200 lg:text-4xl">
            Guides
          </h1>
          <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400 lg:text-lg">
            Everything you need to know about Blutui, from getting started to
            advanced use cases.
          </p>
        </div>
        <div>
          <div className="mb-6">{countMarkup}</div>

          <div className="space-y-4">
            {featuredGuideItems.map((item, index) => (
              <GuideItem key={index} item={item} />
            ))}
            {guideItems.map((item, index) => (
              <GuideItem key={index} item={item} />
            ))}
          </div>

          <div className="mb-4 mt-6">{countMarkup}</div>

          {hasMorePages && (
            <button
              className="w-full rounded-lg border px-4 py-2 text-sm font-semibold tracking-tight text-zinc-500 transition hover:bg-zinc-100 dark:border-zinc-600 dark:text-white dark:hover:bg-zinc-800"
              onClick={loadMore}
            >
              Show more guides
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

Guides.layoutProps = {
  Layout: FullPageLayout,
}
