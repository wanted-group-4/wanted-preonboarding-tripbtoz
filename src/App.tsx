import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import theme from '@styles/theme';
import GlobalStyle from '@styles/GlobalStyle';
import Router from '@routes/Router';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
