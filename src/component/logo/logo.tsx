import React from 'react';
import styles from './logo.module.scss';

interface Props {
}

function Logo({ }: Props) {

    return <div className={styles.logo}>Просто блог</div>;
}

export default Logo;
