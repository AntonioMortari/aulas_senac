import styled from 'styled-components'

import Logo from '../Logo';
import Button from '../Button'

import {Link} from 'react-router-dom'

const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-around;

    padding: 15px 20px;

    box-shadow: 0px 1px 10px #26262630;

    >h1{
        font-size: 1.5rem;
        text-transform: uppercase;
    }

    >.navigation{
        display: flex;
        gap: 18px;
        font-size: 1.1rem;
    }

    >.navigation a{
        color: #262626;

        position: relative;
    }

    >.navigation a::before{
        content: '';
        width: 0%;
        height: 2px;
        background-color: ${({theme}) => theme.COLORS.red};

        position: absolute;
        bottom: -5px;
        left: 0px;

        transition: .3s;
    }

    >.navigation a:hover::before{
        width: 100%;
    }
`

function Menu({isLogged,links, to}) {
    return ( 
        <Header>
            <Logo />

            <nav className='navigation'>
                {links.map((link, index) => {
                    return(
                        <Link key={index} to={to[index]}>{link}</Link>
                    )
                })}
            </nav>

            {isLogged ? (
                <Link to='/foods'>
                    <Button content = "Fazer meu pedido"/>
                </Link>
            ) : (
                <Link to='/login'>
                    <Button content = "Login"/>
                </Link>
            )}

        </Header>
     );
}

export default Menu;