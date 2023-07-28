//react
import React from 'react'
import ReactDOM from 'react-dom/client'
import {useState} from 'react'

// Styles and themes
import './styles/global.css'

// Components etc...
import { ConteinerInput } from './components/ConteinerInput'

const [tasks, setTasks] = useState([])

const ola = () =>{
  console.log('vshdjvhsd')
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

      <h1>To-Do-List</h1>

        <main>
          <ConteinerInput />

          <ul className='tasks-conteiner'>
              <li>o</li>
          </ul>

        </main>
        
    
  </React.StrictMode>,
)
