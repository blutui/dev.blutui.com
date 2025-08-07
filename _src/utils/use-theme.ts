import { useEffect, useLayoutEffect, useRef } from 'react'
import { create } from 'zustand'

interface SettingState {
  setting: 'dark' | 'light' | 'system' | null
  setSetting: (setting: 'dark' | 'light' | 'system') => void
}

const useSetting = create<SettingState>((set) => ({
  setting: null,
  setSetting: (setting) => set({ setting }),
}))

export const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect

export const updateTheme = () => {
  document.documentElement.classList.add('changing-theme')

  if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }

  window.setTimeout(() => {
    document.documentElement.classList.remove('changing-theme')
  })
}

export function useTheme(): [
  setting: SettingState['setting'],
  setSetting: SettingState['setSetting'],
] {
  const { setting, setSetting } = useSetting()
  let initial = useRef(true)

  useIsomorphicLayoutEffect(() => {
    let theme = localStorage.theme
    if (theme === 'light' || theme === 'dark') {
      setSetting(theme)
    } else {
      setSetting('system')
    }
  }, [])

  useIsomorphicLayoutEffect(() => {
    if (setting === 'system') {
      localStorage.removeItem('theme')
    } else if (setting === 'light' || setting === 'dark') {
      localStorage.theme = setting
    }

    if (initial.current) {
      initial.current = false
    } else {
      updateTheme()
    }
  }, [setting])

  useEffect(() => {
    let mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    mediaQuery.addEventListener('change', updateTheme)

    function onStorage() {
      updateTheme()
      let theme = localStorage.theme
      if (theme === 'light' || theme === 'dark') {
        setSetting(theme)
      } else {
        setSetting('system')
      }
    }
    window.addEventListener('storage', onStorage)

    return () => {
      mediaQuery.removeEventListener('change', updateTheme)
      window.removeEventListener('storage', onStorage)
    }
  }, [setSetting])

  return [setting, setSetting]
}
