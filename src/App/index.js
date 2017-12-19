import React from 'react';

import './styles';

import EnglishScoreChart from '../component/EnglishScoreChart';

class App extends React.Component {
	constructor() {
        super();
    }

    render() {
        return (<div>
        	<EnglishScoreChart />
        </div>)
    }
}

export default App;