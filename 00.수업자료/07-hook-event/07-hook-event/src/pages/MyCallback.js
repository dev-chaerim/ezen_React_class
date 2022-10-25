import React from 'react';

const MyCallback = () => {
    const [myText, setMyText] = React.useState('Hello React');

    const onInputChange = React.useCallback((e)=> {
        setMyText(e.currentTarget.value);
    }, []);

    return (
        <div>
            <h2>MyCallback</h2>
            <h3>{myText}</h3>
            <input type="text" placeholder='input...' onChange={onInputChange}/>
        </div>
    )
}

export default MyCallback;