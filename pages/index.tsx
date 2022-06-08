import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Contact from '../components/contact_section/contact'
import Beranda from '../components/home_section/beranda'
import Keunggulan from '../components/keunggulan/keunggulan'
import Layout from '../components/Layouting/layout'
import Slider from '../components/slider/slider_container'
import styles from '../styles/Home.module.css'
import '../styles/Home.module.css'


function Home() {
  return (
    <div className={styles.screen}>
      <Head>
        <title>GEP Media</title>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'/>
      </Head>
      <Layout>
        <Beranda/>
        <Keunggulan/>
        <Slider/>
        <Contact/>
      </Layout>
    </div>
  )
}

export default Home
