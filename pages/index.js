import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <Head>
      <title>People List | Home </title>
      <meta name='keywords' content='Some content'/>
    </Head>
    <div>
      {/* style sheet for component */}
      <h1 className={ styles.title }>Homepage</h1>
      <p className={ styles.text }> Some text </p>
      <Link href="/people">
      <a className={ styles.btn }>People list</a>
      </Link>
    </div>
    </>
  )
}
