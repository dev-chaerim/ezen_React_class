import React from 'react';
import PropTypes from 'prop-types';

import { Blocks } from 'react-loader-spinner';



const Spinner = ({ loading, width, height }) => {
    return(  
        <Blocks 
            visible={loading}
            height={width}
            width={height}
            wrapperStyle={{
                position: 'absolute',
                zIndex: 10000,
                left: '50%',
                top: '50%',
                transform: 'tranlate(-50%, -50%)'
            }}
            wrapperClass="blocks-wrapper"
        />  
    )
}

Spinner.defaultProps = {
    visible: false,
    width: 100,
    height: 100
}

Spinner.propTypes = {
    visible: PropTypes.bool.isRequired,
    width: PropTypes.number,
    height: PropTypes.number
}

export default React.memo(Spinner);