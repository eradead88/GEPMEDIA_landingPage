import React from 'react'
import Gap_height from '../gap_height/gap_height'
import Gap_width from '../gap_width/gap_width'
import PoinPoin from '../poin_poin/poin_poin'
import Title from '../title_text/title'
import VideoSection from '../video_section/video_section'
import { Video } from '../youtubevids/youtubevids'
import styles from './keunggulan.module.css'

function Keunggulan() {
  return (
    <div className={styles.screen} id='keunggulan'>
        <VideoSection/>
        <PoinPoin/>
    </div>
  )
}

export default Keunggulan