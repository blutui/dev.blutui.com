import { APINavigationItem } from '.'

export const consoleAPINavigation: APINavigationItem[] = [
  {
    title: 'Overview',
    expandable: false,
    items: [
      {
        title: 'Introduction',
        url: '/api/console',
      },
      {
        title: 'Authentication',
        url: '/api/console/authentication',
      },
    ],
  },
  {
    title: 'Brand',
    expandable: false,
    items: [
      {
        title: 'Create brand',
        url: '/api/console/brand/create',
        method: 'POST',
      },
      {
        title: 'Update brand',
        url: '/api/console/brand/update',
        method: 'PATCH',
      },
      {
        title: 'Retrieve brand',
        url: '/api/console/brand/retrieve',
        method: 'GET',
      },
      {
        title: 'Remove brand',
        url: '/api/console/brand/remove',
        method: 'DELETE',
      },
    ],
  },
]
