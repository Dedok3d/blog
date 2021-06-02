import React, { useState } from 'react';

import Article from '../../form/article/article';
import Api from '../../logic/api';
import { ArticleRecord } from '../../logic/model';
import { useEffectAsync } from '../../logic/utils';

import styles from './main-page.module.scss';

interface Props {
}

function MainPage({ }: Props) {
    const [records, setRecords] = useState<ArticleRecord[]>([]);

    useEffectAsync(async () => {
        const api = new Api();
        const res = await api.getArticles();
        setRecords(res);
    }, []);

    return <div className={styles.main}>
        <section>
            {
                records.map(record => <Article key={record.id} record={record} />)
            }
        </section>
    </div>;
}

export default MainPage;
