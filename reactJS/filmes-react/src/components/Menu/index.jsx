import styled from 'styled-components'
import {FaSearch} from 'react-icons/fa'
import {Link} from 'react-router-dom'

const Header = styled.header`
    background-color: ${({theme}) => theme.COLORS.bg_color_header};

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 15px 70px;

    >h1 a{
        color: ${({theme}) => theme.COLORS.primary_color};
        text-transform: uppercase;
        font-size: 1.8rem;
    }

    >label{
        display: flex;
        align-items: center;
        gap: 5px;

        transform: scale(1.2);

        >button{
            background-color: ${({theme}) => theme.COLORS.primary_color};
            padding: 5px;
            border: none;
            outline: none;
            border-radius: 5px;

            transition: .2s;
        }

        >button:hover{
            background-color: ${({theme}) => theme.COLORS.bg_color_header};
        }

        >button svg:hover{
            color: ${({theme}) => theme.COLORS.primary_color};
        }

        >input{
            padding: 5px;
            border-radius: 5px;
            border: none;
            outline: none;
            color: ${({theme}) => theme.COLORS.bg_color};
        }

        >input:focus{
            outline: 2px solid ${({theme}) => theme.COLORS.primary_color};
        }
    }
`

function Menu() {
    return ( 
        <Header>
        <h1><Link to="/">SpotFlix</Link></h1>

        <label htmlFor="search-movie">
            <button>
                <FaSearch />
            </button>
            <input type="text" name="input-search-movie" id="input-search-movie" placeholder='Busque um filme' />
        </label>
      </Header>
     );
}

export default Menu;