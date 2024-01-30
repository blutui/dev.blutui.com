import { useEffect, useLayoutEffect, useRef, useState } from 'react'

export const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect

export const updateTheme = () => {
  document.documentElement.classList.add('changing-theme')
  console.log('changing')
  window.setTimeout(() => {
    document.documentElement.classList.remove('changing-theme')
  })
}

export const useTheme = () => {
  const [setting, setSetting] = useState<('light' | 'dark' | 'system') | null>(
    null
  )
  let initial = useRef(true)

  useIsomorphicLayoutEffect(() => {
    let theme = localStorage.theme
    if (theme === 'light' || theme === 'dark') {
      setSetting(theme)
    } else {
      setSetting('system')
    }
  }, [])

  useEffect(() => {
    let mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    mediaQuery.addEventListener('change', updateTheme)

    function onStorage() {
      console.log('store')
    }
    window.addEventListener('storage', onStorage)

    return () => {
      mediaQuery.removeEventListener('change', updateTheme)
      window.removeEventListener('storage', onStorage)
    }
  }, [])

  return [setting, setSetting]
}
