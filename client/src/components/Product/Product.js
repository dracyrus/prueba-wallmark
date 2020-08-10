import React from 'react';

import {PropTypes} from 'prop-types';

import ProductImage from "./ProductImage/ProductImage";
import ProductDescription from "./ProductDescription/ProductDescription";
import ProductPrice from "./ProductPrice/ProductPrice";
import ProductIcon from "./ProductIcon/ProductIcon";
import ProductAddButton from "./ProductAddButton/ProductAddButton";

import './Product.css';

const product = props => {
    return (
        <div className="ais-Hits-item">
            <div className="">
                <div className="rct-block  product-block flex-column justify-content-between overflow-hidden bg-white">
                    <a href='#'>
                        <ProductImage
                            productName={props.productBrand + ' ' + props.productDescription}
                            productImageURL={props.productImageURL}/>
                        <div className=" product-info">
                            <ProductDescription
                                productBrand={props.productBrand}
                                productDescription={props.productDescription}/>
                            <ProductPrice
                                productDiscount={props.productDiscount}
                                productReferencePrice={props.productReferencePrice}
                                productPrice={props.productPrice}/>
                            <div className="d-flex container-icon">
                                <ProductIcon
                                    classContainer={['d-flex', 'home-delivery-container']}
                                    classSpan='home-delivery-image'
                                    classSpanText='home-delivery-text'
                                    nameIcon='homeDeliveryIcon'
                                    urlIcon='https://www.lider.cl/catalogo/images/despacho-icon.svg'
                                    name='despacho'
                                />
                                <ProductIcon
                                    classContainer={['d-flex', 'site-to-store-container']}
                                    classSpan='site-to-store-image'
                                    classSpanText='site-to-store-text'
                                    nameIcon='siteToStoreIcon'
                                    urlIcon='https://www.lider.cl/catalogo/images/delivery-icon.svg'
                                    name='retiro'
                                />
                            </div>
                            <div>
                                <ProductAddButton />
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

product.propTypes = {
    productImageURL: PropTypes.string.isRequired,
    productBrand: PropTypes.string.isRequired,
    productDescription: PropTypes.string.isRequired,
    productDiscount: PropTypes.number.isRequired,
    productReferencePrice: PropTypes.number.isRequired,
    productPrice: PropTypes.number.isRequired,
}

export default product;

