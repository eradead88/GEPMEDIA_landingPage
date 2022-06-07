import React from 'react'
import styles from './content.module.css'
import styles2 from './heropage.module.css'
import styles3 from './slider.module.css'
import Poin1 from '../utmbkipb_contents/poin1'
import Poin2 from '../utmbkipb_contents/poin2'
const Fade = require("react-reveal/Fade");

function Content() {
  return (
    <> 
        <div className={styles2.container_fluid}>
            <div className={`${styles2.positionRelative} ${styles2.py2}`}>
                <h2 className={`${styles.text_title_content} ${styles.text_center} ${styles2.positionRelative}`}>
                    Kenapa harus pilih <br/><span className={styles.span}>GEP MEDIA ?</span>
                </h2>
            </div>
        </div>
        <div className={styles2.mt5}>
            <div className={`${styles.background_content} ${styles2.positionRelative}`}>
                <div className={styles2.container}>
                    <div className={styles.poin_container}>
                        <div className={`${styles2.positionRelative} ${styles2.py2}`}>
                            <img src='/redDots.svg' className={`${styles2.positionAbsolute} ${styles.redDots1}`}/>
                        </div>
                        <div className={`${styles2.positionRelative} ${styles2.py2}`}>
                            <img src='/blinkblue.png' className={`${styles2.positionAbsolute} ${styles.blinkblue_svg} ${styles2.zoominout}`}/>
                        </div>
                        <Fade left>
                            <Poin2 src_pic='/c1p1.png' src_text_pic='/c1t1.png'/>
                        </Fade>
                    </div>
                    <div className={styles.poin_container}>
                        <div className={`${styles2.positionRelative} ${styles2.py2}`}>
                            <img src='/plusbiru.png' className={`${styles2.positionAbsolute} ${styles.plusbiru1} ${styles2.rotate}`}/>
                        </div>
                        <div className={`${styles2.positionRelative} ${styles2.py2}`}>
                            <img src='/redDots_square.png' className={`${styles2.positionAbsolute} ${styles.redDots_sq1}`}/>
                        </div>
                        <Fade right>
                            <Poin1 src_pic='/c2p2_1.png' src_text_pic='/c2t2.png'/>
                        </Fade>
                    </div>
                    <div className={styles.poin_container}>
                        <div className={`${styles2.positionRelative} ${styles2.py2}`}>
                            <img src='/redDots.svg' className={`${styles2.positionAbsolute} ${styles.redDots1}`}/>
                        </div>
                        <div className={`${styles2.positionRelative} ${styles2.py2}`}>
                            <img src='/blinkblue.png' className={`${styles2.positionAbsolute} ${styles.blinkblue_svg} ${styles2.zoominout}`}/>
                        </div>
                        <Fade left>
                            <Poin2 src_pic='/c3p3.png' src_text_pic='/c3t3.png'/>
                        </Fade>
                    </div>
                    <div className={styles.poin_container}>
                        <div className={`${styles2.positionRelative} ${styles2.py2}`}>
                            <img src='/plusbiru.png' className={`${styles2.positionAbsolute} ${styles.plusbiru1} ${styles2.rotate}`}/>
                        </div>
                        <div className={`${styles2.positionRelative} ${styles2.py2}`}>
                            <img src='/redDots_square.png' className={`${styles2.positionAbsolute} ${styles.redDots_sq1}`}/>
                        </div>
                        <Fade right>
                            <Poin1 src_pic='/c4p4.png' src_text_pic='/c4t4.png'/>
                        </Fade>
                    </div>
                    <div className={styles.poin_container}>
                        <div className={`${styles2.positionRelative} ${styles2.py2}`}>
                            <img src='/redDots.svg' className={`${styles2.positionAbsolute} ${styles.redDots1}`}/>
                        </div>
                        <div className={`${styles2.positionRelative} ${styles2.py2}`}>
                            <img src='/blinkblue.png' className={`${styles2.positionAbsolute} ${styles.blinkblue_svg} ${styles2.zoominout}`}/>
                        </div>
                        <Fade left>
                            <Poin2 src_pic='/c5p5.png' src_text_pic='/c5t5.png'/>
                        </Fade>
                    </div>
                    <div className={styles.poin_container}>
                        <div className={`${styles2.positionRelative} ${styles2.py2}`}>
                            <img src='/plusbiru.png' className={`${styles2.positionAbsolute} ${styles.plusbiru1} ${styles2.rotate}`}/>
                        </div>
                        <div className={`${styles2.positionRelative} ${styles2.py2}`}>
                            <img src='/redDots_square.png' className={`${styles2.positionAbsolute} ${styles.redDots_sq1}`}/>
                        </div>
                        <Fade right>
                            <Poin1 src_pic='/c6p6.png' src_text_pic='/c6t6.png'/>
                        </Fade>
                    </div>
                    <div className={styles.poin_container}>
                        <div className={`${styles2.positionRelative} ${styles2.py2}`}>
                            <img src='/redDots.svg' className={`${styles2.positionAbsolute} ${styles.redDots1}`}/>
                        </div>
                        <div className={`${styles2.positionRelative} ${styles2.py2}`}>
                            <img src='/blinkblue.png' className={`${styles2.positionAbsolute} ${styles.blinkblue_svg} ${styles2.zoominout}`}/>
                        </div>
                        <Fade left>
                            <Poin2 src_pic='/c7p7.png' src_text_pic='/c7t7.png'/>
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles2.container_fluid}>
            <div className={`${styles2.positionRelative} ${styles2.py2}`}>
                <h2 className={`${styles.text_title_content} ${styles.text_center} ${styles2.positionRelative}`}>
                    <div className={styles3.title}  id='testimoni'>
                        <img src='/katamereka.png' className={styles3.titleImage}/>
                    </div>
                </h2>
            </div>
        </div>
    </>
  )
}

export default Content