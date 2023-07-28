import React from 'react';
import styled from 'styled-components';
import ListBooks from './components/ListBooks/'
import data from '/api/db.json'

const books = data.books


const ListConteiner = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    background-color: #ccc;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0,0,00.34);
`

const Container = styled.div`
  max-width: 1200px;
  margin: 30px auto;
  height: 140px;
  background-color: #222121;
  color: white;
  border-radius: 5px;

  >h1{
    padding: 10px;
    text-align: center;
  }
`;

function App() {

  return (
    
    <Container>
        <h1>Minhas Lista de Livros</h1>
        <ListConteiner>

          {
            books.map((item) =>{
              return(
                <ListBooks image = {item.image} title={item.title} price = {item.price} url={item.url}/>
              )
            })
          }
        </ListConteiner>
      </Container>
    
    
  )
}

export default App
