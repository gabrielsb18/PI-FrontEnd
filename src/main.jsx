import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Login from "./pages/Login/Login";
import Cadastro from './pages/Cadastro/Cadastro';

import GlobalStyle from "./styles/global";
import theme from "./styles/theme";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
        </Routes>
      </Router>
    </ThemeProvider>
  </StrictMode>,
);
