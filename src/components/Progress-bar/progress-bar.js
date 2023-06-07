import React from "react";
import PropTypes from 'prop-types';

import './style.css';

export const ProgressBar = ({percent}) => {
    return (
        <div className = 'progress-bar'>
            <div className='progress-bar__percent' style={{transform: `scale(${percent/100}, 1)`}}/>
        </div>
    )
}

ProgressBar.propTypes = {
    percent: PropTypes.number.isRequired
}