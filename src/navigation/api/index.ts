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

export const apiNavigation: APINavigationItem[] = []

export { consoleAPINavigation } from './console'
