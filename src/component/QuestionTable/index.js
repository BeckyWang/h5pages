import React from 'react';
import classNames from 'classnames/bind';

import styles from './styles';

let cx = classNames.bind(styles);
const colorMap = {
    '简单题': '#FFBA01',
    '中等题': '#FF739C',
    '难题': '#5A83FF',
};
const valMap = {
    '简单题': 'easy',
    '中等题': 'normal',
    '难题': 'hard',
};

class QuestionTable extends React.Component {
	constructor() {
        super();

        this.state = {
        	curProblem: '简单题',
        	problemInfo: [],
        };

        this.toSelectType = this.toSelectType.bind(this);
    }

    componentWillMount() {
    	this.toSelectType('简单题');
    }

    toSelectType(type) {
    	const problemInfo = [];
    	const problemList = this.props.problem_analysis_list[valMap[type]];
    	const num = Math.ceil(problemList.length / 5);

    	for(let i = 0; i < num; i++) {
    		problemInfo.push(problemList.slice(5 * i, 5 * (i + 1)));
    	}
    	
    	this.setState({
    		curProblem: type,
    		problemInfo,
    	});
    }

    render() {
    	const { problem_analysis } = this.props;
    	const { curProblem, problemInfo } = this.state;

    	const graphContainer = problem_analysis.map(({desc, total, lost_point}) => {
    		const percent = (+lost_point) / (+total), perimeter = Math.PI * 2 * 40;
    		const strokeDasharray = `${perimeter * percent} ${perimeter * (1- percent)}`;
    		return <li onClick={() => this.toSelectType(desc)}>
	    		<div className={styles['circle']}>
					<div className={styles['info']}>
						<span>{desc}</span>
						<span>共{total}分</span>
					</div>
					<svg width="94" height="94" xmlns="http://www.w3.org/2000/svg" version="1.1" className={styles['ring']}>
					    <circle cx="47" cy="47" r="40" strokeWidth="10" stroke={colorMap[desc]} fill="none" strokeDasharray={strokeDasharray} strokeLinecap="round"></circle>
					</svg>
	    		</div>
				<div className={styles['drop-points']}>
					<span className={styles['round']} style={{borderColor: colorMap[desc]}}></span>
					<span>丢<span style={{color: colorMap[desc]}}>{lost_point}</span>分</span>
				</div>
			</li>;
		});
		const tableContainer = <div className={styles['table']}>
    		<ul className={styles['head']}>
        		<li style={{width: '20%'}} className={styles['difficulty']}><span>题目难度</span></li>
        		<li style={{width: '76%'}} className={styles['type']}><span>{curProblem}</span></li>
        	</ul>
        	{problemInfo.map(problem => <ul className={styles['body']}>
        		<li style={{width: '20%'}} className={styles['body-title']}>
        			<span>题号</span>
        			<span>满分</span>
        			<span>学生得分</span>
        		</li>
        		<li style={{width: '76%'}} className={styles['body-info']}>
        			{ problem.map(({question_id, total_score, my_score}) => <div className={cx({'bg-pink': total_score !== my_score})}>
        				<span>{question_id}</span>
        				<span>{total_score}</span>
        				<span>{my_score}</span>
        			</div>) }
        		</li>
        	</ul>)}       	
    	</div>;

        return (<div className={styles['table-container']}>
        	<p className={styles['title']}>问题出在哪儿</p>
        	<ul className={styles['graph']}>
	    		{ graphContainer }
        	</ul>
        	{ tableContainer }
        </div>)
    }
}

export default QuestionTable;