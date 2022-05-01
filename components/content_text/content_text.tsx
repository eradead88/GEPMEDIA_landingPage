import { stringify } from 'querystring'
import React from 'react'
import styles from './content_text.module.css'

interface contentTextProps{
    content: string;
}

function Content_text(props: contentTextProps) {
  const { content } = props;
  return (
    <div className={styles.content_text}>
        { content }
    </div>
  )
}

export default Content_text