// pages/api/sendMessage.ts

import type { NextApiRequest, NextApiResponse } from 'next'
import { assistantId } from '@/pages/assistant-config'
import { openai } from '@/pages/openai'

export const maxDuration = 60

export const config = {
  api: {
    bodyParser: true, // Enable body parsing for JSON requests
  },
}

// Send a new message to a thread
async function handlePost(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { id } = req.query as { id: string }
    console.log('thread id', id)
    console.log(req.body)
    const { content } = JSON.parse(req.body)
    console.log('content', content)

    await openai.beta.threads.messages.create(id, {
      role: 'user',
      content: content,
    })

    console.log('create message')

    const stream = await openai.beta.threads.runs.stream(id, {
      assistant_id: assistantId,
    })

    console.log('run steream', stream)

    res.status(200).send(stream.toReadableStream())
  } catch (error: any) {
    res.status(500).json({ error: error.message })
  }
}

// API Route Handler
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case 'POST':
      await handlePost(req, res)
      break
    default:
      res.setHeader('Allow', ['POST'])
      res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
