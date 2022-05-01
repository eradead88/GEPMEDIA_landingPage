import React from 'react'
import styles from './gap_height.module.css'

interface gapProps{
    type: string;
}

function Gap_height(props: gapProps) {
  const { type } = props;
  return (
    <div className={type == 'small' ? `${styles.small}`: type == 'medium' ? `${styles.medium}` : type == 'large' ? `${styles.large}` : `${styles.spacer}`}></div>
  )
}

export default Gap_height