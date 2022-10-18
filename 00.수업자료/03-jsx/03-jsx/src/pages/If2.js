import React from 'react';

const If2 = () => {
    const isLogin = true;

    return (
        <div>
            <h2>If2</h2>
            {isLogin === true && <p>로그인 되셨습니다.</p>}
        </div>
    )
};

export default If2;