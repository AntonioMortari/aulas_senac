import {FaPowerOff} from 'react-icons/fa'
import styled from 'styled-components'

const Header = styled.header`
    width: 100%;
    background-color: ${({theme}) => theme.COLORS.background_900};

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 15px 60px;

    >.profile{
        display: flex;
        align-items: center;
        gap: 10px;

        > img{
        width: 70px;
        border-radius: 50%;
        }

        >.info-profile{
            >span{
                color: ${({theme}) => theme.COLORS.gray_100};
            }

            >.name-user{
                font-weight: bold;
            }
        }
    }
    

    >.logout-button{
        cursor: pointer;
        transform: scale(1.5);
        color: ${({theme}) => theme.COLORS.gray_300};
    }
`

function ComponentHeader() {
    return ( 
        <Header>
            <div className="profile">
                <img src="https://www.github.com/antoniomortari.png" alt="Foto de perfil do usuário" />

                <div className="info-profile">
                    <span>Bem-Vindo</span>
                    <p className='name-user'>Antonio Mortari</p>
                </div>
            </div>

             <FaPowerOff className='logout-button' />
        </Header>
     );
}

export default ComponentHeader;