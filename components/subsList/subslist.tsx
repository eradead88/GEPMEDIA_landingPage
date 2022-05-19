import React from 'react'
import styles from './subslist.module.css'

interface subsListProps{
    icon: string;
    val: string;
}

function SubsList(props: subsListProps) {
  const { icon, val, } = props;  
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

export default SubsList