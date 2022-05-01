import React from 'react'
import styles from './button.module.css'

interface buttonProps{
    text: string;
    action: string;
}

function Button(props: buttonProps) {
  const { text, action } = props;
  return (
    <div className={styles.button_bg}>
      <a href={ action }>
        <div className={styles.button_txt}>
            { text }
        </div>
      </a>
    </div>
  )
}

export default Button