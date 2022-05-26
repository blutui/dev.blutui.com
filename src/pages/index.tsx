import { GetServerSideProps, GetStaticProps } from 'next'
import Link from 'next/link'

import { MainContext, MainContextT } from '@/components/context/MainContext'
import { getDocs } from '@/utils'

import styles from '@/styles/Home.module.css'

type Props = {
  mainContext: MainContextT
}

export default function MainHomePage(props: any) {
  return (
    <ul>
      {props.docs.map((value: string, index: any) => {
        const link = value.replace('.md', '')
        return (
          <li key={index}>
            <Link href={link}>{link}</Link>
          </li>
        )
      })}
    </ul>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const docs = getDocs('src/docs')

  return {
    props: {
      docs,
    },
  }
}
