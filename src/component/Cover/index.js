import React from 'react';
import classNames from 'classnames/bind';

import styles from './styles';

import img_boy from '../../assets/images/a1_boy.png';
import img_girl from '../../assets/images/a1_girl.png';

let cx = classNames.bind(styles);
let easy_hard_ratio = [{desc: "简单题", ratio: "30"}, {desc: "中等题", ratio: "50"}, {desc: "难题", ratio: "20"}];
const score_base = {
	"student_score": 110.5,
	"total_score": 150,
	"class_avg_score": 92.3,
	"grade_avg_score": 98.6,
	"question_count": 21,
	"knowledge_count": 19,
	"comprehensive_difficulty": 3
};

class Cover extends React.Component {
	constructor() {
        super();
    }

    componentWillMount() {
    	easy_hard_ratio.map(data => {
    		switch(data.desc) {
    			case '简单题':
    				data['color'] = '#5EE168';
    				break;
    			case '中等题':
    				data['color'] = '#FF739C';
    				break;
    			case '难题':
    				data['color'] = '#FFBA01';
    				break;
    			default:
    				break;
    		}
    	});
    }

    render() {
    	const { student_score, total_score, class_avg_score, grade_avg_score, question_count, knowledge_count, comprehensive_difficulty } = score_base;
    	const difficultyContainer = easy_hard_ratio.map(({desc, ratio, color}) => <div className={styles['item']}>
            <div className={styles['description']}>
                <span>{desc}</span>
                <span>占比{ratio}%</span>
            </div>
            <div className={styles['percent-bg']}>
                <div style={{width: `${ratio}%`, background: color}}></div>
            </div>
        </div>);

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
	                <li>{total_score}</li>
	                <li>{question_count}</li>
	                <li>{knowledge_count}</li>
		        </ul>
		        <ul className={styles['item']}>
	                <li>总分</li>
	                <li>试题数量</li>
	                <li>知识点</li>
	            </ul>
        	</div>

        	<div className={styles['difficulty-per']}>
        		<p className={styles['title']}>难易占比</p>
	            { difficultyContainer }
		        <p className={styles['title']}>试卷综合难度</p>
		        <ul className={styles['level']}>
		            <li className={cx({'active': comprehensive_difficulty > 0})}></li>
		            <li className={cx({'active': comprehensive_difficulty > 1})}></li>
		            <li className={cx({'active': comprehensive_difficulty > 2})}></li>
		            <li className={cx({'active': comprehensive_difficulty > 3})}></li>
		            <li className={cx({'active': comprehensive_difficulty > 4})}></li>
		        </ul>
        	</div>

        	<div className={styles['evaluation']}>
        		<p className={styles['title']}>我学的怎么样</p>
		        <ul className={styles['score']}>
	                <li>{student_score}<span>/{total_score}</span></li>
	                <li>{class_avg_score}</li>
	                <li>{grade_avg_score}</li>
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