import React from 'react';

import {PropTypes} from 'prop-types';

import './ProductIcon.css';

const productIcon = props => {
    return (
        <div className={props.classContainer.join(' ')}>
            <span className={props.classSpan}>
                <img alt={props.nameIcon} className="vertical-align"
                     src={props.urlIcon} width="17" height="14" />
            </span>
            <span className={props.classSpanText}>{props.name}</span>
        </div>
    );
};

productIcon.propTypes = {
    classContainer: PropTypes.array.isRequired,
    classSpan: PropTypes.string.isRequired,
    classSpanText: PropTypes.string.isRequired,
    nameIcon: PropTypes.string.isRequired,
    urlIcon: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}

export default productIcon;

