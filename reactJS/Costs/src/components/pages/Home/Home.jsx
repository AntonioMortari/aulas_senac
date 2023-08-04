import './home.css'

import costsImg from '../../../img/savings.svg'

import LinkButton from '../../layouts/LinkButton/LinkButton'

const Home = () =>{
    return(
        <section className='section-home'>
            <h1>Bem-vindo ao <span className='destaque'>Costs</span></h1>
            <p>Comece a gerenciar seus projetos agora mesmo!</p>
            
            <LinkButton to="/newProject" txt="Criar projeto" />

            <img src={costsImg} alt="Imagem do Costs" />
        </section>
    )
}

export default Home