import React from 'react';
import MyBox from '../components/MyBox';

const MyRef = () => {
    const myDname = React.useRef();
    const myLoc = React.useRef();
    const myResult = React.useRef();
    
    const myBoxRef = React.useRef();


    //화면에 출력되지 않은 상태변수를 생성할 수 있따.
    // useRef 함수에 전달하는 파라미터가 상태변수의 기본값이 된다
    const myValue = React.useRef(0)
    //컴포넌트가 다시 렌더링 되었음을 확인하기 위한 시간 출력
    console.log(new Date())
    

    return (
        <div>
            <h2>MyRef</h2>

            <h3>ref 기본 사용 방법</h3>

            <div>
                <label htmlFor="dname">학과명 :</label>
                <input type="text" ref={myDname} id="dname"/>
            </div>

            <div>
                <label htmlFor="loc">학과위치 :</label>
                <input type="text" ref={myLoc} id="loc"/>
            </div>

            <p>
                입력값 확인: <span ref={myResult}></span>
            </p>

            <button onClick={e=> {
                console.log(myDname);
                console.log(myLoc);
                const dname = myDname.current.value;
                const loc = myLoc.current.value;
                
                myResult.current.innerHTML = dname + "," + loc;
            }}>클릭</button>

            <hr/>

            <h3>컴포넌트에 ref 적용하기</h3>

            <MyBox ref={myBoxRef}/>

            <button type='button' onClick={()=> {
                myBoxRef.current.style.backgroundColor= '#f00';
            }}>Red</button>

            <button type='button' onClick={()=> {
                myBoxRef.current.style.backgroundColor= '#00f';
            }}>Blue</button>

            <button onClick = {e => {
                //이 변수는 갱신되더라도 컴포넌트 함수를 다시 실행시키지 않는다.
                myValue.current++;
                console.log(`myValue=${myValue.current}`)
            }}>Ref 상태변수 갱신</button>
        </div>
    )
}

export default MyRef;