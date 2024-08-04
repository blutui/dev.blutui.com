// pages/api/sendMessage.ts

import type { NextApiRequest, NextApiResponse } from 'next'
import { openai } from '@/pages/openai'

// Send a new message to a thread
async function handlePost(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { id } = req.query as { id: string }
    const { toolCallOutputs, runId } = req.body

    const stream = await openai.beta.threads.runs.submitToolOutputsStream(
      id,
      runId,
      { tool_outputs: toolCallOutputs }
    )

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

export const config = {
  api: {
    bodyParser: true, // Enable body parsing for JSON requests
  },
}
