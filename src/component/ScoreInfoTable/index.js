import React from 'react';

import styles from './styles';

const ScoreInfoTable = ({score_base}) => {
    const { student_score, total_score, class_avg_score, grade_avg_score } = score_base;

    return <div className={styles['evaluation']}>
        <p className={styles['title']}>我学得怎么样</p>
        <ul className={styles['score']}>
            <li>{student_score}<span>/{total_score}</span></li>
            <li>{class_avg_score}</li>
            <li>{grade_avg_score}</li>
        </ul>
        <ul className={styles['item']}>
            <li>分数/满分</li>
            <li>班级平均分</li>
            <li>年级平均分</li>
        </ul>
    </div>;
};

export default ScoreInfoTable;