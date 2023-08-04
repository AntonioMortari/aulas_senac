import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import NavBar from './components/layouts/NavBar/NavBar'
import Footer from './components/layouts/Footer/footer'

import Home from './components/pages/Home/Home'
import Contact from './components/pages/Contact'
import Company from './components/pages/Company'
import Projects from './components/pages/Projects'
import NewProject from './components/pages/NewProject/NewProject'

import Conteiner from './components/layouts/Conteiner/Conteiner'

const App = () =>{
  return(
    <Router>

      <NavBar />

      {/* rootes */}
      <Conteiner customClass="min-height">
        <Routes>
            <Route exact path='/' Component={Home}/>
            <Route exact path='/contact' Component={Contact}/>
            <Route exact path='/company' Component={Company}/>
            <Route exact path='/newProject' Component={NewProject}/>
            <Route exact path='/projects' Component={Projects}/>
        </Routes>
      </Conteiner>

      <Footer />

    </Router>
  )
}


export default App
