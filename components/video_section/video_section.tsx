import React from 'react'
import { Video } from '../youtubevids/youtubevids'
import styles from '../keunggulan/keunggulan.module.css'
import Title from '../title_text/title'
import Gap_height from '../gap_height/gap_height'

function VideoSection(){
    return (
    <div className={styles.container}>
        <div className={styles.col1}>
            <Video/>
        </div>
        <div className={styles.col2}>
            <Title text='Kenapa Harus GEP Media?' type='title'/>
            <ul className='styledList'>
                <li className={styles.points}>Terupdate dan Terlengkap</li>
                <Gap_height type='small'/>
                <li className={styles.points}>Informatif</li>
                <Gap_height type='small'/>
                <li className={styles.points}>Strategi dan Tips Lolos PTN</li>
                <Gap_height type='small'/>
                <li className={styles.points}>Pembahasan Soal PTN Terlengkap</li>
            </ul>
            <ul className={styles.subsList}>
                <li><img src='/youtube_total.png' className={styles.subs}/></li>
                <li><img src='/instagram_total.png' className={styles.subs}/></li>
                <li><img src='/tiktok_total.png' className={styles.subs}/></li>
                <li><img src='/telegram_total.png' className={styles.subs}/></li>
            </ul>
        </div>
    </div>
    )
}

export default VideoSection