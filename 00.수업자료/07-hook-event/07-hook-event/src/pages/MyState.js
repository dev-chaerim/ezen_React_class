import React from 'react';


const MyState = () => {

    const [myName, setMyName] = React.useState('');
    const [myPoint, setMyPoint] = React.useState(50)

    const onMyNameChange = e => setMyName(e.currentTarget.value);


    // 상태값이 변경될 떄 마다 컴포넌트 함수는 매번 재실행됨
    //상태값은 화면에 출력될 변수에만 사용해야한다.
    //아래의 출력문은 상태값이 변경될 때마다 반복 출력
    console.log(new Date());

    return (
        <div>
            <h2>MyState</h2>
            <h3>{myName}님의 점수는 {myPoint}점 입니다.</h3>

            <hr />

            <div>
                <label htmlFor = 'myNameInput'>이름:</label>
                <input id= "myNameInput" type="text" value={myName} onChange={onMyNameChange}/>
            </div>

            <div>
                <label htmlFor="myPointInput">점수:</label>
                <input 
                    id='myPointInput'
                    type="range" 
                    min='0'
                    max='100'
                    value={myPoint}
                    step='1'
                    onChange={e=> {
                        setMyPoint(e.currentTarget.value)
                    }}
                />
            </div>
        </div>
    )
}

export default MyState;