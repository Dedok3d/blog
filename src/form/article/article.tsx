import React from 'react';
import { ArticleRecord } from '../../logic/model';
import { formatDate } from '../../logic/utils';

import styles from './article.module.scss';

interface Props {
    record: ArticleRecord;
}

function Article({ record }: Props) {

    return <div className={styles.article}>
        <header>
            <h2 className={styles.header}>
                {record.title}
            </h2>
        </header>
        <object className={styles.img} data={record.imageUrl} type="image/png" />
        <p>
            {record.summary}
        </p>
        <footer className={styles.footer}>
            <span className={styles.span}>
                {formatDate(record.publishedAt)}
                <a className={styles.a} href={record.url}>{record.newsSite}</a>
            </span>
        </footer>
    </div>;
}

export default Article;
