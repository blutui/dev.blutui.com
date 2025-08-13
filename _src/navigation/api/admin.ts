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
    title: 'Blogs',
    expandable: false,
    items: [
      {
        title: 'Create blog',
        url: '/api/admin/blogs/create',
        method: 'POST',
      },
      {
        title: 'Update blog',
        url: '/api/admin/blogs/update',
        method: 'PATCH',
      },
      {
        title: 'Retrieve blog',
        url: '/api/admin/blogs/retrieve',
        method: 'GET',
      },
      {
        title: 'List all blogs',
        url: '/api/admin/blogs/list',
        method: 'GET',
      },
      {
        title: 'Remove blog',
        url: '/api/admin/blogs/remove',
        method: 'DELETE',
      },
    ],
  },
  {
    title: 'Blog posts',
    expandable: false,
    items: [
      {
        title: 'Create post',
        url: '/api/admin/posts/create',
        method: 'POST',
      },
      {
        title: 'Update post',
        url: '/api/admin/posts/update',
        method: 'PATCH',
      },
      {
        title: 'Retrieve post',
        url: '/api/admin/posts/retrieve',
        method: 'GET',
      },
      {
        title: 'List all posts',
        url: '/api/admin/posts/list',
        method: 'GET',
      },
      {
        title: 'Remove post',
        url: '/api/admin/posts/remove',
        method: 'DELETE',
      },
    ],
  },
  {
    title: 'Collections',
    expandable: false,
    items: [
      {
        title: 'Create collection',
        url: '/api/admin/collections/create',
        method: 'POST',
      },
      {
        title: 'Update collection',
        url: '/api/admin/collections/update',
        method: 'PATCH',
      },
      {
        title: 'Retrieve collection',
        url: '/api/admin/collections/retrieve',
        method: 'GET',
      },
      {
        title: 'List all collections',
        url: '/api/admin/collections/list',
        method: 'GET',
      },
      {
        title: 'Remove collection',
        url: '/api/admin/collections/remove',
        method: 'DELETE',
      },
    ],
  },
  {
    title: 'Collection entries',
    expandable: false,
    items: [
      {
        title: 'Create entry',
        url: '/api/admin/entries/create',
        method: 'POST',
      },
      {
        title: 'Update entry',
        url: '/api/admin/entries/update',
        method: 'PATCH',
      },
      {
        title: 'Retrieve entry',
        url: '/api/admin/entries/retrieve',
        method: 'GET',
      },
      {
        title: 'List all entries',
        url: '/api/admin/entries/list',
        method: 'GET',
      },
      {
        title: 'Remove entry',
        url: '/api/admin/entries/remove',
        method: 'DELETE',
      },
    ],
  },
  {
    title: 'Collection links',
    expandable: false,
    items: [
      {
        title: 'Create link',
        url: '/api/admin/links/create',
        method: 'POST',
      },
      {
        title: 'Update link',
        url: '/api/admin/links/update',
        method: 'PATCH',
      },
      {
        title: 'Retrieve link',
        url: '/api/admin/links/retrieve',
        method: 'GET',
      },
      {
        title: 'List all links',
        url: '/api/admin/links/list',
        method: 'GET',
      },
      {
        title: 'Remove link',
        url: '/api/admin/links/remove',
        method: 'DELETE',
      },
    ],
  },
  {
    title: 'Forms',
    expandable: false,
    items: [
      {
        title: 'Create form',
        url: '/api/admin/forms/create',
        method: 'POST',
      },
      {
        title: 'Update form',
        url: '/api/admin/forms/update',
        method: 'PATCH',
      },
      {
        title: 'Retrieve form',
        url: '/api/admin/forms/retrieve',
        method: 'GET',
      },
      {
        title: 'List all forms',
        url: '/api/admin/forms/list',
        method: 'GET',
      },
      {
        title: 'Remove form',
        url: '/api/admin/forms/remove',
        method: 'DELETE',
      },
    ],
  },
  {
    title: 'Form submissions',
    expandable: false,
    items: [
      {
        title: 'Retrieve submission',
        url: '/api/admin/submissions/retrieve',
        method: 'GET',
      },
      {
        title: 'List all submissions',
        url: '/api/admin/submissions/list',
        method: 'GET',
      },
      {
        title: 'Remove submission',
        url: '/api/admin/submissions/remove',
        method: 'DELETE',
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
  {
    title: 'Pages',
    expandable: false,
    items: [
      {
        title: 'Create page',
        url: '/api/admin/pages/create',
        method: 'POST',
      },
      {
        title: 'Update page',
        url: '/api/admin/pages/update',
        method: 'PATCH',
      },
      {
        title: 'Retrieve page',
        url: '/api/admin/pages/retrieve',
        method: 'GET',
      },
      {
        title: 'List all pages',
        url: '/api/admin/pages/list',
        method: 'GET',
      },
      {
        title: 'Remove page',
        url: '/api/admin/pages/remove',
        method: 'DELETE',
      },
    ],
  },
  {
    title: 'Redirects',
    expandable: false,
    items: [
      {
        title: 'Create redirect',
        url: '/api/admin/redirects/create',
        method: 'POST',
      },
      {
        title: 'Update redirect',
        url: '/api/admin/redirects/update',
        method: 'PATCH',
      },
      {
        title: 'Retrieve redirect',
        url: '/api/admin/redirects/retrieve',
        method: 'GET',
      },
      {
        title: 'List all redirects',
        url: '/api/admin/redirects/list',
        method: 'GET',
      },
      {
        title: 'Remove redirect',
        url: '/api/admin/redirects/remove',
        method: 'DELETE',
      },
    ],
  },
  {
    title: 'Route patterns',
    expandable: false,
    items: [
      {
        title: 'Create route pattern',
        url: '/api/admin/route-patterns/create',
        method: 'POST',
      },
      {
        title: 'Update route pattern',
        url: '/api/admin/route-patterns/update',
        method: 'PATCH',
      },
      {
        title: 'Retrieve route pattern',
        url: '/api/admin/route-patterns/retrieve',
        method: 'GET',
      },
      {
        title: 'List all route patterns',
        url: '/api/admin/route-patterns/list',
        method: 'GET',
      },
      {
        title: 'Remove route pattern',
        url: '/api/admin/route-patterns/remove',
        method: 'DELETE',
      },
    ],
  },
  {
    title: 'Users',
    expandable: false,
    items: [
      {
        title: 'Retrieve user',
        url: '/api/admin/users/retrieve',
        method: 'GET',
      },
      {
        title: 'List all users',
        url: '/api/admin/users/list',
        method: 'GET',
      },
      {
        title: 'Remove user',
        url: '/api/admin/users/remove',
        method: 'DELETE',
      },
    ],
  },
  {
    title: 'Webhooks',
    expandable: false,
    items: [
      {
        title: 'Create webhook',
        url: '/api/admin/webhooks/create',
        method: 'POST',
      },
      {
        title: 'Update webhook',
        url: '/api/admin/webhooks/update',
        method: 'PATCH',
      },
      {
        title: 'Retrieve webhook',
        url: '/api/admin/webhooks/retrieve',
        method: 'GET',
      },
      {
        title: 'List all webhooks',
        url: '/api/admin/webhooks/list',
        method: 'GET',
      },
      {
        title: 'Remove webhook',
        url: '/api/admin/webhooks/remove',
        method: 'DELETE',
      },
    ],
  },
]
