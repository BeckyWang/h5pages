import React from 'react';

import fetch from 'isomorphic-fetch';

import './styles';

import EnglishScoreChart from '../component/EnglishScoreChart';
import ScoreSectionChart from '../component/ScoreSectionChart';
import AbilityRadarChart from '../component/AbilityRadarChart';
import QuestionPieChart from '../component/QuestionPieChart';
import LevelAnalysis from '../component/LevelAnalysis';
import Cover from '../component/Cover';
import QuestionTable from '../component/QuestionTable';
import QRcode from '../component/QRcode';
import ScoreInfoTable from '../component/ScoreInfoTable';

import Score from '../primarySchoolComponent/coverOfScore';
import ChineseTable from '../primarySchoolComponent/ChineseTable';
import Certificate from '../primarySchoolComponent/Certificate';
import QRcodeForPrimary from '../primarySchoolComponent/QRcode';
import PublicTable from '../primarySchoolComponent/PublicTable';

class App extends React.Component {
	constructor({data}) {
        super();

        this.state = {
            ...data
        };
    }

    render() {
        const {
            type,
            student_name, sex, subject, brief,
            score_base,
            easy_hard_ratio,
            konwledge_distribute_five, konwledge_distribute_six, 
            score_stage_class, class_count, class_rank,
            score_stage_grade, grade_count, grade_rank,
            konwledge_distribute, question_type, question_type_topic,
            problem_analysis, problem_analysis_list,
            qrcode_url, foot_notice, foot_extra
        } = this.state;

        switch(+type) {
            case 1:
                return <div>
                    <Cover student_name={student_name} sex={sex} subject={subject} score_base={score_base} easy_hard_ratio={easy_hard_ratio} brief={brief} />
                    <QuestionPieChart data={konwledge_distribute} type='Math'/>
                    <ScoreInfoTable score_base={score_base} />
                    <ScoreSectionChart data={score_stage_class} type="CLASS" total={class_count} rank={class_rank} grade={score_base.student_score} />
                    <ScoreSectionChart data={score_stage_grade} type="GRADE" total={grade_count} rank={grade_rank} grade={score_base.student_score} />
                    <LevelAnalysis data={konwledge_distribute} />
                    <QuestionTable problem_analysis={problem_analysis} problem_analysis_list={problem_analysis_list} />
                    <QRcode qrcode_url={qrcode_url} foot_notice={foot_notice} foot_extra={foot_extra} />
                </div>;
            case 2:
                return <div>
                    <Cover student_name={student_name} sex={sex} subject={subject} score_base={score_base} easy_hard_ratio={easy_hard_ratio} brief={brief} />
                    <QuestionPieChart data={konwledge_distribute} type='Chinese'/>
                    <ScoreInfoTable score_base={score_base} />
                    <ScoreSectionChart data={score_stage_class} type="CLASS" total={class_count} rank={class_rank} grade={score_base.student_score} />
                    <ScoreSectionChart data={score_stage_grade} type="GRADE" total={grade_count} rank={grade_rank} grade={score_base.student_score} />
                    <AbilityRadarChart data={konwledge_distribute} />
                    <QuestionTable problem_analysis={problem_analysis} problem_analysis_list={problem_analysis_list} />
                    <QRcode qrcode_url={qrcode_url} foot_notice={foot_notice} foot_extra={foot_extra} />
                </div>;
            case 3:
                return <div>
                    <Cover student_name={student_name} sex={sex} subject={subject} score_base={score_base} easy_hard_ratio={easy_hard_ratio} brief={brief} />
                    <QuestionPieChart data={konwledge_distribute} type='English'/>
                    <ScoreInfoTable score_base={score_base} />
                    <ScoreSectionChart data={score_stage_class} type="CLASS" total={class_count} rank={class_rank} grade={score_base.student_score} />
                    <ScoreSectionChart data={score_stage_grade} type="GRADE" total={grade_count} rank={grade_rank} grade={score_base.student_score} />
                    <EnglishScoreChart data={question_type} />
                    <QuestionTable problem_analysis={problem_analysis} problem_analysis_list={problem_analysis_list} />
                    <QRcode qrcode_url={qrcode_url} foot_notice={foot_notice} foot_extra={foot_extra} />
                </div>;
            case 4:
                return <div>
                    <Score />
                    <ChineseTable />
                    <Certificate />
                    <QRcodeForPrimary qrcode_url={qrcode_url} foot_notice={foot_notice} foot_extra={foot_extra} />
                </div>;
            case 5:
                return <div>
                    <Score />
                    <PublicTable type='Math'/>
                    <Certificate />
                    <QRcodeForPrimary qrcode_url={qrcode_url} foot_notice={foot_notice} foot_extra={foot_extra} />
                </div>;
            case 6:
                return <div>
                    <Score />
                    <PublicTable type='English'/>
                    <Certificate />
                    <QRcodeForPrimary qrcode_url={qrcode_url} foot_notice={foot_notice} foot_extra={foot_extra} />
                </div>;
            default:
                return <div>error</div>;
        }
    }
}

export default App;