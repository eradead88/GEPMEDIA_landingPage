import React from 'react'
import Button from '../utmbkipb_contents/button'
import styles from './heropage.module.css'
const Fade = require("react-reveal/Fade");
const Zoom = require("react-reveal/Zoom");

function Hero() {
  return (
    <section className={styles.heroPage}>
        <div className={styles.containerFluid}>
            <div className={`${styles.positionRelative} ${styles.py2}`}>
                <img src='/dots.svg' className={`${styles.positionAbsolute} ${styles.dots_svg}`}/>
            </div>
            <Fade right>
                <div className={styles.row}>
                    <img src='/simakui_siapsimak.png' className={styles.row1img}/>
                </div>
            </Fade>
            <div className={`${styles.positionRelative} ${styles.py2}`}>
                <img src='/segeraDaftar.png' className={`${styles.positionAbsolute} ${styles.img_segera}`}/>
            </div>
            <div className={`${styles.positionRelative} ${styles.py2}`}>
                <img src='/component_blink.png' className={`${styles.positionAbsolute} ${styles.blink_small} ${styles.blink_p1}`}/>
                <img src='/component_blink.png' className={`${styles.positionAbsolute} ${styles.blink_small} ${styles.updown2} ${styles.blink_p2}`}/>
                <img src='/component_blink.png' className={`${styles.positionAbsolute} ${styles.blink_small} ${styles.blink_p3}`}/>
                <img src='/component_blink.png' className={`${styles.positionAbsolute} ${styles.blink_small} ${styles.updown3} ${styles.blink_p4}`}/>
                <img src='/component_blink.png' className={`${styles.positionAbsolute} ${styles.blink_small} ${styles.updown1} ${styles.blink_p5}`}/>
            </div>
            <Fade left>
                <div className={styles.row}>
                    <img src='/simakui_herosection1.png' className={styles.row2img}/>
                </div>
            </Fade>
            <Zoom>
                <div className={styles.row}>
                    <Button text='DAFTAR DISINI' action='http://simakui.gepmedia.id'/>
                </div>
            </Zoom>
            <div className={`${styles.positionRelative} ${styles.py2}`}>
                <img src='/blinkblue.png' className={`${styles.positionAbsolute} ${styles.blinkblue_svg} ${styles.zoominout}`}/>
            </div>
        </div>
    </section>
  )
}

export default Hero