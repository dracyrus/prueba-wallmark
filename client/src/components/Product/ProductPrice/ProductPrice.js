import React from 'react';
import {PropTypes} from 'prop-types';

import {formatNumber} from '../../../util/util';

import './ProductPrice.css';

const productPrice = props => {
    let productDisccount, productReference  = null;

    if(props.productDiscount){
        productDisccount = (<div className="walmart-discount-percentage-card">{props.productDiscount}%</div>);
        productReference = (<div className="d-flex"><span className="walmart-reference-price">${props.productReferencePrice}</span></div>);
    }

    return (
        <div className="mb-12">
            <div className="walmart-sales-price d-flex ">{formatNumber(props.productPrice)}
                {productDisccount}
            </div>
            {productReference}
        </div>
    );
};

productPrice.propTypes = {
    productDiscount: PropTypes.number.isRequired,
    productReferencePrice: PropTypes.number.isRequired,
    productPrice: PropTypes.number.isRequired,
}

export default productPrice;

