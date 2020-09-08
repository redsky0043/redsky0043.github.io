import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.scss';
import { SearchForm } from '../SearchForm'

export class Navbar extends React.Component {
    render() {
        return (
            <nav>
                <div className="nav">
                    <div className="nav__content">
                        <div className="nav__search-form">
                            <SearchForm onSearch={this.props.onSearch} />
                        </div> 
                        <ul className="nav__menu">
                            <li className="nav__menu-item">
                                <Link to='/'>Home</Link>
                            </li> 
                            <li className="nav__menu-item">
                                <Link to='/about'>About</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}  