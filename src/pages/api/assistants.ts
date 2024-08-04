// pages/api/createAssistant.js

import { openai } from '@/pages/openai'
import type { NextApiRequest, NextApiResponse } from 'next'

export const config = {
  api: {
    bodyParser: true, // Enable body parsing for JSON requests
  },
}

// Create a new assistant
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      const assistant = await openai.beta.assistants.create({
        instructions: 'You are a helpful assistant.',
        name: 'Quickstart Assistant',
        model: 'gpt-4o',
        tools: [
          { type: 'code_interpreter' },
          {
            type: 'function',
            function: {
              name: 'get_weather',
              description: 'Determine weather in my location',
              parameters: {
                type: 'object',
                properties: {
                  location: {
                    type: 'string',
                    description: 'The city and state e.g. San Francisco, CA',
                  },
                  unit: {
                    type: 'string',
                    enum: ['c', 'f'],
                  },
                },
                required: ['location'],
              },
            },
          },
          { type: 'file_search' },
        ],
      })
      res.status(200).json({ assistantId: assistant.id })
    } catch (error: any) {
      res.status(500).json({ error: error.message })
    }
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
