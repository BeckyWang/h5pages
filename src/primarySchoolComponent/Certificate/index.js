import React from 'react';
import styles from './styles';

import certificate_full from '../../assets/images/certificate_full.png';
import certificate_part from '../../assets/images/certificate_part.png';
import star from '../../assets/images/star.png';

const Certificate = () => {
    return <div className={styles['certificate-container']}>
        <p className={styles['image']}>
            <img src={certificate_full} />
        </p>
        <div className={styles['info']}>
            <p className={styles['title']}>荣誉证书</p>
            <div className={styles['content']}>
                <p><span className={styles['name']}>某某</span>同学：</p>
                <p>在本次期末考试中你拿到了满分10颗<img src={star}/>！继续保持，棒棒哒！加油！！！</p>
            </div>
        </div>
    </div>;
};

export default Certificate;