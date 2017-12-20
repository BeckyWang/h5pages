import React from 'react';

import './styles';

import EnglishScoreChart from '../component/EnglishScoreChart';
import ScoreSectionChart from '../component/ScoreSectionChart';
import AbilityRadarChart from '../component/AbilityRadarChart';
import QuestionPieChart from '../component/QuestionPieChart';
import EnglishTable1 from '../component/EnglishTable1';
import EnglishTable2 from '../component/EnglishTable2';
import Cover from '../component/Cover';

class App extends React.Component {
	constructor() {
        super();
    }

    render() {
        return (<div>
        	<Cover />
        	<EnglishTable1 />
        	<EnglishTable2 />
            <ScoreSectionChart />
        	<EnglishScoreChart />
            <AbilityRadarChart />
            <QuestionPieChart />
        </div>)
    }
}

export default App;