'use client'

import { useEffect, useRef, useState } from 'react'
import { Sparkles, Search, Loader2, ChevronRight } from 'lucide-react'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { cn } from '../../lib/cn'
import { buttonVariants } from '../ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'
import { useTheme } from 'next-themes'

export interface VectorStoreSearchResultsPage {
  object: 'vector_store.search_results.page'
  search_query: string
  response: string
  data: VectorStoreSearchResult[]
  has_more: boolean
  next_page: string | null
}

export interface VectorStoreSearchResult {
  file_id: string
  filename: string
  score: number
  attributes: VectorStoreSearchResultAttributes
  content: VectorStoreSearchContent[]
}

export interface VectorStoreSearchResultAttributes {
  timestamp: number
  folder: string
  filename: string
}

export interface VectorStoreSearchContent {
  id: string
  type: 'text'
  text: string
}

export function AiSearchModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [response, setResponse] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)

  const { theme } = useTheme()

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open)
    if (!open) {
      setQuery('')
      setResponse('')
    }
  }

  useEffect(() => {
    if (response || isLoading) {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [response, isLoading])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!query.trim()) return

    setIsLoading(true)
    setResponse('') // Clear previous response

    try {
      const res = await fetch('/api/ai', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
      })

      if (!res.ok) {
        throw new Error(res.statusText)
      }

      const reader = res.body?.getReader()
      if (!reader) return

      const decoder = new TextDecoder()
      let buffer = ''

      while (true) {
        const { done, value } = await reader.read()
        if (done) break

        const text = decoder.decode(value, { stream: true })
        buffer += text

        const lines = buffer.split('\n')
        // Keep the last line in the buffer as it might be incomplete
        buffer = lines.pop() || ''

        for (const line of lines) {
          const trimmed = line.trim()
          if (!trimmed || !trimmed.startsWith('data: ')) continue

          try {
            const jsonStr = trimmed.slice(6) // Remove "data: " prefix
            const data = JSON.parse(jsonStr)
            if (data.response) {
              setResponse((prev) => prev + data.response)
            }
          } catch (e) {
            console.error('Failed to parse stream line:', line, e)
          }
        }
      }
    } catch (error) {
      console.error('Failed to fetch AI response', error)
      setResponse('Sorry, something went wrong.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <button
          className="border-fd-primary text-fd-primary hover:bg-fd-primary/5 hover:text-fd-primary/80 inline-flex items-center gap-2 rounded-full border p-1.5 px-3"
          aria-label="AI Search"
        >
          <Sparkles className="size-4" />
          <div className="hidden text-sm md:flex">Ask Blutui AI</div>
        </button>
      </DialogTrigger>
      <DialogContent className="flex max-h-[80vh] max-w-2xl flex-col gap-0 overflow-hidden p-0">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <div className="h-14 w-full gap-4">
              <div className="w-full">
                <form onSubmit={handleSubmit} className="">
                  <div className="relative">
                    <div className="flex items-center">
                      <Sparkles className="text-fd-primary/80 ml-4 size-6" />
                      <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Ask a Question"
                        className="h-14 w-full py-3 pr-12 pl-4 text-lg font-medium focus:ring-0 focus:outline-none"
                        autoFocus
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading || !query.trim()}
                      className={cn(
                        buttonVariants({ color: 'secondary', size: 'icon-sm' }),
                        'absolute top-1/2 right-2 -translate-y-1/2'
                      )}
                    >
                      <Search className="size-4" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </DialogTitle>
        </DialogHeader>

        <div className="flex max-h-96 flex-1 flex-col overflow-y-auto">
          {response && (
            <div className="prose prose-sm dark:prose-invert max-w-none p-4">
              <Markdown
                remarkPlugins={[remarkGfm]}
                components={{
                  code({ node, inline, className, children, ...props }: any) {
                    const match = /language-(\w+)/.exec(className || '')
                    return !inline && match ? (
                      <SyntaxHighlighter
                        className="not-prose"
                        {...props}
                        style={theme === 'dark' ? vscDarkPlus : undefined}
                        language={match[1] === 'canvas' ? 'twig' : match[1]}
                      >
                        {String(children).replace(/\n$/, '')}
                      </SyntaxHighlighter>
                    ) : (
                      <code {...props} className={className}>
                        {children}
                      </code>
                    )
                  },
                }}
              >
                {response}
              </Markdown>
            </div>
          )}
          {isLoading && !response ? (
            <div className="text-fd-muted-foreground flex animate-pulse items-center gap-2 p-4 text-sm">
              <Loader2 className="size-4 animate-spin" />
              Thinking
            </div>
          ) : null}
          <div ref={bottomRef} className="h-px w-full" />
        </div>
      </DialogContent>
    </Dialog>
  )
}
