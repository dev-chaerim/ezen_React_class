import React, {memo, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getCurrentData, getList } from "../slices/CovidSlice";
import { useQueryString } from '../hooks/useQueryString';
import { useParams } from 'react-router-dom';
import {
    chart,
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend,
    LineElement
} from 'chart.js';

import {Chart, Line} from 'react-chartjs-2';
import styled from "styled-components";

Chart.register(
    chart,
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend,
    LineElement
)

const PlotContainer = styled.div`
    width: 33.3%;
    padding: 20px;
    box-sizing: border-box;
    height: 400px;
`

const LineChartView = memo(() => {
    const {data, loading, error, gte, lte} = useSelector((state) => state.CovidSlice);
    const dispatch = useDispatch();
    const params = useParams();

    const defaultOption = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
            }
        }
    }

    const covid19 = {
        labels: []
    }

    const lableArr = data.map((v, i) => {v.})
    
    useEffect(()=> {
        dispatch(getList({
            lte,
            gte
        }))
    },[lte, gte])
    
    console.log("chart",data);
    return (
        <div>
            <h2>LineChartView</h2>
            
        </div>
    )
})

export default LineChartView;