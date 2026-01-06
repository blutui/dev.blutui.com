'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Sparkles, Search, Loader2, ChevronRight } from 'lucide-react'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { cn } from '../../lib/cn'
import { buttonVariants } from '../ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../ui/collapsible'

export interface VectorStoreSearchResultsPage {
  object: "vector_store.search_results.page";
  search_query: string;
  response: string;
  data: VectorStoreSearchResult[];
  has_more: boolean;
  next_page: string | null;
}

export interface VectorStoreSearchResult {
  file_id: string;
  filename: string;
  score: number;
  attributes: VectorStoreSearchResultAttributes;
  content: VectorStoreSearchContent[];
}

export interface VectorStoreSearchResultAttributes {
  timestamp: number;
  folder: string;
  filename: string;
}

export interface VectorStoreSearchContent {
  id: string;
  type: "text";
  text: string;
}

export function AiSearchModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [response, setResponse] = useState('')
  const [references, setReferences] = useState<VectorStoreSearchResult[]>([])
  const [isLoading, setIsLoading] = useState(false)

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
      const data: VectorStoreSearchResultsPage = await res.json()
      console.log('AI response data:', data)
      setReferences(data.data)
      setResponse(data.response)
    } catch (error) {
      console.error('Failed to fetch AI response', error)
      setResponse('Sorry, something went wrong.')
    } finally {
      setIsLoading(false)
    }
  }

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
              <Markdown remarkPlugins={[remarkGfm]}>{response}</Markdown>
            </div>
          )}
          {references.length > 0 && (
            <Collapsible className="border-t border-fd-border px-4 pt-2 pb-4">
              <CollapsibleTrigger className="group flex w-full items-center gap-2">
                <h3 className="text-sm font-medium">References</h3>
                <ChevronRight className="text-fd-muted-foreground size-4 transition-transform group-data-[state=open]:rotate-90" />
              </CollapsibleTrigger>
              <CollapsibleContent>
                <ul className="mt-2 list-disc pl-5 text-sm">
                  {references.map((ref, index) => {
                    const href = (() => {
                      let path = ref.filename
                      path = path.replace(/^content\/?/, '')
                      path = path.replace(/\.mdx?$/, '')
                      if (!path.startsWith('/')) path = '/' + path
                      return path
                    })()
                    return (
                      <li key={index}>
                        <Link 
                          href={href} 
                          className="hover:text-fd-primary underline block" 
                          onClick={() => setIsOpen(false)}
                        >
                          {ref.filename}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </CollapsibleContent>
            </Collapsible>
          )}
          {isLoading ? (
            <div className="text-fd-muted-foreground flex animate-pulse items-center gap-2 p-4 text-sm">
              <Loader2 className="size-4 animate-spin" />
              Thinking
            </div>
          ) : null}
        </div>
      </DialogContent>
    </Dialog>
  )
}
