import React from 'react';
import classNames from 'classnames/bind';

import styles from './styles';

let cx = classNames.bind(styles);

class QuestionTable extends React.Component {
	constructor() {
        super();
    }

    render() {
    	const percent = 0.3, perimeter = Math.PI * 2 * 170;
    	const a = `${perimeter * percent} ${perimeter * (1- percent)}`;
    	const level = 5;

        return (<div className={styles['table-container']}>
        	<p className={styles['title']}>问题出在哪儿</p>
        	<ul className={styles['graph']}>
        		<li>
	        		<div className={styles['circle']}>
						<div className={styles['info']}>
							<span>简单题</span>
							<span>共42分</span>
						</div>
						<svg width="94" height="94" xmlns="http://www.w3.org/2000/svg" version="1.1" className={styles['ring']}>
						    <circle cx="47" cy="47" r="40" strokeWidth="12" stroke="#FFBA01" fill="none" strokeDasharray="50 296" strokeLinecap="round"></circle>
						</svg>
	        		</div>
					<div className={styles['drop-points']}>
						<span className={styles['round']}></span>
						<span>丢<span style={{color: '#FFBA01'}}>0</span>分</span>
					</div>
        		</li>
        	</ul>
        	<div className={styles['table']}>
        		<ul className={styles['head']}>
	        		<li style={{width: '20%'}} className={styles['difficulty']}><span>题目难度</span></li>
	        		<li style={{width: '76%'}} className={styles['type']}><span>简单题</span></li>
	        	</ul>
	        	<ul className={styles['body']}>
	        		<li style={{width: '20%'}} className={styles['body-title']}>
	        			<span>题号</span>
	        			<span>满分</span>
	        			<span>学生得分</span>
	        		</li>
	        		<li style={{width: '76%'}} className={styles['body-info']}>
	        			<div className={cx({'bg-pink': level > 4})}>
	        				<span>1</span>
	        				<span>5</span>
	        				<span>0</span>
	        			</div>
	        			<div className={cx({'bg-pink': level > 4})}>
	        				<span>1</span>
	        				<span>5</span>
	        				<span>0</span>
	        			</div>
	        			<div>
	        				<span>1</span>
	        				<span>5</span>
	        				<span>0</span>
	        			</div>
	        			<div>
	        				<span>1</span>
	        				<span>5</span>
	        				<span>0</span>
	        			</div>
	        			<div>
	        				<span>1</span>
	        				<span>5</span>
	        				<span>0</span>
	        			</div>
	        		</li>
	        	</ul>
        	</div>
        </div>)
    }
}

export default QuestionTable;