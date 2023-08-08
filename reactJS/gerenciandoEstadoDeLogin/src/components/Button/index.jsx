import styled from 'styled-components'

const Button = styled.button`
    background-color: ${({theme}) => theme.COLORS.red};
    color: ${({theme}) => theme.COLORS.white};

    padding: 10px 15px;
    border-radius:5px;

    border: none;

    width: clamp(100px, 150px, 220px);

    transition: .3s;

    &:hover{
        background-color: ${({theme}) => theme.COLORS.red_hover};
    }
`


function ComponentButton({content}) {
    return (
        <Button>
            {content}
        </Button>
      );
}

export default ComponentButton;