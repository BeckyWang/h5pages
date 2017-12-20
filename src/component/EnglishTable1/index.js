import React from 'react';

import styles from './styles';

class EnglishTable1 extends React.Component {
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
        			<span>冠词</span>
        			<span>2</span>
        			<span>1.50/2</span>
        		</li>
        		<li>
        			<span>单选1</span>
        			<span>形副词辨析</span>
        			<span>2</span>
        			<span>1.50/2</span>
        		</li>
        		<li>
        			<span>单选1</span>
        			<span>动词词组辨析</span>
        			<span>2</span>
        			<span>1.50/2</span>
        		</li>
        		<li>
        			<span>单选1</span>
        			<span>名词辨析</span>
        			<span>2</span>
        			<span>1.50/2</span>
        		</li>
        	</ul>
        </div>)
    }
}

export default EnglishTable1;