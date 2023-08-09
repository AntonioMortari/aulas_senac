import styled from 'styled-components'

const Conteiner = styled.span`
    >span{
        background-color: ${({theme}) => theme.COLORS.orange};
        color: ${({theme}) => theme.COLORS.background_900};

        padding: 5px;
        border-radius: 3px;
        margin-right: 10px;
    }
`


function Marcadores({ marcadores }) {
    return (
        <Conteiner>
            { marcadores ?(
                marcadores.map(marcador => {
                    return(
                        <span>{marcador}</span>
                    )
                })
            ) : (
                <span>Nenhum marcador foi selecionado!</span>
            )
            }
        </Conteiner>
    );
}

export default Marcadores;