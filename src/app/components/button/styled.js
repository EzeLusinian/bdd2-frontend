import styled from "styled-components";

export const ButtonDiv = styled.button`
    
    width: ${props => props?.fullwidth === "true" ? '100%' : null};

    background-color: ${props => props.backgroundcolor};

    color: ${props => props.color};

    text-align: center;

    border-style: solid;

    border-width: 2px;

    border-color: ${props => props.bordercolor};

    font-weight: ${ props => props.isbold === "true"  ? 'bold' : null};

    padding: ${props => `${(props.scale * 10)}px 16px`};
    font-size: ${props => `${(props.scale * 20)}px`};
    border-radius: ${props => `${(props.scale * 12)}px`};

    @media(min-width: 768px){
        cursor: pointer;
    }

    @media(max-width: 768px){
        padding: ${props => `${(props.scale * 10)}px 14px`};
        font-size: ${props => `${(props.scale * 18)}px`};
        border-radius: ${props => `${(props.scale * 10)}px`};
    }

    @media(max-width: 480px){
        padding: ${props => `${(props.scale * 10)}px 12px`};
        font-size: ${props => `${(props.scale * 16)}px`};
        border-radius: ${props => `${(props.scale * 8)}px`};
    } 

    /* -webkit-box-shadow: ${props => !props.disabled ? '1.5px 1.5px 5px 0px rgba(0,0,0,0.2)' : '0px 0px 0px 0px rgba(0,0,0,0)'};
    -moz-box-shadow: ${props => !props.disabled ? '1.5px 1.5px 5px 0px rgba(0,0,0,0.2)' : '0px 0px 0px 0px rgba(0,0,0,0)'};
    box-shadow: ${props => !props.disabled ? '1.5px 1.5px 5px 0px rgba(0,0,0,0.2)' : '0px 0px 0px 0px rgba(0,0,0,0)'};  */

    outline: none; 
    
    :active{
        /* -webkit-box-shadow: 0px 0px 0px 0px rgba(0,0,0,0);
        -moz-box-shadow: 0px 0px 0px 0px rgba(0,0,0,0);
        box-shadow: 0px 0px 0px 0px rgba(0,0,0,0); */
    }

`;