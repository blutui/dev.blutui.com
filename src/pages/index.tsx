import React from 'react'
import Link, { LinkProps } from 'next/link'
import cn from 'clsx'

import { SearchButton } from '@/components/Search'
import { FullPageLayout } from '@/layouts/FullPageLayout'

import type { NextPageWithCustomLayout } from '@/types'

const VideoIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-6 w-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
      />
    </svg>
  )
}

const MicrophoneIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-6 w-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z"
      />
    </svg>
  )
}

const AtSymbolIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-6 w-6"
    >
      <path
        strokeLinecap="round"
        d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
      />
    </svg>
  )
}

const BookOpenIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-6 w-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
      />
    </svg>
  )
}

const SparklesIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-6 w-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
      />
    </svg>
  )
}

interface CardProps {
  title: string
  description: string
  url: LinkProps['href']
  icon?: React.ReactNode
  bg?: string
  span?: 1 | 1.5 | 2 | 2.5 | 3
}

const Card = ({ title, description, url, icon, bg, span }: CardProps) => {
  const cardSpan = span ?? 1
  const cardSpanClasses: { [span in typeof cardSpan]: string } = {
    1: 'md:col-span-2',
    1.5: 'md:col-span-3',
    2: 'md:col-span-4',
    2.5: 'md:col-span-5',
    3: 'md:col-span-6',
  }

  return (
    <Link
      href={url}
      target={url.toString().startsWith('http') ? '_blank' : undefined}
      rel="noopener noreferrer"
      className={cn(
        bg ?? 'bg-zinc-900/5 dark:bg-white/5',
        'rounded-xl p-6 transition hover:opacity-70',
        cardSpanClasses[cardSpan]
      )}
    >
      <div className="mb-2 flex items-center gap-2">
        {icon && (
          <span className="text-black/60 opacity-60 dark:text-white/60">
            {icon}
          </span>
        )}
        <h4 className="text-lg font-semibold tracking-tight text-zinc-700 dark:text-zinc-100">
          {title}
        </h4>
      </div>
      <p className="text-sm font-medium text-black/80 dark:text-white/80">
        {description}
      </p>
    </Link>
  )
}

const Home: NextPageWithCustomLayout = () => {
  return (
    <div className="flex-grow">
      <div className="relative -mx-8 -mt-[6.25rem] overflow-hidden pt-[6.25rem] pb-10">
        {/* Inspiration from Stripe Docs */}
        <div className="absolute inset-0 -z-20">
          <div className="h-full w-full bg-gradient-to-b from-cyan-400 via-pink-300 to-transparent"></div>
        </div>
        <div className="absolute top-0 left-0 -z-10 h-screen w-full bg-dots from-zinc-50 to-zinc-50 bg-[length:14px_14px] dark:from-zinc-900 dark:to-zinc-900"></div>
        <div className="mx-auto flex max-w-screen-xl items-center">
          <div className="bg-zinc-50/90 py-10 px-8 text-left shadow-[0_0_128px_128px] shadow-zinc-50/90 dark:bg-zinc-900/90 dark:shadow-zinc-900/90">
            <p className="mb-2 text-xs uppercase tracking-widest text-white/50">
              Developer Documentation
            </p>
            <h1 className="text-5xl font-bold tracking-tight text-gray-800 dark:text-white">
              Welcome to Blutui
            </h1>
            <p className="mt-2 mb-4 text-xl text-gray-800/80 dark:text-white/80">
              Explore our guides and documentation on using Blutui.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="/docs/getting-started/create"
                className="inline-flex h-9 select-none items-center whitespace-nowrap rounded-lg bg-indigo-500 px-4 text-sm font-semibold tracking-tight text-white transition highlight-white/10 hover:bg-indigo-400"
              >
                Get started
              </Link>
              <span className="text-sm font-semibold uppercase text-zinc-800/40 dark:text-white/40">
                or
              </span>
              <SearchButton className="inline-flex h-9 w-full max-w-xs select-none items-center whitespace-nowrap rounded-lg bg-zinc-900/10 px-3 text-sm font-semibold tracking-tight text-zinc-700 transition hover:bg-zinc-900/20 dark:bg-white/20 dark:text-white dark:highlight-white/10 dark:hover:bg-white/10">
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
      <div className="mx-auto mt-6 grid max-w-screen-xl gap-6 md:grid-cols-6">
        <Card
          title="Read the docs"
          description="Learn how to get set up and start building your first project."
          url="/docs/getting-started/create"
          icon={<BookOpenIcon />}
          span={1.5}
        />
        <Card
          title="What's new in Blutui"
          description="Watch developer tutorials on our YouTube channel."
          url="/changelog"
          icon={<SparklesIcon />}
          span={1.5}
        />
        <Card
          title="YouTube tutorials"
          description="Watch developer tutorials on our YouTube channel."
          url="https://www.youtube.com/@useBlutui"
          icon={<VideoIcon />}
        />
        <Card
          title="Discord"
          description="Join the community of Blutui developers on Discord."
          url="https://discord.gg/4H8dZW6Fva"
          icon={<MicrophoneIcon />}
        />
        <Card
          title="Blutui on Twitter"
          description="Follow us for product updates, tips and more."
          url="https://twitter.com/blutui"
          icon={<AtSymbolIcon />}
        />
      </div>
    </div>
  )
}

export default Home

Home.layoutProps = {
  Layout: FullPageLayout,
}
