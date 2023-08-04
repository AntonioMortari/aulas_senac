import './formconteiner.css'

import Input from '../Input/input'
import Select from '../Select/Select'
import ButtonSubmit from '../ButtonSubmit/buttonSubmit'

const FormConteiner = ({ txtForm }) => {
    return (
        <form className='form-conteiner'>
            <Input
                name="nome-projeto"
                type="text"
                txt="Nome do projeto"
                placeholder="Insira o nome do seu projeto"
            />
            <Input
                name="orcamento"
                type="number"
                txt="Orçamento"
                placeholder="Insira o orçamento total"
            />


            <Select name="select" txt="Selecione uma categoria"/>
            <ButtonSubmit txt={txtForm} />
        </form>
    )
}

export default FormConteiner