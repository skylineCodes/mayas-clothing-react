import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import AuthPage from './pages/auth/auth.components';
import HomePage from './pages/homepage/homepage.components';
import Shop from './pages/shop/shop.components';
import Header from './components/header/header.components';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={Shop} />
        <Route path='/signin' component={AuthPage} />
      </Switch>
    </div>
  );
}

export default App;
