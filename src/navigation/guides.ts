export const Tags = ['Database & CMS', 'Build, Deployment & Git'] as const

export interface GuidesNavigationItem {
  title: string
  description: string
  url: string
  tags: (typeof Tags)[number][]
  featured?: boolean
}

export const guidesNavigation: GuidesNavigationItem[] = [
  {
    featured: true,
    title:
      'How to Build a Fullstack App with Next.js, Prisma, and Vercel Postgres',
    description: 'Create a fullstack application',
    url: '/guides/nextjs-prisma-postgres',
    tags: ['Database & CMS', 'Build, Deployment & Git'],
  },
  {
    title:
      'How to Build a Fullstack App with Next.js, Prisma, and Vercel Postgres',
    description: 'Create a fullstack application',
    url: '/guides/nextjs-prisma-postgres',
    tags: ['Database & CMS', 'Build, Deployment & Git'],
  },
  {
    title:
      'How to Build a Fullstack App with Next.js, Prisma, and Vercel Postgres',
    description: 'Create a fullstack application',
    url: '/guides/nextjs-prisma-postgres',
    tags: ['Database & CMS', 'Build, Deployment & Git'],
  },
]
