import React from 'react';

import styles from './styles';

const EnglishTable2 = ({tableData}) => {
    const tableContainer = tableData.map(({desc, question_list}) =>{
        const question_type = desc.split('-')[0];
        const topic_name = desc.split('-')[1];
        return <li className={styles['body-item']}>
            <span style={{width: '16%'}}>{question_type}</span>
            <span style={{width: '17%'}}>{topic_name}</span>
            <ul className={styles['knowledge-point']} style={{width: '67%'}}>
                { question_list.map(({avg_score, knowledge, my_score, total_score}) => <li>
                    <span style={{width: '31%'}}>{knowledge}</span>
                    <span style={{width: '33.5%'}}>{my_score}</span>
                    <span style={{width: '34.5%'}}>{avg_score}/{total_score}</span>
                </li>) }
            </ul>
        </li>;
    });

    return <div className={styles['table-container']}>
        <ul className={styles['head']}>
            <li style={{width: '16%'}}><span>题型</span></li>
            <li style={{width: '36.5%'}}><span>知识点</span></li>
            <li style={{width: '18%'}}><span>我的得分</span></li>
            <li style={{width: '23.5%'}}><span>平均分/总分</span></li>
        </ul>
        <ul className={styles['body']}>
            { tableContainer }
        </ul>
    </div>; 
};

export default EnglishTable2;