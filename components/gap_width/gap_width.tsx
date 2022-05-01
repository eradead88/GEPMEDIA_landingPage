import React from 'react';
import styles from './gap_width.module.css';

interface widthProps{
  type: string;
}

function Gap_width(props: widthProps) {
  const { type } = props;
  return (
    <div className={type == 'small' ? `${styles.small}`: type == 'medium' ? `${styles.medium}` : type == 'large' ? `${styles.large}` : `${styles.spacer}`}></div>
  )
}

export default Gap_width