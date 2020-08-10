import React from 'react';

import {PropTypes} from 'prop-types';

import './Pagination.css';
import PaginationItem from "./PaginationItem/PaginationItem";

const pagination = props => {
    const numberPage = Math.ceil(props.numberProducts / 10);
    const pagesNumbers = [];
    let classPagination;

    for (let i = 1; i<= numberPage; i++){
        classPagination = ['ais-Pagination-item ais-Pagination-item--page'];

        if(i === props.actualPage) classPagination.push('ais-Pagination-item--selected');

        pagesNumbers.push(
            <PaginationItem
                key={i}
                itemClass={classPagination}
                paginationText={i.toString()}
                updatePagination={() => props.updatePagination(i)}
            />
        )
    }

    return (
        <div className="pagination-container">
            <div className="pagination-wmt">
                <ul className="ais-Pagination-list">
                    {pagesNumbers}
                </ul>
            </div>
        </div>
    );
};

pagination.propTypes = {
    actualPage: PropTypes.number.isRequired,
    numberProducts: PropTypes.number.isRequired,
    updatePagination: PropTypes.func.isRequired,
}

export default pagination;

