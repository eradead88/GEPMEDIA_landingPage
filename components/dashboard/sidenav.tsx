import React from 'react'
import styles from './sidenav.module.css'
import openNav from './open.js'
import closeNav from './close.js'

function Sidenav() {
  return (
   <>   
        <div id='mySidePanel' className={styles.sidepanel}>
            <a href='javascript:void(0)' className={styles.closebtn} onClick={closeNav}>&#10006;</a>
            <a href='#'>Social Media</a>
            <a href='#'>Logout</a>
        </div>
        <button className={styles.openbtn} onClick={openNav}>&#9776;</button>
    </>
  )
}

export default Sidenav