import React from 'react';
import classNames from 'classnames/bind';

import styles from './styles';

import img_boy from '../../assets/images/a1_boy.png';
import img_girl from '../../assets/images/a1_girl.png';

let cx = classNames.bind(styles);
const colorMap = {
    '简单题': '#5EE168',
    '中等题': '#FF739C',
    '难题': '#FFBA01'
};

const Cover = ({score_base, easy_hard_ratio, student_name, sex, subject, brief}) => {
    const { student_score, total_score, class_avg_score, grade_avg_score, question_count, knowledge_count, comprehensive_difficulty } = score_base;

    const difficultyContainer = easy_hard_ratio.map(({desc, ratio}) => <div className={styles['item']}>
        <div className={styles['description']}>
            <span>{desc}</span>
            <span>占比{ratio}%</span>
        </div>
        <div className={styles['percent-bg']}>
            <div style={{width: `${ratio}%`, background: colorMap[desc]}}></div>
        </div>
    </div>);

    return <div className={styles['cover-container']}>
        <div className={styles['head']}>
            <img src={sex == 1 ? img_boy : img_girl}/>
            <p className={styles['student-info']}>
                <span className={styles['name']}>{student_name}</span>
                <span>{brief}</span>
            </p>
        </div>

        <div className={styles['subject']}>
            <p className={styles['title']}>{subject}</p>
            <ul className={styles['score']}>
                <li>{total_score}</li>
                <li>{question_count}</li>
                <li>{knowledge_count}</li>
            </ul>
            <ul className={styles['item']}>
                <li>总分</li>
                <li>试题数量</li>
                <li>知识点数量</li>
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
    </div>;
};

export default Cover;