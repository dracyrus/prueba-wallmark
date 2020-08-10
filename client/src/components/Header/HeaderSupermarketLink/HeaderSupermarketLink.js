import React from "react";

import './HeaderSupermarketLink.css';

const headerSearch = props => {
    return (
        <a href="https://www.lider.cl/supermercado" target="_blank"
           rel="noopener noreferrer"
           className="styled__HoverLink-sc-17jbrkg-1 fMTbZy">
            <img alt="supermercado" src="https://www.lider.cl/catalogo/images/super_cart.svg" height="20px"/>
            <span> Supermercado</span>
        </a>
    );
}

export default headerSearch;


