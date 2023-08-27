import { useState } from 'react'

export const usePagination = (items: any[], perPage = 8) => {
  const [activePage, setActivePage] = useState(1)
  const totalPages = Math.ceil(items.length / perPage)
  const hasMorePages = activePage !== totalPages
  const paginatedItems = items.slice(0, perPage * activePage)

  return {
    activePage,
    hasMorePages,
    loadMore: () =>
      setActivePage((page) => (page < totalPages ? page + 1 : page)),
    totalPages,
    items: paginatedItems,
  }
}
