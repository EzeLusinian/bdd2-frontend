import styled from 'styled-components'

export const TextDiv = styled.p`

    margin: .25rem 0;

    font-size: 1rem; 

    @media(max-width: 768px){
        font-size: 0.9rem;
    }

    color: ${ props => props.color};

    font-weight: ${ props => props.isbold === "true"  ? 'bold' : null};
    

`;
