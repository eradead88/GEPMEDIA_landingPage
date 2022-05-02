import React from 'react'
import styles from './textIco.module.css'

interface textIconProps{
  icon: string;
  val: string;
}

function TextIcoInline(props: textIconProps) {
  const { icon, val } = props;
  return (
    <ul className={styles.wrapper}>
      <li>
        <img src={ icon } className={styles.icon}/>
      </li>
      <li className={styles.text}>
        { val }
      </li>
    </ul>
  )
}

export default TextIcoInline