import Script from 'next/script'
import { useState } from 'react'

export function AskAiButton() {
  const [showButton, setShowButton] = useState(false)

  const handleOnLoad = () => {
    if (typeof window === 'undefined') return

    window.glime.init('jR6iKewHiGONKp', {
      hideCollapsedButton: true,
    })

    setShowButton(true)
  }

  const handleOnClick = () => {
    if (typeof window === 'undefined') return

    window.glime.expand()
  }

  return (
    <>
      <Script
        defer
        src="https://cdn.glimelab.ai/widget/1.0.0/widget.js"
        onLoad={handleOnLoad}
      />
      {showButton && (
        <button
          className="flex shrink-0 items-center justify-center space-x-1 rounded-full bg-transparent px-3 py-2 text-han-300 ring-1 ring-han-300/50 transition hover:bg-han-200/20 hover:text-han-200 hover:ring-han-200/50"
          onClick={handleOnClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-4 shrink-0"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              stroke="currentColor"
              strokeLinejoin="round"
              d="M8 15c4.875 0 7-2.051 7-7 0 4.949 2.11 7 7 7-4.89 0-7 2.11-7 7 0-4.89-2.125-7-7-7ZM2 6.5c3.134 0 4.5-1.318 4.5-4.5 0 3.182 1.357 4.5 4.5 4.5-3.143 0-4.5 1.357-4.5 4.5 0-3.143-1.366-4.5-4.5-4.5Z"
            />
          </svg>
          <span className="hidden text-sm font-bold leading-none tracking-tight md:block">
            Ask AI
          </span>
        </button>
      )}
    </>
  )
}
