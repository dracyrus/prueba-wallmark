import React from "react";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";

import './HeaderCategory.css';

const headerCategory = props => {
    return (
        <div className="menu-icon-container">
            <div>
                <FontAwesomeIcon icon={faBars} className='menu-icon'/>
                <div className="show-category">Categorías</div>
            </div>
        </div>
    );
}

export default headerCategory;


