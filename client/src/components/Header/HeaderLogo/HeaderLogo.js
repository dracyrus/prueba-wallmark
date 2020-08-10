import React from "react";

import './HeaderLogo.css';

const headerLogo = props => {
    return (
        <div className="logo">
            <a href="/">
                <img alt="Lider Logo" src="https://www.lider.cl/catalogo/images/cyber-lider-logo.svg"/>
            </a>
        </div>
    );
}

export default headerLogo;


