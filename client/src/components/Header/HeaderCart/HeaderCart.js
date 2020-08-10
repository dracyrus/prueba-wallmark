import React from "react";

import './HeaderCart.css';

const header = props => {
    return (
        <div className="cart-supermarket-width">
            <div className="cart-container">
                <li className="list-inline-item cart-dropdown dropdown nav-item">
                    <a aria-haspopup="true" href="#" className="p-0 nav-link" aria-expanded="false">
                        <div id="shoppingCart" className="d-flex justify-content-between shopping-cart-images">
                            <img alt="cart" src="https://www.lider.cl/catalogo/images/lider-cart.svg" width="29" height="25" />
                            <div className="cart-quantity">
                                <div id="quantityNumber" className="quantity-number">0</div>
                            </div>
                        </div>
                    </a>
                </li>
            </div>
        </div>
    );
}

export default header;


