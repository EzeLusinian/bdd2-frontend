import styled from 'styled-components'

export const AlertDiv = styled.p`

    margin: .5rem 0;

    background-color: #f5f5f5;

    padding: .5rem;

    border-radius: .5rem;

    font-size: 1rem; 

    @media(max-width: 768px){
        font-size: 0.9rem;
    }

    color: ${ props => props.color};

    text-align: center;

    font-weight: bold;
    


`;
