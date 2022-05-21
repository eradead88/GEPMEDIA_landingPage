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
                    <img src='/utmbk1.png' className={styles.image}/>
                </div>
                <div>
                    <img src='/utmbk2.png' className={styles.image}/>
                </div>
                <div>
                    <img src='/utmbk3.png' className={styles.image}/>
                </div>
                <div>
                    <img src='/utmbk4.png' className={styles.image}/>
                </div>
                <div>
                    <img src='/utmbk5.png' className={styles.image}/>
                </div>
                <div>
                    <img src='/utmbk6.png' className={styles.image}/>
                </div>
                <div>
                    <img src='/utmbk7.png' className={styles.image}/>
                </div>
                <div>
                    <img src='/utmbk8.png' className={styles.image}/>
                </div>
                <div>
                    <img src='/utmbk9.png' className={styles.image}/>
                </div>
                <div>
                    <img src='/utmbk10.png' className={styles.image}/>
                </div>
                <div>
                    <img src='/utmbk11.png' className={styles.image}/>
                </div>
                <div>
                    <img src='/utmbk12.png' className={styles.image}/>
                </div>
                <div>
                    <img src='/utmbk13.png' className={styles.image}/>
                </div>
                <div>
                    <img src='/utmbk14.png' className={styles.image}/>
                </div>
                <div>
                    <img src='/utmbk15.png' className={styles.image}/>
                </div>
            </Carousel>
        </div>
    )
}

export default SmallSlider