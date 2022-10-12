import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import SideBar from './layout/side-bar'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ayesh Nipun</title>
        <meta name="description" content="Ayesh Nipun - Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SideBar />
    </div>
  )
}
