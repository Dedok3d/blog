import React from 'react';
import Logo from '../../component/logo/logo';
import Navigator from '../../component/navigator/navigator';

import styles from './header.module.scss';

interface Props {
}

function Header({ }: Props) {

    return <div className={styles.header}>
        <Logo />
        <Navigator />
    </div>;
}

export default Header;
