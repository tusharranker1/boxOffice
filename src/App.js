/* eslint-disable import/order */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import { Show } from './pages/Show';
import Start from './pages/Start';
import { ThemeProvider } from 'styled-components';
import Nav from './Nav';

const theme = {
  mainColors: {
    blue: '#2400ff',
    gray: '#c6c6c6',
    dark: '#353535',
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/starred">
          <Start />
        </Route>
        <Route exact path="/show/:id">
          <Show />
        </Route>
        <Route>404 : Page not found</Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
