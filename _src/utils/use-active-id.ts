import { useEffect, useState } from 'react'

import type { Section } from '@/utils/collect-headings'

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
      { rootMargin: `-100px 0% -70% 0%`, threshold: 1 }
    )

    items.forEach((item) => {
      observer.observe(document.getElementById(item.id) as Element)
    })

    return () => observer.disconnect()
  }, [items])

  return activeId
}
