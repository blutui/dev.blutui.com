export interface Section {
  title: string
  id: string
  [key: string]: any
}

export const collectHeadings = (node?: any, sections: Section[] = []): Section[] => {
  if (node) {
    if (node.name === 'Heading' || node.name === 'Step') {
      const title = node.children[0]

      if (typeof title === 'string') {
        sections.push({
          ...node.attributes,
          id: node.attributes.id,
          title,
        })
      }

      if (node.attributes && node.attributes.title) {
        const stepTitle = node.attributes.title

        sections.push({
          level: 3,
          id: node.attributes.id,
          title: stepTitle,
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
