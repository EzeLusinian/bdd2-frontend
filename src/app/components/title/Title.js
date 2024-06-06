import React from 'react';

import PropTypes from 'prop-types';

import { TitleDiv } from './styled';

import { getColor } from '../../../styles/colors';

export const Title = props => {

    const { label, color, isBold, style } = props;
    
    let labelColor = getColor(color);

    return (  

        <TitleDiv
            color = {labelColor}
            isbold = {isBold.toString()}
            style={{
                ...style
            }}
        >
            {label}
        </TitleDiv>

    );
}

Title.propTypes = {

    isBold: PropTypes.bool,

    label: PropTypes.string.isRequired,

    style: PropTypes.object,

  };
  
Title.defaultProps = {

    isBold: false,

    label: 'Title',

    color: 'darkGray',

    style: {},

};