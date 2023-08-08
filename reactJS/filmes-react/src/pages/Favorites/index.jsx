import { useEffect,useState } from 'react';
import data from '../../../db.json'
import key from '../../api/key'

import CardMovie from '../../components/CardMovie';
import ConteinerMovies from '../../components/ConteinerMovies'
import Msg from '../../components/Msg'


function Favorites() {
    const [dataMovies, setDataMovies] = useState([])

    const getDataMovie = async(id) =>{
        let resp = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=pt-br`,key)
        let data = await resp.json()

        setDataMovies(prevDataMovies => [...prevDataMovies,data])
    }

    useEffect(() =>{
        if(data.favorites != 0){
            data.favorites.forEach(favorite => {
                getDataMovie(favorite.id)
            })
        }
    },[])

    return (
        <>
            <Msg content="Meus" span="Favoritos" />

            <ConteinerMovies>
            <ConteinerMovies>
                {dataMovies ? (
                    dataMovies.map((movie,index) => (
                        <CardMovie data={movie} key={movie.id} />
                    ))
                ) : (
                    <Loader />
                )}
            </ConteinerMovies>
            </ConteinerMovies>
        </> 
     );
}

export default Favorites;