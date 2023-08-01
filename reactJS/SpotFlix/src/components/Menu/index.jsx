import React from 'react'
import {Link} from 'react-router-dom'
import './menu.css'


export  const Menu = () =>{
    return(
        <header>
            <h1><Link to="/">SpotFlix</Link></h1>

            <nav>
                <ul>
                <li><Link to="/popularmovies">Filmes Populares</Link></li>
                <li><Link to="/populartv">Séries Populares</Link></li>
                <li><Link to="/best">Melhor Avaliados</Link></li>
                <li><Link to="/search">Procurar</Link></li>
                <li><Link to="/favorites">Meus Favoritos</Link></li>
                </ul>
            </nav>
        </header>
    )
}

