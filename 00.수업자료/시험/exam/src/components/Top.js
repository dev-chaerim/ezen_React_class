import React, {memo, useCallback} from "react";
import styled from "styled-components";
import { NavLink, useNavigate } from 'react-router-dom';

const ControlContainer = styled.form`
    position: sticky;
    top:0;
    background-color: #fff;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    padding: 10px 0;

    .controll {
        margin-right: 5px;
        display: inline-block;
        font-size: 16px;
        padding: 7px 10px 5px 10px;
        border: 1px solid #ccc;
    }

    .clickable {
        background-color: #fff;
        color: #000;
        text-decoration: none;
        cursor: pointer;

        &:hover {
            background-color: #eeeeee;
        }
        &:active {
            transform: scale(0.9, 0.9);
        }
    }
`

const Top = memo(() => {

    const navigate = useNavigate();

    const onSearchSubmit = useCallback((e) => {
        e.preventDefault();
        const current = e.currentTarget;
        const covidGte = current.covid_gte;
        const covidLte = current.covid_lte;
        console.log(covidGte.value, covidLte.value);
        let redirectUrl = covidGte.value && covidLte.value? `covid19/?covid_gte=${covidGte.value}&covid_lte=${covidLte.value}` : '/';
        navigate(redirectUrl);
    }, [navigate])

    return (
        <div>
            <h2>Covid19 현황</h2>
            <ControlContainer onSubmit={onSearchSubmit}>
                <input type="date" name="covid_gte" className="controll"/>
                ~
                <input type="date" name="covid_lte" className="controll"/>

                <button type="submit" className="controll clickable">검색</button>
            </ControlContainer>
        </div>
    )
})

export default Top;