import { RenderableTreeNodes } from '@markdoc/markdoc'

export interface Section {
  title: string
  [key: string]: any
}

export const collectHeadings = (
  node?: RenderableTreeNodes,
  sections: Section[] = []
): Section[] => {
  if (node && typeof node !== 'string' && !Array.isArray(node)) {
    if (node.name === 'Heading') {
      const title = node.children[0]

      if (typeof title === 'string') {
        sections.push({
          ...node.attributes,
          title,
        })
      }
    }

    if (node.children) {
      for (const child of node.children) {
        collectHeadings(child, sections)
      }
    }
  }

  return sections
}
