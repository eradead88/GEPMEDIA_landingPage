import React from 'react'
import styles from './poin.module.css'
import Poin1 from './poin1'
import Poin2 from './poin2'

function PoinPoin() {
  return (
    <div className={styles.container}>
        <Poin1 text='TERPERCAYA DAN BERBADAN HUKUM' src_pic='/2_compressed.png' src_text_pic='/3(1)_compresssed.png'/>
        <Poin2 text='TINGKAT KELOLOSAN TINGGI' src_pic='/4(1)_compressed.png' src_text_pic='/5_compressed.png'/>
        <Poin1 text='TERUPDATE' src_pic='/unj1_compressed.png' src_text_pic='/6_compressed.png'/>
        <Poin2 text='PENGAJAR BERPENGALAMAN DAN BERKUALITAS' src_pic='/8_compressed.png' src_text_pic='/9_compressed.png'/>
        <Poin1 text='AKURAT' src_pic='/itb1_compressed.png' src_text_pic='/10_compressed.png'/>
        <Poin2 text='FLEKSIBEL' src_pic='/ipb1_compressed.png' src_text_pic='/13_compressed.png'/>
        <Poin1 text='RASIONALISASI' src_pic='/ui1_compressed.png' src_text_pic='/14_compressed.png'/>
    </div>
  )
}

export default PoinPoin