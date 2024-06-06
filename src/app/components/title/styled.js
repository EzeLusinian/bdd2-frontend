import styled from 'styled-components'

export const TitleDiv = styled.p`

    font-size: 2.25rem;

    @media(max-width: 768px){
        font-size: 2rem;
    }

    @media(max-width: 480px){
        font-size: 1.75rem;
    } 

    color: ${ props => props.color};

    font-weight: ${ props => props.isbold === "true"  ? 'bold' : null};
    
    text-align: center;

    margin: 1rem 0rem;

`;
