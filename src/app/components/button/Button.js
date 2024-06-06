import React from 'react'

import { ButtonDiv } from './styled'

import { getColorForButton } from '../../../styles/colors';

import PropTypes from 'prop-types'

export const Button = ({
    label,
    onClick,
    isBold,
    theme,
    fullWidth = false,
    scale = 100,
    disabled,
    style,
}) => {

    
    const themeButton = getColorForButton(disabled ? 'disabled' : theme)

    const escala = scale / 100

    return (
        <ButtonDiv
            onClick={onClick}
            isbold={isBold.toString()}
            fullwidth={fullWidth.toString()}
            backgroundcolor={themeButton.backgroundColor}
            color={themeButton.textColor}
            bordercolor={themeButton.borderColor}
            scale={escala}
            disabled={disabled}
            style={{
                ...style
            }}
        >
            {label}
        </ButtonDiv>
    )
}


Button.propTypes = {

    isBold: PropTypes.bool,

    disabled: PropTypes.bool,

    fullWidth: PropTypes.bool,

    theme: PropTypes.oneOf(['primary', 'light-primary', 'border-primary', 'secondary', 'light-secondary', 'border-secondary', 'red', 'light-red', 'border-red', 'orange', 'light-orange', 'border-orange']),

    label: PropTypes.string.isRequired,

    onClick: PropTypes.func.isRequired,

    sizePadding: PropTypes.number

  };
  
Button.defaultProps = {

    isBold: false,

    fullWidth: false,
    
    disabled: false,

    theme: 'primary',

    onClick: undefined,

    label: 'Button',

    scale: 100,

};