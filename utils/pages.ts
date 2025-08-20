'use no memo'

import { readdir } from 'node:fs/promises'
import path from 'node:path'

export const getAllPages = async (directory: string, base = ''): Promise<string[]> => {
  const contentDir = path.join(process.cwd(), 'content')
  const content = path.join(contentDir, directory.replace(contentDir, ''))

  const entries = await readdir(content, { withFileTypes: true })
  const files = await Promise.all(
    entries.map(async (entry) => {
      const res = path.join(content, entry.name)
      const rel = path.join(base, entry.name)
      if (entry.isDirectory()) return getAllPages(res, rel)
      if (entry.isFile() && entry.name.endsWith('.md')) return [rel.replace(/\.md$/, '')]
      return []
    })
  )
  return files.flat()
}

export function generateStaticParamsFor(contentDir: string, segmentKey: string = 'slug') {
  return async () => {
    const files = await getAllPages(contentDir)
    return files.map((file) => ({
      [segmentKey]: file.split(path.sep),
    }))
  }
}
