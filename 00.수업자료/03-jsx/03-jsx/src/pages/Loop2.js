import React from 'react';

const Loop2 = () => {
    const myArray = ['hello', 'world'];

    const myArrayItem = myArray.map((item, index) => {
        return (
            <li key={index}>{item}</li>
        )
    })
    console.log(myArrayItem);
    
    return (
        <div>
            <h2>Loop2</h2>
            <ul>{myArrayItem}</ul>
        </div>
    )
};

export default Loop2;