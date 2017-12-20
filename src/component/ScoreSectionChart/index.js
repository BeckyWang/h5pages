import React from 'react';
import echarts from 'echarts';

import styles from './styles';

function calculateIndex(rank, arr) {
    let i = 0, len = arr.length, v = 0;
    for(; i < len; i++) {
        v += arr[i];
        if(v >= rank) {
            return len - i - 1;
        }
    }
    return 0;
}

class App extends React.Component {
    constructor({data, type, rank, total}) {
        super();
        this.state = {
            type: type || 'CLASS', 
            total,
            rank, 
            section: data.map(({stage_count}) => stage_count), 
            index: calculateIndex(rank, data.map(({stage_count}) => stage_count).reverse()),
            xData: data.map(({stage_desc}) => stage_desc)
        }
    }

    componentDidMount() {
        const option = {
            xAxis: [{
                type: 'category',
                data: this.state.xData,
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    color: '#999',
                    interval: 0,
                    padding: 0,
                    fontSize: 10,
                    align: 'center'
                },
                splitLine: {
                    show: false
                },
                triggerEvent: true,
                max: 8
            }],
            yAxis: [{
                type: 'value',
                min: 0,
                max: Math.max(...this.state.section),
                show: false
            }],
            series: [{
                type: 'bar',
                data: this.state.section.map((d, i) => {
                    if(i == this.state.index) {
                        return {
                            value: d,
                            itemStyle: {
                                normal: {
                                    color: '#FFBA01'
                                }
                            }
                        }
                    } else {
                        return {
                            value: d
                        }
                    }
                }),
                label: {
                    normal: {
                        show: true,
                        position: 'top',
                        color: '#666'
                    }
                },
                barGap: '10%',
                triggerEvent: true
            }],
            color: ['#5A83FF'],
            grid: {
                top: 30,
                right: -36,
                left: 4
            }
        };
        const chart = echarts.init(this.refs.chart);
        chart.setOption(option);
    }

    render() {
        const {type, total, rank} = this.state;
        return (<div className={styles.section}>
            <div className={styles.title}>各分数段人数（{type == 'CLASS' ? '本班' : '本年级'}）</div>
            <p className={styles.subtitle}>参加考试人数：{total}人</p>
            <p className={styles.subtitle}>{type == 'CLASS' ? '班级' : '年级'}排名：{rank}/{total}</p>
            <div ref="chart" style={{height: '240px'}}></div>
        </div>)
    }
}

export default App;