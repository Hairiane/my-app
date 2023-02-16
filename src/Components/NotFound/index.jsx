import React from 'react'
import styles from './NotFound.module.scss'

const NotFoundPage = () => {
    return(
        <div className={styles.root}>
            <span>😕</span>
            <h1>Страница не найдена</h1>
            <br />
            <div>Увы, но на нашем сайте нет такой страницы</div>
        </div>
    )
}

export default NotFoundPage