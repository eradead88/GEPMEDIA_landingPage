import React from 'react'
import { InputGroup } from 'react-bootstrap'
import styles from './footer.module.css'

function Footer() {
  return (
    <div className={styles.container}>
        <div className={styles.upperRow}>
            <div className={styles.col_row1}>
                <img src='/pilihpaketbelajarmu.png' className={styles.col_row1_img1}/>
            </div>
            <div className={styles.col_row1}>
                <img src='/segeraDaftar.png' className={styles.col_row1_img2}/>
            </div>
        </div>
        <div className={styles.middleRow}>
            <div className={styles.middleRow_col}>
                <img src='/paketA.png' className={styles.paket}/>
                <img src='/paketB.png' className={styles.paket}/>
                <img src='/paketKelasOnline.png' className={styles.paket}/>
            </div>
        </div>
        <div className={styles.bottomRow}>
            <div className={styles.bottomRow_col}>
                <a href='http://utmbkipb.gepmedia.id'><button className={styles.btm_btn}>Daftar Disini</button></a>
                <div className={styles.linkwrapper}>
                    <img src='/joingruptelegram.png' className={styles.linktitle}/>
                    <img src='/telegramLink.png' className={styles.links}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer