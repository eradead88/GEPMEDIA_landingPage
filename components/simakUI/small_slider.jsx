import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import styles from './slider.module.css';

function SmallSlider(){
    return (
        <div className={styles.small_slider}>
            <Carousel 
            autoPlay={true} 
            centerMode={false}
            emulateTouch={true}
            stopOnHover={true}
            labels={true}
            showIndicators={true} 
            showThumbs={false}
            showArrows={false}
            infiniteLoop={true}
            interval={5000}
            showStatus={false}>
                <div>
                    <img src='/simak1.png' className={styles.image}/>
                </div>
                <div>
                    <img src='/simak2.png' className={styles.image}/>
                </div>
                <div>
                    <img src='/simak3.png' className={styles.image}/>
                </div>
                <div>
                    <img src='/simak4.png' className={styles.image}/>
                </div>
                <div>
                    <img src='/simak5.png' className={styles.image}/>
                </div>
                <div>
                    <img src='/simak6.png' className={styles.image}/>
                </div>
                <div>
                    <img src='/simak7.png' className={styles.image}/>
                </div>
                <div>
                    <img src='/simak8.png' className={styles.image}/>
                </div>
                <div>
                    <img src='/simak9.png' className={styles.image}/>
                </div>
            </Carousel>
        </div>
    )
}

export default SmallSlider