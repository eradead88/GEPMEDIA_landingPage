import React from 'react'
import Button from '../button/button'
import Content_text from '../content_text/content_text'
import Gap_height from '../gap_height/gap_height'
import Gap_width from '../gap_width/gap_width'
import styles from './beranda.module.css'

function Beranda() {
  return (
    <div className={styles.screen}>
        <div className={styles.container}>
            <div className={styles.col1}>
                <img src='/SIAPUTBK.png' className={styles.hashtag}/>
                <Gap_height type='small'/>
                <Content_text content='GEP Media merupakan platform belajar terlengkap dan terpercaya untuk menggapai mimpi sampai kampus impian, informasi paling UPDATE mengenai Perguruan Tinggi Negeri di Indonesia.'/>
                <Gap_height type='small'/>
                <div className={styles.button_wrapper}>
                    <Button text='Mari Bergabung' action='https://tryout.gepmedia.id/#!/daftar'/>
                    <Gap_width type='small'/>
                    <Button text='Mulai Belajar' action='https://tryout.gepmedia.id/#!/login'/>
                </div>
            </div>
            <Gap_height type='small'/>
            <Gap_width type='small'/>
            <div className={styles.col2}>
                <div className={styles.imageholder}>
                    <img src='/1.png' className={styles.image}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Beranda