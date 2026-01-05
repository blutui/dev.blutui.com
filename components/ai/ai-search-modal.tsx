'use client'

import { useState, useRef, useEffect } from 'react'
import { Sparkles, Send } from 'lucide-react'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { cn } from '../../lib/cn'
import { buttonVariants } from '../ui/button'
import { ScrollArea, ScrollViewport } from '../ui/scroll-area'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'

export function AiSearchModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [response, setResponse] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const viewportRef = useRef<HTMLDivElement>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!query.trim()) return

    setIsLoading(true)
    setResponse('') // Clear previous response

    try {
      const res = await fetch('/api/ai', {
        method: 'POST',
        body: JSON.stringify({ query }),
      })
      const data = await res.json()
      console.log('AI response data:', data)

      // Simulating a fetch with a delay
      //   await new Promise(resolve => setTimeout(resolve, 1000));

      //   const mockResponse = `Here is a simulated response for: "${query}".\n\nThis is where the AI answer would appear. It can be long and detailed.\n\n- Point 1\n- Point 2\n- Point 3\n\nCurrently this is fetched all at once, but the structure allows for streaming updates in the future.`;

      setResponse(data.response)
    } catch (error) {
      console.error('Failed to fetch AI response', error)
      setResponse('Sorry, something went wrong.')
    } finally {
      setIsLoading(false)
    }
  }

  // Auto-scroll to bottom when response updates
  useEffect(() => {
    if (viewportRef.current) {
      viewportRef.current.scrollTop = viewportRef.current.scrollHeight
    }
  }, [response, isLoading])

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
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
        <DialogHeader className="border-fd-border border-b p-4">
          <DialogTitle className="flex items-center gap-2">
            <Sparkles className="text-fd-primary/80 size-5" />
            Blutui AI
          </DialogTitle>
        </DialogHeader>

        <div className="relative flex max-h-96 flex-1 flex-col">
          <ScrollArea className="flex-1">
            <ScrollViewport ref={viewportRef} className="p-4">
              {response && (
                <div className="prose prose-sm dark:prose-invert max-w-none">
                  <Markdown remarkPlugins={[remarkGfm]}>{response}</Markdown>
                </div>
              ) }
              {isLoading && response ? (
                <div className="text-fd-muted-foreground mt-4 flex animate-pulse items-center gap-2 text-sm">
                  <Sparkles className="size-4" />
                  Thinking...
                </div>
              ) : (<div className="text-fd-muted-foreground flex h-full flex-col items-center justify-center py-20">
                  <Sparkles className="mb-2 size-10 opacity-20" />
                  <p>Ask me anything about the documentation...</p>
                </div>)}
            </ScrollViewport>
          </ScrollArea>
        </div>

        <form onSubmit={handleSubmit} className="border-fd-border bg-fd-muted/30 border-t p-4">
          <div className="relative">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ask a Question"
              className="bg-fd-background border-fd-border focus:ring-fd-primary/50 w-full rounded-md border py-3 pr-12 pl-4 text-sm focus:ring-2 focus:outline-none"
              autoFocus
            />
            <button
              type="submit"
              disabled={isLoading || !query.trim()}
              className={cn(
                buttonVariants({ color: 'primary', size: 'icon-sm' }),
                'absolute top-1/2 right-2 -translate-y-1/2'
              )}
            >
              <Send className="size-4" />
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
