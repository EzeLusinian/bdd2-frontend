import styled from 'styled-components'

export const ContenedorDiv = styled.div`

    margin-top: ${props => props.margintop ? props.margintop + 'rem' : '0px'};
    margin-bottom: ${props => props.marginbottom ? props.marginbottom + 'rem' : '0px'};
    margin-left: 1rem;
    margin-right: 1rem;

    @media(max-width: 768px){

        margin-left: 1rem;
        margin-right: 1rem;

    }

    @media(max-width: 480px){
        margin-left: .75rem;
        margin-right: .75rem;
    } 

    display: flex;
    justify-content: center;
    align-items: center;

`
export const ContenidoDiv = styled.div`

    width: 100%;
    max-width: ${props => props.maxwidth ? props.maxwidth + 'px' : '48rem'};

`


