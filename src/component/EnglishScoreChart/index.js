import React from 'react';
import echarts from 'echarts';

import styles from './styles';

class App extends React.Component {
    constructor({data}) {
        super();
        this.state = { data }

        this.show = this.show.bind(this);
    }

    componentDidMount() {
        const dom = this.refs.charts;

        const d = this.state.data;
        const xData = d.map(({desc}) => desc);
        const yData1 = d.map(({my_socre}) => my_socre);
        const yData2 = d.map(({avg_score}) => avg_score);
        
        let n = 0;
        while(n * 5 < d.length) {
            this.show(xData.slice(n * 5, n * 5 + 5), yData1.slice(n * 5, n * 5 + 5), yData2.slice(n * 5, n * 5 + 5), n++);
        }

    }

    show(xData, yData1, yData2, index) {
        const option = {
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
                data: xData,
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    color: '#999',
                    interval: 0,
                    padding: [4, 3]
                },
                splitLine: {
                    show: false
                },
                triggerEvent: true
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
                data: yData1.map(data => ({
                    value: data,
                    label: {
                        normal: {
                            show: false,
                            position: 'top',
                            color: '#666'
                        }
                    }
                }))
            }, {
                name: '总分',
                type: 'bar',
                data: yData2.map(data => ({
                    value: data,
                    label: {
                        normal: {
                            show: false,
                            position: 'top',
                            color: '#666'
                        }
                    }
                }))
            }],
            color: ['#5A83FF', '#FF739C'],
            grid: {
                top: 30,
                right: 10,
                left: 30
            }
        };
        const chart = echarts.init(this.refs['chart' + index]);
        chart.setOption(option);
        chart.on('click', function({componentType, value}) {
            if (componentType == 'xAxis') {
                chart.setOption({
                    ...option,
                    xAxis: {
                        ...option.xAxis,
                        data: xData.map((data, i) => {
                            if(i == xData.indexOf(value)) {
                                return {
                                    value: data,
                                    textStyle: {
                                        color: '#FFBA01',
                                        borderColor: '#FFBA01',
                                        borderRadius: 6,
                                        borderWidth: 1,
                                        padding: [4, 3]
                                    }
                                }
                            } else {
                                return {
                                    value: data,
                                    textStyle: {
                                        color: '#999',
                                        padding: [4, 3]
                                    }
                                }
                            }
                        })
                    },
                    series: option.series.map(s => ({
                        ...s,
                        data: s.data.map((d, i) => {
                            if(i == xData.indexOf(value)) {
                                return {
                                    value: d.value,
                                    label: {
                                        normal: {
                                            show: true,
                                            position: 'top',
                                            color: '#666'
                                        }
                                    }
                                }
                            } else {
                                return {
                                    value: d.value,
                                    label: {
                                        normal: {
                                            show: false,
                                            position: 'top',
                                            color: '#666'
                                        }
                                    }
                                }
                            }
                        })
                    }))
                });
            } else {
                chart.setOption(option);
            }
        });
    }

    render() {
        const len = Math.ceil(this.state.data.length / 5);
        return (<div className={styles.section}>
            {(new Array(len)).fill("").map((x, i) => <div ref={`chart${i}`} style={{height: "260px"}}></div>)}
        </div>)
    }
}

export default App;