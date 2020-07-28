import React, { Component } from 'react';
import Dog from './Dog';
import './DogList.css';

class DogList extends Component{
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
    constructor(props){
        super(props);
    };
    render() {
        return(
            <div className="DogList">
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