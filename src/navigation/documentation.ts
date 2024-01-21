export interface NavigationItemWithoutItems {
  title: string
  url: string
}

export interface NavigationItemWithItems {
  title: string
  items: NavigationItem[]
}

export type NavigationItem =
  | NavigationItemWithoutItems
  | NavigationItemWithItems

export const documentationNavigation: NavigationItem[] = [
  {
    title: 'Introduction',
    url: '/docs',
  },
  {
    title: 'Getting Started',
    items: [
      {
        title: 'Create a project',
        url: '/docs/getting-started/create',
      },
      {
        title: 'IntelliSense',
        url: '/docs/intellisense',
      },
    ],
  },
  {
    title: 'Courier',
    items: [
      {
        title: 'Getting started',
        url: '/docs/courier/getting-started',
      },
      {
        title: 'Commands',
        url: '/docs/courier/commands',
      },
      {
        title: 'Configuration',
        url: '/docs/courier/configuration',
      },
      {
        title: 'Installation',
        items: [
          {
            title: 'macOS',
            url: '/docs/courier/installation/macos',
          },
          {
            title: 'Linux',
            url: '/docs/courier/installation/linux',
          },
          {
            title: 'Windows',
            url: '/docs/courier/installation/windows',
          },
        ],
      },
    ],
  },
  {
    title: 'Canvas',
    items: [
      {
        title: 'Getting started',
        items: [
          {
            title: 'Overview',
            url: '/docs/canvas/getting-started/overview',
          },
          {
            title: 'Variables',
            url: '/docs/canvas/getting-started/variables',
          },
          {
            title: 'Filters & Functions',
            url: '/docs/canvas/getting-started/filters-functions',
          },
          {
            title: 'Templating',
            url: '/docs/canvas/getting-started/templating',
          },
          {
            title: 'Expressions',
            url: '/docs/canvas/getting-started/expressions',
          },
        ],
      },
      {
        title: 'Tags',
        items: [
          {
            title: 'apply',
            url: '/docs/canvas/tags/apply',
          },
          {
            title: 'autoescape',
            url: '/docs/canvas/tags/autoescape',
          },
          {
            title: 'block',
            url: '/docs/canvas/tags/block',
          },
          {
            title: 'do',
            url: '/docs/canvas/tags/do',
          },
          {
            title: 'embed',
            url: '/docs/canvas/tags/embed',
          },
          {
            title: 'extends',
            url: '/docs/canvas/tags/extends',
          },
          {
            title: 'for',
            url: '/docs/canvas/tags/for',
          },
          {
            title: 'form',
            url: '/docs/canvas/tags/form',
          },
          {
            title: 'from',
            url: '/docs/canvas/tags/from',
          },
          {
            title: 'if',
            url: '/docs/canvas/tags/if',
          },
          {
            title: 'import',
            url: '/docs/canvas/tags/import',
          },
          {
            title: 'include',
            url: '/docs/canvas/tags/include',
          },
          {
            title: 'macro',
            url: '/docs/canvas/tags/macro',
          },
          {
            title: 'set',
            url: '/docs/canvas/tags/set',
          },
          {
            title: 'use',
            url: '/docs/canvas/tags/use',
          },
          {
            title: 'verbatim',
            url: '/docs/canvas/tags/verbatim',
          },
          {
            title: 'with',
            url: '/docs/canvas/tags/with',
          },
        ],
      },
      {
        title: 'Filters',
        items: [
          {
            title: 'abs',
            url: '/docs/canvas/filters/abs',
          },
          {
            title: 'batch',
            url: '/docs/canvas/filters/batch',
          },
          {
            title: 'capitalize',
            url: '/docs/canvas/filters/capitalize',
          },
          {
            title: 'column',
            url: '/docs/canvas/filters/column',
          },
          {
            title: 'convert_encoding',
            url: '/docs/canvas/filters/convert_encoding',
          },
          {
            title: 'date',
            url: '/docs/canvas/filters/date',
          },
          {
            title: 'date_modify',
            url: '/docs/canvas/filters/date_modify',
          },
          {
            title: 'default',
            url: '/docs/canvas/filters/default',
          },
          {
            title: 'escape',
            url: '/docs/canvas/filters/escape',
          },
          {
            title: 'filter',
            url: '/docs/canvas/filters/filter',
          },
          {
            title: 'first',
            url: '/docs/canvas/filters/first',
          },
          {
            title: 'format',
            url: '/docs/canvas/filters/format',
          },
          {
            title: 'group_by',
            url: '/docs/canvas/filters/group_by',
          },
          {
            title: 'image_tag',
            url: '/docs/canvas/filters/image_tag',
          },
          {
            title: 'image_url',
            url: '/docs/canvas/filters/image_url',
          },
          {
            title: 'join',
            url: '/docs/canvas/filters/join',
          },
          {
            title: 'json_encode',
            url: '/docs/canvas/filters/json_encode',
          },
          {
            title: 'keys',
            url: '/docs/canvas/filters/keys',
          },
          {
            title: 'last',
            url: '/docs/canvas/filters/last',
          },
          {
            title: 'length',
            url: '/docs/canvas/filters/length',
          },
          {
            title: 'lower',
            url: '/docs/canvas/filters/lower',
          },
          {
            title: 'map',
            url: '/docs/canvas/filters/map',
          },
          {
            title: 'merge',
            url: '/docs/canvas/filters/merge',
          },
          {
            title: 'nl2br',
            url: '/docs/canvas/filters/nl2br',
          },
          {
            title: 'number_format',
            url: '/docs/canvas/filters/number_format',
          },
          {
            title: 'raw',
            url: '/docs/canvas/filters/raw',
          },
          {
            title: 'reading_time',
            url: '/docs/canvas/filters/reading_time',
          },
          {
            title: 'reduce',
            url: '/docs/canvas/filters/reduce',
          },
          {
            title: 'replace',
            url: '/docs/canvas/filters/replace',
          },
          {
            title: 'reverse',
            url: '/docs/canvas/filters/reverse',
          },
          {
            title: 'round',
            url: '/docs/canvas/filters/round',
          },
          {
            title: 'slice',
            url: '/docs/canvas/filters/slice',
          },
          {
            title: 'slug',
            url: '/docs/canvas/filters/slug',
          },
          {
            title: 'sort',
            url: '/docs/canvas/filters/sort',
          },
          {
            title: 'spaceless',
            url: '/docs/canvas/filters/spaceless',
          },
          {
            title: 'split',
            url: '/docs/canvas/filters/split',
          },
          {
            title: 'striptags',
            url: '/docs/canvas/filters/striptags',
          },
          {
            title: 'title',
            url: '/docs/canvas/filters/title',
          },
          {
            title: 'trim',
            url: '/docs/canvas/filters/trim',
          },
          {
            title: 'upper',
            url: '/docs/canvas/filters/upper',
          },
          {
            title: 'url_encode',
            url: '/docs/canvas/filters/url_encode',
          },
          {
            title: 'Deprecated filters',
            url: '/docs/canvas/filters/deprecated',
          },
        ],
      },
      {
        title: 'Functions',
        items: [
          {
            title: 'agent',
            url: '/docs/canvas/functions/agent',
          },
          {
            title: 'asset',
            url: '/docs/canvas/functions/asset',
          },
          {
            title: 'attribute',
            url: '/docs/canvas/functions/attribute',
          },
          {
            title: 'block',
            url: '/docs/canvas/functions/block',
          },
          {
            title: 'cms',
            url: '/docs/canvas/functions/cms',
          },
          {
            title: 'cms_audio',
            url: '/docs/canvas/functions/cms-audio',
          },
          {
            title: 'cms_button',
            url: '/docs/canvas/functions/cms-button',
          },
          {
            title: 'cms_code',
            url: '/docs/canvas/functions/cms-code',
          },
          {
            title: 'cms_embed',
            url: '/docs/canvas/functions/cms-embed',
          },
          {
            title: 'cms_heading',
            url: '/docs/canvas/functions/cms-heading',
          },
          {
            title: 'cms_image',
            url: '/docs/canvas/functions/cms-image',
          },
          {
            title: 'cms_list',
            url: '/docs/canvas/functions/cms-list',
          },
          {
            title: 'cms_quote',
            url: '/docs/canvas/functions/cms-quote',
          },
          {
            title: 'cms_text',
            url: '/docs/canvas/functions/cms-text',
          },
          {
            title: 'cms_video',
            url: '/docs/canvas/functions/cms-video',
          },
          {
            title: 'constant',
            url: '/docs/canvas/functions/constant',
          },
          {
            title: 'cycle',
            url: '/docs/canvas/functions/cycle',
          },
          {
            title: 'date',
            url: '/docs/canvas/functions/date',
          },
          {
            title: 'dump',
            url: '/docs/canvas/functions/dump',
          },
          {
            title: 'include',
            url: '/docs/canvas/functions/include',
          },
          {
            title: 'max',
            url: '/docs/canvas/functions/max',
          },
          {
            title: 'min',
            url: '/docs/canvas/functions/min',
          },
          {
            title: 'parent',
            url: '/docs/canvas/functions/parent',
          },
          {
            title: 'random',
            url: '/docs/canvas/functions/random',
          },
          {
            title: 'range',
            url: '/docs/canvas/functions/range',
          },
          {
            title: 'recaptcha',
            url: '/docs/canvas/functions/recaptcha',
          },
          {
            title: 'source',
            url: '/docs/canvas/functions/source',
          },
          {
            title: 'Deprecated functions',
            url: '/docs/canvas/functions/deprecated',
          },
        ],
      },
      {
        title: 'Tests',
        items: [
          {
            title: 'constant',
            url: '/docs/canvas/tests/constant',
          },
          {
            title: 'defined',
            url: '/docs/canvas/tests/defined',
          },
          {
            title: 'divisible by',
            url: '/docs/canvas/tests/divisible-by',
          },
          {
            title: 'empty',
            url: '/docs/canvas/tests/empty',
          },
          {
            title: 'even',
            url: '/docs/canvas/tests/even',
          },
          {
            title: 'iterable',
            url: '/docs/canvas/tests/iterable',
          },
          {
            title: 'null',
            url: '/docs/canvas/tests/null',
          },
          {
            title: 'odd',
            url: '/docs/canvas/tests/odd',
          },
          {
            title: 'same as',
            url: '/docs/canvas/tests/same-as',
          },
        ],
      },
      {
        title: 'Variables',
        items: [
          {
            title: 'request',
            url: '/docs/canvas/variables/request',
          },
          {
            title: 'route',
            url: '/docs/canvas/variables/route',
          },
          {
            title: 'settings',
            url: '/docs/canvas/variables/settings',
          },
        ],
      },
    ],
  },
]
