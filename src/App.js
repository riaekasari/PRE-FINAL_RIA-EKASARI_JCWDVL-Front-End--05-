import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";

import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import MyNavbar from './components/MyNavbar';
import Homepage from './pages/Homepage';


class App extends React.Component {
  render(){
    return (
      <BrowserRouter>
      <MyNavbar/>
        <Switch>
          <Route component={Login} path="/login"/>
          <Route component={Register} path="/register"/>
          <Route component={Homepage} path="/"/>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
