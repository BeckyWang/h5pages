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

const result = {"errCode":0,"errMsg":"ok","data":{"student_name":"\u97e9\u6885\u6885","subject":"\u6570\u5b66","brief":"1","sex":"2","foot_notice":"\u770b\u5230\u62a5\u544a\u9700\u8981\u89e3\u51b3\u7684\u540c\u5b66\u901f\u901f\u8054\u7cfb\u8f85\u5bfc\u8001\u5e08\u54e6\uff01","class_count":"32","class_rank":"22","grade_count":"3213","grade_rank":"1732","score_base":{"student_score":110.5,"total_score":150,"class_avg_score":92.3,"grade_avg_score":98.6,"question_count":21,"knowledge_count":19,"comprehensive_difficulty":3},"easy_hard_ratio":[{"desc":"\u7b80\u5355\u9898","ratio":"30"},{"desc":"\u4e2d\u7b49\u9898","ratio":"50"},{"desc":"\u96be\u9898","ratio":"20"}],"question_type":[{"desc":"\u5355\u8bcd\u9009\u9879","my_socre":"8","avg_score":1.2,"total_score":"20","knowledge":"\u51a0\u8bcd"},{"desc":"\u5b8c\u5f62\u586b\u7a7a","my_socre":"15","avg_score":1.2,"total_score":"40","knowledge":"\u51a0\u8bcd"},{"desc":"\u9605\u8bfb\u7406\u89e3","my_socre":"20","avg_score":1.2,"total_score":"30","knowledge":"\u51a0\u8bcd"},{"desc":"\u9996\u5b57\u6bcd\u586b\u7a7a","my_socre":"3","avg_score":1.2,"total_score":"7","knowledge":"\u51a0\u8bcd"},{"desc":"\u5b8c\u5f62\u5929\u7a7a","my_socre":"15","avg_score":1.2,"total_score":"20","knowledge":"\u51a0\u8bcd"},{"desc":"\u5355\u8bcd\u9009\u9879","my_socre":"23","avg_score":1.2,"total_score":"25","knowledge":"\u51a0\u8bcd"},{"desc":"\u5355\u8bcd\u9009\u9879","my_socre":"11","avg_score":1.2,"total_score":"20","knowledge":"\u51a0\u8bcd"},{"desc":"\u5355\u8bcd\u9009\u9879","my_socre":"8","avg_score":1.2,"total_score":"20","knowledge":"\u51a0\u8bcd"},{"desc":"\u9996\u5b57\u6bcd\u586b\u7a7a","my_socre":"8","avg_score":1.2,"total_score":"20","knowledge":"\u51a0\u8bcd"}],"score_stage_class":[{"stage_desc":"0-45","stage_count":0},{"stage_desc":"46-60","stage_count":0},{"stage_desc":"61-75","stage_count":3},{"stage_desc":"76-90","stage_count":22},{"stage_desc":"91-105","stage_count":26},{"stage_desc":"106-120","stage_count":11},{"stage_desc":"121-135","stage_count":1},{"stage_desc":"136-150","stage_count":0}],"score_stage_grade":[{"stage_desc":"0-45","stage_count":0},{"stage_desc":"46-60","stage_count":0},{"stage_desc":"61-75","stage_count":3},{"stage_desc":"76-90","stage_count":22},{"stage_desc":"91-105","stage_count":26},{"stage_desc":"106-120","stage_count":11},{"stage_desc":"121-135","stage_count":1},{"stage_desc":"136-150","stage_count":0}],"konwledge_distribute":[{"name":"\u77e5\u8bc6\u70b9A","my_ratio":"70","avg_ratio":"70"},{"name":"\u77e5\u8bc6\u70b9B","my_ratio":"80","avg_ratio":"55"},{"name":"\u77e5\u8bc6\u70b9C","my_ratio":"100","avg_ratio":"70"},{"name":"\u77e5\u8bc6\u70b9D","my_ratio":"30","avg_ratio":"70"},{"name":"\u77e5\u8bc6\u70b9E","my_ratio":"100","avg_ratio":"100"}],"konwledge_distribute_five":[{"name":"\u8bed\u8a00\u57fa\u7840\u77e5\u8bc6","my_ratio":"60","avg_ratio":"70"},{"name":"\u8bd7\u6b4c\u9274\u8d4f","my_ratio":"80","avg_ratio":"55"},{"name":"\u6587\u8a00\u6587\u9605\u8bfb","my_ratio":"90","avg_ratio":"70"},{"name":"\u73b0\u4ee3\u6587\u9605\u8bfb","my_ratio":"30","avg_ratio":"30"},{"name":"\u5199\u4f5c","my_ratio":"100","avg_ratio":"100"}],"konwledge_distribute_six":[{"name":"\u8bed\u8a00\u57fa\u7840\u77e5\u8bc6","my_ratio":"60","avg_ratio":"70"},{"name":"\u8bd7\u6b4c\u9274\u8d4f","my_ratio":"80","avg_ratio":"55"},{"name":"\u6587\u8a00\u6587\u9605\u8bfb","my_ratio":"50","avg_ratio":"70"},{"name":"\u73b0\u4ee3\u6587\u9605\u8bfb","my_ratio":"30","avg_ratio":"30"},{"name":"\u5199\u4f5c","my_ratio":"100","avg_ratio":"100"},{"name":"\u586b\u7a7a","my_ratio":"90","avg_ratio":"70"}],"problem_analysis":[{"desc":"\u7b80\u5355\u9898","total":"20","lost_point":"1"},{"desc":"\u4e2d\u7b49\u9898","total":"80","lost_point":"26.5"},{"desc":"\u96be\u9898","total":"50","lost_point":"18.5"}],"problem_analysis_list":{"easy":[{"question_id":1,"total_score":5,"my_score":0},{"question_id":2,"total_score":5,"my_score":0},{"question_id":3,"total_score":5,"my_score":0},{"question_id":3,"total_score":5,"my_score":0},{"question_id":2,"total_score":5,"my_score":0},{"question_id":5,"total_score":5,"my_score":0},{"question_id":6,"total_score":5,"my_score":0}],"normal":[{"question_id":7,"total_score":5,"my_score":0},{"question_id":8,"total_score":5,"my_score":0},{"question_id":9,"total_score":5,"my_score":0},{"question_id":10,"total_score":5,"my_score":0},{"question_id":11,"total_score":5,"my_score":0}],"hard":[{"question_id":12,"total_score":5,"my_score":0},{"question_id":13,"total_score":5,"my_score":0}]}}};

class App extends React.Component {
	constructor() {
        super();

        this.state = {
            loading: true,
            konwledge_distribute_five: []
        };

        this.fetchData = this.fetchData.bind(this);
    }

    async fetchData() {
        try { 
            const response = await fetch("/index.php?r=stat/score&viewkey=123&callback=abc");
            const result = await response.json();
        } catch(e) {
            const { data } = result;
            const { konwledge_distribute_five, konwledge_distribute_six } = data;
            this.setState({
                loading: false,
                konwledge_distribute_five,
                konwledge_distribute_six
            });
        }
    }

    componentDidMount() {
        this.fetchData();
    }

    render() {
        const {loading, konwledge_distribute_five, konwledge_distribute_six} = this.state;
        
        return loading ? <div></div> : (<div>
            <Cover />
            <EnglishTable1 />
            <EnglishTable2 />
            <ScoreSectionChart />
            <EnglishScoreChart />
            <AbilityRadarChart data={konwledge_distribute_five}/>
            <AbilityRadarChart data={konwledge_distribute_six}/>
            <LevelAnalysis />
            <QuestionPieChart />
            <QRcode />
        </div>)
    }
}

export default App;