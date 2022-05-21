import React from 'react'
import { useState, useEffect } from 'react'
import styles from './table.module.css'

function ContentTable() {
  const  [ render, setRender ] = useState(false);

  useEffect(() => {
    setRender(true);
  }, []);

  return (
    <div>
        <table className={styles.table}>
          <thead>
            <th className={styles.th}>Media Sosial</th>
            <th className={styles.th}>Follower/Subs</th>
            <th className={styles.th}>Action</th>
          </thead>
          <tr>
            <td className={styles.td}>Youtube</td>
            <td className={styles.td}>100 K</td>
            <td className={styles.td}>Edit</td>
          </tr>
          <tr>
            <td className={styles.td}>Instagram</td>
            <td className={styles.td}>100 K</td>
            <td className={styles.td}>Edit</td>
          </tr>
          <tr>
            <td className={styles.td}>Tiktok</td>
            <td className={styles.td}>100 K</td>
            <td className={styles.td}>Edit</td>
          </tr>
          <tr>
            <td className={styles.td}>Telegram</td>
            <td className={styles.td}>100 K</td>
            <td className={styles.td}>Edit</td>
          </tr>
        </table>
    </div>
  )
}

export default ContentTable