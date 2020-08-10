import React from "react";

import HeaderInfoLink from "./HeaderInfoLink/HeaderInfoLink";
import HeaderWhatsappLink from "./HeaderWhatsappLink/HeaderWhatsappLink";

import './HeaderInfo.css';

const headerInfo = props => {
    return (
        <div id="header" className="header-info">
            <div className="header-wrapper header-info-expanded">
                <HeaderWhatsappLink
                    url='https://api.whatsapp.com/send?phone=56957211492&amp;text=Hola!%20Tengo%20una%20consulta'
                    phoneNumber='+56957211492'
                />
                <div>
                    <HeaderInfoLink
                        urlRedirect='https://www.lider.cl/agenda/#JuntosNosCuidamos'
                        name='agenda'
                        urlImage='https://www.lider.cl/catalogo/images/agenda_icon.svg'
                        description='agenda tu visita'
                    />
                    <HeaderInfoLink
                        urlRedirect='https://www.lider.cl/tiendas'
                        name='locales'
                        urlImage='https://www.lider.cl/catalogo/images/locales_icon.svg'
                        description='locales y horarios'
                    />
                </div>
            </div>
        </div>
);
}

export default headerInfo;


