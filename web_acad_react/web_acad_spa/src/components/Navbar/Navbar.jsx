import React from 'react';
import './Navbar.scss';
import { SearchForm } from '../SearchForm'

export class Navbar extends React.Component {
    render() {
        return (
            <nav>
                <div className="nav">
                    <div className="nav__content">
                        <div className="nav__search-form">
                            <SearchForm />
                        </div>
                        {/* <PageMenu /> */}
                    </div>
                </div>
            </nav>
        )
    }
} 