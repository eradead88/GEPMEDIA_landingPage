import React from 'react'
import { Video } from '../youtubevids/youtubevids'
import styles from '../keunggulan/keunggulan.module.css'
import Title from '../title_text/title'
import Gap_height from '../gap_height/gap_height'
import FadeIn from 'react-fade-in/lib/FadeIn'
import SubsList from '../subsList/subslist'

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
                <li><a href='https://www.youtube.com/c/GEPMedia'><SubsList icon='/youtube.png' val='51 K'/></a></li>
                <li><a href='https://www.instagram.com/gepmedia.id/'><SubsList icon='/instagram.png' val='23 K'/></a></li>
                <li><a href='https://www.tiktok.com/@gepmedia'><SubsList icon='/tiktok.png' val='18,5 K'/></a></li>
                <li><a href='https://t.me/lolosptn22'><SubsList icon='/telegram.png' val='3,6 K'/></a></li>
            </ul>
        </div>
    </div>
    )
}

export default VideoSection