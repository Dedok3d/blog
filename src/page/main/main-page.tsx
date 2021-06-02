import React from 'react';

import Article from '../../form/article/article';

import styles from './main-page.module.scss';

interface Props {
}

function MainPage({ }: Props) {

    return <div className={styles.main}>
        <section>
            <Article />
            <Article />
        </section>
    </div>;
}

export default MainPage;
