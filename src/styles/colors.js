export const colors = {

    primary: '#005bc5',
    darkPrimary: '#012677',
    lightPrimary: '#00b4fc',

    secondary: '#5296a5',
    darkSecondary: '#377785',
    lightSecondary: '#E7F2F3',

    white: '#FFFFFF',
    gray: '#DDDDDD',
    lightGray: '#f5f5f5',
    darkGray: '#4c4c4c',
    black: '#000000',

    red: '#E76059',
    lightRed: '#FFA39E',

    green: '#0AC29F',
    lightGreen: '#DBFFE8',

    transparent: "#FF000000"

}

export const getColor = colorName => {

    let color = colors[colorName] || colors.primary

    return color;

}

export const getColorForButton = theme => {

    let backgroundColor = ''
    let textColor = ''
    let borderColor = ''

    switch (theme) {
        case 'primary':
            backgroundColor = colors.primary
            borderColor = colors.primary
            textColor = colors.white
            break;
        case 'light-primary':
            backgroundColor = colors.white
            borderColor = colors.white
            textColor = colors.primary
            break;
        case 'border-primary':
            backgroundColor = colors.white
            borderColor = colors.primary
            textColor = colors.primary
            break;
        case 'secondary':
            backgroundColor = colors.secondary
            borderColor = colors.secondary
            textColor = colors.white
            break;
        case 'light-secondary':
            backgroundColor = colors.white
            borderColor = colors.white
            textColor = colors.secondary
            break;
        case 'border-secondary':
            backgroundColor = colors.white
            borderColor = colors.secondary
            textColor = colors.secondary
            break;
        case 'disabled':
            backgroundColor = colors.lightGray
            borderColor = colors.lightGray
            textColor = colors.white
            break;
        case 'red':
            backgroundColor = colors.red
            borderColor = colors.red
            textColor = colors.white
            break;
        case 'light-red':
            backgroundColor = colors.white
            borderColor = colors.white
            textColor = colors.red
            break;
        case 'border-red':
            backgroundColor = colors.white
            borderColor = colors.red
            textColor = colors.red
            break;
        case 'orange':
            backgroundColor = colors.orange
            borderColor = colors.orange
            textColor = colors.white
            break
        case 'light-orange':
            backgroundColor = colors.white
            borderColor = colors.white
            textColor = colors.orange
            break
        case 'border-orange':
            backgroundColor = colors.white
            borderColor = colors.orange
            textColor = colors.orange
            break
        default:
            backgroundColor = colors.transparent
            borderColor = colors.transparent
            textColor = colors.white
            break;
    }

    return {
        backgroundColor,
        borderColor,
        textColor,
    }

}