import React from "react";
import {PropTypes} from 'prop-types';

import './HeaderInfoLink.css';

const headerInfoLink = props => {
    return (
        <a href={props.urlRedirect}
           className="styled__StoreLink-sc-17jbrkg-0 kkNTwS">
            <img alt={props.name} src={props.urlImage} height="13px" />
            <span>{props.description}</span>
        </a>
    );
}

headerInfoLink.propTypes = {
    urlRedirect: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    urlImage : PropTypes.string.isRequired,
    description : PropTypes.string.isRequired,
}

export default headerInfoLink;


