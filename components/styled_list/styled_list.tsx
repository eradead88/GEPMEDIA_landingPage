import React from 'react'
import Gap_width from '../gap_width/gap_width';
import styles from './styled_list.module.css'

interface styledListProps{
    iconUrl: string;
    text: string;
}

function Styled_list(props: styledListProps) {
  const { iconUrl, text } = props;
  return (
    <ul className={styles.row}>
        <li className={styles.bullet}> <img src={iconUrl}/> </li>
        <Gap_width type='small'/>
        <li className={styles.text}> { text } </li>
    </ul>
  )
}

export default Styled_list