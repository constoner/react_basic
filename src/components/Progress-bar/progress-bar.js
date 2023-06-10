import React from "react";
import PropTypes from 'prop-types';

import './style.css';

export const ProgressBar = ({percent}) => {
    return (
        <div className = 'progress-bar'>
            <div className='progress-bar__percent' style={{transform: `translateX(${-100 + percent}%)`}}/>
        </div>
    )
};

ProgressBar.propTypes = {
    percent: PropTypes.number.isRequired
};