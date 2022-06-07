import React from 'react'
import Hero from '../components/simakUI/heropage'
import styles from '../styles/Simakui.module.css'
import Head from 'next/head'
import Content from '../components/simakUI/content'
import Slider from '../components/simakUI/slider_container'
import CallToAction from '../components/simakUI/call_to_action.jsx'

function SimakUI() {
  return (
    <div className={styles.page}>
      <Head>
        <title>GEP Media - SIMAK UI</title>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'/>
      </Head>
        <div className={`${styles['background_header']} ${styles['w100']} ${styles['pt4']} ${styles['pb5']}`}>
            <Hero/>
        </div>
        <section className={styles.content}>
          <Content/>
        </section>
        <section className={styles.testimoni}>
          <Slider/>
        </section>
        <section className={styles.call_to_action}>
          <CallToAction/>
        </section>
    </div>
  )
}

export default SimakUI