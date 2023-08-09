import styled from 'styled-components'

const Button = styled.button`
    background-color: ${({theme}) => theme.COLORS.orange};
    color:${({theme}) => theme.COLORS.white};

    padding: 10px;
    border-radius: 2px;

    border:none;
`


function ComponentButton({content}) {
    return ( 
        <Button>
            {content}
        </Button>
     );
}

export default ComponentButton;