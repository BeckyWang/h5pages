import React from 'react';
import { render } from 'react-dom';
import App from './App';

function getQueryString(name) {
    const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    const r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return unescape(r[2]);
    }
    return null;
}

const viewkey = getQueryString('viewkey');
const type = getQueryString('type');

window.renderPage = ({data}) => {
    render(<App data={{...data, type}} />, document.getElementById('container'));
}

const scriptNode = document.createElement('script');
scriptNode.setAttribute('src', `http://ksbg.xueersi.com/index.php?r=stat/score&viewkey=${viewkey}&callback=renderPage&type=${type}`);

document.getElementsByTagName('body')[0].appendChild(scriptNode);


