// pages/api/downloadFile.ts

import type { NextApiRequest, NextApiResponse } from 'next'
import { openai } from '@/pages/openai'

// download file by file ID
async function handleGet(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { id } = req.query as { id: string }

    const [file, fileContent] = await Promise.all([
      openai.files.retrieve(id),
      openai.files.content(id),
    ])

    res.setHeader(
      'Content-Disposition',
      `attachment; filename="${file.filename}"`
    )
    res.status(200).send(fileContent.body)
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
    case 'GET':
      await handleGet(req, res)
      break
    default:
      res.setHeader('Allow', ['GET'])
      res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
