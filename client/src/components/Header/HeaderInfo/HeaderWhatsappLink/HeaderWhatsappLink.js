import React from "react";
import {PropTypes} from 'prop-types';

import './HeaderWhatsappLink.css';

const headerWhatsappLink = props => {
    return (
        <span>
            Servicio al cliente de Lider.cl: WhatsApp
            <a href={props.url}>
                {props.phoneNumber}
            </a> | Horario: de lunes a viernes de 8:00 a 22:00 y sábado, domingo y festivos de 9:00 a 22:00
        </span>
    );
}

headerWhatsappLink.propTypes = {
    url: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string.isRequired,
}

export default headerWhatsappLink;


