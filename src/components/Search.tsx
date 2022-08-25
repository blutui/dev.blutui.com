import React, {
  createContext,
  useCallback,
  useContext,
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
  onInput?: any
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

  return (
    <>
      <Head>
        <link
          rel="preconnect"
          href={`https://${APP_ID}-dsn.algolia.net`}
          crossOrigin="true"
        />
      </Head>
      <SearchContext.Provider value={{ isOpen, onOpen, onClose }}>
        {children}
      </SearchContext.Provider>
      {isOpen &&
        createPortal(
          <DocSearchModal
            initialScrollY={window.scrollY}
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

                const hash = ''

                return {
                  ...item,
                  url: `${a.pathname}${hash}`,
                  __is_parent: () =>
                    item.type === 'lvl1' && items.length > 1 && index === 0,
                }
              })
            }}
          />,
          document.body
        )}
    </>
  )
}

type HitT = Parameters<NonNullable<DocSearchProps['hitComponent']>>

const Hit = ({ hit, children }: HitT[0]) => {
  return (
    <Link href={hit.url}>
      <a>{children}</a>
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
