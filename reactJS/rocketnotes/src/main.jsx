import React from 'react'
import ReactDOM from 'react-dom/client'

import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'

import GlobalStyles from './styles/global'

import Header from './components/Header'
import Section from './components/Section'
import Marcadores from './components/Marcadores'
import Button from './components/Button'
import ButtonText from './components/ButtonText'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />

    <Header />

    <Section title="Links Úteis">
      <ul>
        <li>https://www.rocketseat.com</li>
        <li>https://www.rocketseat.com</li>
      </ul>
    </Section>

    <Section title="Marcadores">
      <Marcadores marcadores={["express", "nodejs"]}/>
    </Section>

    <ButtonText content={"Excluir nota"}/>

    

    </ThemeProvider>

  </React.StrictMode>,
)
