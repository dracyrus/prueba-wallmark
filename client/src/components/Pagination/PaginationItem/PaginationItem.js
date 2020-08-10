import React from 'react';

import {PropTypes} from 'prop-types';

import './PaginationItem.css';

const pagination = props => {
    return (
        <li className={props.itemClass.join(' ')}>
            <a tabIndex="0" role="button" className="ais-Pagination-link" aria-disabled="true" onClick={props.updatePagination}>
                {props.paginationText}
            </a>
        </li>
    );
};

pagination.propTypes = {
    itemClass: PropTypes.array.isRequired,
    paginationText: PropTypes.string.isRequired,
    updatePagination: PropTypes.func.isRequired,
}

export default pagination;

