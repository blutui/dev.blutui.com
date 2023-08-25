import Link from 'next/link'

import { FullPageLayout } from '@/layouts/FullPageLayout'
import { GuidesNavigationItem, guidesNavigation } from '@/navigation/guides'

import { NextPageWithCustomLayout } from '@/types'

const GuideItem = ({ item }: { item: GuidesNavigationItem }) => {
  return (
    <Link className="block" href={item.url}>
      <div className="flex w-full flex-col rounded-lg border border-zinc-700 p-6 transition hover:bg-zinc-800">
        {item.featured && (
          <span className="mb-4">
            <span className="inline-flex rounded-full bg-zinc-700 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-white">
              Featured
            </span>
          </span>
        )}
        <h4 className="mb-2 text-xl font-bold leading-6 tracking-tight text-white">
          {item.title}
        </h4>
        <div className="text-zinc-400">
          <p>{item.description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {item.tags.map((tag, i) => (
            <span
              key={i}
              className="rounded-md px-2 py-1 text-xs font-medium uppercase text-zinc-500 ring-1 ring-zinc-600"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}

const Guides: NextPageWithCustomLayout = () => {
  const guideItems = guidesNavigation.filter((items) => {
    return !items.featured
  })
  const featuredGuideItems = guidesNavigation.filter((items) => {
    return items.featured
  })

  return (
    <div className="w-full">
      <div className="mx-auto w-full max-w-4xl space-y-4 px-8">
        {featuredGuideItems.map((item, index) => (
          <GuideItem key={index} item={item} />
        ))}
        {guideItems.map((item, index) => (
          <GuideItem key={index} item={item} />
        ))}
      </div>
    </div>
  )
}

export default Guides

Guides.layoutProps = {
  Layout: FullPageLayout,
}
