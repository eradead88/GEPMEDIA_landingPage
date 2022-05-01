import React from 'react'
import Title from '../title_text/title'
import styles from './poin.module.css'

interface poin1Props{
    text: string;
    src_text_pic: string;
    src_pic: string; 
}

function Poin1(props: poin1Props) {
  const {text, src_text_pic, src_pic} = props;
  return (
    <div className={styles.contp1}>
        <div className={styles.col1}>
            <div className={styles.colTitle}><Title type='title' text={ text }/></div>
            <img src={ src_text_pic } className={styles.pointImage}/>
        </div>
        <div className={styles.col2}>
            <img src={ src_pic } className={styles.pointImage}/>
        </div>
    </div>
  )
}

export default Poin1