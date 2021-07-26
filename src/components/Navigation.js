import React from 'react'
import styles from './Navigation.module.scss'
import { Link } from 'react-router-dom'

const Navigation = () => {
    return <div className={styles['nav']}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
    </div>

}

export default Navigation;