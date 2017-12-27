import React from 'react';
import styles from './styles';
import qrcode_bg from '../../assets/images/qrcode.png';

const QRcodeForPrimary = ({qrcode_url, foot_notice}) => <div className={styles['code-container']}>
    <p className={styles['title']}>老师寄语</p>
    <p className={styles['description']}>{foot_notice}</p>           
    <div className={styles['qr-code']}>
        <img src={qrcode_bg} className={styles['transparent-bg']}/>
        <img src={qrcode_bg} className={styles['non-transparent-bg']}/>
        <img src={qrcode_url} className={styles['code']}/>
    </div>
</div>;

export default QRcodeForPrimary;