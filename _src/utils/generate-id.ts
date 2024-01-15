import { RenderableTreeNode } from '@markdoc/markdoc'

export function generateID(
  children: RenderableTreeNode[],
  attributes: Record<string, any>
): string {
  if (attributes.id && typeof attributes.id === 'string') {
    return attributes.id
  }

  return children
    .filter((child: any) => typeof child === 'string')
    .join(' ')
    .replace(/[^A-Za-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/\//g, '-')
    .toLowerCase()
}
