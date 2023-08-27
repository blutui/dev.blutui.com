export const Tags = ['Database & CMS', 'Build, Deployment & Git'] as const

export const Authors = ['Jayan Ratna', 'Ruslan Courtman'] as const

export interface GuidesNavigationItem {
  title: string
  authors: (typeof Authors)[number][]
  description: string
  slug: string
  tags: (typeof Tags)[number][]
  featured?: boolean
}

export const guidesNavigation: GuidesNavigationItem[] = [
  {
    featured: true,
    title:
      'How to Build a Fullstack App with Next.js, Prisma, and Vercel Postgres',
    authors: ['Jayan Ratna'],
    description: 'Create a fullstack application',
    slug: 'nextjs-prisma-postgres',
    tags: ['Database & CMS', 'Build, Deployment & Git'],
  },
  {
    title:
      'How to Build a Fullstack App with Next.js, Prisma, and Vercel Postgres',
    authors: ['Jayan Ratna'],
    description: 'Create a fullstack application',
    slug: 'nextjs-prisma-postgres',
    tags: ['Database & CMS', 'Build, Deployment & Git'],
  },
  {
    title:
      'How to Build a Fullstack App with Next.js, Prisma, and Vercel Postgres',
    authors: ['Jayan Ratna'],
    description: 'Create a fullstack application',
    slug: 'nextjs-prisma-postgres',
    tags: ['Database & CMS', 'Build, Deployment & Git'],
  },
  {
    title:
      'How to Build a Fullstack App with Next.js, Prisma, and Vercel Postgres',
    authors: ['Jayan Ratna'],
    description: 'Create a fullstack application',
    slug: 'nextjs-prisma-postgres',
    tags: ['Database & CMS', 'Build, Deployment & Git'],
  },
  {
    title:
      'How to Build a Fullstack App with Next.js, Prisma, and Vercel Postgres',
    authors: ['Jayan Ratna'],
    description: 'Create a fullstack application',
    slug: 'nextjs-prisma-postgres',
    tags: ['Database & CMS', 'Build, Deployment & Git'],
  },
  {
    title:
      'How to Build a Fullstack App with Next.js, Prisma, and Vercel Postgres',
    authors: ['Jayan Ratna'],
    description: 'Create a fullstack application',
    slug: 'nextjs-prisma-postgres',
    tags: ['Database & CMS', 'Build, Deployment & Git'],
  },
  {
    title:
      'How to Build a Fullstack App with Next.js, Prisma, and Vercel Postgres',
    authors: ['Jayan Ratna'],
    description: 'Create a fullstack application',
    slug: 'nextjs-prisma-postgres',
    tags: ['Database & CMS', 'Build, Deployment & Git'],
  },
  {
    title:
      'How to Build a Fullstack App with Next.js, Prisma, and Vercel Postgres',
    authors: ['Jayan Ratna'],
    description: 'Create a fullstack application',
    slug: 'nextjs-prisma-postgres',
    tags: ['Database & CMS', 'Build, Deployment & Git'],
  },
  {
    title:
      'How to Build a Fullstack App with Next.js, Prisma, and Vercel Postgres',
    authors: ['Jayan Ratna'],
    description: 'Create a fullstack application',
    slug: 'nextjs-prisma-postgres',
    tags: ['Database & CMS', 'Build, Deployment & Git'],
  },
  {
    title:
      'How to Build a Fullstack App with Next.js, Prisma, and Vercel Postgres',
    authors: ['Jayan Ratna'],
    description: 'Create a fullstack application',
    slug: 'nextjs-prisma-postgres',
    tags: ['Database & CMS', 'Build, Deployment & Git'],
  },
  {
    title:
      'How to Build a Fullstack App with Next.js, Prisma, and Vercel Postgres',
    authors: ['Jayan Ratna'],
    description: 'Create a fullstack application',
    slug: 'nextjs-prisma-postgres',
    tags: ['Database & CMS', 'Build, Deployment & Git'],
  },
  {
    title:
      'How to Build a Fullstack App with Next.js, Prisma, and Vercel Postgres',
    authors: ['Jayan Ratna'],
    description: 'Create a fullstack application',
    slug: 'nextjs-prisma-postgres',
    tags: ['Database & CMS', 'Build, Deployment & Git'],
  },
]
