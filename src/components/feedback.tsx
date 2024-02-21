import { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import cn from 'clsx'
import Cookies from 'js-cookie'
import va from '@vercel/analytics'

const reactions = [
  {
    label: 'Very helpful',
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        className="h-4 w-4"
      >
        <path d="M2.09 15a1 1 0 0 0 1-1V8a1 1 0 1 0-2 0v6a1 1 0 0 0 1 1ZM5.765 13H4.09V8c.663 0 1.218-.466 1.556-1.037a4.02 4.02 0 0 1 1.358-1.377c.478-.292.907-.706.989-1.26V4.32a9.03 9.03 0 0 0 0-2.642c-.028-.194.048-.394.224-.479A2 2 0 0 1 11.09 3c0 .812-.08 1.605-.235 2.371a.521.521 0 0 0 .502.629h1.733c1.104 0 2.01.898 1.901 1.997a19.831 19.831 0 0 1-1.081 4.788c-.27.747-.998 1.215-1.793 1.215H9.414c-.215 0-.428-.035-.632-.103l-2.384-.794A2.002 2.002 0 0 0 5.765 13Z" />
      </svg>
    ),
  },
  {
    label: 'Not helpful',
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        className="h-4 w-4"
      >
        <path d="M10.325 3H12v5c-.663 0-1.219.466-1.557 1.037a4.02 4.02 0 0 1-1.357 1.377c-.478.292-.907.706-.989 1.26v.005a9.031 9.031 0 0 0 0 2.642c.028.194-.048.394-.224.479A2 2 0 0 1 5 13c0-.812.08-1.605.234-2.371a.521.521 0 0 0-.5-.629H3C1.896 10 .99 9.102 1.1 8.003A19.827 19.827 0 0 1 2.18 3.215C2.45 2.469 3.178 2 3.973 2h2.703a2 2 0 0 1 .632.103l2.384.794a2 2 0 0 0 .633.103ZM14 2a1 1 0 0 0-1 1v6a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1Z" />
      </svg>
    ),
  },
]

export function Feedback() {
  const { pathname } = useRouter()

  const slugify = useCallback((value: string) => {
    return value.startsWith('/')
      ? value.replace('/', '').replaceAll('/', '_')
      : value.replaceAll('/', '_')
  }, [])

  const [reaction, setReaction] = useState<string | null>(null)

  useEffect(() => {
    const reaction = Cookies.get(`feedback-dev-${slugify(pathname)}`)
    reaction ? setReaction(reaction) : setReaction(null)
  }, [slugify, pathname, reaction])

  return (
    <div className="flex w-full items-center pb-8">
      <p className="mr-4 text-sm font-medium text-zinc-500">
        Was this helpful?
      </p>
      <div className="flex space-x-3">
        {reactions.map(({ icon, label }) => {
          const Icon = icon

          return (
            <button
              key={label}
              className={cn(
                'flex h-8 w-8 items-center justify-center space-x-2 rounded-md text-sm leading-tight ring-1 transition',
                reaction === label
                  ? 'text-han-300 ring-han-300/50'
                  : 'text-zinc-400 ring-zinc-200 dark:text-zinc-500 dark:ring-zinc-700'
              )}
              onClick={() => {
                va.track(`Feedback: ${label}`, {
                  path: pathname,
                })
                Cookies.set(`feedback-dev-${slugify(pathname)}`, label, {
                  sameSite: 'Lax',
                })
                setReaction(label)
              }}
            >
              <Icon />
            </button>
          )
        })}
      </div>
    </div>
  )
}
