import React from 'react';

import './Dropdown.css';

const dropdown = props => {
    return (
        <div>
            <div className="dropdown">
                <div className="dropdown">
                    <div data-toggle="dropdown" aria-expanded="false" aria-haspopup="true" className="category-order-dropdown">
                        Ordenar por: destacados
                        <span className="pull-right">
                                                            <img alt="open-arrow" src="https://www.lider.cl/catalogo/images/arrow_mobile.svg" width="5" />
                                                        </span>
                    </div>
                    <div tabIndex="-1" role="menu" aria-hidden="true" className="sort-by-margin-left dropdown-menu">
                        <div className="category-order-dropdown-item">Destacados</div>
                        <div className="category-order-dropdown-item">Menor precio</div>
                        <div className="category-order-dropdown-item">Mayor precio</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default dropdown;

