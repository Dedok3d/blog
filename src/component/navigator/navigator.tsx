import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Burger from '../../../assets/icon/burger.svg';
import styles from './navigator.module.scss';

interface Props {
}

function Navigator({ }: Props) {
    const [showMenu, setShowMenu] = useState(false);

    return <nav className={styles.nav}>
        <div className={styles.menu} onClick={() => setShowMenu(!showMenu)}>
            <Burger className={styles.icon} />
            <span className={styles.link}>Меню</span>
        </div>
        {
            showMenu && <ul className={styles.drop_menu}>
                <li className={styles.li}>
                    <Link to={'/'} className={styles.link}>
                        Лента
                </Link>
                </li>
                <li className={styles.li}>
                    <Link to={'/rating'} className={styles.link}>
                        Рейтинг
                </Link>
                </li>
                <li className={styles.li}>
                    <Link to={'/feedback'} className={styles.link}>
                        Обратная связь
                </Link>
                </li>
            </ul>
        }
        <ul className={styles.ul}>
            <li className={styles.li}>
                <Link to={'/'} className={styles.link}>
                    Лента
                </Link>
            </li>
            <li className={styles.li}>
                <Link to={'/rating'} className={styles.link}>
                    Рейтинг
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
