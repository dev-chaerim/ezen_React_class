import React, {memo} from 'react';
import styled from "styled-components";
import { cloneDeep } from 'lodash';

import {
    Chart,
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend,
    BarElement,
    PointElement,
    LineElement,
    RadialLinearScale,
    Filler,
    ArcElement
} from 'chart.js';

import { Bar, Line, Rader, Pie, Scatter} from 'react-chartjs-2';

Chart.register(
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend,
    BarElement,
    PointElement,
    LineElement,
    RadialLinearScale,
    Filler,
    ArcElement
);

const PlotContainer = styled.div`
    width: 33.3%;
    padding: 20px;
    box-sizing: border-box;
    height: 400px;
`

const ChartEx = memo(() => {
    
    const defaultOption = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
            }
        }
    }

    const grade = {
        labels: ['철수', '영희', '민수', '수현', '호영'],
        datasets: [{
            label: '국어',
            data: [98, 88, 92, 63, 100],
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        }, {
            label: '영어',
            data: [82, 90, 70, 60, 50],
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
            borderColor: 'rgba(53, 162, 235, 1)',
            borderWidth: 1
        }, {
            label: '수학',
            data: [88, 62, 71, 31, 84],
            backgroundColor: 'rgba(258, 234, 153, 0.5)',
            borderColor: 'rgba(258, 234, 153, 1)',
            borderWidth: 1
        }]
    };

    return (
        <div>
            <h2>Chart</h2>
            <div style={{display:'flex', flexWrap:'wrap'}}>
                <PlotContainer>
                    <h3>세로 막대 그래프</h3>
                    <Bar options={defaultOption} data={grade} />
                </PlotContainer>
            </div>
        </div>
    )
})

export default ChartEx;