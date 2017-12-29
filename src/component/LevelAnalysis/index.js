import React from 'react';

import classNames from 'classnames';

import styles from './styles';

function Dot({value, color, marginLeft}) {
    const style = {
        left: `${value}%`
    };
    marginLeft && (style['marginLeft'] = marginLeft);
    return <div className={classNames(styles['dot'], styles[`border-${color}`])} style={style}>
        <div className={classNames(styles['dot-content'], styles[`bg-${color}`])}>
            {value}
        </div>
    </div>
}

function Bar({value, color}) {
    return <div className={classNames(styles['bar'], styles['bg-' + color])} style={{width: value + '%'}}></div>
}


class App extends React.Component {
    constructor({data}) {
        super();
        this.state = {
            data: data.map(({name, my_ratio, avg_ratio}) => ({
                name,
                level: my_ratio,
                avarage: avg_ratio
            }))
        }
    }

    render() {
        const {data} = this.state;
        return (<div className={styles.section}>
            <div className={styles.title}>知识点掌握水平分析/百分比</div>
            <div className={styles.legend}>
                <div className={classNames(styles['dot-sm'], styles['bg-pink'])}></div>
                <span>掌握水平</span>
                <div className={classNames(styles['dot-sm'], styles['bg-green'])}></div>
                <span>平均水平</span>
            </div>
            {data.map(({name, avarage, level}) => {
                if(level < avarage) {                
                    return <div className={styles['item']}>
                        <div className={styles['description']}>
                            <span>{name}</span>
                        </div>
                        <div className={styles['percent-bg']}>
                            <Bar value={avarage} color="green" />
                            <Bar value={level} color="pink" />
                            <Dot value={avarage} color="green" />
                            <Dot value={level} color="pink" />
                        </div>
                    </div>
                } else if(level > avarage) {
                    return <div className={styles['item']}>
                        <div className={styles['description']}>
                            <span>{name}</span>
                        </div>
                        <div className={styles['percent-bg']}>
                            <Bar value={level} color="pink" />
                            <Dot value={avarage} color="green" />
                            <Dot value={level} color="pink" />
                        </div>
                    </div>
                } else {
                    return <div className={styles['item']}>
                        <div className={styles['description']}>
                            <span>{name}</span>
                        </div>
                        <div className={styles['percent-bg']}>
                            <Bar value={avarage} color="pink" />
                            <Dot value={level} color="green" marginLeft='-24px' />
                            <Dot value={avarage} color="pink" marginLeft='0' />
                        </div>
                    </div>
                }
            })}
        </div>)
    }
}

export default App;