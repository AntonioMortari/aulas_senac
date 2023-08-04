import React from "react"
import { Link } from "react-router-dom"

import logo from '../../../img/costs_logo.png'

import './navbar.css'

const NavBar = () => {
    return (

        <header>
            <Link to="/">
                <img src={logo} alt="" />
            </Link>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/contact">Contato</Link>
                <Link to="/company">Sobre</Link>
                <Link to="/projects">Meus Projetos</Link>
                <Link to="/newProject">Novo Projeto</Link>
            </nav>
        </header>

    )
}

export default NavBar