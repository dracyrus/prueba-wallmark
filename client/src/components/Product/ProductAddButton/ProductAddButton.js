import React from 'react';

import './ProductAddButton.css';

const productAddButton = props => {
    return (
        <div className="walmart-add-cart-button-container">
            <span id="addProductToCart"
                  className="ProductCardButton__AddToCartButton-sc-1r8ezq4-0
                  iRLHuO walmart-add-cart-button pt-1 text-center cp-no-select">
                Agregar
            </span>
        </div>
    );
};

export default productAddButton;

