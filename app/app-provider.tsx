'use client'

import { SearchProvider } from '@/components/search'

export default function AppProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return <SearchProvider>{children}</SearchProvider>
}
