import React, { Component } from 'react';
import Dog from './Dog';
import './DogList.css';

class DogList extends Component{
    constructor(props){
        super(props);
    };
    render() {
        return(
            <div className="DogList-card">
                <h1 className="DogList-title">Dogos</h1>
                <div className="DogList-dogs row">
                    {this.props.dogs.map(dog => (
                        <Dog dog={dog}/>
                    ))}
                </div>
            </div>
        )
    }
}

export default DogList;