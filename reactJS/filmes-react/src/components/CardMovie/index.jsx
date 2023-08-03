import styled from 'styled-components'
import {FaStar} from 'react-icons/fa'


import { Link } from 'react-router-dom'

const Card = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;


    padding: 20px;

    background-color: ${({theme}) => theme.COLORS.bg_color_header};

    border-radius: 10px;

    >img{
        height: 80%;
    }

    >.info-movie{
        display: flex;
        flex-direction: column;
        gap: 5px;

        >h2{
            font-size: 1.7rem;
            text-align: center;
        }
        
        >p{
            display: flex;
            align-items: center;
            justify-content: space-between;

            font-size: 1.1rem;
        }

        >p p:first-child{
            display: flex;
            gap: 5px;

            >svg{
                color: #ebeb0b;
            }
        }

        >a{
            display: block;
            width: 20%;
            color: ${({theme}) => theme.COLORS.primary_color};
            font-weight: bold;
            margin-top: 10px;
            transition: .2s;
        }

        a:hover{
            color: ${({theme}) => theme.COLORS.bg_color};
        }
    }
    
    `


function CardMovie({data}) {
    const imageUrl = 'https://image.tmdb.org/t/p/w500'
    let date = data.release_date.split('-')
    date = date[0]
    return (
        <Card key={data.id}>
            <img src={`${imageUrl}${data.poster_path}`} alt={`Cartaz do ${data.title}`} />

            <div className='info-movie'>
                <h2>{data.title}</h2>

                <p>
                    <p>
                        <FaStar />
                        {data.vote_average.toFixed(1)}
                    </p>

                    {date}
                </p>

                    <Link to={`/movies/${data.id}`}>
                        Detalhes
                    </Link>
            </div>
        </Card>
    );
}

export default CardMovie;