import React from 'react';
import echarts from 'echarts';

import styles from './styles';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: ['语言基础知识', '诗歌鉴赏', '文言文阅读', '现代文阅读', '写作'],
            myAbility: [70, 75, 75, 85, 80],
            avarageAbility: [80, 60, 80, 70, 65]
        }
    }

    componentDidMount() {
        const {myAbility, avarageAbility, items} = this.state;
        const chart = echarts.init(this.refs.chart);
        const option = {
            tooltip: {},
            legend: {
                data: [{
                    name: '我的能力',
                    icon: 'circle',
                    textStyle: {
                        color: '#999',
                        padding: 0
                    }
                }, {
                    name: '平均能力',
                    icon: 'circle',
                    textStyle: {
                        color: '#999',
                        padding: 0
                    }
                }],
                left: 24,
                bottom: 4,
                itemGap: 16
            },
            radar: {
                // shape: 'circle',
                name: {
                    textStyle: {
                        color: '#666',
                        padding: 0
                   }
                },
                indicator: items.map(item => ({
                    name: item,
                    max: 100
                })),
                splitNumber: 2
            },
            series: [{
                type: 'radar',
                // areaStyle: {normal: {}},
                data : [{
                    value : myAbility,
                    name : '我的能力',
                    lineStyle: {
                        normal: {
                            color: '#5EE168'
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: {
                                type: 'radial',
                                x: 0.5,
                                y: 0.5,
                                r: 0.5,
                                colorStops: [{
                                    offset: 0, color: '#5EE168'
                                }, {
                                    offset: .6, color: '#5EE168'
                                }, {
                                    offset: .6, color: '#fff'
                                }, {
                                    offset: 1, color: '#5EE168'
                                }, {
                                    offset: 1, color: '#5EE168'
                                }],
                                globalCoord: false // 缺省为 false
                            },
                            borderWidth: 0,
                            borderColor: '#5EE168'
                        }
                    },
                    symbol: "circle",
                    symbolSize: 14,
                    tooltip: {
                        show: false
                    }
                }, {
                    value : avarageAbility,
                    name : '平均能力',
                    areaStyle: {
                        normal: {
                            color: 'rgba(247,153,180,.7)',
                            opacity: 1
                        }
                    },
                    lineStyle: {
                        normal: {
                            width: 0
                        }
                    },
                    itemStyle: {
                        normal: {
                            opacity: 0
                        }
                    },
                    tooltip: {
                        show: false
                    }
                }]
            }],
            color: ['#F799B4']
        };
        chart.setOption(option);
    }

    render() {
        const {myAbility, avarageAbility, items} = this.state;
        return (<div className={styles.section}>
            <div ref="chart" style={{height: '360px'}}></div>
            <table className={styles.table}>
                <tr>
                    <td className={styles.row}></td>
                    {items.map(item => (<td className={styles.key}>{item}</td>))}
                </tr>
                <tr>
                    <td className={styles.row}>我的能力</td>
                    {myAbility.map(item => (<td className={styles.value}>{item}</td>))}
                </tr>
                <tr>
                    <td className={styles.row}>平均能力</td>
                    {avarageAbility.map(item => (<td className={styles.value}>{item}</td>))}
                </tr>
            </table>
        </div>)
    }
}

export default App;