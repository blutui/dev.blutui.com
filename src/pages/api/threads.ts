// pages/api/createThread.ts

import type { NextApiRequest, NextApiResponse } from 'next'
import { openai } from '@/pages/openai'

export const config = {
  runtime: 'nodejs',
}

// Create a new thread
async function handlePost(req: NextApiRequest, res: NextApiResponse) {
  try {
    const thread = await openai.beta.threads.create()
    res.status(200).json({ threadId: thread.id })
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
