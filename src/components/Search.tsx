import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react'
import { createPortal } from 'react-dom'
import { useRouter } from 'next/router'
import { DocSearchModal, DocSearchProps } from '@docsearch/react'
import Link from 'next/link'
import Head from 'next/head'

const INDEX_NAME = 'blutui_dev'
const API_KEY = '08a5410cbde5a7ca2e34e516c7dc4756'
const APP_ID = 'ZRN116B709'

export interface SearchButtonProps {
  children?: React.ReactNode
  className?: string
}

export interface SearchProviderProps {
  children?: React.ReactNode
}

export interface SearchContextI {
  isOpen?: boolean
  onOpen?: any
  onClose?: any
  onInput?: (event: KeyboardEvent) => void
}

const SearchContext = createContext<SearchContextI>({})

export const SearchProvider = ({ children }: SearchProviderProps) => {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  const onOpen = useCallback(() => {
    setIsOpen(true)
  }, [setIsOpen])

  const onClose = useCallback(() => {
    setIsOpen(false)
  }, [setIsOpen])

  const onInput = useCallback(
    (event: KeyboardEvent) => {
      console.log(event)
      setIsOpen(true)
    },
    [setIsOpen]
  )

  useDocSearchKeyboardEvents({ isOpen, onOpen, onClose })

  return (
    <>
      <Head>
        <link
          rel="preconnect"
          href={`https://${APP_ID}-dsn.algolia.net`}
          crossOrigin="true"
        />
      </Head>
      <SearchContext.Provider value={{ isOpen, onOpen, onClose, onInput }}>
        {children}
      </SearchContext.Provider>
      {isOpen &&
        createPortal(
          <DocSearchModal
            initialScrollY={window.scrollY}
            placeholder="Search documentation"
            onClose={onClose}
            indexName={INDEX_NAME}
            apiKey={API_KEY}
            appId={APP_ID}
            navigator={{
              navigate({ itemUrl }) {
                setIsOpen(false)
                router.push(itemUrl)
              },
            }}
            hitComponent={Hit}
            transformItems={(items) => {
              return items.map((item, index) => {
                const a = document.createElement('a')
                a.href = item.url

                const hash = a.hash

                return {
                  ...item,
                  url: `${a.pathname}${hash}`,
                  __is_result: () => true,
                  __is_parent: () =>
                    item.type === 'lvl1' && items.length > 1 && index === 0,
                  __is_child: () =>
                    item.type !== 'lvl1' &&
                    items.length > 1 &&
                    items[0].type === 'lvl1' &&
                    index !== 0,
                  __is_first: () => index === 1,
                  __is_last: () => index === items.length - 1 && index !== 0,
                }
              })
            }}
          />,
          document.body
        )}
    </>
  )
}

type HitRaw = Parameters<NonNullable<DocSearchProps['hitComponent']>>
type HitT = {
  hit: {
    __is_result?: () => boolean
    __is_parent?: () => boolean
    __is_child?: () => boolean
    __is_first?: () => boolean
    __is_last?: () => boolean
  } & HitRaw[0]['hit']
  children: HitRaw[0]['children']
}

const Hit = ({ hit, children }: HitT) => {
  const className = [
    hit.__is_result?.() && 'DocSearch-Hit--Result',
    hit.__is_parent?.() && 'DocSearch-Hit--Parent',
    hit.__is_child?.() && 'DocSearch-Hit--Child',
    hit.__is_first?.() && 'DocSearch-Hit--First',
    hit.__is_last?.() && 'DocSearch-Hit--Last',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <Link href={hit.url}>
      <a className={className}>{children}</a>
    </Link>
  )
}

export const SearchButton = ({ children, ...props }: SearchButtonProps) => {
  let searchButtonRef = useRef(null)
  let { onOpen } = useContext(SearchContext)

  return (
    <button type="button" ref={searchButtonRef} onClick={onOpen} {...props}>
      {children}
    </button>
  )
}

const useDocSearchKeyboardEvents = ({
  isOpen,
  onOpen,
  onClose,
}: SearchContextI) => {
  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      function open() {
        if (!document.body.classList.contains('DocSearch--active')) {
          onOpen()
        }
      }

      if (
        (event.key === 'k' && (event.metaKey || event.ctrlKey)) ||
        (event.key === '/' && !isOpen)
      ) {
        event.preventDefault()

        if (isOpen) {
          onClose()
        } else if (!document.body.classList.contains('DocSearch--active')) {
          open()
        }
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, onOpen, onClose])
}
