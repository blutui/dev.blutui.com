import { SearchButton } from '@/components/search'
import { FullPageLayout } from '@/layouts/full-page'

import { Button } from '@/components/button'
import { Card } from '@/components/card'

import { AcademicCap } from '@/components/icons/academic-cap'
import { AtSymbol } from '@/components/icons/at-symbol'
import { BookOpen } from '@/components/icons/book-open'
import { Microphone } from '@/components/icons/microphone'
import { Sparkles } from '@/components/icons/sparkles'
import { Video } from '@/components/icons/video'

import type { NextPageWithCustomLayout } from '@/types'

const Home: NextPageWithCustomLayout = () => {
  return (
    <div className="w-full flex-grow">
      <div className="relative -mx-8 -mt-[6.25rem] overflow-hidden pb-6 pt-[6.25rem] md:pb-10">
        <div className="max-w-8xl mx-auto flex items-center">
          <div className="w-full px-8 py-6 text-center md:py-10">
            <p className="mb-2 text-xs uppercase tracking-widest text-zinc-500 dark:text-white/50">
              Developer Documentation
            </p>
            <h1 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-white lg:text-5xl">
              Welcome to Blutui
            </h1>
            <p className="mb-4 mt-2 text-lg text-zinc-800/80 dark:text-white/80 lg:text-xl">
              Explore our guides and documentation on using Blutui.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 lg:flex-row">
              <Button href="/docs/getting-started/create">Get started</Button>
              <span className="hidden text-sm font-semibold uppercase text-zinc-800/40 dark:text-white/40 lg:block">
                or
              </span>
              <SearchButton className="dark:highlight-white/10 inline-flex h-10 w-full max-w-xs select-none items-center whitespace-nowrap rounded-lg bg-zinc-900/10 px-3 text-base font-semibold tracking-tight text-zinc-700 transition hover:bg-zinc-900/20 dark:bg-white/20 dark:text-white dark:hover:bg-white/10">
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5 opacity-70"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Quick search...</span>
                </div>
              </SearchButton>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-6 grid max-w-screen-lg gap-6 md:grid-cols-6">
        <div className="md:col-span-3">
          <Card
            title="Read the docs"
            href="/docs/getting-started/create"
            icon={<BookOpen />}
          >
            Learn how to get set up and start building your first project.
          </Card>
        </div>
        <div className="md:col-span-3">
          <Card title="Guides" href="/guides" icon={<AcademicCap />}>
            Find a guide on how to develop with Blutui.
          </Card>
        </div>
        <div className="md:col-span-3">
          <Card
            title="What's new in Blutui"
            href="/changelog"
            icon={<Sparkles />}
          >
            {`See what's been added, changed, fixed or removed.`}
          </Card>
        </div>
        <div className="md:col-span-3">
          <Card
            title="YouTube tutorials"
            href="https://www.youtube.com/@useBlutui"
            icon={<Video />}
          >
            Watch developer tutorials on our YouTube channel.
          </Card>
        </div>
        <div className="md:col-span-3">
          <Card
            title="Discord"
            href="https://discord.gg/4H8dZW6Fva"
            icon={<Microphone />}
          >
            Join the community of Blutui developers on Discord.
          </Card>
        </div>
        <div className="md:col-span-3">
          <Card
            title="Blutui on Twitter"
            href="https://twitter.com/blutui"
            icon={<AtSymbol />}
          >
            Follow us for product updates, tips and more.
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Home

Home.layoutProps = {
  Layout: FullPageLayout,
}
