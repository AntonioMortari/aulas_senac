import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import Label from '../../components/Label'
import Button from '../../components/Button'

import {FaArrowLeft} from 'react-icons/fa'

import styled from 'styled-components'

const Form = styled.form`
    margin: auto;
    min-height: 250px;
    max-width: 500px;
    background-color: white;
    padding: 15px;

    color: #262626;
    font-size: 1.2rem;
    
    border-radius: 5px;
    box-shadow: 0px 0px 10px #2626263b;

    display: flex;
    flex-direction: column;

    >a svg{
        color: ${({theme}) => theme.COLORS.red};
    }

    >h2{
        width: 80%;
        text-align: center;
        margin: 0 auto;
        margin-bottom: 26px;
    }

    >h2>span{
        color: ${({theme}) => theme.COLORS.red};
        font-weight: bold;
    }

    >button{
        margin-top: 32px;
    }
`

function SignUp({setIsLogged}) {
    const navigate = useNavigate()
    
    const signUpUsuary = () =>{
        const password = document.querySelector('#input-password')
        const password2 = document.querySelector('#input-password2')

        password.value == password2.value ? (
            console.log('Usuário cadastrado!'),
            setIsLogged(true),
            navigate('/')
        ) : (
            alert('As senhas não coincidem!')
        )
    }

    return ( 
        <Form onSubmit={(e) =>{
            e.preventDefault()
            signUpUsuary()
        }}>
            <Link to='/'>
                <FaArrowLeft />
            </Link>
            <h2>
                <span>Cadastre-se</span> e aproveite todos os benefícios!
            </h2>
            <Label content="E-mail" placeholder="Digite o seu Email" type="text" id="input-email" />
            <Label content="Senha" placeholder="Digite sua senha" type="password" id="input-password" />
            <Label content="Repita a senha" placeholder="Repita a senha" type="password" id="input-password2" />

            
            <Button content="Cadastrar-se" />

        </Form>
     );
}

export default SignUp;