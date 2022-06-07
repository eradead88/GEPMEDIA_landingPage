import React from 'react'
import TextIcoInline from '../text_icon_inline/textIco_in'
import styles from './contact.module.css'

function Contact() {
  return (
    <div className={styles.container}>
        <div className={styles.img_container}>
            <img src='/contact_compressed.png' className={styles.image}/>
        </div>
        <div className={styles.contacts_container}>
            <ul className={styles.list}>
                <li><TextIcoInline icon='/instagram.png' val='@gepmedia.id'/></li>
                <li><TextIcoInline icon='/youtube.png' val='GEP Media'/></li>
                <li><TextIcoInline icon='/tiktok.png' val='@gepmedia'/></li>
                <li><TextIcoInline icon='/telegram.png' val='t.me/lolosptn22'/></li>
                <li><TextIcoInline icon='/whatsapp.png' val='085771020882'/></li>
            </ul>
        </div>
    </div>
  )
}

export default Contact