import fs from 'fs'
import dynamic from 'next/dynamic'
import path from 'path'

export function getDocuments() {
  const dir = path.join(process.cwd(), 'content', 'docs')
  const files = fs
    .readdirSync(dir, { recursive: true })
    .filter((file) => typeof file === 'string' && path.extname(file) === '.md')

  return files.map((file) => {
    if (typeof file !== 'string') return

    const filePath = path.join(dir, file)

    return { filePath }
  })
}
