import React from 'react'
import styles from './header.module.css'
import Button from './button'

function Header() {
  return (
    <div className={styles.container}>
        <div className={styles.col1}>
            <img src='/utmbkipbsiap.png' className={styles.imageheader}/>
        </div>
        <div className={styles.col2}>
            <img src='/segeraDaftar.png' className={styles.imageheader2}/>
        </div>
        <div className={styles.col2}>
            <img srcSet='/headerUTMBK.png' className={styles.imageheader}/>
        </div>
        <div className={styles.col3}>
            <img src='/daftarsegera.png' className={styles.imageheader3}/>
        </div>
        <div className={styles.col_button}>
            <Button text='Daftar Disini' action='http://utmbkipb.gepmedia.id'/>
        </div>
    </div>
  )
}

export default Header