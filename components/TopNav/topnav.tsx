import React, { useState, useEffect } from 'react'
import Gap_width from '../gap_width/gap_width';
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
                        <a href='#'><img src='/logo.png' className={styles.IMlogo}/></a>
                    </li>
                </div>
                <div className={styles.actions}>
                    <li className={styles.navigations}>
                        <Gap_width type='large'/>
                    </li>
                    <li className={styles.navigations}>
                        <a href='#'>Beranda</a>
                    </li>
                    <li className={styles.navigations}>
                        <a href='#'>Keunggulan</a>
                    </li>
                    <li className={styles.navigations}>
                        <a href='#'>Testimoni</a>
                    </li>
                    <li className={styles.navigations}>
                        <a href='https://tryout.gepmedia.id/#!/daftar'>Daftar</a>
                    </li>
                    <li className={styles.navigations}>
                        <a href='https://tryout.gepmedia.id/#!/login'>Login</a>
                    </li>
                </div>
            </ul>
        </header>
    )
}

export default Topbar
