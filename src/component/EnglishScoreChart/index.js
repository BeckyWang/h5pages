import React from 'react';
import echarts from 'echarts';

import styles from './styles';

class App extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        const chart = echarts.init(this.refs.chart);
        chart.setOption({
            legend: {
                data: [{
                    name: '我的得分',
                    icon: 'square',
                    textStyle: {
                        color: '#999',
                        padding: [0, 0, 0, -10]
                    }
                }, {
                    name: '总分',
                    icon: 'square',
                    textStyle: {
                        color: '#999',
                        padding: [0, 0, 0, -10]
                    }
                }],
                left: 24,
                bottom: 4,
                itemGap: 16
            },
            xAxis: [{
                type: 'category',
                data: ['单词选项', '完型填空', '阅读理解', '首字母填空', '完型填空'],
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    color: '#999',
                    interval: 0
                },
                splitLine: {
                    show: false
                }
            }],
            yAxis: [{
                type: 'value',
                min: 0,
                max: 30,
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    color: '#999'
                },
                splitLine: {
                    show: false
                }
            }],
            series: [{
                name: '我的得分',
                type: 'bar',
                data: [8, 23, 23, 23, 23]
            }, {
                name: '总分',
                type: 'bar',
                data: [30, 30, 30, 30, 30]
            }],
            color: ['#5A83FF', '#FF739C'],
            grid: {
                top: 30,
                right: 14
            },
            tooltip: {
                trigger: 'axis'
            }
        });
    }

    render() {
        return (<div className={styles.section}>
            <div style={{height: "260px"}} ref="chart"></div>
        </div>)
    }
}

export default App;