import * as fs from 'fs'
import path from 'path'
import Markdoc, { Node } from '@markdoc/markdoc'

interface Loader {
  ast: Node
  path: string
}

export function loadMarkdown(file: string, directory?: string): Loader {
  if (!directory) directory = 'src/docs'

  // Resolve the path based on the given directory and get its contents...
  const resolvedPath = path.resolve(directory, file)
  const source = fs.readFileSync(resolvedPath, 'utf-8')

  const ast = Markdoc.parse(source)

  const errors = Markdoc.validate(ast)

  if (errors.length) {
    throw new Error(errors.join('\n'))
  }

  return {
    ast,
    path: resolvedPath,
  }
}
