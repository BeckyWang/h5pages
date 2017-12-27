import React from 'react';

import fetch from 'isomorphic-fetch';

import './styles';

import EnglishScoreChart from '../component/EnglishScoreChart';
import ScoreSectionChart from '../component/ScoreSectionChart';
import AbilityRadarChart from '../component/AbilityRadarChart';
import QuestionPieChart from '../component/QuestionPieChart';
import LevelAnalysis from '../component/LevelAnalysis';
import EnglishTable1 from '../component/EnglishTable1';
import EnglishTable2 from '../component/EnglishTable2';
import Cover from '../component/Cover';
import QuestionTable from '../component/QuestionTable';
import QRcode from '../component/QRcode';

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
            qrcode_url, foot_notice,
        } = this.state;

        let bodyContainer = null;

        switch(+type) {
            case 1:
                bodyContainer = <div>
                    <Cover student_name={student_name} sex={sex} subject={subject} score_base={score_base} easy_hard_ratio={easy_hard_ratio} brief={brief} />
                    <QuestionPieChart data={konwledge_distribute} />
                    <ScoreSectionChart data={score_stage_class} type="CLASS" total={class_count} rank={class_rank} />
                    <ScoreSectionChart data={score_stage_grade} type="GRADE" total={grade_count} rank={grade_rank} />
                    <LevelAnalysis data={konwledge_distribute} />
                    <QRcode qrcode_url={qrcode_url} foot_notice={foot_notice}/>
                </div>;
                break;
            case 2:
                bodyContainer = <div>
                    <Cover student_name={student_name} sex={sex} subject={subject} score_base={score_base} easy_hard_ratio={easy_hard_ratio} brief={brief} />
                    <QuestionPieChart data={konwledge_distribute} />
                    <ScoreSectionChart data={score_stage_class} type="CLASS" total={class_count} rank={class_rank} />
                    <ScoreSectionChart data={score_stage_grade} type="GRADE" total={grade_count} rank={grade_rank} />
                    <AbilityRadarChart data={konwledge_distribute} />
                    <QuestionTable problem_analysis={problem_analysis} problem_analysis_list={problem_analysis_list} />
                    <QRcode qrcode_url={qrcode_url} foot_notice={foot_notice}/>
                </div>;
                break;
            case 3:
                bodyContainer = <div>
                    <Cover student_name={student_name} sex={sex} subject={subject} score_base={score_base} easy_hard_ratio={easy_hard_ratio} brief={brief} />
                    <QuestionPieChart data={konwledge_distribute} />
                    <ScoreSectionChart data={score_stage_class} type="CLASS" total={class_count} rank={class_rank} />
                    <ScoreSectionChart data={score_stage_grade} type="GRADE" total={grade_count} rank={grade_rank} />
                    <EnglishScoreChart data={question_type} />
                    <EnglishTable1 question_type={question_type} />
                    <QuestionTable problem_analysis={problem_analysis} problem_analysis_list={problem_analysis_list} />
                    <QRcode qrcode_url={qrcode_url} foot_notice={foot_notice}/>
                </div>;
                break;
            case 4:
                bodyContainer = <div>
                    <Score />
                    <ChineseTable />
                    <Certificate />
                    <QRcodeForPrimary qrcode_url={qrcode_url} foot_notice={foot_notice}/>
                </div>;
                break;
            case 5:
                bodyContainer = <div>
                    <Score />
                    <PublicTable type='Math'/>
                    <Certificate />
                    <QRcodeForPrimary qrcode_url={qrcode_url} foot_notice={foot_notice}/>
                </div>;
                break;
            case 6:
                bodyContainer = <div>
                    <Score />
                    <PublicTable type='English'/>
                    <Certificate />
                    <QRcodeForPrimary qrcode_url={qrcode_url} foot_notice={foot_notice}/>
                </div>;
                break;
            default:
                bodyContainer = <div>error</div>;
                break;
        }

        return bodyContainer;
    }
}

export default App;