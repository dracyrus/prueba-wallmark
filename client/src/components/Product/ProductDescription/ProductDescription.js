import React from 'react';

import {PropTypes} from "prop-types";

import './ProductDescription.css';


const productDescription = props => {
    return (
        <div className="d-flex text-left product-description">
            <div><span className="span-name-product">
                {props.productBrand}
            </span><span> {props.productDescription} </span>
            </div>
        </div>
    );
};

productDescription.propTypes = {
    productBrand: PropTypes.string.isRequired,
    productDescription: PropTypes.string.isRequired,
}

export default productDescription;

