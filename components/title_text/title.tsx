import React from 'react'
import styles from './title.module.css'

interface titleProps{
    text: string;
    type: string;
}

function Title(props: titleProps) {
  const { text, type } = props;
  return (
    <div className={type == 'title' ? `${styles.title}` : `${styles.subtitle}`}>
        { text }
    </div>
  )
}

export default Title