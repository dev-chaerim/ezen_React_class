import React from 'react';

const If1 = () => {

    const btnLogin = (isLogin) => {
        if(isLogin === true) {
            return (<button type='button'>Logout</button>)
        } else {
            return (<button type='button'>Login</button>)
        }
    }
    return (
        <div>
            <h2>If1</h2>
            {btnLogin(true)}
        </div>
    )
};

export default If1;