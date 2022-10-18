import React from 'react';

const If3 = () => {
    const articleList = undefined;
    return (
        <div>
            <h2>If3</h2>
            {articleList || <p>조회된 게시글이 없습니다.</p>}
        </div>
    )
};

export default If3;