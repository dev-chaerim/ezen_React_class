import React from 'react';

const PrintStar = () => {
    const [rowNum, setRowNum] = React.useState();
    const console = React.useRef();
    const changeRowNum = e => setRowNum(e.currentTarget.value);

    React.useEffect(()=> {
        let html = '';
        for(let i = 0; i < rowNum; i++) {
            let str ='';
            for(let j=0; j < i+1; j++) {
                str += '*';
            }
            html += str + '<br />'
        }
        console.current.innerHTML = html;
    }, [rowNum])

    return (
        <div>
            <h2>PrintStar</h2>
            <p>useState, useEffect, useRef를 사용한 별찍기 구현</p>
            <hr/>
            <label htmlFor="star">rownum:</label>
            <input type="text" id='star' value={rowNum} onChange={changeRowNum}/>
            <hr/>
            <div ref={console}></div>
        </div>
    )
}

export default PrintStar;