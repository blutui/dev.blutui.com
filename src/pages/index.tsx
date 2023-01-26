import React from 'react'
import Link, { LinkProps } from 'next/link'
import { SearchButton } from '@/components/Search'
import { FullPageLayout } from '@/layouts/FullPageLayout'

import type { NextPageWithCustomLayout } from '@/types'

const VideoIcon = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
        />
      </svg>
    </>
  )
}

const MicrophoneIcon = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z"
        />
      </svg>
    </>
  )
}

const AtSymbolIcon = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          stroke-linecap="round"
          d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
        />
      </svg>
    </>
  )
}

interface CardProps {
  title: string
  description: string
  url: LinkProps['href']
  icon?: React.ReactNode
}

const Card = ({ title, description, url, icon }: CardProps) => {
  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-lg bg-zinc-900/5 p-4 transition hover:scale-105 hover:opacity-80 dark:bg-white/5 dark:highlight-white/10"
    >
      <div className="mb-1.5 flex items-center gap-1.5">
        {icon && <span className="text-indigo-400 opacity-60">{icon}</span>}
        <h4 className="font-semibold tracking-tight text-zinc-700 dark:text-zinc-100">
          {title}
        </h4>
      </div>
      <p className="text-sm text-zinc-500 dark:text-zinc-300">{description}</p>
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
      <div className="mx-auto mt-6 grid max-w-screen-xl gap-6 md:grid-cols-3">
        <Card
          title="YouTube tutorials"
          description="Watch developer tutorials on our YouTube channel."
          url="https://www.youtube.com/channel/UCWwCTqK_D0mI-nZAF1zlKOA"
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
