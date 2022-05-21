import React from 'react'
import styles from './poin.module.css'
import Poin1 from './poin1'
import Poin2 from './poin2'

function PoinPoin() {
  return (
    <div className={styles.container}>
        <Poin1 src_pic='/apaItuUTMBK.png' src_text_pic='/apaItuUTMBK_picture.png'/>
        <Poin2 src_pic='/exclusive.png' src_text_pic='/exclusive_picture.png'/>
        <Poin1 src_pic='/fleksibel_ipb.png' src_text_pic='/fleksibel_ipb_pict.png'/>
        <Poin2 src_pic='/pengajar_profesional.png' src_text_pic='/pengajar_profesional_pict.png'/>
        <Poin1 src_pic='/bonus_ebook.png' src_text_pic='/bonus_ebook_pict.png'/>
    </div>
  )
}

export default PoinPoin