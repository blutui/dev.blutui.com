import { GetServerSideProps } from 'next'
import { MainContext, MainContextT } from '@/components/context/MainContext'

import styles from '@/styles/Home.module.css'

type Props = {
  mainContext: MainContextT
}

export default function MainHomePage({ mainContext }: Props) {
  return <MainContext.Provider value={mainContext}></MainContext.Provider>
}
