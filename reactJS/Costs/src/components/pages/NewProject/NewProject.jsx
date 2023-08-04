import FormConteiner from "../../layouts/FormConteiner/FormConteiner"

import './newproject.css'

const NewProject = () =>{
    return(
        <section className="new-project-conteiner">
            <h1>Criar Projeto</h1>

            <p>Crie seu pojeto para depois adicionar os serviços!</p>

            <FormConteiner txtForm = "Criar Projeto"/>
        </section>
    )
}

export default NewProject