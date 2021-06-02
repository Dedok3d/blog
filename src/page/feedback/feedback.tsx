import React from 'react';

import styles from './feedback.module.scss';

interface Props {
}

function Feedback({ }: Props) {

    return <div className={styles.feedback}>
        <img
            className={styles.svg}
            src="../../../assets/images/github-logo.png"
            onClick={() => window.location.replace("https://github.com/Dedok3d")}
        />
    </div>;
}

export default Feedback;
