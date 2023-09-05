import { NextPage } from 'next'
import React from 'react'

export interface LayoutProps {
  Layout: React.FunctionComponent<any>
}

export type NextPageWithCustomLayout = NextPage & {
  layoutProps?: LayoutProps
}
