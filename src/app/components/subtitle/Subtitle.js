import React from 'react';

import PropTypes from 'prop-types';

import { SubtitleDiv } from './styled';

import { getColor } from '../../../styles/colors';

export const Subtitle = props => {

    const { label, color, isBold, style, isCenter } = props;
    
    let labelColor = getColor(color)

    return (  

        <SubtitleDiv
            color = {labelColor}
            isbold = {isBold.toString()}
            style={{
                ...style,
                textAlign: isCenter ? 'center' : 'left'
            }}
        >
            {label}
        </SubtitleDiv>

    );
}

Subtitle.propTypes = {

    isBold: PropTypes.bool,

    isCenter: PropTypes.bool,

    label: PropTypes.string.isRequired,

    style: PropTypes.object,

  };
  
Subtitle.defaultProps = {

    isBold: false,

    label: 'Title',

    color: 'darkGray',

    style: {},

    isCenter: false,

};