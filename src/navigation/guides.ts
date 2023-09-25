export const Tags = [
  'Canvas',
  'Console',
  'Courier',
  'Dashboard',
  'Forms',
  'Integrations',
  'Projects',
  'Security',
  'Webhooks',
] as const

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
    title: 'How do I send form submissions to an email address?',
    authors: ['Ruslan Courtman'],
    description:
      'Information on how to send form submission from a Blutui project to an email address.',
    slug: 'send-form-submissions-to-an-email-address',
    tags: ['Forms', 'Dashboard'],
    createdAt: '2023-09-25',
  },
  {
    title: 'How can I make the most out of Blutui Canvas?',
    authors: ['Ruslan Courtman'],
    description:
      'Learn how you can leverage Blutui Canvas to build web projects.',
    slug: 'make-the-most-out-of-canvas',
    tags: ['Canvas', 'Courier', 'Projects'],
    createdAt: '2023-09-23',
  },
  {
    title: 'How do I make a form in a Blutui project?',
    authors: ['Ruslan Courtman'],
    description: 'Learn how to create and add a form to a Blutui project.',
    slug: 'create-form',
    tags: ['Forms', 'Canvas', 'Projects', 'Dashboard'],
    createdAt: '2023-09-22',
  },
  {
    title: 'What is a Blutui Canvas?',
    authors: ['Ruslan Courtman'],
    description:
      "Understand the fundamentals of a Blutui project's file structure.",
    slug: 'what-is-blutui-canvas',
    tags: ['Canvas', 'Courier'],
    createdAt: '2023-09-22',
  },
  {
    title: 'How do I create a Blutui project?',
    authors: ['Ruslan Courtman'],
    description: 'Learn how to successfully create a new Blutui project.',
    slug: 'create-project',
    tags: ['Console', 'Projects'],
    createdAt: '2023-09-21',
  },
  {
    title: 'How do I add reCAPTCHA v3 to a form?',
    authors: ['Ruslan Courtman'],
    description: 'Learn how to protect your forms with reCAPTCHA v3.',
    slug: 'add-recaptcha-3-to-a-form',
    tags: ['Forms', 'Security', 'Dashboard'],
    createdAt: '2023-09-18',
  },
  {
    title: 'How do I add reCAPTCHA v2 to a form?',
    authors: ['Ruslan Courtman'],
    description: 'Learn how to protect your forms with reCAPTCHA v2.',
    slug: 'add-recaptcha-2-to-a-form',
    tags: ['Forms', 'Security', 'Dashboard'],
    createdAt: '2023-09-15',
  },
  {
    featured: true,
    title: 'How do I send form submissions to Zapier?',
    authors: ['Jayan Ratna'],
    description:
      'Information on how to send form submissions from a Blutui project to Zapier.',
    slug: 'send-form-submissions-to-zapier',
    tags: ['Integrations', 'Webhooks', 'Dashboard'],
    createdAt: '2023-09-15',
  },
  // {
  //   title: 'How do I send form submissions to Make / Integromat?',
  //   authors: ['Jayan Ratna'],
  //   description:
  //     'Information on how to send form submissions from a Blutui project to Make (formerly Integromat).',
  //   slug: 'send-form-submissions-to-make',
  //   tags: ['Integrations', 'Webhooks'],
  //   createdAt: '2023-08-30',
  // },
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
  {
    title: 'How do I pull a project onto my machine?',
    authors: ['Ruslan Courtman'],
    description:
      'Learn how to pull your project from Blutui onto your machine for development.',
    slug: 'pull-project-with-courier',
    tags: ['Courier'],
    createdAt: '2023-08-31',
  },
  {
    title: 'How do I preview a project onto my machine?',
    authors: ['Ruslan Courtman'],
    description:
      'Learn how to preview your project on your machine while in development.',
    slug: 'preview-project-with-courier',
    tags: ['Courier'],
    createdAt: '2023-08-31',
  },
  {
    title: 'How do I push a project to Blutui?',
    authors: ['Jayan Ratna'],
    description:
      'Learn how to push your project code from your machine to Blutui.',
    slug: 'push-project-with-courier',
    tags: ['Courier'],
    createdAt: '2023-08-31',
  },
]
