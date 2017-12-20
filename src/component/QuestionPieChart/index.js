import React from 'react';
import echarts from 'echarts';

import classNames from 'classnames';

import styles from './styles';


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [
                {value:335, name:'直接访问'},
                {value:310, name:'邮件营销'},
                {value:234, name:'联盟广告'},
                {value:135, name:'视频广告'},
                {value:1548, name:'搜索引擎'},
                {value:335, name:'直接访问'},
                {value:310, name:'邮件营销'},
                {value:234, name:'联盟广告'},
                {value:135, name:'视频广告'},
                {value:1548, name:'搜索引擎'},
                {value:335, name:'直接访问'},
                {value:310, name:'邮件营销'},
                {value:234, name:'联盟广告'},
                {value:135, name:'视频广告'},
                {value:1548, name:'搜索引擎'}
            ],
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
            color: ['#437FFF', '#54C7FC', '#FF9600', '#FF2851', '#FFCD00']
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
        const {chosen, info} = this.state;
        return (<div className={styles.section}>
            <div className={styles.title}>问题出在哪了</div>
            <div ref="chart" style={{height: '320px'}}></div>
            {chosen ? <div className={styles.info}>
                <p className={styles.name}>{info.name}</p>
                <p className={styles.value}>{info.value}</p>
            </div>
            : <div className={classNames(styles.tips, styles.info)}>点击色块查看</div>}
        </div>)
    }
}

export default App;