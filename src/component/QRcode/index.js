import React from 'react';
import styles from './styles';
import qrcode_bg from '../../assets/images/qrcode.png';

const QRcode = ({qrcode_url, foot_notice, foot_extra}) => <div className={styles['code-container']}>
    <p className={styles['title']}>老师寄语</p>
    <p className={styles['description']} style={{textIndent: '2em'}}>{foot_notice}</p>
    {foot_extra.map(value => <p className={styles['description']} style={{textAlign: 'center'}} >{value}</p>)}
    <div className={styles['qr-code']}>
        <img src={qrcode_bg} className={styles['transparent-bg']}/>
        <img src={qrcode_bg} className={styles['non-transparent-bg']}/>
        <img src={qrcode_url} className={styles['code']}/>
    </div>
</div>;

export default QRcode;