import { useEffect, useState } from 'react'

import type { Section } from '../utils/collectHeadings'

export const useActiveId = (items: Section[]) => {
  const [activeId, setActiveId] = useState<string>()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: `-100px 0% -60% 0%`, threshold: 1 }
    )

    items.forEach((item) => {
      observer.observe(document.getElementById(item.id) as Element)
    })

    return () => {
      items.forEach((item) => {
        observer.unobserve(document.getElementById(item.id) as Element)
      })
    }
  }, [items])

  return activeId
}
