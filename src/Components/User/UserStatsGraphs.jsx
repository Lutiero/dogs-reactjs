import React, {useEffect, useState} from 'react';
import styles from './UserStatsGraphs.module.css';
import {VictoryPie, VictoryBar, VictoryChart} from 'victory';

const UserStatsGraphs = ({data}) => {
    const [graph, setGraph] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {

        const graphData = data.map(({title, acessos}) => {
            return {
                x: title,
                y: Number(acessos),
            }
        });

        setGraph(graphData);
        console.log(graph);
        setTotal(data.map(({acessos}) => Number(acessos)).reduce((a, b) => a + b, 0));
    }, [data])

    return (
        <section className={`animeLeft ${styles.graph}`}>
            <div className={`${styles.total} ${styles.graphItem}`}>
                <p>Acessos: {total}</p>
            </div>
            <div className={styles.graphItem}>
                <VictoryPie data={graph}
                            innerRadius={50}
                            padding={{top: 20, bottom: 20, left: 80, right: 80}}
                            style={{
                                data: {
                                    fillOpacity: 0.9,
                                    stroke: '#fff',
                                    strokeWidth: 2,
                                },
                                labels: {
                                    fontSize: 14,
                                    fill: '#333'
                                }
                            }}
                />
            </div>
                <div className={styles.graphItem}>
                    <VictoryChart>
                        <VictoryBar data={graph}
                                    alignment='start'/>
                    </VictoryChart>
                </div>
        </section>
    );
};

export default UserStatsGraphs;