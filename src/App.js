import React from 'react';
import DogList from './DogList';
import { Route, Switch } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route 
          exact
          path='/'
          component={DogList}
        />
      </Switch>
    </div>
  );
}

export default App;