import React from 'react';
import styles from './styles';

import Chinese_img from '../../assets/images/Chinese.png';

const data = [{
    desc: '语言基础能力',
    avg_score: 80,
    my_socre: 70
},{
    desc: '诗歌鉴赏',
    avg_score: 80,
    my_socre: 70
},{
    desc: '写作',
    avg_score: 80,
    my_socre: 70
},{
    desc: '语言基础能力',
    avg_score: 80,
    my_socre: 70
},{
    desc: '语言基础能力',
    avg_score: 80,
    my_socre: 70
}];

const ChineseTable = () => {
    const tableContainer = data.map(({desc, my_socre, avg_score}) => <li>
        <span style={{width: '42%'}} className={styles['module']}>{desc}</span>
        <span style={{width: '29%'}}>{avg_score}</span>
        <span style={{width: '29%'}}>{my_socre}</span>
    </li>);

    return <div className={styles['table-container']}>
        <ul className={styles['head']}>
            <li style={{width: '42%'}}><span>模块</span></li>
            <li style={{width: '29%'}}><span>平均能力</span></li>
            <li style={{width: '29%'}}><span>我的能力</span></li>
        </ul>
        <ul className={styles['body']}>
            { tableContainer }
        </ul>
        <p className={styles['image']}>
            <img src={Chinese_img}/>
        </p>
    </div>;
};

export default ChineseTable;