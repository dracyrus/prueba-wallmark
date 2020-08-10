import React from 'react';
import {PropTypes} from 'prop-types';

import './ProductImage.css';

const productImage = props => {
    return (
        <div id="1049604" className="overlay-wrap overflow-hidden bg-white">
            <div className="text-center">
                <div className="product-image-shadow" />
                <div id="image" className="bg-white">
                    <div>
                        <img id="lazy-img" className="img-hover-zoom img-fluid m-auto "
                             alt={props.productName}
                             src={props.productImageURL}
                             //src='https://images.lider.cl/wmtcl?source=url[file:/productos/894706a.jpg]&scale=size[300x300]&&sink'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

productImage.propTypes = {
    productName: PropTypes.string.isRequired,
    productImageURL: PropTypes.string.isRequired,
}

export default productImage;

