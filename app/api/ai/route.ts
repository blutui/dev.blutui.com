export async function POST(request: Request) {
  const { query } = await request.json()

  const res = await fetch(process.env.AI_SEARCH_API ?? 'https://ai-search-api.blutui.workers.dev/ai', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
  })

  const data = await res.json()

  return Response.json(data)
}
