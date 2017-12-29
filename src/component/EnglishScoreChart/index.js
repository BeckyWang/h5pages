import React from 'react';
import echarts from 'echarts';

import styles from './styles';

import EnglishTable1 from '../EnglishTable1';
import EnglishTable2 from '../EnglishTable2';

class App extends React.Component {
    constructor({data}) {
        super();
        this.state = { 
            data,
            tableIndex: null,
            tableData: []
         }

        this.show = this.show.bind(this);
        this.showTable = this.showTable.bind(this);
    }

    componentDidMount() {
        const d = this.state.data;
        const xData = d.map(({desc}) => desc);
        const yData1 = d.map(({my_score}) => my_score);
        const yData2 = d.map(({total_score}) => total_score);
        
        let n = 0;
        while(n * 4 < d.length) {
            this.show(xData.slice(n * 4, n * 4 + 4), yData1.slice(n * 4, n * 4 + 4), yData2.slice(n * 4, n * 4 + 4), n++);
        }

        this.showTable(d[0].desc);
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
                data: xData.map((data, i) => {
                    if(!i && !index) {
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
                }),
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    color: '#999',
                    interval: 0,
                    padding: [4, 3],
                    formatter: function (value) {
                        return value.length > 4 ? `${value.substring(0, 3)}...` : value;
                    }
                },
                splitLine: {
                    show: false
                },
                triggerEvent: true
            }],
            yAxis: [{
                type: 'value',
                min: 0,
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
                data: yData1.map((value, i) => {
                    if(!i && !index) {
                        return {
                            value,
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
                            value,
                            label: {
                                normal: {
                                    show: false,
                                    position: 'top',
                                    color: '#666'
                                }
                            }
                        }
                    }
                }),
                barWidth: 26
            }, {
                name: '总分',
                type: 'bar',
                data: yData2.map((value, i) => {
                    if(!i && !index) {
                        return {
                            value,
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
                            value,
                            label: {
                                normal: {
                                    show: false,
                                    position: 'top',
                                    color: '#666'
                                }
                            }
                        }
                    }
                }),
                barWidth: 26
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

        this.setState({
            ['chart_' + index]: {
                chart,
                option
            }
        });

        chart.on('click', ({componentType, value}) => {
            if (componentType == 'xAxis') {
                let n = 0;
                while(n * 4 < this.state.data.length) {
                    if(index == n) {
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
                        const {chart, option} = this.state['chart_' + n];
                        chart.setOption({
                            ...option,
                            xAxis: {
                                ...option.xAxis,
                                data: option.xAxis[0].data.map(({value}) => ({
                                        value,
                                        textStyle: {
                                            color: '#999',
                                            padding: [4, 3]
                                        }
                                    }))
                            },
                            series: option.series.map(s => ({
                                ...s,
                                data: s.data.map(({value}) => ({
                                    value,
                                    label: {
                                        normal: {
                                            show: false
                                        }
                                    }
                                }))
                            }))
                        });;
                    }
                    n++;
                }
                this.showTable(value);
            } else {
                chart.setOption(option);
            }
        });
    }

    showTable(type) {
        const questionData = this.state.data;
        let tableData = [];
        if(type == '阅读理解') {
            tableData = questionData.filter(({desc}) => {
                return desc == '阅读理解';
            });
            this.setState({
                tableIndex: 2,
                tableData: tableData[0] ? tableData[0].question_type_topic : [],
            });
        } else {
            tableData = questionData.filter(({desc}) => {
                return desc.indexOf(type) > -1;
            });
            this.setState({
                tableIndex: 1,
                tableData,
            });
        }
    }

    render() {
        const { tableData, tableIndex } = this.state;
        const len = Math.ceil(this.state.data.length / 5);
        let tableContainer = null;
        switch(tableIndex) {
            case 1:
                tableContainer = <EnglishTable1 tableData={tableData}/>;
                break;
            case 2:
                tableContainer = <EnglishTable2 tableData={tableData}/>;
                break;
            default:
                break;
        }

        return (<div>
            <div className={styles.section}>
                {(new Array(len)).fill("").map((x, i) => <div ref={`chart${i}`} style={{height: "260px"}}></div>)}
            </div>
            <div>{tableContainer}</div>
        </div>)
    }
}

export default App;