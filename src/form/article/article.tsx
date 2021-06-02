import React from 'react';
import { ArticleRecord } from '../../logic/model';
import { formatDate } from '../../logic/utils';

import styles from './article.module.scss';

interface Props {
    record: ArticleRecord
}

function Article({ record }: Props) {

    const getDate = () => formatDate(new Date());

    return <div className={styles.article}>
        <header>
            <h2 className={styles.header}>
                {record.title}
            </h2>
        </header>
        <div>
            <p>
                {record.summary}
            </p>
        </div>
        <footer className={styles.footer}>
            <span className={styles.span}>
                {getDate()}
                <a className={styles.a} href="https://vk.com/durov">Вконтакте</a>
                <a className={styles.a} href="https://t.me/durov_russia">Телеграмм</a>
                <a className={styles.a} href="https://twitter.com/durov?lang=ru">Twitter</a>
            </span>
        </footer>
    </div>;
}

export default Article;
