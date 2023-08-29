export const Tags = ['Integrations', 'Webhooks', 'Courier'] as const

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
    title: 'How do I send form submissions to Zapier?',
    authors: ['Jayan Ratna'],
    description:
      'Information on how to send form submissions from a Blutui project to Zapier.',
    slug: 'send-form-submissions-to-zapier',
    tags: ['Integrations', 'Webhooks'],
    createdAt: '2023-08-30',
  },
  {
    title: 'How do I send form submissions to Make / Integromat?',
    authors: ['Jayan Ratna'],
    description:
      'Information on how to send form submissions from a Blutui project to Make (formerly Integromat).',
    slug: 'send-form-submissions-to-make',
    tags: ['Integrations', 'Webhooks'],
    createdAt: '2023-08-30',
  },
  {
    featured: true,
    title: 'How do I install Blutui Courier on macOS?',
    authors: ['Ruslan Courtman'],
    description: 'Learn how to get started with Blutui Courier on macOS.',
    slug: 'install-courier-on-macos',
    tags: ['Courier'],
    createdAt: '2023-08-31',
  },
  {
    title: 'How do I install Blutui Courier on Linux?',
    authors: ['Ruslan Courtman'],
    description: 'Learn how to get started with Blutui Courier on Linux.',
    slug: 'install-courier-on-linux',
    tags: ['Courier'],
    createdAt: '2023-08-30',
  },
  {
    title: 'How do I install Blutui Courier on Windows?',
    authors: ['Ruslan Courtman'],
    description: 'Learn how to get started with Blutui Courier on Windows.',
    slug: 'install-courier-on-windows',
    tags: ['Courier'],
    createdAt: '2023-08-29',
  },
]
