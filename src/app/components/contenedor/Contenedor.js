import React from 'react';

import PropTypes from 'prop-types';

import { ContenedorDiv, ContenidoDiv } from './styled';

export const Contenedor = props => {

    const { maxWidth, marginTop = 0, marginBottom = 0} = props;

    return (

        <ContenedorDiv margintop={marginTop} marginbottom={marginBottom}>
            <ContenidoDiv maxwidth={maxWidth}>
                {props.children}
            </ContenidoDiv>
        </ContenedorDiv>

    );
}

Contenedor.propTypes = {

    maxWidth: PropTypes.string,

    marginTop: PropTypes.number,

    marginBottom: PropTypes.number,

};

Contenedor.defaultProps = {

    maxWidth: '',

};
