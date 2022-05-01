import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Beranda from '../components/home_section/beranda'
import Keunggulan from '../components/keunggulan/keunggulan'
import Layout from '../components/Layouting/layout'
import styles from '../styles/Home.module.css'

function Home() {
  return (
    <Layout>
      <Beranda/>
      <Keunggulan/>
    </Layout>
  )
}

export default Home
