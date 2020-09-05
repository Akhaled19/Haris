import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import SignInPage from './components/sign-in/sign-in';

function App() {
  return (
    <BrowserRouter>
      <div>Haris Ecome Applicatio
        <Switch>
          {/* <Route exact path='/'/> */}
          <Route exact path='/signin' component={SignInPage}/>
        </Switch>
      </div>  
    </BrowserRouter>
  )
 

}

export default App;
