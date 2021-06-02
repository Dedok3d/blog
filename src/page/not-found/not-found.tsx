import React from 'react';


import NotFoundSvg from '../../../assets/icon/not-found.svg';

import styles from './not-found.module.scss';

interface Props {
}

function NotFound({ }: Props) {

    return <div className={styles.not_found}>
        <NotFoundSvg className={styles.svg} />
    </div>;
}

export default NotFound;
