import React from "react";
import PropTypes from 'prop-types'
import classnames from 'class-names'

import './style.css';

export const Button = ({children, mode, size, className, counter, ...props}) => {
    const classNames = classnames(
        'button',
        {
            [`button--${mode}`]: Boolean(mode),
            [`button--${size}`]: Boolean(size),
        },
        className,
    );

    return (
        <button
        className={classNames}
        {...props}
        type="button">
            {children}
            {Boolean(counter) && (<span className = 'button__counter'>{counter}</span>)}
        </button>
    );
}

Button.defaultProps = {
    mode: 'primary',
    size: 'normal',
    className: '',
    counter: null,
}

Button.propTypes = {
    counter: PropTypes.number,
    className: PropTypes.string,
    mode: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger']),
    size: PropTypes.oneOf(['small', 'normal', 'large'])
}