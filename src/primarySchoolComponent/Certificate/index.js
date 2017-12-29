import React from 'react';
import styles from './styles';

import certificate_full from '../../assets/images/certificate_full.png';
import certificate_part from '../../assets/images/certificate_part.png';
import star from '../../assets/images/star.png';

const full = false;

const Certificate = () => {
    return <div className={styles['certificate-container']}>
        <p className={styles['image']}>
           { full ? <img src={certificate_full} className={styles['full-image']}/> : <img src={certificate_part} className={styles['part-image']}/>}         
        </p> 
        
        <div className={styles['info']}>
            <p className={styles['title']}>荣誉证书</p>
            <div className={styles['content']}>
                <p><span className={styles['name']}>某某</span>同学：</p>
                {full ? <p>
                    在本次期末考试中你拿到了满分10颗<img src={star}/>！继续保持，棒棒哒！加油！！！
                </p> : <p>
                    在本次期末考试中你拿到了满分10颗<img src={star}/>，距离满分还有5颗<img src={star}/>，继续加油哦！！！
                </p>}
            </div>
        </div>
    </div>;
};

export default Certificate;