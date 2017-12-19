import React from 'react';

import './styles';

import EnglishScoreChart from '../component/EnglishScoreChart';
import Cover from '../component/Cover';

class App extends React.Component {
	constructor() {
        super();
    }

    render() {
        return (<div>
        	<Cover />
        	<EnglishScoreChart />
        </div>)
    }
}

export default App;