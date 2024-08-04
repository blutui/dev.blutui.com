// pages/api/vectorStore.ts

import type { NextApiRequest, NextApiResponse } from 'next'
import { assistantId } from '@/pages/assistant-config'
import { openai } from '@/pages/openai'

// Upload file to assistant's vector store
async function handlePost(req: NextApiRequest, res: NextApiResponse) {
  const formData = await req.body
  //log formData to check if it is accurate
  const file = formData.get('file') as File

  const vectorStoreId = await getOrCreateVectorStore()

  // Upload using the file stream
  const openaiFile = await openai.files.create({
    file,
    purpose: 'assistants',
  })

  // Add file to vector store
  await openai.beta.vectorStores.files.create(vectorStoreId, {
    file_id: openaiFile.id,
  })

  res.status(200).end()
}

// List files in assistant's vector store
async function handleGet(req: NextApiRequest, res: NextApiResponse) {
  const vectorStoreId = await getOrCreateVectorStore()
  const fileList = await openai.beta.vectorStores.files.list(vectorStoreId)

  const filesArray = await Promise.all(
    fileList.data.map(async (file) => {
      const fileDetails = await openai.files.retrieve(file.id)
      const vectorFileDetails = await openai.beta.vectorStores.files.retrieve(
        vectorStoreId,
        file.id
      )
      return {
        file_id: file.id,
        filename: fileDetails.filename,
        status: vectorFileDetails.status,
      }
    })
  )

  res.status(200).json(filesArray)
}

// Delete file from assistant's vector store
async function handleDelete(req: NextApiRequest, res: NextApiResponse) {
  const { fileId } = req.body

  const vectorStoreId = await getOrCreateVectorStore()
  await openai.beta.vectorStores.files.del(vectorStoreId, fileId)

  res.status(200).end()
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
    case 'GET':
      await handleGet(req, res)
      break
    case 'DELETE':
      await handleDelete(req, res)
      break
    default:
      res.setHeader('Allow', ['POST', 'GET', 'DELETE'])
      res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}

/* Helper functions */

const getOrCreateVectorStore = async (): Promise<string> => {
  const assistant: any = await openai.beta.assistants.retrieve(assistantId)

  // If the assistant already has a vector store, return it
  if (assistant.tool_resources?.file_search?.vector_store_ids?.length > 0) {
    return assistant.tool_resources.file_search.vector_store_ids[0]
  }

  // Otherwise, create a new vector store and attach it to the assistant
  const vectorStore = await openai.beta.vectorStores.create({
    name: 'sample-assistant-vector-store',
  })

  await openai.beta.assistants.update(assistantId, {
    tool_resources: {
      file_search: {
        vector_store_ids: [vectorStore.id],
      },
    },
  })

  return vectorStore.id
}
