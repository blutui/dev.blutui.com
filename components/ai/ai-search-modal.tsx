'use client';

import { useState, useRef, useEffect } from 'react';
import { Sparkles, Send } from 'lucide-react';
import { cn } from '../../lib/cn';
import { buttonVariants } from '../ui/button';
import { ScrollArea, ScrollViewport } from '../ui/scroll-area';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';

export function AiSearchModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const viewportRef = useRef<HTMLDivElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsLoading(true);
    setResponse(''); // Clear previous response

    try {
      // Example fetch call
      // const res = await fetch('/api/ai-search', {
      //   method: 'POST',
      //   body: JSON.stringify({ query }),
      // });
      // const data = await res.json();
      
      // Simulating a fetch with a delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const mockResponse = `Here is a simulated response for: "${query}".\n\nThis is where the AI answer would appear. It can be long and detailed.\n\n- Point 1\n- Point 2\n- Point 3\n\nCurrently this is fetched all at once, but the structure allows for streaming updates in the future.`;
      
      setResponse(mockResponse);
    } catch (error) {
      console.error('Failed to fetch AI response', error);
      setResponse('Sorry, something went wrong.');
    } finally {
      setIsLoading(false);
    }
  };

  // Auto-scroll to bottom when response updates
  useEffect(() => {
    if (viewportRef.current) {
      viewportRef.current.scrollTop = viewportRef.current.scrollHeight;
    }
  }, [response, isLoading]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <button
          className="inline-flex items-center rounded-full border border-fd-primary p-1.5 px-3 gap-2 text-fd-primary hover:bg-fd-primary/5 hover:text-fd-primary/80"
          aria-label="AI Search"
        >
          <Sparkles className="size-4 " />
          <div className='hidden md:flex text-sm'>Ask Blutui AI</div>
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl p-0 gap-0 overflow-hidden max-h-[80vh] flex flex-col">
        <DialogHeader className="p-4 border-b border-fd-border">
          <DialogTitle className="flex items-center gap-2">
            <Sparkles className="size-5 text-fd-primary/80" />
            Blutui AI 
          </DialogTitle>
        </DialogHeader>

        <div className="flex-1 overflow-hidden relative flex flex-col min-h-75">
            <ScrollArea className="flex-1">
              <ScrollViewport ref={viewportRef} className="p-4">
                {response ? (
                    <div className="prose prose-sm dark:prose-invert max-w-none whitespace-pre-wrap">
                    {response}
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center h-full text-fd-muted-foreground py-20">
                    <Sparkles className="size-10 mb-2 opacity-20" />
                    <p>Ask me anything about the documentation...</p>
                    </div>
                )}
                {isLoading && (
                    <div className="mt-4 flex items-center gap-2 text-sm text-fd-muted-foreground animate-pulse">
                    <Sparkles className="size-4" />
                    Thinking...
                    </div>
                )}
              </ScrollViewport>
            </ScrollArea>
        </div>

        <form onSubmit={handleSubmit} className="p-4 border-t border-fd-border bg-fd-muted/30">
          <div className="relative">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ask a Question"
              className="w-full bg-fd-background border border-fd-border rounded-md pl-4 pr-12 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-fd-primary/50"
              autoFocus
            />
            <button
              type="submit"
              disabled={isLoading || !query.trim()}
              className={cn(
                buttonVariants({ color: 'primary', size: 'icon-sm' }),
                "absolute right-2 top-1/2 -translate-y-1/2"
              )}
            >
              <Send className="size-4" />
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
