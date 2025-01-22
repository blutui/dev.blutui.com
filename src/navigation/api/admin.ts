import { APINavigationItem } from '.'

export const adminAPINavigation: APINavigationItem[] = [
  {
    title: 'Overview',
    expandable: false,
    items: [
      {
        title: 'Introduction',
        url: '/api/admin',
      },
      {
        title: 'Authentication',
        url: '/api/admin/authentication',
      },
    ],
  },
  {
    title: 'Menus',
    expandable: false,
    items: [
      {
        title: 'Create menu',
        url: '/api/admin/menus/create',
        method: 'POST',
      },
      {
        title: 'Update menu',
        url: '/api/admin/menus/update',
        method: 'PATCH',
      },
      {
        title: 'Retrieve menu',
        url: '/api/admin/menus/retrieve',
        method: 'GET',
      },
      {
        title: 'List all menus',
        url: '/api/admin/menus/list',
        method: 'GET',
      },
      {
        title: 'Remove menu',
        url: '/api/admin/menus/remove',
        method: 'DELETE',
      },
    ],
  },
]
