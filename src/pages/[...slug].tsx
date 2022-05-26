import { ParsedUrlQuery } from 'querystring'
import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import Markdoc, { renderers } from '@markdoc/markdoc'

import { getDocs, loadMarkdown } from '@/utils'

import styles from '@/styles/Home.module.css'

interface IParams extends ParsedUrlQuery {
  slug: string[]
}

export default function Page(props: any) {
  return renderers.react(props.markdoc.content, React)
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as IParams
  const filepath = slug.join('/') + '.md'

  const { ast } = loadMarkdown(filepath)

  const content = Markdoc.transform(ast)

  return {
    // Removes undefined
    props: JSON.parse(
      JSON.stringify({
        markdoc: {
          content,
        },
      })
    ),
  }
}

// This function will be called at build time...
export const getStaticPaths: GetStaticPaths = async () => {
  const files = getDocs('src/docs')

  const paths = files.map((file) => {
    // Remove the file extension from the name
    let newFileName = file.replace('.md', '')
    // Convert the name into a Next.js friendly format
    const split = newFileName.split('/')

    return {
      params: {
        slug: split,
      },
    }
  })

  return {
    paths,
    fallback: false,
  }
}
