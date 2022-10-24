import React from 'react';
import dayjs from 'dayjs';

const setDataValue = (state, action) => {
    const day = dayjs();

    let sdate = null;
    switch(action) {
        case 'DAY7':
            sdate = day.add(-7, 'd').format('YYYY-MM-DD');
            break;
        case 'DAY15':
            sdate = day.add(-15, 'd').format('YYYY-MM-DD');
            break;
        case 'MONTH1':
            sdate = day.add(-1, 'M').format('YYYY-MM-DD');
            break;
        case 'MONTH3':
            sdate = day.add(-3, 'M').format('YYYY-MM-DD');
            break;
        case 'MONTH6':
            sdate = day.add(-6, 'M').format('YYYY-MM-DD');
            break;
        default:
            sdate = day.format('YYYY-MM-DD');
            break;
    }
    return { ...state, startDate: sdate };

}

const DateRange2 = () => {
   const day = dayjs();

   const [myDate, setMyDate] = React.useReducer(setDataValue, {
        startDate: day.format('YYYY-MM-DD'),
        endDate: day.format('YYYY-MM-DD'),
   })

    return (
        <div>
            <h2>DateRange2</h2>
            <p>
                {myDate.startDate} ~ {myDate.endDate}
            </p>
            <p>
                <button type='button' onClick={(e)=> setMyDate('DAY7')}>7일</button>
                <button type='button' onClick={(e)=> setMyDate('DAY15')}>15일</button>
                <button type='button' onClick={(e)=> setMyDate('MONTH1')}>1개월</button>
                <button type='button' onClick={(e)=> setMyDate('MONTH3')}>3개월</button>
                <button type='button' onClick={(e)=> setMyDate('MONTH6')}>6개월</button>
            </p>
        </div>
    )
}

export default DateRange2;