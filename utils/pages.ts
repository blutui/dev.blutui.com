'use no memo'

import { readdir } from 'node:fs/promises'
import path from 'node:path'

export function generateStaticParamsFor(contentDir: string, segmentKey: string = 'slug') {
  return async () => {
    const getAllMd = async (dir: string, base = ''): Promise<string[]> => {
      const entries = await readdir(dir, { withFileTypes: true })
      const files = await Promise.all(
        entries.map(async (entry) => {
          const res = path.join(dir, entry.name)
          const rel = path.join(base, entry.name)
          if (entry.isDirectory()) return getAllMd(res, rel)
          if (entry.isFile() && entry.name.endsWith('.md')) return [rel.replace(/\.md$/, '')]
          return []
        })
      )
      return files.flat()
    }

    const files = await getAllMd(path.join(process.cwd(), 'content', contentDir))
    return files.map((file) => ({
      [segmentKey]: file.split(path.sep),
    }))
  }
}
