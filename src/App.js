import React, { Component } from 'react';
import DogList from './DogList';
import DogDetails from './DogDetails';
import Nav from './Nav';
import { Route, Switch } from "react-router-dom";
import './App.css';

class App extends Component{
  static defaultProps = {
    dogs: [
        {
            name: "Whiskey",
            age: 5,
            src: "https://images.pexels.com/photos/2820134/pexels-photo-2820134.jpeg?auto=compress&cs=tinysrgb&h=350",
            facts: [
                "Whiskey loves eating popcorn.",
                "Whiskey is a terrible guard dog.",
                "Whiskey wants to cuddle with you!"
            ]
        },
        {
            name: "Hazel",
            age: 3,
            src: "https://images.pexels.com/photos/2623968/pexels-photo-2623968.jpeg?auto=compress&cs=tinysrgb&h=350",
            facts: [
                "Hazel has soooo much energy!",
                "Hazel is highly intelligent.",
                "Hazel loves people more than dogs."
            ]
        },
        {
            name: "Tubby",
            age: 4,
            src: "https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&h=350",
            facts: [
                "Tubby is not the brightest dog",
                "Tubby does not like walks or exercise.",
                "Tubby loves eating food."
            ]
        }
    ]
  };
  render() {
    return (
      <div className="App">
        <Nav dogs={this.props.dogs}/>
        <Switch>
          <Route 
            exact
            path='/'
            render={() => <DogList dogs={this.props.dogs} /> }
          />
          <Route 
            exact
            path='/dog/:name'
            render={routeProps => <DogDetails {...routeProps} dogs={this.props.dogs} /> }
          />
        </Switch>
      </div>
    );
  }
}

export default App;