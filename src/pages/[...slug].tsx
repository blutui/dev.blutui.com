import * as fs from 'fs'
import path from 'path'
import { ParsedUrlQuery } from 'querystring'
import { GetStaticPaths, GetStaticProps } from 'next'
import Markdoc, { renderers } from '@markdoc/markdoc'

import { MainContext, MainContextT } from '@/components/context/MainContext'
import { getDocs } from '@/utils/getDocs'

import styles from '@/styles/Home.module.css'
import React from 'react'

interface IParams extends ParsedUrlQuery {
  slug: string[]
}

type Props = {
  props: any
}

export default function Page(props: any) {
  return renderers.react(props.markdoc.content, React, {
    components: {
      ...props.components,
    },
  })
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as IParams
  const file = slug.join('/') + '.md'

  const ast = Markdoc.parse(
    fs.readFileSync(path.resolve('src', 'docs', file), 'utf-8')
  )
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
