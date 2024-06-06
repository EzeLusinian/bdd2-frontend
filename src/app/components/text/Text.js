import React from 'react';

import PropTypes from 'prop-types';

import { TextDiv } from './styled';

import { getColor } from '../../../styles/colors';

export const Text = props => {

    const { label, color, isBold, style } = props;

    let labelColor = getColor(color);

    return (  

        <TextDiv
            color = {labelColor}
            isbold = {isBold.toString()}
            style={{
                ...style
            }}
        >
            {label}
        </TextDiv>

    );
}

Text.propTypes = {

    isBold: PropTypes.bool,

    label: PropTypes.string.isRequired,

  };
  
Text.defaultProps = {

    isBold: false,

    label: 'Text',

    color: 'darkGray',

};