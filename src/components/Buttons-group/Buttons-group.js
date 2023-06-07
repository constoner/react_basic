import React, {useState} from "react";
import './style.css'
import PropTypes from 'prop-types'
import classnames from "class-names";

export const ButtonsGroup = ({children}) => {

    const [activeButtonIndex, setActiveButtonIndex] = useState(1);

    return (
        <div className="buttons-group">
            {
                React.Children.map(children, (child, i) => (React.cloneElement(
                    child,
                    {
                        className: classnames('buttons-group__item', {'buttons-group__item--active' : activeButtonIndex === i}),
                        onClick: () => {
                            setActiveButtonIndex(i);
                            console.log(activeButtonIndex);
                        }
                    }
                )))
            }
        </div>
    )
}

ButtonsGroup.propTypes = {
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};