import React from 'react';

import styles from './styles';

import monkey_boy from '../../assets/images/monkey_boy.png';
import monkey_girl from '../../assets/images/monkey_girl.png';

const Score = () => {
    return <div className={styles['score-container']}>
        <span className={styles['image']}>
            <img src={monkey_girl}/>
        </span>
        <p className={styles['score-info']}>
            <span className={styles['title']}>我考的怎么样</span>
            <p className={styles['score']}>
                <span className={styles['my-score']}>90</span>
                <span>/100</span>
            </p>
        </p>
    </div>;
};

export default Score;