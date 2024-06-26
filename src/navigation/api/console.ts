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
  {
    title: 'Domains',
    expandable: false,
    items: [
      {
        title: 'Add domain',
        url: '/api/console/domains/create',
        method: 'POST',
      },
      {
        title: 'Update domain',
        url: '/api/console/domains/update',
        method: 'PATCH',
      },
      {
        title: 'Retrieve domain',
        url: '/api/console/domains/retrieve',
        method: 'GET',
      },
      {
        title: 'List all domains',
        url: '/api/console/domains/list',
        method: 'GET',
      },
      {
        title: 'Remove domain',
        url: '/api/console/domains/remove',
        method: 'DELETE',
      },
      {
        title: 'Refresh domain token',
        url: '/api/console/domains/refresh',
        method: 'POST',
      },
      {
        title: 'Verify domain',
        url: '/api/console/domains/verify',
        method: 'POST',
      },
      {
        title: 'Search domains',
        url: '/api/console/domains/search',
        method: 'POST',
      },
    ],
  },
  {
    title: 'Projects',
    expandable: false,
    items: [
      {
        title: 'List all project domains',
        url: '/api/console/projects/domains',
        method: 'GET',
      },
    ],
  },
]
