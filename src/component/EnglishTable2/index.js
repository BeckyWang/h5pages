import React from 'react';
import classNames from 'classnames/bind';

import styles from './styles';

let cx = classNames.bind(styles);

class EnglishTable2 extends React.Component {
	constructor() {
        super();
    }

    render() {
        return (<div className={styles['table-container']}>
        	<ul className={styles['head']}>
        		<li><span>题型</span></li>
        		<li><span>知识点</span></li>
        		<li><span>我的得分</span></li>
        		<li><span>平均分/总分</span></li>
        	</ul>
        	<ul className={styles['body']}>
        		<li>
        			<span>单选1</span>
                    <span>话题</span>
                    <ul>
                        <li>考察点</li>
                        <li>考察点</li>
                        <li>考察点</li>
                        <li>考察点</li>
                    </ul>
        			<ul>
                        <li>2</li>
                        <li>2</li>
                        <li>2</li>
                        <li>2</li>
                    </ul>
                    <ul>
                        <li>1/2</li>
                        <li>1/2</li>
                        <li>1/2</li>
                        <li>1/2</li>
                    </ul>
        		</li>
        	</ul>
        </div>)
    }
}

export default EnglishTable2;