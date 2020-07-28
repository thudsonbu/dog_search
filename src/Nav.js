import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

class Nav extends Component{
    render() {
        let dogs = this.props.dogs;
        return (
            <nav className="Nav">
                <NavLink  exact className='Nav-link' activeClassName='active-link' to='/'>
                    Home
                </NavLink>
                {dogs.map(dog => 
                    <NavLink exact className='Nav-link' activeClassName='active-link' to={`/dog/${dog.name}`}>
                        {dog.name}
                    </NavLink>
                )}
            </nav>
        )
    }
}

export default Nav;