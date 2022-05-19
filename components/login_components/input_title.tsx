import React from 'react'
import styles from './login_components.module.css'

interface inputTitleProps{
    title: string;
}

function InputTitle(props: inputTitleProps) {
  const { title } = props;
  return (
    <div className={styles.input_title}>{ title }</div>
  )
}

export default InputTitle