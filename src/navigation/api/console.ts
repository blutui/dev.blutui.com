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
    title: 'Cassettes',
    expandable: false,
    items: [
      {
        title: 'Create Cassette',
        url: '/api/console/cassettes/create',
        method: 'POST',
      },
      {
        title: 'Update Cassette',
        url: '/api/console/cassettes/update',
        method: 'PATCH',
      },
      {
        title: 'Retrieve Cassette',
        url: '/api/console/cassettes/retrieve',
        method: 'GET',
      },
      {
        title: 'Remove Cassette',
        url: '/api/console/cassettes/remove',
        method: 'DELETE',
      },
      {
        title: 'Duplicate Cassette',
        url: '/api/console/cassettes/duplicate',
        method: 'POST',
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
    title: 'Invites',
    expandable: true,
    items: [
      {
        title: 'Update invite',
        url: '/api/console/invites/update',
        method: 'PATCH',
      },
      {
        title: 'List all invites',
        url: '/api/console/invites/list',
        method: 'GET',
      },
      {
        title: 'Remove invite',
        url: '/api/console/invites/remove',
        method: 'DELETE',
      },
    ],
  },
  {
    title: 'Members',
    expandable: true,
    items: [
      {
        title: 'Update member',
        url: '/api/console/members/update',
        method: 'PATCH',
      },
      {
        title: 'Retrieve member',
        url: '/api/console/members/retrieve',
        method: 'GET',
      },
      {
        title: 'List all members',
        url: '/api/console/members/list',
        method: 'GET',
      },
      {
        title: 'Remove member',
        url: '/api/console/members/remove',
        method: 'DELETE',
      },
    ],
  },
  {
    title: 'Projects',
    expandable: false,
    items: [
      {
        title: 'Create project',
        url: '/api/console/projects/create',
        method: 'POST',
      },
      {
        title: 'Update project',
        url: '/api/console/projects/update',
        method: 'PATCH',
      },
      {
        title: 'Retrieve project',
        url: '/api/console/projects/retrieve',
        method: 'GET',
      },
      {
        title: 'List all projects',
        url: '/api/console/projects/list',
        method: 'GET',
      },
      {
        title: 'Archive project',
        url: '/api/console/projects/remove',
        method: 'DELETE',
      },
      {
        title: 'List all archived projects',
        url: '/api/console/projects/archived',
        method: 'GET',
      },
      {
        title: 'Restore project',
        url: '/api/console/projects/restore',
        method: 'DELETE',
      },
      {
        title: 'List all project domains',
        url: '/api/console/projects/domains',
        method: 'GET',
      },
      {
        title: 'List all project Cassettes',
        url: '/api/console/projects/cassettes',
        method: 'GET',
      },
      {
        title: 'Search projects',
        url: '/api/console/projects/search',
        method: 'POST',
      },
      {
        title: 'Publish project',
        url: '/api/console/projects/publish',
        method: 'POST',
      },
      {
        title: 'Unpublish project',
        url: '/api/console/projects/unpublish',
        method: 'POST',
      },
    ],
  },
  {
    title: 'Roles',
    expandable: true,
    items: [
      {
        title: 'Create role',
        url: '/api/console/roles/create',
        method: 'POST',
      },
      {
        title: 'Update role',
        url: '/api/console/roles/update',
        method: 'PATCH',
      },
      {
        title: 'Retrieve role',
        url: '/api/console/roles/retrieve',
        method: 'GET',
      },
      {
        title: 'List all roles',
        url: '/api/console/roles/list',
        method: 'GET',
      },
      {
        title: 'Remove role',
        url: '/api/console/roles/remove',
        method: 'DELETE',
      },
    ],
  },
]
