import React from 'react'
import styles from './poin.module.css'
import Poin1 from './poin1'
import Poin2 from './poin2'

function PoinPoin() {
  return (
    <div className={styles.container}>
        <Poin1 text='TERPERCAYA DAN BERBADAN HUKUM' src_pic='/2.png' src_text_pic='/3(1).png'/>
        <Poin2 text='TINGKAT KELOLOSAN TINGGI' src_pic='/4(1).png' src_text_pic='/5.png'/>
        <Poin1 text='TERUPDATE' src_pic='/unj1.png' src_text_pic='/6.png'/>
        <Poin2 text='PENGAJAR BERPENGALAMAN DAN BERKUALITAS' src_pic='/8.png' src_text_pic='/9.png'/>
        <Poin1 text='AKURAT' src_pic='/itb1.png' src_text_pic='/10.png'/>
        <Poin2 text='FLEKSIBEL' src_pic='/ipb1.png' src_text_pic='/13.png'/>
        <Poin1 text='RASIONALISASI' src_pic='/ui1.png' src_text_pic='/14.png'/>
    </div>
  )
}

export default PoinPoin