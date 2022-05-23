import React, { useState, useEffect } from 'react'
import Gap_width from '../gap_width/gap_width';
import Sidenav from '../homepage_sidenav/sidenav';
import styles from './topnav.module.css';


function Topbar() {
    const [topbar, setTopbar] = useState(false);

    const changeBackground = () => {
        if(typeof window !== "undefined"){
            if(window.scrollY >= 1){
                setTopbar(true);
            } else {
                setTopbar(false);
            }
        }
        
    }

    React.useEffect(() => {
        window.addEventListener('scroll', changeBackground);
    })


    return (
        <header className={topbar ? `${styles.active}`: `${styles.topbar}`}>
            <ul className={styles.list}>
                <div>
                    <li>
                        <a href='#home'><img src='/logo.png' className={styles.IMlogo}/></a>
                    </li>
                    <li className={styles.navigations_sidebar}>
                        <Sidenav/>
                    </li>
                </div>
                <div className={styles.actions}>
                    <li className={styles.navigations}>
                        <Gap_width type='small'/>
                    </li>
                    <li className={styles.navigations}>
                        <a href='#home' className={styles.links}>Beranda</a>
                    </li>
                    <li className={styles.navigations}>
                        <a href='#keunggulan' className={styles.links}>Keunggulan</a>
                    </li>
                    <li className={styles.navigations}>
                        <a href='#testimoni' className={styles.links}>Testimoni</a>
                    </li>
                    <li className={styles.navigations}>
                        <a href='http://simakui.gepmedia.id' className={styles.links}>SIMAK UI</a>
                    </li>
                    <li className={styles.navigations}>
                        <a href='/utmbkipb' className={styles.links}>UTMBK IPB</a>
                    </li>
                    <li className={styles.navigations}>
                        <a href='https://tryout.gepmedia.id/#!/daftar' className={styles.links}>Daftar</a>
                    </li>
                    <li className={styles.navigations}>
                        <a href='https://tryout.gepmedia.id/#!/login' className={styles.links}>Login</a>
                    </li>
                </div>
            </ul>
        </header>
    )
}

export default Topbar
