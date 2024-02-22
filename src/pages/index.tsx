import { SearchButton } from '@/components/search'
import { FullPageLayout } from '@/layouts/full-page'

import { Button } from '@/components/button'
import { Card } from '@/components/card'

import { AcademicCapOutline } from '@/components/icons/academic-cap'
import { AtSymbol } from '@/components/icons/at-symbol'
import { BookOpenOutline } from '@/components/icons/book-open'
import { Microphone } from '@/components/icons/microphone'
import { SparklesOutline } from '@/components/icons/sparkles'
import { Video } from '@/components/icons/video'

import type { NextPageWithCustomLayout } from '@/types'

const Home: NextPageWithCustomLayout = () => {
  return (
    <div className="w-full flex-grow">
      <div className="relative -mt-[6.25rem] overflow-hidden pb-6 pt-[6.25rem] md:pb-10">
        <div className="mx-auto flex max-w-8xl items-center">
          <div className="w-full px-8 py-6 md:py-10">
            <p className="mb-2 text-xs uppercase tracking-widest text-zinc-500 dark:text-white/50">
              Developer Documentation
            </p>
            <h1 className="text-3xl font-extrabold tracking-tight text-zinc-800 lg:text-5xl dark:text-white">
              Welcome to Blutui
            </h1>
            <p className="mb-4 mt-2 text-base text-zinc-800/80 md:text-lg lg:text-xl dark:text-white/70">
              Explore our guides and documentation on using Blutui.
            </p>
            <div className="flex flex-col items-center gap-4 md:flex-row">
              <span className="hidden md:inline-block">
                <Button href="/docs/getting-started/create">Get started</Button>
              </span>
              <span className="hidden text-sm font-semibold uppercase text-zinc-800/40 md:block dark:text-white/40">
                or
              </span>
              <SearchButton className="inline-flex h-10 w-full max-w-xs select-none items-center whitespace-nowrap rounded-lg bg-zinc-900/10 px-3 text-base font-medium text-zinc-700 transition hover:bg-zinc-900/20 dark:bg-white/20 dark:text-zinc-300 dark:hover:bg-white/10">
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
      <div className="mx-auto mt-6 grid max-w-8xl gap-6 px-8 lg:grid-cols-6">
        <div className="md:col-span-3">
          <Card
            title="Read the docs"
            href="/docs/getting-started/create"
            icon={<BookOpenOutline />}
          >
            Learn how to get set up and start building your first project.
          </Card>
        </div>
        <div className="md:col-span-3">
          <Card title="Guides" href="/guides" icon={<AcademicCapOutline />}>
            Find a guide on how to develop with Blutui.
          </Card>
        </div>
        <div className="md:col-span-3">
          <Card
            title="What's new in Blutui"
            href="/changelog"
            icon={<SparklesOutline />}
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
            title="Blutui on X"
            href="https://x.com/blutui"
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
