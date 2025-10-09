import { notFound } from 'next/navigation'
import { NextRequest, NextResponse } from 'next/server'

import { source } from 'lib/source'
import { getLLMText } from 'lib/get-llm-text'

export async function GET(_req: NextRequest, { params }: RouteContext<'/llms.mdx/[[...slug]]'>) {
  const { slug = [] } = await params
  const page = source.getPage(slug)
  if (!page) notFound()

  return new NextResponse(await getLLMText(page), {
    headers: {
      'Content-Type': 'text/markdown',
    },
  })
}

export function generateStaticParams() {
  return source.generateParams()
}
