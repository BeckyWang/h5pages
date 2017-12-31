import React from 'react';

import styles from './styles';

const EnglishTable2 = ({tableData}) => {
    const tableContainer = tableData.map(({topic_name, topic_list}) =>{
        
        return <li className={styles['body-item']}>
            <span style={{width: '24%', marginBottom: '14px', textAlign: 'right'}}>阅读理解-{topic_name}</span>
            <ul className={styles['knowledge-point']} style={{width: '76%'}}>
                { topic_list.map(({avg_score, knowledge, my_score, total_score}) => <li>
                    <span style={{width: '56%'}}>{knowledge}</span>
                    <span style={{width: '48.5%'}}>{my_score}</span>
                    <span style={{width: '44.5%'}}>{avg_score}/{total_score}</span>
                </li>) }
            </ul>
        </li>;
    });

    return <div className={styles['table-container']}>
        <ul className={styles['head']}>
            <li style={{width: '26%'}}><span>题型</span></li>
            <li style={{width: '24.5%'}}><span>知识点</span></li>
            <li style={{width: '18%'}}><span>我的得分</span></li>
            <li style={{width: '23.5%'}}><span>平均分/总分</span></li>
        </ul>
        <ul className={styles['body']}>
            { tableContainer }
        </ul>
    </div>; 
};

export default EnglishTable2;