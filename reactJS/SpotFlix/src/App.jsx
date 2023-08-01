import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import {Home} from './components/Pages/Home/'
import {PopularMovies} from './components/Pages/PopularMovies/'
import {PopularTV} from './components/Pages/PopularTv/'
import {Best} from './components/Pages/Best/'
import {Search} from './components/Pages/Search/'
import {Favorites} from './components/Pages/Favorites/'

import {Menu} from './components/Menu'

function App() {

  return (
    <div>
      <Menu />

      <Router>
        <Routes>
          <Route  path='/' element={<Home />}/>
          <Route  path='/popularmovies' element={<PopularMovies />}/>
          <Route  path='/populartv' element={<PopularTV />}/>
          <Route  path='/best' element={<Best />}/>
          <Route  path='/search' element={<Search />}/>
        </Routes>
      </Router>

      
    </div>
    
  )
}

export default App
