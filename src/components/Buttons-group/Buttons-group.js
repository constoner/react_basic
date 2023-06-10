import React, {useState} from "react";
import './style.css'
import PropTypes from 'prop-types'
import classnames from "class-names";

export const ButtonsGroup = ({children, className}) => {

    const [activeButtonIndex, setActiveButtonIndex] = useState(1);

    return (
        <div className={`buttons-group ${className}`}>
            {
                React.Children.map(children, (child, i) => {
                        return React.cloneElement(
                            child,
                            {
                                className: classnames('buttons-group__item', child.props.className, {'buttons-group__item--active' : activeButtonIndex === i}),
                                onClick: () => {
                                    setActiveButtonIndex(i);
                                    console.log(activeButtonIndex);
                                }
                            }
                    )
                }
            )
            }
        </div>
    )
}

ButtonsGroup.propTypes = {
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};