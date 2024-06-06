import styled from 'styled-components'

export const SubtitleDiv = styled.p`

    font-size: 1.5rem; 

    @media(max-width: 768px){
        font-size: 1..25rem;
    }

    @media(max-width: 480px){
        font-size: 1.15rem;
    } 

    color: ${ props => props.color};

    font-weight: ${ props => props.isbold === "true" ? 'bold' : null};
    
`;
