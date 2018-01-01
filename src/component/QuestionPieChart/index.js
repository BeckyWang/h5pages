import React from 'react';
import echarts from 'echarts';

import classNames from 'classnames';

import styles from './styles';


class App extends React.Component {
    constructor({data}) {
        super();
        this.state = {
            data: data.map(({name, konwledge_ratio}) => ({
                name,
                value: konwledge_ratio
            })),
            chosen: false,
            info: {}
        }
    }

    componentDidMount() {
        const {data : dList} = this.state;
        const option = {
            legend: {
                show: false
            },
            series: [
                {
                    name:'访问来源',
                    type:'pie',
                    radius: ['10', '70%'],
                    avoidLabelOverlap: false,
                    selectedOffset: 4,
                    hoverOffset: 6,
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: dList
                }
            ],
            color: ['#437FFF', '#54C7FC', '#FF9600', '#FF2851', '#FFCD00', '#F5665E']
        };
        const chart = echarts.init(this.refs.chart);
        chart.setOption(option);
        chart.on('click', ({data, dataIndex}) => {
            this.setState({
                chosen: true,
                info: data
            });
            chart.setOption({
                ...option,
                series: [{
                    ...option.series[0],
                    data: dList.map((d, i) => {
                        return i == dataIndex ? {
                            ...d,
                            selected: true,
                            itemStyle: {
                                normal: {
                                    opacity: 1
                                }
                            }
                        } : {
                            ...d,
                            selected: false,
                            itemStyle: {
                                normal: {
                                    opacity: 0.7
                                }
                            }
                        }
                    })
                }]
            });
        });
    }

    render() {
        const { type } = this.props;
        const {chosen, info} = this.state;
        return (<div className={styles.section}>
            <div className={styles.title}>{type == 'Math' ? '知识点分布占比' : '各模块占比'}</div>
            <div ref="chart" style={{height: '300px'}}></div>
            {chosen ? <div className={styles.info}>
                <p className={styles.name}>{info.name}</p>
                <p className={styles.value}>{info.value}%</p>
            </div>
            : <div className={classNames(styles.tips, styles.info)}>点击色块查看</div>}
        </div>)
    }
}

export default App;