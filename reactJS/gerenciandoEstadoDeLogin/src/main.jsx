import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import styled from 'styled-components';

import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

// components and pages
import Menu from './components/Menu';
import Home from './pages/Home';
import SignUp from './pages/SignUp';

import './styles/global.css';

const Conteiner = styled.main`
  min-height: 100vh;
  width: 100%;

  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme.COLORS.white};
`;

function App() {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <Router>
          <Conteiner>
            {isLogged ? (
              <Menu isLogged={isLogged} links={['Home', 'Sobre nós', 'Contato', 'Cardápio', 'Meu Perfil']} to={['/', '/about', '/contact', '/menu']} />
            ) : (
              <Menu isLogged={isLogged} links={['Home', 'Sobre nós', 'Contato', 'Cardápio']} to={['/', '/about', '/contact', '/menu', '/profile']} />
            )}

            <Routes>
              <Route path="/" element={<Home isLogged={isLogged}/>} />
              <Route path="/signUp" element={<SignUp setIsLogged={setIsLogged} />} />
            </Routes>
          </Conteiner>
        </Router>
      </ThemeProvider>
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
