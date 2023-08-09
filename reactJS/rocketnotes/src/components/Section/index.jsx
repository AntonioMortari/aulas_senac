
import styled from 'styled-components'

const Conteiner = styled.div`
    margin-bottom: 10px;

    >h2{
        font-size: 19px;
        color: ${({theme}) => theme.COLORS.gray_300};

        padding-bottom: 7px;

        border-bottom: 1px solid ${({theme}) => theme.COLORS.gray_300};

        margin-bottom: 10px;
    }

    >ul{
        list-style-type: none;
        display: flex;
        flex-direction: column;
        gap:5px;
    }
`

function ComponentSection({ title, children }) {
    return (
        <Conteiner>
            <h2>{title}</h2>
            {children}
        </Conteiner>
    );
}

export default ComponentSection;