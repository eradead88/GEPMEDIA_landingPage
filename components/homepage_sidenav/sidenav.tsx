import React from 'react'
import styles from './sidenav.module.css'
import openNav from './open.js'
import closeNav from './close.js'
import Link from 'next/link'

function Sidenav() {
  return (
   <>   
        <div id='mySidePanel' className={styles.sidepanel}>
            <a href='javascript:void(0)' className={styles.closebtn} onClick={closeNav}>&#10006;</a>
            <a href='#home'>Beranda</a>
            <a href='#keunggulan'>Keunggulan</a>
            <a href='#testimoni'>Testimoni</a>
            <Link href='/simakui'><a>Simak UI</a></Link>
            <Link href='/utmbkipb'><a>UTMBK IPB</a></Link>
            <a href='https://tryout.gepmedia.id/#!/daftar'>Daftar</a>
            <a href='https://tryout.gepmedia.id/#!/login'>Login</a>
        </div>
        <button className={styles.openbtn} onClick={openNav}>&#9776;</button>
    </>
  )
}

export default Sidenav