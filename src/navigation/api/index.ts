export type APIMethod = 'GET' | 'POST' | 'PATCH' | 'DELETE'

export interface APINavigationItemWithoutItems {
  title: string
  url: string
  method?: APIMethod
}

export interface APINavigationItemWithItems {
  title: string
  items: APINavigationItem[]
  expandable?: boolean
}

export type APINavigationItem =
  | APINavigationItemWithoutItems
  | APINavigationItemWithItems

export const apiNavigation: APINavigationItem[] = [
  {
    title: 'Overview',
    url: '/api',
  },
  {
    title: 'API references',
    items: [
      {
        title: 'Console API',
        url: '/api/console',
      },
      {
        title: 'Admin API',
        url: '/api/admin',
      },
      {
        title: 'Project API',
        url: '/api/project',
      },
    ],
  },
  {
    title: 'User',
    expandable: false,
    items: [
      {
        title: 'Retrieve user',
        url: '/api/user',
        method: 'GET',
      },
      {
        title: "Retrieve user's email",
        url: '/api/user/email',
        method: 'GET',
      },
    ],
  },
]

export { consoleAPINavigation } from './console'
