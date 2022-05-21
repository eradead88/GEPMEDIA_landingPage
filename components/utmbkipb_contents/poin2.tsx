import React from 'react'
import Title from '../title_text/title'
import styles from './poin.module.css'

interface poin2Props{
    src_text_pic: string;
    src_pic: string; 
}

function Poin2(props: poin2Props) {
  const {src_text_pic, src_pic} = props;
  return (
    <div className={styles.contp2}>
        <div className={styles.col1rev}>
            <img src={ src_text_pic } className={styles.pointImage}/>
        </div>
        <div className={styles.col2rev}>
            <img src={ src_pic } className={styles.pointImage}/>
        </div>
    </div>
  )
}

export default Poin2