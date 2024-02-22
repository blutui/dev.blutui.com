import { useState } from 'react'
import Link from 'next/link'
import cn from 'clsx'

import { FullPageLayout } from '@/layouts/full-page'
import {
  Tags,
  GuidesNavigationItem,
  guidesNavigation,
} from '@/navigation/guides'

import { slugify } from '@/utils/slugify'
import { usePagination } from '@/utils/use-pagination'

const GuideItem = ({
  item,
  selectedTags,
}: {
  item: GuidesNavigationItem
  selectedTags: string[]
}) => {
  const formattedDate = new Date(item.createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <Link className="block" href={`/guides/${item.slug}`}>
      <div className="flex w-full flex-col rounded-lg border p-6 transition hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800">
        <div className="mb-4 flex flex-col items-start gap-4 lg:flex-row lg:items-center">
          {item.featured && (
            <span className="inline-flex rounded-full bg-han-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-han-600 ring-1 ring-han-300/50 dark:bg-han-500/30 dark:text-han-100">
              Featured
            </span>
          )}
          <span className="text-xs uppercase text-zinc-500 dark:text-zinc-400">
            {formattedDate}
          </span>
        </div>
        <h2 className="mb-2 text-xl font-bold leading-6 text-zinc-700 dark:text-white">
          {item.title}
        </h2>
        <div className="text-zinc-500 dark:text-zinc-400">
          <p>{item.description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {item.tags.map((tag, i) => (
            <span
              key={i}
              className={cn(
                'rounded-md px-2 py-1 font-mono text-xs font-medium uppercase ring-1 transition',
                selectedTags.includes(slugify(tag))
                  ? 'text-han-500 ring-han-500 dark:text-han-300 dark:ring-han-300'
                  : 'text-zinc-500 ring-zinc-200 dark:text-zinc-500 dark:ring-zinc-600'
              )}
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
  const perPage = 8
  const sortedGuides = guidesNavigation.sort((a, b) => {
    // Compare the featured property first
    if (a.featured && !b.featured) {
      return -1 // A comes first
    } else if (!a.featured && b.featured) {
      return 1 // B comes first
    }

    // If A & B both have featured set to false, compare by date.
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  })

  const tagList = Tags.map((item) => {
    return {
      name: slugify(item),
      title: item,
    }
  })

  const [filterTags, setFilterTags] = useState<string[]>([])
  const filterHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setFilterTags([...filterTags, event.target.value])
    } else {
      setFilterTags(filterTags.filter((tag) => tag !== event.target.value))
    }
  }

  const filteredGuides = sortedGuides.filter((item) =>
    filterTags.length > 0
      ? filterTags.some((filterTag) =>
          item.tags.map((tag) => slugify(tag)).includes(filterTag)
        )
      : sortedGuides
  )

  const {
    items: guides,
    hasMorePages,
    loadMore,
  } = usePagination(filteredGuides, perPage)

  const guideItems = guides.filter((items) => {
    return !items.featured
  })

  const featuredGuideItems = guides.filter((items) => {
    return items.featured
  })

  const countMarkup = (
    <div className="text-xs font-semibold uppercase text-zinc-400 dark:text-zinc-500">
      Showing{' '}
      {filterTags.length
        ? guides.length
        : `${guides.length} of ${guidesNavigation.length}`}{' '}
      {guides.length === 1 ? 'guide' : 'guides'}
    </div>
  )

  return (
    <div className="w-full">
      <div className="mx-auto w-full max-w-8xl px-8">
        <header id="header" className="mb-6 pb-6">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-200 lg:text-4xl">
            Guides
          </h1>
          <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400 lg:text-lg">
            Everything you need to know about Blutui, from getting started to
            advanced use cases.
          </p>
        </header>

        <div className="flex max-w-full gap-8">
          <aside className="sticky top-header -mt-6 hidden max-h-sidebar w-64 max-w-[16rem] flex-shrink-0 lg:block">
            <div className="mt-6 text-xs font-semibold uppercase text-zinc-400 dark:text-zinc-500">
              <div>Filters</div>
            </div>

            <div className="relative mt-6 space-y-2">
              {tagList.map((tag, index) => (
                <label
                  key={index}
                  htmlFor={tag.name}
                  className={cn(
                    'flex h-9 w-full cursor-pointer select-none items-center rounded-md pl-3 transition',
                    filterTags.includes(tag.name)
                      ? 'bg-han-100/30 dark:bg-han-400/10'
                      : 'bg-zinc-100 hover:bg-zinc-200 dark:bg-white/5 dark:hover:bg-white/10'
                  )}
                >
                  <span className="relative flex items-center">
                    <input
                      id={tag.name}
                      type="checkbox"
                      className="form-checkbox rounded border-zinc-300 bg-transparent text-han-500 transition focus:border-han-300 focus:ring focus:ring-han-200/50 focus:ring-offset-0 dark:border-zinc-600 dark:text-han-400 dark:focus:border-han-400 dark:focus:ring-han-400/50"
                      value={tag.name}
                      onChange={filterHandler}
                    />
                  </span>
                  <span className="ml-2 flex-1 text-sm text-zinc-500 dark:text-zinc-400">
                    {tag.title}
                  </span>
                </label>
              ))}
            </div>
          </aside>

          <div className="m-0 flex-grow">
            <div className="mb-6">{countMarkup}</div>

            <div className="space-y-4">
              {featuredGuideItems.map((item, index) => (
                <GuideItem key={index} item={item} selectedTags={filterTags} />
              ))}
              {guideItems.map((item, index) => (
                <GuideItem key={index} item={item} selectedTags={filterTags} />
              ))}
            </div>

            <div className="mb-4 mt-6">{countMarkup}</div>

            {filteredGuides.length > perPage && hasMorePages && (
              <button
                className="w-full rounded-lg border px-4 py-2 text-sm font-semibold text-zinc-500 transition hover:bg-zinc-100 dark:border-zinc-600 dark:text-white dark:hover:bg-zinc-800"
                onClick={loadMore}
              >
                Show more guides
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

Guides.layoutProps = {
  Layout: FullPageLayout,
  title: 'Guides',
}
