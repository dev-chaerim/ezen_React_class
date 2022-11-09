import React, {memo} from 'react';

import { useSelector, useDispatch } from 'react-redux';

import {plus, minus} from '../slices/CounterSlice';

const Counter = memo(()=>{
    const {number, color} = useSelector((state) => state.CounterSlice);
    const dispatch = useDispatch();

    return (
        <div style={{display: 'flex'}}>
            <button onClick={(e)=>{ dispatch(plus(5));}}>+5</button>
            <h2 style={{
                color: color,
                margin: '10px',
                width: '50px',
                textAlign: 'center'
            }}>{number}</h2>
            <button onClick={(e)=>{dispatch(minus(3));}}>-3</button>
            
        </div>
    )
})

export default Counter;