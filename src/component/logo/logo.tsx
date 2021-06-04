import React from 'react';
import styles from './logo.module.scss';

import MillenniumFalcon from '../../../assets/millennium-falcon.svg';

interface Props {
}

function Logo({ }: Props) {

    return <div className={styles.logo}>
        <MillenniumFalcon className={styles.svg} />
        Space news
    </div>;
}

export default Logo;
