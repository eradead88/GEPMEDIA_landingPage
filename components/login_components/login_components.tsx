import React from 'react'
import Gap_height from '../gap_height/gap_height'
import InputTitle from './input_title'
import styles from './login_components.module.css'

function LoginComponents() {
  return (
    <div className={styles.screen}>
        <div className={styles.container}>
            <Gap_height type='small'/>
            <div className={styles.row}>
                <div className={styles.content}>
                    <div className={styles.form_container}>
                        <div className={styles.form_header}>
                            <div className={styles.header_element}>
                                <img src='/logo.png' className={styles.logo_header}/>
                            </div>
                            <Gap_height type='large'/>
                            <div className={styles.header_element}>
                                <div className={styles.signin_title}>Welcome, administrator!</div>
                            </div>
                            <div className={styles.header_element}>
                                <div className={styles.signin_text}>Masukkan email dan kata sandi yang valid untuk mengakses dashboard admin</div>
                            </div>
                        </div>
                        <Gap_height type='large'/>
                        <form className={styles.form}>
                            <input type='text' placeholder='Email' className={styles.input_field_email}/>
                            <input type='password' placeholder='Kata Sandi' className={styles.input_field_password}/>
                            <div className={styles.buttonContainer}>
                                <button type='submit' className={styles.submitButton}>Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LoginComponents