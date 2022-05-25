import { createContext } from 'react'

export type MainContextT = {
  page: {
    documentType: string
  }
}

export const getMainContext = (request: any, response: any): MainContextT => {
  return {
    page: {
      documentType: request.context.page.documentType,
    },
  }
}

export const MainContext = createContext<MainContextT | null>(null)
