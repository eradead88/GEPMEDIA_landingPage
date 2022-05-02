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
            interval={2000}
            showStatus={false}>
                <div>
                    <img src='/16.png' className={styles.image}/>
                </div>
                <div>
                    <img src='/17.png' className={styles.image}/>
                </div>
                <div>
                    <img src='/18.png' className={styles.image}/>
                </div>
                <div>
                    <img src='/19.png' className={styles.image}/>
                </div>
                <div>
                    <img src='/20.png' className={styles.image}/>
                </div>
                <div>
                    <img src='/21.png' className={styles.image}/>
                </div>
                <div>
                    <img src='/22.png' className={styles.image}/>
                </div>
                <div>
                    <img src='/23.png' className={styles.image}/>
                </div>
                <div>
                    <img src='/24.png' className={styles.image}/>
                </div>
            </Carousel>
        </div>
    )
}

export default SmallSlider