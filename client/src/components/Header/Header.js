import React from "react";

import {PropTypes} from "prop-types";

import HeaderLogo from "./HeaderLogo/HeaderLogo";
import HeaderCategory from "./HeaderCategory/HeaderCategory";
import HeaderSearch from "./HeaderSearch/HeaderSearch";
import HeaderSupermarketLink from "./HeaderSupermarketLink/HeaderSupermarketLink";
import HeaderCart from "./HeaderCart/HeaderCart";

import './Header.css';


const header = props => {
    return (
        <div className="site-header compact">
            <div className="header-wrapper">
                <HeaderLogo />
                <HeaderCategory />
                <HeaderSearch
                    searchSentence={props.searchSentence}
                    handleChangeValueInput={props.handleChangeValueInput}
                    handleSubmitForm={props.handleSubmitForm}/>
                <HeaderSupermarketLink />
                <HeaderCart />
            </div>
        </div>
    );
}

header.propTypes = {
    searchSentence: PropTypes.string.isRequired,
    handleChangeValueInput: PropTypes.func.isRequired,
    handleSubmitForm: PropTypes.func.isRequired,
}

export default header;


