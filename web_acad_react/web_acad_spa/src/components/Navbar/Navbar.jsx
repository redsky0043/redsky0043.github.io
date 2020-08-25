import React from 'react';
import './Navbar.scss';
import { SearchForm } from '../SearchForm'

export class Navbar extends React.Component {
    render() {
        return (
            <nav>
                <div className="nav">
                    <div className="nav__content">
                        <SearchForm />
                        {/* <PageMenu /> */}
                    </div>
                </div>
            </nav>
        )
    }
} 