import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { Header } from './components/Header'
import { WelcomeBlock } from './components/WelcomeBlock'
import { About } from './components/About'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Header/>
      <WelcomeBlock/>
      <About/>
    </div>
  )
}
