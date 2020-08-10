import React from 'react';
import {PropTypes} from "prop-types";

import './ProductNotFound.css';

const productNotFound = props => {

    let message = (<div className="styled__NoResultsText-sc-1w20d9o-5 dTOjoM">No encontramos resultados para tu búsqueda de <span>{props.sentence}</span></div>);

    if(props.error) message = (<div className="styled__NoResultsText-sc-1w20d9o-5 dTOjoM">Ha ocurrido un error al momento de ejecutar la búsqueda</div>);

    return (
        <div className='app-container'>
            <div className="rct-app-content">
                <div className="rct-page">
                    <div className="content-wrapper">
                        <div className="rct-page-content">
                            <div className="styled__SearchWithoutResultContainer-sc-1w20d9o-0 hAiWRf">
                                <div className="styled__SearchWithoutResultBody-sc-1w20d9o-1 hsYAQV">
                                    <img alt="exploding-icon" className="styled__Icon-sc-1w20d9o-3 laXAqL img-fluid"
                                         src="https://www.lider.cl/catalogo/images/explodingIcon.png" />
                                    <div className="styled__Header-sc-1w20d9o-4 leVDTI">¡Lo sentimos!</div>
                                    {message}
                                    <div className="styled__YellowDivider-sc-1w20d9o-7 fUqvVt"></div>
                                    <div className="styled__Tips-sc-1w20d9o-6 cFwMqv"><b>Algunos tips</b>: Revisa si escribiste correctamente lo que buscas. Puedes probar
                                        nuevamente usando términos menos específicos.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

productNotFound.propTypes = {
    sentence: PropTypes.string,
    error: PropTypes.bool,
}

export default productNotFound;

