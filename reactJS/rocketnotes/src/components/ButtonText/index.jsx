import styled from 'styled-components'

const ButtonText = styled.button`
    color: ${({theme}) => theme.COLORS.orange};
    background-color: transparent;
    border: none;

    font-size: 1rem;

`


function ComponentButtonText({content}) {
    return ( 
        <ButtonText>
            {content}
        </ButtonText>
     );
}

export default ComponentButtonText;