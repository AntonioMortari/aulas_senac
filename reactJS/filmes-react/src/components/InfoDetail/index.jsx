import styled from 'styled-components'

let ConteinerDetail = styled.div`
    font-size: 1.2rem;

    display: flex;
    align-items: center;
    gap: 5px;

    >p{
        display: flex;
        gap: 5px;
    }
    >svg{
        color: yellow;
    }
`


function InfoDetail(props) {
    return ( 
        <ConteinerDetail>
            <strong>{props.detail}</strong>

            {props.children}
        </ConteinerDetail>
     );
}

export default InfoDetail;