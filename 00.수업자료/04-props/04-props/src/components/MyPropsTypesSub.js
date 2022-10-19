import React from 'react';
import PropTypes from 'prop-types';

const MyPropsTypesSub = ({name, age, hobby}) => {
    return (
        <div>
            <h3>MyPropTypesSub
                <p>안녕하세요, 제 이름은 {name}이고, 나이는 {age}세 입니다.</p>
                <p>{hobby && (<span>취미는 {hobby}입니다.</span>)}</p>
            </h3>
        </div>
    )
}

MyPropsTypesSub.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    hobby: PropTypes.string.isRequired
}

export default MyPropsTypesSub;