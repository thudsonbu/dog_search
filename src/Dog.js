import React, { Component } from 'react';
import './Dog.css';

class Dog extends Component {
    
    render() {
        let dog = this.props.dog;
        return (
            <div className="Dog">
                <img src={dog.src} className="Dog-image"></img>
                <h1 className="Dog-name">{dog.name}</h1>
            </div>
        )
    }
}

export default Dog;