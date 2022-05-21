import React from 'react'
import Sidenav from './sidenav'
import styles from './dashboard_admin.module.css'
import ContentTable from './table.jsx'

function DashboardAdmin() {
  return (
    <div>
        <Sidenav/>
        <div className={styles.content_container}>
            <div className={styles.title_container}>
                <div className={styles.title_text}>Media Sosial</div>
            </div>
            <div className={styles.content_text_container}>
                <div className={styles.content_text}>Halaman untuk mengatur jumlah follower dan subscriber media sosial yang ditampilkan pada web</div>
            </div>
            <div className={styles.content_table_container}>
                <ContentTable/>
            </div>
        </div>
    </div>
  )
}

export default DashboardAdmin