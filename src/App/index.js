import React from 'react';

import './styles';

import EnglishScoreChart from '../component/EnglishScoreChart';
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
        	<EnglishScoreChart />
        </div>)
    }
}

export default App;