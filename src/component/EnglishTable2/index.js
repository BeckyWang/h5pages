import React from 'react';

import styles from './styles';

class EnglishTable2 extends React.Component {
	constructor() {
        super();
    }

    render() {
        return (<div className={styles['table-container']}>
        	<ul className={styles['head']}>
        		<li style={{width: '16%'}}><span>题型</span></li>
        		<li style={{width: '36.5%'}}><span>知识点</span></li>
        		<li style={{width: '18%'}}><span>我的得分</span></li>
        		<li style={{width: '23.5%'}}><span>平均分/总分</span></li>
        	</ul>
        	<ul className={styles['body']}>
        		<li className={styles['body-item']}>
        			<span style={{width: '16%'}}>单选1</span>
                    <span style={{width: '17%'}}>话题</span>
                    <ul className={styles['knowledge-point']} style={{width: '67%'}}>
                        <li>
                            <span style={{width: '31%'}}>考察点</span>
                            <span style={{width: '33.5%'}}>2</span>
                            <span style={{width: '34.5%'}}>1.5/2</span>
                        </li>
                        <li>
                            <span style={{width: '31%'}}>考察点</span>
                            <span style={{width: '33.5%'}}>2</span>
                            <span style={{width: '34.5%'}}>1.5/2</span>
                        </li>
                        <li>
                            <span style={{width: '31%'}}>考察点</span>
                            <span style={{width: '33.5%'}}>2</span>
                            <span style={{width: '34.5%'}}>1.5/2</span>
                        </li>
                        <li>
                            <span style={{width: '31%'}}>考察点</span>
                            <span style={{width: '33.5%'}}>2</span>
                            <span style={{width: '34.5%'}}>1.5/2</span>
                        </li>
                    </ul>
        		</li>
                <li className={styles['body-item']}>
                    <span style={{width: '16%'}}>单选1</span>
                    <span style={{width: '17%'}}>话题</span>
                    <ul className={styles['knowledge-point']} style={{width: '67%'}}>
                        <li>
                            <span style={{width: '31%'}}>考察点</span>
                            <span style={{width: '33.5%'}}>2</span>
                            <span style={{width: '34.5%'}}>1.5/2</span>
                        </li>
                        <li>
                            <span style={{width: '31%'}}>考察点</span>
                            <span style={{width: '33.5%'}}>2</span>
                            <span style={{width: '34.5%'}}>1.5/2</span>
                        </li>
                        <li>
                            <span style={{width: '31%'}}>考察点</span>
                            <span style={{width: '33.5%'}}>2</span>
                            <span style={{width: '34.5%'}}>1.5/2</span>
                        </li>
                        <li>
                            <span style={{width: '31%'}}>考察点</span>
                            <span style={{width: '33.5%'}}>2</span>
                            <span style={{width: '34.5%'}}>1.5/2</span>
                        </li>
                    </ul>
                </li>
        	</ul>
        </div>)
    }
}

export default EnglishTable2;