import React from 'react'
import { Video } from '../youtubevids/youtubevids'
import styles from '../keunggulan/keunggulan.module.css'
import Title from '../title_text/title'
import Gap_height from '../gap_height/gap_height'
import FadeIn from 'react-fade-in/lib/FadeIn'

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
                <li><a href='https://www.youtube.com/c/GEPMedia'><img src='/youtube_total(1).png' className={styles.subs}/></a></li>
                <li><a href='https://www.instagram.com/gepmedia.id/'><img src='/instagram_total(1).png' className={styles.subs}/></a></li>
                <li><a href='https://www.tiktok.com/@gepmedia'><img src='/tiktok_total(1).png' className={styles.subs}/></a></li>
                <li><a href='https://t.me/lolosptn22'><img src='/telegram_total(1).png' className={styles.subs}/></a></li>
            </ul>
        </div>
    </div>
    )
}

export default VideoSection