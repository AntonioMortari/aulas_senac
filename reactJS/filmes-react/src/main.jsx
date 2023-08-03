import React from 'react'
import ReactDOM from 'react-dom/client'
import styled from 'styled-components'

import{ThemeProvider} from 'styled-components'
import theme from './styles/theme'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// components and pages
import Menu from './components/Menu'
import Details from './pages/Details'
import MoviesPage from './pages/MoviesPage'

import './styles/global.css'
import NotFound from './pages/NotFound'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>

    <Router>

      <Menu />

      <Routes>
        <Route path='/' element={<MoviesPage />} />
        <Route path='/movies/:id' element={<Details />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>

    </ThemeProvider>
  </React.StrictMode>,
)
