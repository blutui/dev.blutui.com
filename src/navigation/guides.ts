export const Tags = ['Database & CMS', 'Build, Deployment & Git'] as const

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
    tags: ['Database & CMS', 'Build, Deployment & Git'],
    createdAt: '2023-08-28',
    featured: true,
  },
  {
    title:
      'How to Build a Fullstack App with Next.js, Prisma, and Vercel Postgres',
    authors: ['Jayan Ratna'],
    description: 'Create a fullstack application',
    slug: 'nextjs-prisma-postgres-1',
    tags: ['Database & CMS', 'Build, Deployment & Git'],
    createdAt: '2023-08-28',
  },
  {
    title:
      'How to Build a Fullstack App with Next.js, Prisma, and Vercel Postgres',
    authors: ['Jayan Ratna'],
    description: 'Create a fullstack application',
    slug: 'nextjs-prisma-postgres-2',
    tags: ['Database & CMS', 'Build, Deployment & Git'],
    createdAt: '2023-08-28',
  },
  {
    title:
      'How to Build a Fullstack App with Next.js, Prisma, and Vercel Postgres',
    authors: ['Jayan Ratna'],
    description: 'Create a fullstack application',
    slug: 'nextjs-prisma-postgres-3',
    tags: ['Database & CMS', 'Build, Deployment & Git'],
    createdAt: '2023-08-28',
  },
  {
    title:
      'How to Build a Fullstack App with Next.js, Prisma, and Vercel Postgres',
    authors: ['Jayan Ratna'],
    description: 'Create a fullstack application',
    slug: 'nextjs-prisma-postgres-4',
    tags: ['Database & CMS', 'Build, Deployment & Git'],
    createdAt: '2023-08-28',
  },
  {
    title:
      'How to Build a Fullstack App with Next.js, Prisma, and Vercel Postgres',
    authors: ['Jayan Ratna'],
    description: 'Create a fullstack application',
    slug: 'nextjs-prisma-postgres-5',
    tags: ['Database & CMS', 'Build, Deployment & Git'],
    createdAt: '2023-08-28',
  },
  {
    title:
      'How to Build a Fullstack App with Next.js, Prisma, and Vercel Postgres',
    authors: ['Jayan Ratna'],
    description: 'Create a fullstack application',
    slug: 'nextjs-prisma-postgres-6',
    tags: ['Database & CMS', 'Build, Deployment & Git'],
    createdAt: '2023-08-28',
  },
  {
    title:
      'How to Build a Fullstack App with Next.js, Prisma, and Vercel Postgres',
    authors: ['Jayan Ratna'],
    description: 'Create a fullstack application',
    slug: 'nextjs-prisma-postgres-7',
    tags: ['Database & CMS', 'Build, Deployment & Git'],
    createdAt: '2023-08-28',
  },
  {
    title:
      'How to Build a Fullstack App with Next.js, Prisma, and Vercel Postgres',
    authors: ['Jayan Ratna'],
    description: 'Create a fullstack application',
    slug: 'nextjs-prisma-postgres-8',
    tags: ['Database & CMS', 'Build, Deployment & Git'],
    createdAt: '2023-08-28',
  },
  {
    title:
      'How to Build a Fullstack App with Next.js, Prisma, and Vercel Postgres',
    authors: ['Jayan Ratna'],
    description: 'Create a fullstack application',
    slug: 'nextjs-prisma-postgres-9',
    tags: ['Database & CMS', 'Build, Deployment & Git'],
    createdAt: '2023-08-28',
  },
  {
    title:
      'How to Build a Fullstack App with Next.js, Prisma, and Vercel Postgres',
    authors: ['Jayan Ratna'],
    description: 'Create a fullstack application',
    slug: 'nextjs-prisma-postgres-10',
    tags: ['Database & CMS', 'Build, Deployment & Git'],
    createdAt: '2023-08-28',
  },
  {
    title:
      'How to Build a Fullstack App with Next.js, Prisma, and Vercel Postgres',
    authors: ['Jayan Ratna'],
    description: 'Create a fullstack application',
    slug: 'nextjs-prisma-postgres-11',
    tags: ['Database & CMS', 'Build, Deployment & Git'],
    createdAt: '2023-08-28',
  },
]
