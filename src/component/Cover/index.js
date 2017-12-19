import React from 'react';
import classNames from 'classnames/bind';

import styles from './styles';

import img_boy from '../../assets/images/a1_boy.png';
import img_girl from '../../assets/images/a1_girl.png';

let cx = classNames.bind(styles);

class Cover extends React.Component {
	constructor() {
        super();
    }

    render() {
    	const level = 3;
        return (<div className={styles['cover-container']}>
        	<div className={styles['head']}>
        		<img src={img_boy}/>
	        	<p className={styles['student-info']}>
	        		<span className={styles['name']}>张强</span>
	        		<span>17-18秋季高二数学2H2-1期中试卷报告</span>
	        	</p>
        	</div>

        	<div className={styles['subject']}>
        		<p className={styles['title']}>高中数学</p>
		        <ul className={styles['score']}>
	                <li>150</li>
	                <li>21</li>
	                <li>19</li>
		        </ul>
		        <ul className={styles['item']}>
	                <li>总分</li>
	                <li>试题数量</li>
	                <li>知识点</li>
	            </ul>
        	</div>

        	<div className={styles['difficulty-per']}>
        		<p className={styles['title']}>难易占比</p>
	            <div className={styles['item']}>
	                <div className={styles['description']}>
		                <span>简单题</span>
		                <span>占比30%</span>
	                </div>
	                <div className={styles['percent-bg']}>
	                    <div className={styles['bg-green']} style={{width: '30%'}}></div>
	                </div>
	            </div>
	            <div className={styles['item']}>
	                <div className={styles['description']}>
		                <span>中等题</span>
		                <span>占比50%</span>
	                </div>
	                <div className={styles['percent-bg']}>
	                    <div className={styles['bg-orange']} style={{width: '50%'}}></div>
	                </div>
	            </div>
	            <div className={styles['item']}>
	                <div className={styles['description']}>
		                <span>难题</span>
		                <span>占比20%</span>
	                </div>
	                <div className={styles['percent-bg']}>
	                    <div className={styles['bg-pink']} style={{width: '20%'}}></div>
	                </div>
	            </div>
		        <p className={styles['title']}>试卷综合难度</p>
		        <ul className={styles['level']}>
		            <li className={cx({'active': level > 0})}></li>
		            <li className={cx({'active': level > 1})}></li>
		            <li className={cx({'active': level > 2})}></li>
		            <li className={cx({'active': level > 3})}></li>
		            <li className={cx({'active': level > 4})}></li>
		        </ul>
        	</div>

        	<div className={styles['evaluation']}>
        		<p className={styles['title']}>我学的怎么样</p>
		        <ul className={styles['score']}>
	                <li>110<span>/150</span></li>
	                <li>110.2</li>
	                <li>110.8</li>
		        </ul>
		        <ul className={styles['item']}>
	                <li>分数/满分</li>
	                <li>班级平均分</li>
	                <li>年级平均分</li>
	            </ul>
        	</div>
        </div>)
    }
}

export default Cover;