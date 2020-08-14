import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import AuthPage from './pages/auth/auth.components';
import HomePage from './pages/homepage/homepage.components';
import Shop from './pages/shop/shop.components';
import Header from './components/header/header.components';
import { auth } from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribedFromAuth = null;

  componentDidMount() {
    this.unsubscribedFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unsubscribedFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={Shop} />
          <Route path='/signin' component={AuthPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
