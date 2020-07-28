import React, { Component } from 'react';
import './DogDetails.css';

class DogDetails extends Component {
    render() {
        let dogs = this.props.dogs;
        let name = this.props.match.params.name;
        let dog = {};
        for(let i = 0; i < dogs.length; i++){
            let newDog = dogs[i];
            if(newDog.name === name){
                dog = newDog;
            }
        }
        return(
            <div className="DogDetails">
                <img src={dog.src} className="DogDetails-image"></img>
                <div className="DogDetails-text">
                    <h1>{dog.name}, {dog.age}</h1>
                    <div className="DogDetails-facts">
                        <ul>
                            {dog.facts.map(fact => (
                                <li>{fact}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default DogDetails;