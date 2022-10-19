import React from 'react';

const MyPropsSub = (props) => {
    console.group("MyPropsSub");
    console.log(props)
    console.log(typeof props.name);
    console.log(typeof props.age);
    console.groupEnd();

    return (
        <div>
            <h3>MyPropsSub</h3>
            <p>
                제 이름은 <b>{props.name}</b>이고 나이는 <b>{props.age}</b>입니다.
            </p>
        </div>
    )
}

MyPropsSub.defaultProps = {
    name: '이름없음',
    age: 20
}

export default MyPropsSub;