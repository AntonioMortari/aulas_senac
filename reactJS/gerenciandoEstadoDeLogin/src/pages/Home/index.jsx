import { Link } from 'react-router-dom'

import ImgBurguer from '../../images/burguer.png'
import Button from '../../components/Button'

import styled from 'styled-components'


const Section = styled.section`
    height: calc(100vh - 80px);
    width: 100%;

    padding: 50px 75px;

    display: flex;
    justify-content: space-between;

    >.conteiner-text{
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 15px;

        line-height: 1.5rem;

        >span{
            color: ${({ theme }) => theme.COLORS.red};
            font-weight: bold;
        }

        >h2{
            font-size: 4rem;
            line-height: 4.2rem;
        }

        >p{
            color: #000000ae;
            max-width: 80%;
        }
    }

    >.conteiner-img{
        display: flex;
    }

    >.conteiner-img img{
        display: block;
        transform: scale(.9);
    }
`


function Home({ isLogged }) {
    return (
        <Section>
            <div className="conteiner-text">
                <span>Bem-vindo ao FooD PeeK</span>

                <h2>Lorem, ipsum dolor sit amet!</h2>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At perferendis exercitationem dolore tempore a</p>

                {isLogged ? (
                    <Link to='/foods'>
                        <Button content="Fazer meu pedido" />
                    </Link>
                ) : (
                    <Link to='/signUp'>
                        <Button content="Cadastre-se" />
                    </Link>
                )}
            </div>

            <div className="conteiner-img">
                <img src={ImgBurguer} alt="" />
            </div>
        </Section>
    );
}

export default Home;