import React from 'react';

import styles from './styles';
import qrcode_bg from '../../assets/images/qrcode.png';

class QRcode extends React.Component {
	constructor() {
        super();
    }

    render() {
        return (<div className={styles['code-container']}>
        	<p className={styles['title']}>二维码</p>
        	<p className={styles['description']}>与iPhone X一同发布，但上市时间早近6个周的iPhone 8和iPhone 8 Plus，在iPhone中的份额还是要低于上市时间更晚的iPhone X。Localytics的数据就表明，截止12月18日，iPhone 8在iPhone中的份额为3%，iPhone 8 Plus略高，为3.69%。</p>        	
        	<div className={styles['qr-code']}>
        		<img src={qrcode_bg} className={styles['transparent']}/>
        		<img src={qrcode_bg} className={styles['non-transparent']}/>
        	</div>
        </div>)
    }
}

export default QRcode;