import React from 'react';
import MyPropsTypesSub from '../components/MyPropsTypesSub';

const MyPropTypes = () => {
    return (
        <div>
            <h2>MyPropsTypes</h2>
            <MyPropsTypesSub />
            <MyPropsTypesSub name='민호' age='19' gobby="사진찍기"/>
            <MyPropsTypesSub name='수영' age='스물한살' hobby="영화보기" />
            <MyPropsTypesSub name='철민' age={22} />
        </div>
    )
}

export default MyPropTypes;