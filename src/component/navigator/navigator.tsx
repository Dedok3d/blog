import React from 'react';
import { Link } from 'react-router-dom';

import styles from './navigator.module.scss';

interface Props {
}

function Navigator({ }: Props) {

    return <nav className={styles.nav}>
        <ul className={styles.ul}>
            <li className={styles.li}>
                <Link to={'/'} className={styles.link}>
                    Блог
                </Link>
            </li>
            <li className={styles.li}>
                <Link to={'/practice'} className={styles.link}>
                    Практика
                </Link>
            </li>
            <li className={styles.li}>
                <Link to={'/feedback'} className={styles.link}>
                    Обратная связь
                </Link>
            </li>
        </ul>
    </nav>;
}

export default Navigator;
