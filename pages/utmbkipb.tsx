import React from 'react'
import Footer from '../components/utmbkipb_contents/footer'
import Header from '../components/utmbkipb_contents/header'
import PoinPoin from '../components/utmbkipb_contents/points'
import Slider from '../components/utmbkipb_contents/slider_container'
import styles from '../styles/Utmbkipb.module.css'

function UTMBKIPB() {
  return (
    <div className={styles.screen}>
        <div className={styles.headercontainer}>
            <Header/>
        </div>
        <div className={styles.pointscontainer}>
            <PoinPoin/>
        </div>
        <div className={styles.slidercontainer}>
            <Slider/>
        </div>
        <div className={styles.footer}>
            <Footer/>
        </div>
    </div>
  )
}

export default UTMBKIPB