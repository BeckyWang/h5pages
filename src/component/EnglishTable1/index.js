import React from 'react';
import styles from './styles';

const EnglishTable1 = ({tableData}) => {
    const tableContainer = tableData.map(({desc, knowledge, my_score, avg_score, total_score}) => <li>
        <span>{desc}</span>
        <span>{knowledge}</span>
        <span>{my_score}</span>
        <span>{avg_score}/{total_score}</span>
    </li>);

    return <div className={styles['table-container']}>
        <ul className={styles['head']}>
            <li><span>题型</span></li>
            <li><span>知识点</span></li>
            <li><span>我的得分</span></li>
            <li><span>平均分/总分</span></li>
        </ul>
        <ul className={styles['body']}>
            { tableContainer }
        </ul>
    </div>;
};

export default EnglishTable1;