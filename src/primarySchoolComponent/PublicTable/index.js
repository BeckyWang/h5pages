import React from 'react';
import styles from './styles';

import English_img from '../../assets/images/English.png';
import Math_img from '../../assets/images/Math.png';
import star from '../../assets/images/star.png';

const data = [{
    desc: '语言基础能力',
    my_socre: 3
},{
    desc: '加加减减我会算',
    my_socre: 2
},{
    desc: '写作',
    my_socre: 1
}];

const PublicTable = ({type}) => {
    const tableContainer = data.map(({desc, my_socre}) => {
        const starArr = new Array(my_socre).fill(<img src={star}/>);
        return <li>
            <span style={{width: '50%'}} className={styles['desc']}>{desc}</span>
            <span style={{width: '50%'}} className={styles['star']}>{starArr}</span>
        </li>;
    });

    return <div className={styles['table-container']}>
        <p className={styles['title']}>我掌握了这些</p>
        <ul className={styles['body']}>
            { tableContainer }
        </ul>
        <p className={styles['image']}>
            {type == 'Math' ? <img src={Math_img}/> : <img src={English_img}/>}
        </p>
    </div>;
};

export default PublicTable;