import React, { ReactElement, ReactNode } from 'react'
import { NextPage } from 'next'

export interface LayoutProps {
  Layout: React.FunctionComponent<any>
}

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  title?: string
  getLayout?: (page: ReactElement) => ReactNode
}
