import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import Article from '../../form/article/article';
import Api from '../../logic/api';
import { ArticleRecord } from '../../logic/model';
import { useEffectAsync } from '../../logic/utils';

import styles from './main-page.module.scss';

interface Props {
}

function MainPage({ }: Props) {
    const [records, setRecords] = useState<ArticleRecord[]>([]);
    const [offset, setOffset] = useState(0);

    useEffectAsync(async () => {
        const api = new Api();
        const res = await api.getArticles();
        setRecords(res);
    }, []);

    const loadMore = async () => {
        const api = new Api();
        const res = await api.getArticles(offset + 10);
        setRecords(old => [...old, ...res]);
        setOffset(offset + 10);
    }

    return <div className={styles.main}>
        <section>
            <InfiniteScroll
                dataLength={records.length}
                next={loadMore}
                hasMore={true}
                loader={<h4>Loading...</h4>}
            >
                {
                    records.map((record, index) => <Article key={index} record={record} />)
                }
            </InfiniteScroll>
        </section>
    </div>;
}

export default MainPage;
