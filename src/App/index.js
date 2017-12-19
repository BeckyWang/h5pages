import React from 'react';

import './styles';

import EnglishScoreChart from '../component/EnglishScoreChart';
import ScoreSectionChart from '../component/ScoreSectionChart';
import AbilityRadarChart from '../component/AbilityRadarChart';

class App extends React.Component {
	constructor() {
        super();
    }

    render() {
        return (<div>
        	<AbilityRadarChart />
        </div>)
    }
}

export default App;