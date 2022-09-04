import { useEffect, useState } from 'react'

const ACTION_KEY_DEFAULT = ['Ctrl', 'Control']
const ACTION_KEY_APPLE = ['⌘', 'Command']

export const useActionKey = () => {
  let [actionKey, setActionKey] = useState<string[]>()

  useEffect(() => {
    if (typeof navigator !== 'undefined') {
      if (navigator.userAgent.indexOf('Mac') !== -1) {
        setActionKey(ACTION_KEY_APPLE)
      } else {
        setActionKey(ACTION_KEY_DEFAULT)
      }
    }
  }, [])

  return actionKey
}
