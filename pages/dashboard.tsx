import React from 'react'
import styles from '../styles/Dashboard.module.css'
import DashboardAdmin from '../components/dashboard/dashboard_admin.jsx'

function Dashboard() {
  return (
    <div className={styles.screen}>
        <DashboardAdmin/>
    </div>
  )
}

export default Dashboard