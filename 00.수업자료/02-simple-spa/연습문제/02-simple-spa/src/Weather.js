import React from 'react';
import { useParams } from 'react-router-dom';

const Weather = () => {
    console.clear();
    const params = useParams();
    // console.log(params)

    const weather = {
        "mon": ["맑음", "맑음"],
        "tue": ["비", "맑음"],
        "wed": ["맑음", "흐림"],
        "thu": ["맑음", "흐림"],
        "fri": ["흐림", "흐림"],
        "sat": ["비", "맑음"],
        "sun": ["맑음", "맑음"]
    };

    const dayWeather = weather[params.day];
    // console.log(dayWeather)

    return (
        <div>
            <h2>오전</h2>
            <h4>{dayWeather[0]}</h4>
            <h2>오후</h2>
            <h4>{dayWeather[1]}</h4>
        </div>
    )
};

export default Weather;