export const Tags = ['Integrations', 'Webhooks'] as const

export const Authors = ['Jayan Ratna', 'Ruslan Courtman'] as const

export interface GuidesNavigationItem {
  title: string
  authors: (typeof Authors)[number][]
  description: string
  slug: string
  tags: (typeof Tags)[number][]
  /** The date the guide was created at - Use YYYY-MM-DD format */
  createdAt: string
  featured?: boolean
}

export const getGuideBySlug = (slug: string) => {
  return guidesNavigation.find((guide) => guide.slug === slug)
}

export const guidesNavigation: GuidesNavigationItem[] = [
  {
    title:
      'How to Build a Fullstack App with Next.js, Prisma, and Vercel Postgres',
    authors: ['Jayan Ratna', 'Ruslan Courtman'],
    description: 'Create a fullstack application',
    slug: 'nextjs-prisma-postgres',
    tags: ['Integrations'],
    createdAt: '2023-08-28',
    featured: true,
  },
  {
    title:
      'How to Build a Fullstack App with Next.js, Prisma, and Vercel Postgres',
    authors: ['Jayan Ratna'],
    description: 'Create a fullstack application',
    slug: 'nextjs-prisma-postgres-1',
    tags: ['Integrations', 'Webhooks'],
    createdAt: '2023-08-30',
  },
  {
    title:
      'How to Build a Fullstack App with Next.js, Prisma, and Vercel Postgres',
    authors: ['Jayan Ratna'],
    description: 'Create a fullstack application',
    slug: 'nextjs-prisma-postgres-1',
    tags: ['Integrations', 'Webhooks'],
    createdAt: '2023-08-10',
  },
]
