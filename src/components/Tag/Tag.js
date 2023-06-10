import React, { useState } from "react";
import PropTypes from 'prop-types';
import classnames from 'class-names';
import './style.css';


export const Tag = ({className, children, isClickable}) => {
    const [isVisible, setTagVisibility] = useState(1);
    const classNames = classnames(
        'tag',
        {
            'tag--clickable': Boolean(isClickable),
        },
        className,
    );

    return (isVisible ? (
            <div className={classNames}>
            {children}
            <button
                className="tag__button"
                type="button"
                aria-label="delete tag"
                onClick={() => setTagVisibility(0)}>
            </button>
        </div>
        ) : null)
}

Tag.defaultProps = {
    isClickable: false,
    className: '',
};

Tag.propTypes = {
    className: PropTypes.string,
    isClickable: PropTypes.bool,
};