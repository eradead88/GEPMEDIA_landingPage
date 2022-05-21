import React from 'react'
import styles from './slider.module.css'
import SmallSlider from './small_slider'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Title from '../title_text/title'
import LargeSlider from './large_slider'


function Slider() {
  return (
    <div className={styles.container}>
        <div className={styles.title}  id='testimoni'>
         <img src='/katamereka.png' className={styles.titleImage}/>
        </div>
       <SmallSlider/>
       <LargeSlider/>
       <div className={styles.footercontainer}>
          <img src='./ALL.png' className={styles.slidefooter_img}/>
       </div>
    </div>
  )
}

export default Slider